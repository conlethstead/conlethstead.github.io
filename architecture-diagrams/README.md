# Architecture diagrams for portfolio

These Mermaid diagrams describe the architecture of **Banking Support** and **InsightForge** for use on your portfolio.

## How to create screenshots

1. **Option A — Mermaid Live Editor**
   - Go to [mermaid.live](https://mermaid.live).
   - Copy the contents of the ````mermaid` code block from each `.md` file (e.g. `banking-support-architecture.md`, `insightforge-architecture.md`) into the editor.
   - Use the preview and export/screenshot to save an image.

2. **Option B — VS Code**
   - Install a Mermaid extension (e.g. "Mermaid" or "Markdown Preview Mermaid Support").
   - Open the `.md` file and use the preview or “Export” to export the diagram as PNG/SVG.

## Adding screenshots to the portfolio

1. Save the screenshots as `bankingSupport.png` and `insightForge.png` in `src/images/`.
2. In `src/pages/Projects.tsx`, add imports and use them for the Banking Support and InsightForge cards:
   - `import bankingSupportImage from '../images/bankingSupport.png';`
   - `import insightForgeImage from '../images/insightForge.png';`
   - Set `image: bankingSupportImage` and `image: insightForgeImage` for the respective projects.

Until then, the project cards use placeholder images.
