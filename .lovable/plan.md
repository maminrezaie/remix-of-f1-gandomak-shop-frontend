

## Plan: Fix Add-to-Cart to stay on page

### Approach
Replace `window.location.href` redirect with a `fetch` call to WooCommerce's AJAX add-to-cart endpoint. This adds the product without navigating away. Show a success toast with a link to the cart page.

If the AJAX call fails (e.g., CORS), fall back to redirecting to the cart page instead of the homepage.

### Changes

**1. `src/lib/api.ts` — Rewrite `addToCart` to use fetch + toast fallback**
- Use `fetch("https://gandomakshop.ir/?wc-ajax=add_to_cart", { method: "POST", body: FormData with product_id })` with `credentials: "include"` for cookie-based sessions
- On success: show a sonner toast with "محصول به سبد خرید اضافه شد" and a "مشاهده سبد" link to `https://gandomakshop.ir/cart/`
- On failure: fall back to `window.location.href = "https://gandomakshop.ir/cart/?add-to-cart=${productId}"`

**2. `src/components/ProductCard.tsx` — Update `addToCart` call to be async**
- Make the onClick handler async since `addToCart` now returns a Promise

**3. `src/components/TeaCategorySlider.tsx` — Same async update for its add-to-cart button**

**4. `src/pages/Product.tsx` — Same async update for product page add-to-cart button**

### Files modified
- `src/lib/api.ts`
- `src/components/ProductCard.tsx`
- `src/components/TeaCategorySlider.tsx`
- `src/pages/Product.tsx`

