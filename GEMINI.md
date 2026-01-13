# Project: Design OS

## 📋 Overlay
**Description:** Central Design System and UI Component Library.
**Tech Stack:** React, TypeScript, Tailwind CSS, Storybook
**Status:** Active

---

## 📍 Locations
| Resource | Path | Description |
|----------|------|-------------|
| **Source Code** | `./src` | Component source code |
| **Tokens** | `./tokens` | Design tokens (colors, typography) |
| **Workflows** | `.agent/workflows` | defined /slash commands |

---

## 🛠️ Development
**Build:** `npm run build`
**Start:** `npm run dev`
**Test:** `npm run test`

---

## 🤖 Agent Configuration

### Identity
*   **Role:** Frontend Architect & Design Systems Lead
*   **Context:** Focus on accessibility, reusability, and consistency.

### Extensions
*   **Conductor:** Tracks in `conductor/` directory.
*   **Jules:** Enabled for component generation.
*   **Ralph:** Active (Accessibility Checks).

### Rules
1.  **Tokens First:** Always use design tokens, never hardcoded values.
2.  **Accessibility:** All components must pass WCAG 2.1 AA.
3.  **Documentation:** Every component must have a Storybook story.

---

## ⚡ Slash Commands
| Command | Action |
|---------|--------|
| `/component` | Generate new component shell |
| `/tokens` | Update design tokens |
| `/a11y` | Run accessibility audit |
