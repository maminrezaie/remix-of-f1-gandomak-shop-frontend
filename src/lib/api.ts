import { WooProduct, WooCategory } from "@/types/product";

const BASE_URL = "https://gandomakshop.ir/wp-json/wc/v3";

const getAuthHeaders = (): HeadersInit => {
  const key = "ck_7c79c45802973e75f070526a3791e6bc6ca12537";
  const secret = "cs_f749aeb2aa0b7a6e90b2b529dd5344655d203da5";
  const encoded = btoa(`${key}:${secret}`);
  return { Authorization: `Basic ${encoded}`, "Content-Type": "application/json" };
};

async function fetchWoo<T>(endpoint: string, params?: Record<string, string>): Promise<T> {
  const url = new URL(`${BASE_URL}${endpoint}`);
  if (params) {
    Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  }
  // Try with auth first, fallback without
  const headers = getAuthHeaders();
  const res = await fetch(url.toString(), { headers });
  if (!res.ok) {
    // Retry without auth for public endpoints
    const res2 = await fetch(url.toString());
    if (!res2.ok) throw new Error(`WooCommerce API error: ${res2.status}`);
    return res2.json();
  }
  return res.json();
}

export async function fetchProducts(params?: { category?: string; per_page?: string; page?: string }): Promise<WooProduct[]> {
  const queryParams: Record<string, string> = { per_page: "12", ...params };
  return fetchWoo<WooProduct[]>("/products", queryParams);
}

export async function fetchProduct(id: string): Promise<WooProduct> {
  return fetchWoo<WooProduct>(`/products/${id}`);
}

export async function fetchCategories(): Promise<WooCategory[]> {
  return fetchWoo<WooCategory[]>("/products/categories", { per_page: "50", hide_empty: "true" });
}

export function formatPrice(price: string): string {
  const num = parseInt(price, 10);
  if (isNaN(num)) return price;
  return num.toLocaleString("fa-IR") + " تومان";
}

export function addToCart(productId: number): void {
  window.location.href = `https://gandomakshop.ir/?add-to-cart=${productId}`;
}
