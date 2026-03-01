# Conleth Stead — Portfolio

Personal portfolio site hosted on GitHub Pages at [conlethstead.github.io](https://conlethstead.github.io).

## Tech stack

- **React 19** with **TypeScript**
- **Create React App** (react-scripts)
- **React Router DOM**
- **gh-pages** for deployment to GitHub Pages

## Project structure

```
conlethstead.github.io/
├── public/
│   └── index.html              # HTML shell
├── src/
│   ├── App.tsx                 # Main app, nav, and section layout
│   ├── App.css
│   ├── index.tsx               # Entry point
│   ├── index.css               # Global styles
│   ├── reportWebVitals.ts
│   ├── setupTests.ts
│   ├── App.test.tsx
│   ├── components/
│   │   ├── ProjectCard.tsx     # Project card UI
│   │   ├── SkillCard.tsx       # Skill card UI
│   │   └── Components.ts       # Shared types/helpers
│   ├── pages/
│   │   ├── About.tsx           # About section
│   │   ├── Projects.tsx        # Projects section
│   │   ├── Skills.tsx          # Skills section
│   │   └── Contact.tsx         # Contact (if used)
│   ├── projects/               # Project detail components
│   │   ├── memoryManager.tsx
│   │   ├── pokerHandCalculator.tsx
│   │   ├── networkFileSystem.tsx
│   │   ├── threadLibrary.tsx
│   │   ├── instagramClone.tsx
│   │   └── schoolProjects.css
│   ├── styles/
│   │   ├── About.css
│   │   ├── Projects.css
│   │   ├── ProjectCard.css
│   │   ├── Skills.css
│   │   ├── SkillCard.css
│   │   └── Contact.css
│   └── images/                 # Icons, screenshots, assets
├── pdfs/
│   └── ConlethSteadResume.pdf
├── package.json
├── tsconfig.json
└── README.md
```

## Scripts

| Command | Description |
|--------|-------------|
| `npm start` | Run dev server (default: http://localhost:3000) |
| `npm run build` | Production build → `build/` |
| `npm test` | Run tests (Jest) |
| `npm run deploy` | Build and deploy to GitHub Pages (`gh-pages -d build`) |

### Run on a different port

```sh
PORT=3001 npm start
```

Runs the app at [http://localhost:3001](http://localhost:3001).

## Deployment

The site is configured for GitHub Pages with `"homepage": "https://conlethstead.github.io/"` in `package.json`. Deploy with:

```sh
npm run deploy
```

This runs `npm run build` then publishes the `build/` folder to the `gh-pages` branch.

## Design

Color palette used across the site:

| Name   | Hex     |
|--------|---------|
| Black  | `#332B29` |
| Orange | `#EEAE56` |
| Blue   | `#9FDDDC` |
| Pink   | `#F9D9CE` |
| Green  | `#9FD79A` |
| Cream  | `#FFFEE3` |

## License

Private project. All rights reserved.
