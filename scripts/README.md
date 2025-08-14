# Vinci Changelog Scripts

This directory contains scripts for automatically updating the changelog from multiple repositories.

## Scripts

### `update-changelog.sh`
The main script that fetches real changes from GitHub repositories and generates the changelog.

**Requirements:**
- GitHub CLI (`gh`) installed and authenticated
- Access to the tryvinci organization repositories
- `jq` installed for JSON parsing (optional, but recommended)

**Usage:**
```bash
# From the docs root directory
./update-changelog

# Or directly
./scripts/update-changelog.sh
```

**What it does:**
- Fetches recent commits (last 30 days) from serving branches of:
  - vinci-frontend
  - vinci-backend
  - artemis
  - vinci-clips
- Formats commits into Mintlify Update components
- Merges with existing changelog content
- Creates an RSS-enabled changelog

### `demo-changelog.sh`
Creates a sample changelog with mock data for testing and demonstration.

**Usage:**
```bash
./scripts/demo-changelog.sh
```

## Setup Instructions

1. **Install GitHub CLI:**
   ```bash
   # macOS
   brew install gh
   
   # Or download from https://cli.github.com/
   ```

2. **Authenticate with GitHub:**
   ```bash
   gh auth login
   ```

3. **Install jq (optional but recommended):**
   ```bash
   # macOS
   brew install jq
   ```

4. **Run the changelog update:**
   ```bash
   # Test with demo data first
   ./scripts/demo-changelog.sh
   
   # Then try with real data
   ./update-changelog
   ```

## Automation

You can automate this process by:

1. **Adding to cron/scheduled tasks:**
   ```bash
   # Run daily at 9 AM
   0 9 * * * cd /path/to/docs && ./update-changelog
   ```

2. **GitHub Actions workflow:**
   ```yaml
   name: Update Changelog
   on:
     schedule:
       - cron: '0 9 * * *'  # Daily at 9 AM
     workflow_dispatch:     # Manual trigger
   
   jobs:
     update-changelog:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - name: Update changelog
           run: ./update-changelog
         - name: Commit changes
           run: |
             git config --local user.email "action@github.com"
             git config --local user.name "GitHub Action"
             git add changelog.md
             git commit -m "Update changelog" || exit 0
             git push
   ```

## Output

The scripts generate a `changelog.md` file with:
- Mintlify Update components for each time period
- Organized sections by repository
- Commit links and timestamps
- RSS feed support

The changelog will be available at:
- **Web:** https://docs.tryvinci.com/changelog
- **RSS:** https://docs.tryvinci.com/changelog/rss.xml

## Troubleshooting

### GitHub Authentication Issues
```bash
# Check authentication status
gh auth status

# Re-authenticate if needed
gh auth login
```

### Repository Access Issues
Make sure you have access to all repositories in the tryvinci organization.

### Date Command Issues
The script uses macOS-compatible date commands. On Linux, you may need to adjust the date format in the script.

### Missing Dependencies
- Ensure `gh` CLI is installed and in PATH
- Install `jq` for better JSON parsing
- Verify you have write permissions to the docs directory