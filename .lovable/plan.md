
## ReactPress / WooCommerce Integration

Preparing the React app for deployment inside WordPress via ReactPress, ensuring proper routing, linking, and API configuration.

---

### Changes Overview

#### 1. Switch to HashRouter
Replace `BrowserRouter` with `HashRouter` in `src/App.tsx` to prevent 404 errors when ReactPress serves the app inside WordPress. All internal routes will use `/#/shop`, `/#/product/123`, etc.

#### 2. Hardcode API credentials in `src/lib/api.ts`
- Keep the WooCommerce consumer key and secret hardcoded directly (as requested)
- Add `'Content-Type': 'application/json'` to fetch headers
- The `BASE_URL`, key, and secret remain as plain constants -- no environment variables needed

#### 3. Fix all WooCommerce native links
These external links must point to the live WordPress site and already do in most places. Confirm and keep:
- Cart: `https://gandomakshop.ir/cart/` (Header cart icon -- already correct)
- My Account: `https://gandomakshop.ir/my-account/` (Header login/user icons -- already correct)
- Checkout: `https://gandomakshop.ir/checkout/` (Product page "direct buy" button -- already correct)
- Blog: `https://gandomakshop.ir/blog/` (Header nav -- already correct)

#### 4. Keep React product pages (Option A)
The app already renders `/product/:id` with WooCommerce API data. The "add to cart" button already redirects to `https://gandomakshop.ir/?add-to-cart={id}`. No changes needed here.

#### 5. Ensure all internal links are relative
All `<Link to="...">` components already use relative paths (`/`, `/shop`, `/about`, `/contact`, `/product/:id`). With HashRouter these become `/#/`, `/#/shop`, etc. -- no hardcoded domain needed for internal navigation.

#### 6. Remove unnecessary environment variable references
The instructions mention `VITE_WC_KEY`, `VITE_WC_SECRET`, `VITE_WC_BASE_URL` but since the user explicitly wants hardcoded values, we keep the current approach and simply clean up the TODO comment in `api.ts`.

---

### Technical Details -- Files to Edit

**`src/App.tsx`**
- Change `import { BrowserRouter }` to `import { HashRouter }`
- Replace `<BrowserRouter>` / `</BrowserRouter>` with `<HashRouter>` / `</HashRouter>`

**`src/lib/api.ts`**
- Add `'Content-Type': 'application/json'` to `getAuthHeaders()` return value
- Remove the TODO comment (credentials are intentionally hardcoded)
- No other changes -- BASE_URL, key, secret, and `addToCart` function are already correct
