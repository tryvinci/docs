#!/bin/bash

# Vinci Changelog Update Script
# Fetches changes from multiple repositories and generates changelog.md

set -e

# Configuration
REPOS=(
    "vinci-frontend:serving"
    "vinci-backend:serving" 
    "artemis:serving"
    "vinci-clips:serving"
)

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Output directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DOCS_DIR="$(dirname "$SCRIPT_DIR")"
TEMP_DIR="$SCRIPT_DIR/temp"
CHANGELOG_FILE="$DOCS_DIR/changelog.md"

echo -e "${BLUE}Starting changelog update process...${NC}"

# Create temp directory
mkdir -p "$TEMP_DIR"

# Function to fetch changes from a repository
fetch_repo_changes() {
    local repo_info="$1"
    local repo_name=$(echo "$repo_info" | cut -d':' -f1)
    local branch=$(echo "$repo_info" | cut -d':' -f2)
    local output_file="$TEMP_DIR/${repo_name}-changes.json"
    
    echo -e "${YELLOW}Fetching changes from ${repo_name}:${branch}...${NC}"
    
    # Check if we can access the repository
    if ! gh api repos/tryvinci/${repo_name} > /dev/null 2>&1; then
        echo -e "${RED}Warning: Cannot access repository ${repo_name}. Skipping...${NC}"
        return 1
    fi
    
    # Get recent commits from the serving branch (last 30 days)
    # macOS compatible date command - use ISO format for GraphQL
    local since_date=$(date -v-30d +%Y-%m-%dT%H:%M:%SZ)
    
    gh api graphql -f query='
        query($owner: String!, $name: String!, $branch: String!, $since: GitTimestamp!) {
            repository(owner: $owner, name: $name) {
                ref(qualifiedName: $branch) {
                    target {
                        ... on Commit {
                            history(first: 50, since: $since) {
                                nodes {
                                    oid
                                    message
                                    committedDate
                                    author {
                                        name
                                        email
                                    }
                                    url
                                }
                            }
                        }
                    }
                }
            }
        }' \
        -f owner="tryvinci" \
        -f name="$repo_name" \
        -f branch="refs/heads/$branch" \
        -f since="$since_date" > "$output_file"
    
    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✓ Successfully fetched changes from ${repo_name}${NC}"
        return 0
    else
        echo -e "${RED}✗ Failed to fetch changes from ${repo_name}${NC}"
        return 1
    fi
}

# Function to get last synced commit hash for a repository
get_last_synced_commit() {
    local repo_name="$1"
    local changelog_file="$2"
    
    if [ -f "$changelog_file" ]; then
        # Extract the last commit hash for this repository from existing changelog
        grep -A 20 "## $repo_name" "$changelog_file" | grep -o '\[.*\](.*commit/\([a-f0-9]\{7,\}\))' | head -1 | sed 's/.*commit\/\([a-f0-9]*\).*/\1/' || echo ""
    else
        echo ""
    fi
}

# Function to process and format changes
process_changes() {
    echo -e "${BLUE}Processing changes...${NC}"
    
    local processed_file="$TEMP_DIR/processed-changes.md"
    local current_date=$(date +"%B %Y")
    local has_new_changes=false
    
    # Start the changelog content
    cat > "$processed_file" << EOF
---
title: "Changelog"
description: "Product updates and announcements"
rss: true
---

EOF
    
    # Process each repository's changes
    for repo_info in "${REPOS[@]}"; do
        local repo_name=$(echo "$repo_info" | cut -d':' -f1)
        local changes_file="$TEMP_DIR/${repo_name}-changes.json"
        local last_synced_commit=$(get_last_synced_commit "$repo_name" "$CHANGELOG_FILE")
        
        if [ -f "$changes_file" ]; then
            # Extract and format commits using jq, filtering out already synced commits
            if command -v jq >/dev/null 2>&1; then
                # Check if the repository data exists and has commits
                local has_data=$(jq -r '.data.repository.ref.target.history.nodes // empty | length' "$changes_file" 2>/dev/null || echo "0")
                # Ensure has_data is a valid number
                has_data=${has_data:-0}
                if [ "$has_data" -gt 0 ] 2>/dev/null; then
                    # Create temporary file for new commits only
                    local new_commits_file="$TEMP_DIR/${repo_name}-new-commits.txt"
                    
                    # Filter commits that are newer than the last synced commit
                    if [ -n "$last_synced_commit" ]; then
                        echo -e "${YELLOW}Found last synced commit for ${repo_name}: ${last_synced_commit}${NC}"
                        # Get commits until we hit the last synced one
                        jq -r --arg last_commit "$last_synced_commit" '
                        .data.repository.ref.target.history.nodes[] | 
                        select(.oid[0:7] != $last_commit) |
                        "- **" + (.committedDate | strptime("%Y-%m-%dT%H:%M:%SZ") | strftime("%b %d")) + "**: " + 
                        (.message | split("\n")[0]) + 
                        " ([" + (.oid[0:7]) + "](" + .url + "))"' "$changes_file" > "$new_commits_file" 2>/dev/null
                    else
                        echo -e "${YELLOW}No previous sync found for ${repo_name}, including all recent commits${NC}"
                        # Include all commits since no previous sync found
                        jq -r '.data.repository.ref.target.history.nodes[]? | 
                        "- **" + (.committedDate | strptime("%Y-%m-%dT%H:%M:%SZ") | strftime("%b %d")) + "**: " + 
                        (.message | split("\n")[0]) + 
                        " ([" + (.oid[0:7]) + "](" + .url + "))"' "$changes_file" > "$new_commits_file" 2>/dev/null
                    fi
                    
                    # Check if there are any new commits to add
                    if [ -s "$new_commits_file" ]; then
                        if [ "$has_new_changes" = false ]; then
                            echo "<Update label=\"$current_date\" description=\"Latest Updates\">" >> "$processed_file"
                            echo "" >> "$processed_file"
                            has_new_changes=true
                        fi
                        echo "## $repo_name" >> "$processed_file"
                        echo "" >> "$processed_file"
                        cat "$new_commits_file" >> "$processed_file"
                        echo "" >> "$processed_file"
                    else
                        echo -e "${GREEN}No new commits for ${repo_name} since last sync${NC}"
                    fi
                else
                    echo -e "${YELLOW}No commits found in ${repo_name} serving branch${NC}"
                fi
            else
                echo -e "${RED}jq not installed - cannot filter commits properly${NC}"
                if [ "$has_new_changes" = false ]; then
                    echo "<Update label=\"$current_date\" description=\"Latest Updates\">" >> "$processed_file"
                    echo "" >> "$processed_file"
                    has_new_changes=true
                fi
                echo "## $repo_name" >> "$processed_file"
                echo "" >> "$processed_file"
                echo "- Changes available (jq not installed for detailed parsing)" >> "$processed_file"
                echo "" >> "$processed_file"
            fi
        fi
    done
    
    # Close the Update tag if we added any new changes
    if [ "$has_new_changes" = true ]; then
        echo "</Update>" >> "$processed_file"
        echo "" >> "$processed_file"
    else
        echo -e "${GREEN}No new changes found in any repository since last sync${NC}"
        echo "<Update label=\"$current_date\" description=\"No New Changes\">" >> "$processed_file"
        echo "" >> "$processed_file"
        echo "All repositories are up to date. No new commits since last changelog update." >> "$processed_file"
        echo "" >> "$processed_file"
        echo "</Update>" >> "$processed_file"
        echo "" >> "$processed_file"
    fi
    
    # If changelog already exists, append to it (preserving older entries)
    if [ -f "$CHANGELOG_FILE" ]; then
        echo -e "${YELLOW}Existing changelog found. Merging with new changes...${NC}"
        
        # Extract existing content after the first </Update> tag
        local existing_content=""
        if grep -q "</Update>" "$CHANGELOG_FILE"; then
            existing_content=$(sed -n '/<\/Update>/,$p' "$CHANGELOG_FILE" | tail -n +2)
        fi
        
        # Combine new and existing content
        cat "$processed_file" > "$CHANGELOG_FILE"
        if [ -n "$existing_content" ]; then
            echo "$existing_content" >> "$CHANGELOG_FILE"
        fi
    else
        cp "$processed_file" "$CHANGELOG_FILE"
    fi
    
    echo -e "${GREEN}✓ Changelog updated at $CHANGELOG_FILE${NC}"
}

# Main execution
main() {
    # Check if gh CLI is installed
    if ! command -v gh >/dev/null 2>&1; then
        echo -e "${RED}Error: GitHub CLI (gh) is not installed. Please install it first.${NC}"
        echo "Visit: https://cli.github.com/"
        exit 1
    fi
    
    # Check if authenticated with GitHub
    if ! gh auth status >/dev/null 2>&1; then
        echo -e "${RED}Error: Not authenticated with GitHub CLI. Run 'gh auth login' first.${NC}"
        exit 1
    fi
    
    # Fetch changes from all repositories
    local success_count=0
    for repo_info in "${REPOS[@]}"; do
        if fetch_repo_changes "$repo_info"; then
            ((success_count++))
        fi
    done
    
    if [ $success_count -eq 0 ]; then
        echo -e "${RED}Error: Failed to fetch changes from any repository.${NC}"
        exit 1
    fi
    
    # Process and generate changelog
    process_changes
    
    # Cleanup
    rm -rf "$TEMP_DIR"
    
    echo -e "${GREEN}Changelog update completed successfully!${NC}"
    echo -e "${BLUE}Updated changelog: $CHANGELOG_FILE${NC}"
    echo -e "${BLUE}RSS feed will be available at: https://docs.tryvinci.com/changelog/rss.xml${NC}"
}

# Run main function
main "$@"