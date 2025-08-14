# Changelog Update Process

## How to Update the Changelog

### Step 1: Fetch Commit Data
Run the commit fetcher to get data from all production repositories:
```bash
./fetch-commits
```

This script fetches commits from:
- vinci-frontend:serving
- vinci-backend:prod
- artemis:serving
- vinci-clips:serving
- vinci-dfy:serving

Output files are stored in `scripts/temp/commits/`:
- `SUMMARY.md` - Overview and instructions
- `{repo}-formatted.md` - Human-readable commit summaries
- `{repo}-raw.json` - Raw API data from GitHub

### Step 2: Review Commit Data
Check the formatted files to understand what changed:
```bash
cat scripts/temp/commits/SUMMARY.md
cat scripts/temp/commits/vinci-frontend-formatted.md
cat scripts/temp/commits/vinci-backend-formatted.md
```

### Step 3: Curate Changelog Entries
Focus on USER-FACING changes only. Exclude:
- Docker/infrastructure updates
- Internal API changes
- Database migrations
- Development tooling
- CI/CD pipeline changes

Include:
- New features users can access
- Bug fixes that affect user experience
- Performance improvements users notice
- UI/UX changes
- New services or capabilities

### Step 4: Determine Version Numbers
Use semantic versioning (0.x.y):
- Major (0.X.0): New major features, significant UI changes
- Minor (0.x.Y): New features, improvements, enhancements
- Patch (0.x.y): Bug fixes only, no new functionality

### Step 5: Format Entries
Use Google-style release notes format:
- Neutral, technical language
- No emojis or marketing language
- Group by component/area
- Use consistent categories: "New features", "Improvements", "Bug fixes"
- Include actual release dates (not ranges)

### Step 6: Update changelog.mdx
Add new entries at the top, maintaining chronological order (newest first).

## File Structure
- Located at: `/changelog.mdx`
- Uses Mintlify Update components
- Generates RSS feed at: `/changelog/rss.xml`
- Navigation: Listed under "Meta" section with clock icon

## Automation Scripts
- `./fetch-commits` - Main script to fetch commit data
- `./scripts/fetch-commits.sh` - Core fetching logic
- `./scripts/demo-changelog.sh` - Demo with sample data
- `./scripts/README.md` - Detailed documentation

## Examples of Good Entries
✓ "Added image role labeling (product, person, environment, style, text)"
✓ "Fixed avatar image upload URL generation"
✓ "Implemented asynchronous processing"

## Examples to Avoid
✗ "Fixed Docker authentication issues"
✗ "Updated Cloud Run service account"
✗ "Migrated database schema"

Remember: Focus on what users can see, use, or benefit from directly.

## Template for New Entries

```mdx
<Update label="Month DD, YYYY" description="v0.x.y">

## Component Name

**New features**
- Description of new functionality

**Improvements**
- Description of enhancements to existing features

**Bug fixes**
- Description of resolved issues

</Update>
```