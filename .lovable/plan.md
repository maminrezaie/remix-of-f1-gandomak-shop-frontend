

## Plan: Fix asset references for WordPress base path

### Problem
The `base` path in `vite.config.ts` is already set correctly. However, Vite's `base` only applies to **build-time** assets (JS/CSS bundles, imported images). Runtime string references like `src="/logo.png"` resolve against the WordPress domain root (`/logo.png` → `gandomakshop.ir/logo.png`), not the React app's dist folder.

### Regarding `.env`
Lovable does not support `.env` files. The `VITE_WC_KEY` and `VITE_WC_SECRET` environment variables set in `api.ts` will need to be configured through Lovable's secrets management or hardcoded for now. The base path in `vite.config.ts` is already correct.

### Changes

**1. Create a base path constant — `src/lib/constants.ts`**
```ts
export const BASE_PATH = '/wp-content/reactpress/apps/gandomak-storefront/dist/';
```

**2. `src/components/Header.tsx` — Fix logo path**
Change `src="/logo.png"` → `src={\`${BASE_PATH}logo.png\`}`

**3. `src/components/FooterSection.tsx` — Fix logo path**
Change `src="/logo.png"` → `src={\`${BASE_PATH}logo.png\`}`

**4. `src/components/ProductCard.tsx` — Fix placeholder path**
Change `"/placeholder.svg"` → `` `${BASE_PATH}placeholder.svg` ``

**5. `src/pages/Product.tsx` — Fix placeholder path**
Change `"/placeholder.svg"` → `` `${BASE_PATH}placeholder.svg` ``

### Files modified
- `src/lib/constants.ts` (new)
- `src/components/Header.tsx`
- `src/components/FooterSection.tsx`
- `src/components/ProductCard.tsx`
- `src/pages/Product.tsx`

