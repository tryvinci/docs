#!/bin/bash

# Demo Changelog Update Script
# Creates a sample changelog without requiring GitHub access

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Output directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DOCS_DIR="$(dirname "$SCRIPT_DIR")"
CHANGELOG_FILE="$DOCS_DIR/changelog.mdx"

format_days_ago() {
    local days="$1"
    if date -d "@0" +%Y >/dev/null 2>&1; then
        date -d "$days days ago" +"%b %d"
    else
        date -v-"$days"d +"%b %d"
    fi
}

format_month_label() {
    local months="$1"
    if date -d "@0" +%Y >/dev/null 2>&1; then
        date -d "$months month ago" +"%B %Y"
    else
        date -v-"$months"m +"%B %Y"
    fi
}

echo -e "${BLUE}Creating demo changelog...${NC}"

# Create sample changelog content
current_date=$(date +"%B %Y")

cat > "$CHANGELOG_FILE" << EOF
---
title: "Changelog"
description: "Product updates and announcements"
rss: true
---

<Update label="$current_date" description="Latest Updates">

## vinci-frontend
- **$(date +"%b %d")**: Added new video preview functionality ([abc1234](https://github.com/tryvinci/vinci-frontend/commit/abc1234))
- **$(format_days_ago 1)**: Improved user interface responsiveness ([def5678](https://github.com/tryvinci/vinci-frontend/commit/def5678))
- **$(format_days_ago 2)**: Fixed video upload progress indicator ([ghi9012](https://github.com/tryvinci/vinci-frontend/commit/ghi9012))

## vinci-backend
- **$(date +"%b %d")**: Enhanced video processing pipeline ([jkl3456](https://github.com/tryvinci/vinci-backend/commit/jkl3456))
- **$(format_days_ago 1)**: Added new API endpoints for batch processing ([mno7890](https://github.com/tryvinci/vinci-backend/commit/mno7890))
- **$(format_days_ago 3)**: Improved error handling and logging ([pqr1234](https://github.com/tryvinci/vinci-backend/commit/pqr1234))

## artemis
- **$(date +"%b %d")**: Updated AI model integration ([stu5678](https://github.com/tryvinci/artemis/commit/stu5678))
- **$(format_days_ago 2)**: Performance optimizations for large datasets ([vwx9012](https://github.com/tryvinci/artemis/commit/vwx9012))

## vinci-clips
- **$(format_days_ago 1)**: Added support for new video formats ([yza3456](https://github.com/tryvinci/vinci-clips/commit/yza3456))
- **$(format_days_ago 4)**: Fixed clip trimming functionality ([bcd7890](https://github.com/tryvinci/vinci-clips/commit/bcd7890))

</Update>

<Update label="$(format_month_label 1)" description="Previous Updates">

## Highlights from last month
- Major UI/UX improvements across all platforms
- Enhanced video processing capabilities
- New AI model deployments
- Performance optimizations

</Update>
EOF

echo -e "${GREEN}✓ Demo changelog created at $CHANGELOG_FILE${NC}"
echo -e "${BLUE}You can now view the changelog in your docs at: https://docs.tryvinci.com/changelog${NC}"
echo -e "${BLUE}RSS feed will be available at: https://docs.tryvinci.com/changelog/rss.xml${NC}"
