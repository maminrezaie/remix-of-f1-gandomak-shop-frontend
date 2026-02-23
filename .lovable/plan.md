

## Ensure Mobile Responsiveness Across the Site

A comprehensive audit of all components and pages, with fixes for spacing, layout, typography, and touch targets on small screens.

---

### 1. Hero Section (HeroSection.tsx)

- The hero text uses `whiteSpace: "nowrap"` on the Persian heading -- this will overflow on narrow screens. Change to `whiteSpace: "normal"` below ~640px or remove it entirely and let it wrap naturally.
- Fixed `height: "72vh"` works but `paddingBottom: "0rem"` leaves no breathing room on short mobile screens. Add a small bottom padding on mobile.

### 2. Feature Banner (FeatureBanner.tsx)

- Already has a `@media (max-width: 860px)` breakpoint but the image has `marginTop: "-5rem"` which creates overlap issues on mobile. Reset the negative margin to `0` on small screens.
- The right column has `paddingRight: "3rem"` which wastes space on mobile. Reset to `1rem` on small screens.
- Add text centering for the description paragraph on mobile.

### 3. Tea Category Slider & Product Row (TeaCategorySlider.tsx, ProductRow.tsx)

- Cards use `flex: "0 0 200px"` -- on very small screens (320px) this is fine for scroll but the section header padding of `0 2rem` compresses the title. Reduce to `0 1rem` on small screens.
- Both components are functionally OK since they use horizontal scroll, but need the `hide-scrollbar` CSS utility confirmed (it exists in ProductRow's inline styles).

### 4. Category Grid (index.css)

- Already has a `@media (max-width: 640px)` breakpoint that switches to 2 columns -- this is good.
- The wrapper padding `3.5rem 1.5rem 3rem` is fine on mobile.

### 5. Journal Section (index.css)

- Already responsive with 2-col at 1024px and 1-col at 640px. Good.
- Margin reduction from `0 2rem` to `0 1rem` at 640px already exists. Good.

### 6. Footer Section (index.css)

- At 640px the footer goes to 1-column but `footer-center` stays at `1fr 1fr` for link columns -- on very narrow screens (~320px) this can still feel tight. Add a breakpoint at 400px to make `footer-center` single column.
- The footer wrapper padding `3.5rem 2rem 2rem` should reduce to `2.5rem 1rem 1.5rem` on mobile.

### 7. Features Section (Index.tsx)

- Uses `grid-cols-1 md:grid-cols-3` -- already responsive. Good.

### 8. Header (Header.tsx)

- Mobile menu already implemented with hamburger toggle. Good.
- The header icon buttons at 42px are good touch targets.
- Container padding from tailwind config is `1.5rem` -- fine.

### 9. Product Page (Product.tsx)

- Uses `grid md:grid-cols-2` which stacks on mobile. Good.
- Image thumbnails at `w-20 h-20` are fine touch targets.
- The full-width CTA buttons are good on mobile.

### 10. Shop Page (Shop.tsx)

- Uses `grid-cols-2 md:grid-cols-3 lg:grid-cols-4` -- good.
- Category filter pills use `flex-wrap` -- good.

### 11. About and Contact Pages

- Both use responsive Tailwind classes (`sm:grid-cols-2`, `md:grid-cols-3`, etc.). Good.
- Contact hero uses `py-16 md:py-24` -- responsive. Good.

---

### Technical Details -- Files to Edit

**`src/components/HeroSection.tsx`**
- Remove `whiteSpace: "nowrap"` from the h1 style, or wrap it in a responsive check
- Add responsive padding-bottom

**`src/components/FeatureBanner.tsx`**
- Add mobile overrides in the existing inline `<style>` block: reset `marginTop` on the image container, reduce `paddingRight` on the text column

**`src/index.css`**
- Add `@media (max-width: 400px)` for `.footer-center` to go single column
- Add mobile padding reduction for `.footer-wrapper` at 640px
- Add mobile override for `.footer-logo-img` to center it
- Add responsive styles for `.feature-banner-grid` text column on narrow screens

**`src/components/TeaCategorySlider.tsx`**
- Reduce section header padding on mobile (from `0 2rem` to `0 1rem` at small widths) via responsive inline style or a CSS class

**`src/components/ProductRow.tsx`**
- Same header padding fix as TeaCategorySlider

**`src/pages/Index.tsx`**
- The features section `container py-16` is fine, no changes needed

