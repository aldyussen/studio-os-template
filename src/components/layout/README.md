# Layout Components

These components form the application shell rendered by every marketing page via `src/app/(marketing)/layout.tsx`.

## SkipLink

Visually hidden anchor that becomes visible on keyboard focus. Links to `#main-content` on the `<main>` element in the marketing layout. Always the first focusable element in tab order — must remain the first child of the shell.

## Container

Constrains content width and applies responsive horizontal padding (`px-4 sm:px-6 lg:px-8`). Use the `size` prop to control max-width:

| Size | Max width |
|------|-----------|
| `sm` | 672 px |
| `md` | 896 px |
| `lg` | 1024 px |
| `xl` | 1152 px |
| `2xl` | 1280 px (default) |
| `full` | none |

The `as` prop overrides the rendered element (`div` by default).

## Section

Applies consistent vertical spacing for page sections (`py-16 sm:py-24`). Intentionally separate from `Container` so full-bleed background sections can control their own width while still using the shared vertical rhythm. Compose them:

```tsx
<Section>
  <Container size="lg">…</Container>
</Section>
```

## Header

Sticky site header. Renders the logo link, desktop navigation, and mobile menu trigger. Navigation links are sourced from `src/config/nav.ts` — edit that file to change the nav. Client component: requires `useState` for mobile nav open state and `usePathname` for active link detection.

## MobileNav

Full-screen navigation overlay for small viewports. Rendered inside `Header` and controlled by its open/close state. Handles:

- Focus trap (Tab and Shift+Tab cycle within the overlay)
- Scroll lock on `document.body`
- Escape key dismissal
- Close on link tap via `onClick`

Client component.

## Footer

Site footer with copyright and navigation links. Reads `siteConfig.name` and `siteConfig.author` from `src/config/site.ts`. Navigation links are sourced from `src/config/nav.ts`. Server component — no client-side logic.
