## Plan: Apply 1100px max-width globally

The Tailwind `container` class is the main layout constraint used across pages (Index, About, Contact, Shop, etc.). Currently it caps at `1400px`. Changing it to `1100px` in the Tailwind config will propagate to all sections using `className="container"`.

Additionally, the `.category-grid-wrapper` in CSS uses `900px` so change it to 1100px.  The `FeatureBanner` and `.footer-inner` are already at 1100px.

### Changes

**1. `tailwind.config.ts` — Change container max-width from 1400px to 1100px**

- Line 12: `"2xl": "1400px"` → `"2xl": "1100px"`

**2. `src/App.css` — Change `#root` max-width from 1280px to 1100px**

- Line 2: `max-width: 1280px` → `max-width: 1100px`

This single Tailwind config change covers all pages and sections that use the `container` class (Index features section, Header, Footer, About, Contact, Shop, etc.).

### Files modified

- `tailwind.config.ts` (1 line)
- `src/App.css` (1 line)