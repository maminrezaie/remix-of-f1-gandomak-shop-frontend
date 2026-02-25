

## Plan: Update English Phrase Fonts

### What's changing
The English decorative phrases ("a delightful journey" and "favorite collection") currently use **Dancing Script** which looks different from the reference site (mostafavisaffron.com). The reference uses a more elegant, flowing calligraphy script — **Great Vibes** from Google Fonts is the closest match.

### Changes

**1. `index.html` — Add Great Vibes font from Google CDN**

Add `Great+Vibes` to the existing Google Fonts `<link>` tag.

**2. `src/components/HeroSection.tsx` — Update font on "a delightful journey"**

Change `fontFamily` from `'Dancing Script', cursive` to `'Great Vibes', cursive` on the `<span>` at line 49. Adjust weight to 400 (Great Vibes only has 400).

**3. `src/components/FeatureBanner.tsx` — Update font on "favorite collection"**

Same font change on the `<span>` around line 22-25. Change family to `'Great Vibes', cursive`, weight to 400.

**4. `src/index.css` — Update `.category-grid-tagline`**

This class also references `'Dancing Script'` — update to `'Great Vibes', cursive` with weight 400.

### Files modified
- `index.html` (1 line — font link)
- `src/components/HeroSection.tsx` (2 lines — fontFamily, fontWeight)
- `src/components/FeatureBanner.tsx` (2 lines — fontFamily, fontWeight)
- `src/index.css` (2 lines — font-family, font-weight in `.category-grid-tagline`)

