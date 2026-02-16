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
```

The app runs locally at `http://localhost:5173` by default.

## Available Scripts

```bash
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

## Gameplay

1. Pick ingredients from the tray.
2. Watch items get placed on the plate with randomized position/rotation for a natural look.
3. Track aggregate calories, protein, fat, and carbs.
4. Remove ingredients or clear the full plate.
