# Brand Layer

This directory contains client-specific brand components and assets.

## What goes here

- `logo.tsx` — the client logo as an SVG React component
- Any UI component that is specific to this client and will not be reused
  across other projects

## How to apply brand tokens

Brand customization happens through CSS variable overrides, not by editing
component code. Add client brand values to `src/app/globals.css` after the
default `:root` block:

```css
/* Client brand overrides — added after shadcn defaults */
:root {
  --primary: oklch(0.55 0.22 264); /* brand blue */
  --primary-foreground: oklch(0.98 0 0);
  --radius: 0.375rem; /* tighter radius */
}
```

Typography override (in `src/lib/fonts.ts`):

```ts
export const headingFont = localFont({
  src: '../../public/fonts/brand-heading.woff2',
  variable: '--font-heading',
})
```

Then apply `headingFont.variable` to the `<html>` element in `src/app/layout.tsx`.

## What does NOT go here

- Sections and layout components — those belong in `src/components/sections/`
  and `src/components/layout/`
- Anything that could be reused across projects — that belongs in the studio
  design system
