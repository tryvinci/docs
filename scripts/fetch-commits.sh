#!/bin/bash

# Vinci Commit Fetcher
# Fetches commit data from repositories and stores in temp files for manual changelog curation

set -e

# Configuration - using actual branch names
REPOS=(
    "vinci-frontend:serving"
    "vinci-backend:prod" 
    "artemis:serving"
    "vinci-clips:serving"
    "vinci-dfy:serving"
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
COMMITS_DIR="$TEMP_DIR/commits"

echo -e "${BLUE}Fetching commits for manual changelog curation...${NC}"

# Create temp directories
mkdir -p "$COMMITS_DIR"

# Function to fetch commits from a repository
fetch_repo_commits() {
    local repo_info="$1"
    local repo_name=$(echo "$repo_info" | cut -d':' -f1)
    local branch=$(echo "$repo_info" | cut -d':' -f2)
    local raw_output="$COMMITS_DIR/${repo_name}-raw.json"
    local formatted_output="$COMMITS_DIR/${repo_name}-formatted.md"
    
    echo -e "${YELLOW}Fetching commits from ${repo_name}:${branch}...${NC}"
    
    # Check if we can access the repository
    if ! gh api repos/tryvinci/${repo_name} > /dev/null 2>&1; then
        echo -e "${RED}Warning: Cannot access repository ${repo_name}. Skipping...${NC}"
        return 1
    fi
    
    # Get recent commits from the branch (last 30 days)
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
                                    messageHeadline
                                    messageBody
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
        -f since="$since_date" > "$raw_output"
    
    if [ $? -eq 0 ]; then
        # Format the output for easier reading
        echo "# $repo_name ($branch branch)" > "$formatted_output"
        echo "## Recent Commits (Last 30 Days)" >> "$formatted_output"
        echo "" >> "$formatted_output"
        
        if command -v jq >/dev/null 2>&1; then
            local commit_count=$(jq -r '.data.repository.ref.target.history.nodes // empty | length' "$raw_output" 2>/dev/null || echo "0")
            commit_count=${commit_count:-0}
            
            if [ "$commit_count" -gt 0 ]; then
                echo "Found $commit_count commits:" >> "$formatted_output"
                echo "" >> "$formatted_output"
                
                jq -r '.data.repository.ref.target.history.nodes[]? | 
                    "### " + (.messageHeadline // .message | split("\n")[0]) + "\n" +
                    "- **Date:** " + (.committedDate | strptime("%Y-%m-%dT%H:%M:%SZ") | strftime("%Y-%m-%d %H:%M UTC")) + "\n" +
                    "- **Author:** " + .author.name + "\n" +
                    "- **Commit:** [" + (.oid[0:7]) + "](" + .url + ")\n" +
                    "- **Message:** " + (.message | split("\n")[0]) + "\n" +
                    (if (.messageBody and (.messageBody | length > 0)) then "- **Details:** " + .messageBody + "\n" else "" end) +
                    "\n"' "$raw_output" >> "$formatted_output" 2>/dev/null
                
                echo -e "${GREEN}✓ Successfully fetched ${commit_count} commits from ${repo_name}${NC}"
            else
                echo "No commits found in the last 30 days." >> "$formatted_output"
                echo -e "${YELLOW}No recent commits in ${repo_name}:${branch}${NC}"
            fi
        else
            echo "jq not available - raw JSON saved for manual processing" >> "$formatted_output"
            echo -e "${YELLOW}✓ Raw data saved for ${repo_name} (jq not available)${NC}"
        fi
        
        return 0
    else
        echo -e "${RED}✗ Failed to fetch commits from ${repo_name}${NC}"
        return 1
    fi
}

# Function to create summary report
create_summary() {
    local summary_file="$COMMITS_DIR/SUMMARY.md"
    
    echo "# Commit Summary for Changelog Curation" > "$summary_file"
    echo "Generated on: $(date)" >> "$summary_file"
    echo "" >> "$summary_file"
    
    echo "## Files Generated:" >> "$summary_file"
    for repo_info in "${REPOS[@]}"; do
        local repo_name=$(echo "$repo_info" | cut -d':' -f1)
        local branch=$(echo "$repo_info" | cut -d':' -f2)
        echo "- \`${repo_name}-formatted.md\` - Human-readable commits from ${repo_name}:${branch}" >> "$summary_file"
        echo "- \`${repo_name}-raw.json\` - Raw API response data" >> "$summary_file"
    done
    
    echo "" >> "$summary_file"
    echo "## Instructions for Changelog Curation:" >> "$summary_file"
    echo "1. Review the formatted files above to understand what changed" >> "$summary_file"
    echo "2. Group related commits into logical releases" >> "$summary_file"
    echo "3. Determine version numbers (major.minor.patch) based on change impact" >> "$summary_file"
    echo "4. Create Update components in changelog.md following this format:" >> "$summary_file"
    echo "" >> "$summary_file"
    echo '```mdx' >> "$summary_file"
    echo '<Update label="August 2025" description="v1.2.3">' >> "$summary_file"
    echo '## New Features' >> "$summary_file"
    echo '- Feature description with links' >> "$summary_file"
    echo '' >> "$summary_file"
    echo '## Bug Fixes' >> "$summary_file"
    echo '- Bug fix description' >> "$summary_file"
    echo '' >> "$summary_file"
    echo '## Improvements' >> "$summary_file"
    echo '- Enhancement description' >> "$summary_file"
    echo '</Update>' >> "$summary_file"
    echo '```' >> "$summary_file"
    
    echo -e "${GREEN}✓ Summary report created at $summary_file${NC}"
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
    
    # Clean previous temp files
    rm -rf "$COMMITS_DIR"
    mkdir -p "$COMMITS_DIR"
    
    # Fetch commits from all repositories
    local success_count=0
    for repo_info in "${REPOS[@]}"; do
        if fetch_repo_commits "$repo_info"; then
            ((success_count++))
        fi
    done
    
    if [ $success_count -eq 0 ]; then
        echo -e "${RED}Error: Failed to fetch commits from any repository.${NC}"
        exit 1
    fi
    
    # Create summary report
    create_summary
    
    echo -e "${GREEN}Commit fetch completed successfully!${NC}"
    echo -e "${BLUE}Review files in: $COMMITS_DIR${NC}"
    echo -e "${BLUE}Start with: cat $COMMITS_DIR/SUMMARY.md${NC}"
    echo ""
    echo -e "${YELLOW}Next steps:${NC}"
    echo "1. Review the formatted commit files"
    echo "2. Use your copilot to help curate changelog.md with proper versioning"
    echo "3. Follow the major.minor.patch format with meaningful release notes"
}

# Run main function
main "$@"