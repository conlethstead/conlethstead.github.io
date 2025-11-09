# Copilot Instructions for Conleth Stead Portfolio

## Project Architecture

This is a single-page React TypeScript portfolio site deployed to GitHub Pages. The architecture uses a single-page application with smooth scrolling navigation between sections rather than React Router.

### Key Components Structure
- **`src/App.tsx`**: Main layout with sticky navigation header and smooth scroll handlers
- **`src/pages/`**: Main content sections (About, Projects, Skills)
- **`src/components/`**: Reusable UI components (ProjectCard, SkillCard)
- **`src/projects/`**: Individual project detail components rendered in modals
- **`src/styles/`**: Component-specific CSS files (one per component)

## Critical Patterns

### Navigation System
The site uses **hash-based navigation with smooth scrolling**, not React Router:
```tsx
const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute('href')?.substring(1);
  // Custom smooth scroll with header offset calculation
};
```

### Modal Pattern for Project Details
Projects use a modal overlay system with keyboard handling:
- `ProjectCard` shows overview with click-to-open modal
- Modal content comes from separate components in `src/projects/`
- Includes ESC key handling and body scroll prevention
- Example: `ThreadLibrary` component rendered inside `ProjectCard` modal

### Component Props Interface
Type definitions centralized in `src/components/Components.ts`:
```tsx
export interface ProjectCardProps {
  name: string;
  image: string;
  overview: string;
  moduleInfo: React.ReactNode; // React component for modal content
}
```

### Asset Management
- Images stored in `src/images/` with direct imports
- Resume PDF in `public/pdfs/` for direct download
- SVG icons for social links and navigation

## Development Workflow

### Local Development
```bash
npm start              # Development server on port 3000
PORT=3001 npm start    # Run on custom port (documented in README)
```

### Deployment
```bash
npm run deploy         # Builds and deploys to gh-pages branch
```
Uses `gh-pages` package with `homepage` field in package.json for GitHub Pages.

## Styling Conventions

### Color Palette (documented in README)
- `#332B29` (black) - primary text and navigation background
- `#EEAE56` (orange) - navigation links and accents
- `#9FDDDC` (blue), `#F9D9CE` (pink), `#9FD79A` (green), `#FFFEE3` (cream)

### CSS Organization
- **One CSS file per component** in `src/styles/`
- **Nested CSS selectors** used throughout (requires CSS nesting support)
- **Component-scoped class names** (e.g., `.project-card`, `.skill-card`)

## Project-Specific Conventions

### Project Data Structure
Projects defined as array of objects in `Projects.tsx` with:
- Overview text for card display
- Dedicated React component for modal content
- Images imported at module level

### Smooth Scroll Implementation
Custom smooth scroll with header offset calculation rather than CSS `scroll-behavior: smooth` to account for sticky navigation header height.

### Modal State Management
Uses `useEffect` for modal keyboard listeners and body scroll prevention rather than external modal libraries.