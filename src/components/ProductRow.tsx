import { useQuery } from "@tanstack/react-query";
import { fetchProducts, addToCart } from "@/lib/api";
import { Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart } from "lucide-react";

/* ── helpers ── */
function toPersianNum(n: string | number): string {
  return String(n).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[+d]);
}

function formatPrice(p: string): string {
  const num = Number(p);
  if (isNaN(num)) return p;
  return toPersianNum(num.toLocaleString("en-US"));
}

function discountPercent(regular: string, sale: string): number {
  const r = Number(regular);
  const s = Number(sale);
  if (!r || !s) return 0;
  return Math.round((1 - s / r) * 100);
}

/* ── component ── */
const ProductRow = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products", "popular"],
    queryFn: () =>
      fetchProducts({
        per_page: "8",
      }),
  });

  return (
    <section
      className="bg-background"
      style={{ padding: "2.5rem 0 3rem", direction: "rtl" }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 clamp(1rem, 4vw, 2rem) 1.5rem",
          direction: "rtl",
        }}
      >
        <h2
          style={{
            fontFamily: "'Vazirmatn', 'YekanBakh', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
            color: "#2a1a0a",
            margin: 0,
          }}
        >
          محصولات ویژه
        </h2>
        <Link
          to="/shop"
          style={{
            fontSize: "0.82rem",
            color: "#cc2222",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "0.3rem",
            fontWeight: 500,
            transition: "opacity 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          مشاهده همه
          <ArrowLeft className="w-4 h-4" />
        </Link>
      </div>

      {/* Scrollable track */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          padding: "0.5rem clamp(1rem, 4vw, 2rem) 1rem",
        }}
        className="hide-scrollbar"
      >
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                style={{
                  flex: "0 0 200px",
                  height: 340,
                  borderRadius: 16,
                  background:
                    "linear-gradient(90deg, #ede8de 25%, #e4ddd1 50%, #ede8de 75%)",
                  backgroundSize: "200% 100%",
                  animation: "shimmer 1.4s ease infinite",
                }}
              />
            ))
          : products?.map((p) => {
              const onSale = p.on_sale && p.sale_price && p.regular_price;
              const pct = onSale
                ? discountPercent(p.regular_price, p.sale_price)
                : 0;
              const displayPrice = onSale ? p.sale_price : p.price;
              const imgSrc = p.images?.[0]?.src;
              const cats = p.categories?.map((c) => c.name).join("، ");

              return (
                <Link
                  key={p.id}
                  to={`/product/${p.id}`}
                  className="product-card-row"
                  style={{
                    flex: "0 0 200px",
                    background: "#ffffff",
                    borderRadius: 16,
                    boxShadow: "0 2px 16px rgba(42,26,10,0.08)",
                    padding: "14px 14px 12px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 0,
                    scrollSnapAlign: "start",
                    cursor: "pointer",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    position: "relative",
                    direction: "rtl",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  {/* Discount badge */}
                  {onSale && pct > 0 && (
                    <span
                      style={{
                        position: "absolute",
                        top: 12,
                        left: 12,
                        background: "#e03030",
                        color: "#fff",
                        fontFamily: "'Vazirmatn', sans-serif",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        padding: "0.2rem 0.5rem",
                        borderRadius: 20,
                        lineHeight: 1.4,
                        direction: "ltr",
                        zIndex: 2,
                      }}
                    >
                      {toPersianNum(pct)}٪-
                    </span>
                  )}

                  {/* Image */}
                  <div
                    style={{
                      width: "100%",
                      height: 160,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 12,
                      overflow: "hidden",
                    }}
                  >
                    {imgSrc && (
                      <img
                        src={imgSrc}
                        alt={p.name}
                        loading="lazy"
                        style={{
                          maxWidth: "100%",
                          maxHeight: 160,
                          objectFit: "contain",
                          objectPosition: "center",
                          display: "block",
                          transition: "transform 0.4s ease",
                        }}
                      />
                    )}
                  </div>

                  {/* Name */}
                  <div
                    style={{
                      fontFamily: "'Vazirmatn', 'YekanBakh', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      color: "#2a1a0a",
                      textAlign: "center",
                      lineHeight: 1.5,
                      marginBottom: 6,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {p.name}
                  </div>

                  {/* Categories */}
                  {cats && (
                    <div
                      style={{
                        fontFamily: "'Vazirmatn', sans-serif",
                        fontSize: "0.72rem",
                        color: "#8a7a6a",
                        fontWeight: 400,
                        textAlign: "center",
                        marginBottom: 10,
                        lineHeight: 1.5,
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {cats}
                    </div>
                  )}

                  {/* Price */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 2,
                      marginBottom: 10,
                      marginTop: "auto",
                      direction: "rtl",
                    }}
                  >
                    {onSale && (
                      <span
                        style={{
                          fontFamily: "'Vazirmatn', sans-serif",
                          fontSize: "0.78rem",
                          color: "#b0a090",
                          textDecoration: "line-through",
                          fontWeight: 400,
                          direction: "rtl",
                        }}
                      >
                        {formatPrice(p.regular_price)}
                      </span>
                    )}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem",
                        direction: "rtl",
                      }}
                    >
                      {onSale && pct > 0 && (
                        <span
                          style={{
                            fontSize: "0.78rem",
                            fontWeight: 700,
                            color: "#e03030",
                          }}
                        >
                          {toPersianNum(pct)}٪
                        </span>
                      )}
                      <span
                        style={{
                          fontFamily: "'Vazirmatn', sans-serif",
                          fontSize: "0.98rem",
                          fontWeight: 900,
                          color: "#2a1a0a",
                        }}
                      >
                        {formatPrice(displayPrice)}
                      </span>
                      <span
                        style={{
                          fontSize: "0.72rem",
                          color: "#8a7a6a",
                          fontWeight: 400,
                          marginRight: 2,
                        }}
                      >
                        تومان
                      </span>
                    </div>
                  </div>

                  {/* Add to cart */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      addToCart(p.id);
                    }}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.4rem",
                      padding: "0.55rem 0.5rem",
                      background: "#faf5ec",
                      border: "1px solid #e8d8c0",
                      borderRadius: 8,
                      fontFamily: "'Vazirmatn', 'YekanBakh', sans-serif",
                      fontSize: "0.8rem",
                      fontWeight: 500,
                      color: "#3a2a1a",
                      cursor: "pointer",
                      transition: "background 0.2s ease, border-color 0.2s ease",
                      direction: "rtl",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#f0e8d8";
                      e.currentTarget.style.borderColor = "#c9a882";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#faf5ec";
                      e.currentTarget.style.borderColor = "#e8d8c0";
                    }}
                  >
                    افزودن به سبد
                    <ShoppingCart size={15} strokeWidth={2} />
                  </button>
                </Link>
              );
            })}
      </div>

      {/* Shimmer keyframes + scrollbar hide */}
      <style>{`
        @keyframes shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .product-card-row:hover {
          transform: translateY(-4px) !important;
          box-shadow: 0 8px 28px rgba(42,26,10,0.14) !important;
        }
        .product-card-row:hover img {
          transform: scale(1.06) !important;
        }
      `}</style>
    </section>
  );
};

export default ProductRow;
