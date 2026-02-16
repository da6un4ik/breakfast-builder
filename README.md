# Breakfast Builder

Breakfast Builder is a playful drag-and-drop style React app for composing a custom breakfast plate and seeing live nutrition totals as you add ingredients.

Repository: https://github.com/da6un4ik/breakfast-builder

## Tech Stack

- React + TypeScript + Vite
- Tailwind CSS
- Sonner toasts

## Getting Started

```bash
npm install
npm run dev

npm run dev         # start local development server
npm run build       # production build
npm run preview     # preview production build
npm run lint:types  # TypeScript type-check
npm run lint:js     # ESLint checks
npm run lint:css    # Stylelint checks
npm run check:css-vars
npm run check:css-classes
npm run lint        # runs all lint/check scripts (uses bun)

```

## CSS Variable Detection

The template includes a custom script that:

1. **Parses `tailwind.config.cjs`** to find all `var(--variable)` references
2. **Parses `src/index.css`** to find all defined CSS variables (`--variable:`)
3. **Cross-references** them to find missing definitions
4. **Reports undefined variables** with clear error messages

### Example Output

When CSS variables are missing:
```
❌ Undefined CSS variables found in tailwind.config.cjs:
   --sidebar-background
   --sidebar-foreground
   --sidebar-primary

Add these variables to src/index.css
```

When all variables are defined:
```
✅ All CSS variables in tailwind.config.cjs are defined
```

Gameplay
Pick ingredients from the tray.

Watch items get placed on the plate with randomized position/rotation for a natural look.

Track aggregate calories, protein, fat, and carbs.

Remove ingredients or clear the full plate.
