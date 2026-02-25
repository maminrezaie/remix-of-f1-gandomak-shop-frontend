

## Replace Local Asset Imports with Hosted URLs

Four files import images from `src/assets/`. Each import will be replaced with the corresponding hardcoded WordPress URL string, and the `import` lines removed.

### Mapping

| Local asset | Hosted URL |
|---|---|
| `hero-bottles.jpg` | `https://gandomakshop.ir/wp-content/uploads/2026/02/hero-bottles-BHUSsZNl.jpg` |
| `hero-cinnamon.jpg` | `https://gandomakshop.ir/wp-content/uploads/2026/02/hero-cinnamon-DbntteBr.jpg` |
| `hero-spices.jpg` | `https://gandomakshop.ir/wp-content/uploads/2026/02/hero-spices-cEVrjBtw.jpg` |
| `saffron-field.jpg` | `https://gandomakshop.ir/wp-content/uploads/2026/02/saffron-field-BanRQDTb.jpg` |
| `cat-gift.jpg` | `https://gandomakshop.ir/wp-content/uploads/2026/02/cat-gift-BrIJ2BuC.jpg` |
| `cat-spices.jpg` | `https://gandomakshop.ir/wp-content/uploads/2026/02/cat-spices-CEoIQ4aw.jpg` |
| `featured-tea.png` | `https://gandomakshop.ir/wp-content/uploads/2026/02/featured-tea-D2iiOWjT.png` |
| `nuts.png` | `https://gandomakshop.ir/wp-content/uploads/2026/02/nuts-r-cZBtQp.png` |

### Files to Edit

**`src/components/HeroSection.tsx`** — Remove 3 asset imports, use URL strings directly in the `images` array.

**`src/components/FeatureBanner.tsx`** — Remove import, use URL string for `featuredImg`.

**`src/components/CategoryGrid.tsx`** — Remove 3 asset imports (`nutsImg`, `catSpicesImg`, `catGiftImg`), use URL strings in `IMAGE_OVERRIDES`.

**`src/pages/About.tsx`** — Remove `saffronField` import, use URL string in the `<img>` tag.

No other files are affected. The asset files in `src/assets/` can optionally be deleted afterward.

