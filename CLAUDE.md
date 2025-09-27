# Assistant Instructions - Torus Documentation

**Required reading for AI agents modifying this repository**

## Project Overview

Torus documentation built with Astro and Starlight. Contains comprehensive guides, explanations, and tutorials for the Torus protocol ecosystem.

## Terminology Guidelines

### Correct Naming
- **Protocol**: Torus (NOT "Torus Network")
- **Token**: TORUS (uppercase when referring to the token)
- **Usage Examples**:
  - ✅ "Torus is a decentralized protocol"
  - ✅ "Stake TORUS tokens"
  - ✅ "The Torus ecosystem"
  - ❌ "Torus Network protocol"
  - ❌ "The Torus Network"

### Consistent References
- Always use "Torus" when referring to the protocol
- Use "TORUS" when referring to the token/ticker
- Never add "Network" suffix
- Keep naming minimal and precise

## Essential Commands

### Development Workflow

```sh
# Install dependencies
pnpm install

# Start development server
pnpm run dev
# Server runs at localhost:4321

# Build for production
pnpm run build

# Preview production build
pnpm run preview

# Type checking
pnpm run astro check
```

## Critical Requirements

**ALWAYS follow these steps when working on this repository:**

1. Read this CLAUDE.md file first
2. Maintain minimalistic approach - less is more
3. Follow existing file standards exactly
4. Validate all changes before committing

## File Standards

### MDX Files

- Use `.mdx` extension for all documentation
- Include frontmatter with `title` and `description`
- Import components at top after frontmatter
- No emojis in documentation content
- Keep language concise and technical

### Frontmatter Template

```yaml
---
title: Clear Descriptive Title
description: One-line description of the content
---
```

## Critical Files to Update

### When Adding New Documentation

1. **Update astro.config.mjs**
   - Add new page to sidebar navigation
   - Maintain hierarchical structure
   - Use consistent naming: `{ label: "Display Name", slug: "path/to/file" }`
   - Collapsed sections for subcategories

2. **Update Table of Contents**
   - File: `src/content/docs/explanations/table-of-contents.mdx`
   - Add new entries in appropriate section
   - Include full URL links
   - Maintain alphabetical or logical ordering

3. **Update How-to Table of Contents (if applicable)**
   - File: `src/content/docs/how-to-guides/table-of-contents.mdx`
   - Follow same pattern as explanations

## Link Validation

**CRITICAL: Always check for broken references**

Before committing:

```sh
# Find all references to a file
grep -r "old-filename" src/content/docs/

# Check for broken internal links
grep -r "slug:" astro.config.mjs

# Build to verify no broken links
pnpm run build
```

## Project Structure

```
torus-docs/
├── src/
│   ├── content/
│   │   └── docs/           # All documentation content
│   │       ├── development/
│   │       ├── explanations/
│   │       ├── getting-started/
│   │       ├── how-to-guides/
│   │       └── index.mdx
│   ├── assets/             # Images and static assets
│   └── components/         # Custom React/Astro components
├── astro.config.mjs        # Main configuration and sidebar
├── package.json
├── TRAIN.md               # AI training guide
├── README.md
└── CLAUDE.md              # This file
```

## Naming Conventions

### File Names
- Use kebab-case: `permission-system.mdx`
- Be descriptive but concise
- Match slug in astro.config.mjs

### Paths
- Organized by category:
  - `getting-started/` - Foundational concepts
  - `explanations/system/` - Core architecture
  - `explanations/builders/` - Agent development
  - `explanations/holders/` - Token and staking
  - `explanations/goal-leaders/` - Coordination
  - `how-to-guides/` - Step-by-step tutorials
  - `development/` - Technical implementation

## Content Guidelines

### Writing Style
- Technical and precise
- No marketing language
- Direct and actionable
- Use present tense
- Avoid redundancy

### Structure
- Start with core concept
- Build complexity gradually
- Use clear headers
- Include practical examples
- Reference related files

### Documentation Standards
- Follow consistent formatting across all files
- Use code blocks with appropriate language tags (`ts`, `sh`, `yaml`)
- Include file paths when referencing code
- Keep examples minimal but complete

## Testing Requirements

```sh
# Check TypeScript and build integrity
pnpm run astro check

# Build the site to check for errors
pnpm run build

# Preview locally to verify changes
pnpm run preview
```

## Common Pitfalls to Avoid

1. **DO NOT** create duplicate entries in astro.config.mjs
2. **DO NOT** forget to update table of contents
3. **DO NOT** use relative links - use full paths or slugs
4. **DO NOT** add unnecessary documentation
5. **DO NOT** break existing link references
6. **DO NOT** use inconsistent formatting
7. **DO NOT** add emojis to documentation
8. **DO NOT** use "Torus Network" - use "Torus" only

## Quick Checklist

### Before Making Changes
- [ ] Read CLAUDE.md
- [ ] Understand file naming conventions
- [ ] Know which files need updates
- [ ] Check current documentation structure
- [ ] Review terminology guidelines

### After Making Changes
- [ ] Updated astro.config.mjs if added new file
- [ ] Updated table of contents if applicable
- [ ] Searched for and fixed broken references
- [ ] Ran `pnpm run build` to verify no errors
- [ ] Maintained consistent formatting
- [ ] Kept content minimalistic
- [ ] Verified correct "Torus" naming (not "Torus Network")

## File Relationships

```
New Documentation File
├── Create .mdx file in appropriate directory
├── Update astro.config.mjs sidebar
├── Update relevant table-of-contents.mdx
└── Check/update any cross-references
```

## Component Usage

Available Starlight components:
- `CardGrid`, `Card` - For feature grids
- `LinkCard` - For navigation cards
- `Aside` - For notes and warnings
- `Steps` - For sequential instructions
- `Tabs`, `TabItem` - For multiple code examples

Import at top of MDX files:
```ts
import { CardGrid, LinkCard, Aside } from "@astrojs/starlight/components";
```

## Environment Configuration

- Site URL: https://docs.torus.network
- Development port: 4321
- Build output: `./dist/`

## Documentation Categories

1. **Getting Started**: Core concepts and onboarding
2. **Explanations**: Deep technical understanding
3. **How-to Guides**: Practical step-by-step tutorials (mostly UI-focused)
4. **Development**: API and integration documentation

---

**Remember: Minimalistic, consistent, validated, and always "Torus" not "Torus Network"**