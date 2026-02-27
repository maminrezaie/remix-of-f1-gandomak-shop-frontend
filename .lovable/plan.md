

## Plan: Apply Technical Requirements for WordPress/ReactPress Integration

### Changes needed (4 items already compliant: HashRouter, base path, no navbar, RTL, WooCommerce handoff)

**1. `src/index.css` — Add @import for Google Fonts at top of file**
Add `@import url(...)` for Vazirmatn, Estedad, and Great Vibes before the `@tailwind` directives. This ensures fonts load even when WordPress rewrites the `<head>`.

**2. `src/lib/api.ts` — Use environment variables for WooCommerce credentials**
Replace hardcoded `ck_...` / `cs_...` with `import.meta.env.VITE_WC_KEY` and `import.meta.env.VITE_WC_SECRET`. Add `_fields` parameter to `fetchProducts` for performance.

**3. `src/lib/api.ts` — Add `_fields` optimization to product fetches**
Default `_fields=id,name,price,regular_price,sale_price,images,slug,short_description,categories,on_sale,stock_status` to reduce payload size.

**4. CSS export for WordPress `style.css`**
Provide a complete CSS block in chat (not in code) covering:
- Font imports
- `#root` and `.reactpress-container` overrides (full-width, padding reset, background match)
- Typography mirroring (Vazirmatn, Estedad, font weights)
- Hero fade gradient matching `hsl(37, 54%, 95%)`

### Files modified
- `src/index.css` (add 3 @import lines at top)
- `src/lib/api.ts` (env vars + _fields param)

### CSS export (delivered in chat, not in codebase)
Full WordPress CSS snippet will be provided after implementation for pasting into Appearance → Customize → Additional CSS.

