

## Plan: Hardcode Typography for ReactPress Compatibility

### Problem
The CSS rule `#root p, #root span, #root div { font-weight: 400 !important }` in `index.css` is overriding inline `fontWeight` values throughout the app. For example, product names set to `fontWeight: 700` inline get forced to 400. Additionally, `ProductCard.tsx` uses Tailwind classes like `font-semibold` and `font-bold` which Flatsome can override.

### Changes

**1. `src/index.css` — Remove the aggressive font-weight rule (lines 15-17)**

Remove:
```css
#root p, #root span, #root div {
  font-weight: 400 !important;
}
```

Keep the font-family override (it protects against Flatsome):
```css
#root, #root * {
  font-family: 'Vazirmatn', 'Estedad', 'YekanBakh', sans-serif !important;
}
```

Keep the heading weight rule:
```css
#root h1, #root h2, #root h3, #root h4, #root h5 {
  font-weight: 700 !important;
}
```

**2. `src/components/ProductCard.tsx` — Convert Tailwind font classes to inline styles**

The only component using Tailwind classes for typography instead of inline styles. Convert:
- `font-semibold` on product name `<h3>` to `style={{ fontWeight: 600 }}`
- `font-bold` on price `<span>` to `style={{ fontWeight: 700 }}`
- Add explicit `fontFamily` to key text elements

**3. No changes needed for other components**

`ProductRow.tsx`, `TeaCategorySlider.tsx`, `FeatureBanner.tsx`, `HeroSection.tsx`, `CategoryGrid.tsx`, `JournalSection.tsx`, and `FooterSection.tsx` already use inline `style={{ fontFamily, fontWeight }}` throughout — these will render correctly once the aggressive CSS override is removed.

### Summary
- 2 files modified
- Core fix: remove the `font-weight: 400 !important` rule that fights with inline styles
- Secondary fix: convert ProductCard from Tailwind classes to inline styles for Flatsome resilience

