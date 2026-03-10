import { useQuery } from "@tanstack/react-query";
import { fetchProducts, fetchCategories, addToCart } from "@/lib/api";
import { Link } from "react-router-dom";
import { ArrowLeft, ShoppingCart } from "lucide-react";

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

const TeaCategorySlider = () => {
  // Find the category ID for دمنوش و چای
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories
  });

  const teaCat = categories?.find(
    (c) => c.name.includes("دمنوش") || c.slug.includes("damnoosh") || c.slug.includes("tea")
  );

  const saffronCat = categories?.find(
    (c) => c.name.includes("زعفران") || c.slug.includes("saffron")
  );

  const { data: teaProducts, isLoading: teaLoading } = useQuery({
    queryKey: ["products", "tea-category", teaCat?.id],
    queryFn: () => fetchProducts({ category: String(teaCat!.id), per_page: "10" }),
    enabled: !!teaCat?.id
  });

  const { data: saffronProducts, isLoading: saffronLoading } = useQuery({
    queryKey: ["products", "saffron-category", saffronCat?.id],
    queryFn: () => fetchProducts({ category: String(saffronCat!.id), per_page: "10" }),
    enabled: !!saffronCat?.id
  });

  const isLoading = teaLoading || saffronLoading;
  const products = (() => {
    const all = [...(teaProducts || []), ...(saffronProducts || [])];
    const seen = new Set<number>();
    return all.filter((p) => {if (seen.has(p.id)) return false;seen.add(p.id);return true;});
  })();

  return (
    <section
      style={{
        background: "#faf5ec",
        padding: "1.5rem 0 2.5rem",
        direction: "rtl"
      }}>

      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 clamp(1rem, 4vw, 2rem) 1.25rem",
          direction: "rtl"
        }}>

        










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
            transition: "opacity 0.2s ease"
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = "0.7"}
          onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}>

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
          padding: "0.5rem clamp(1rem, 4vw, 2rem) 1rem"
        }}
        className="hide-scrollbar">

        {isLoading || !products ?
        Array.from({ length: 6 }).map((_, i) =>
        <div
          key={i}
          style={{
            flex: "0 0 200px",
            height: 340,
            borderRadius: 16,
            background:
            "linear-gradient(90deg, #ede8de 25%, #e4ddd1 50%, #ede8de 75%)",
            backgroundSize: "200% 100%",
            animation: "shimmer 1.4s ease infinite"
          }} />

        ) :
        products.map((p) => {
          const onSale = p.on_sale && p.sale_price && p.regular_price;
          const pct = onSale ? discountPercent(p.regular_price, p.sale_price) : 0;
          const displayPrice = onSale ? p.sale_price : p.price;
          const imgSrc = p.images?.[0]?.src;

          return (
            <Link
              key={p.id}
              to={`/product/${p.id}`}
              className="tea-card"
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
                color: "inherit"
              }}>

                  {/* Discount badge */}
                  {onSale && pct > 0 &&
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
                  zIndex: 2
                }}>

                      {toPersianNum(pct)}٪-
                    </span>
              }

                  {/* Image */}
                  <div
                style={{
                  width: "100%",
                  height: 160,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 12,
                  overflow: "hidden"
                }}>

                    {imgSrc &&
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
                    transition: "transform 0.4s ease"
                  }} />

                }
                  </div>

                  {/* Name */}
                  <div
                style={{
                  fontFamily: "'Vazirmatn', 'Estedad', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  color: "#2a1a0a",
                  textAlign: "center",
                  lineHeight: 1.5,
                  marginBottom: 6,
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden"
                }}>

                    {p.name}
                  </div>

                  {/* Price */}
                  <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 2,
                  marginBottom: 10,
                  marginTop: "auto",
                  direction: "rtl"
                }}>

                    {onSale &&
                <span
                  style={{
                    fontFamily: "'Vazirmatn', sans-serif",
                    fontSize: "0.78rem",
                    color: "#b0a090",
                    textDecoration: "line-through",
                    fontWeight: 400
                  }}>

                        {formatPrice(p.regular_price)}
                      </span>
                }
                    <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    direction: "rtl"
                  }}>

                      {onSale && pct > 0 &&
                  <span style={{ fontSize: "0.78rem", fontWeight: 700, color: "#e03030" }}>
                          {toPersianNum(pct)}٪
                        </span>
                  }
                      <span
                    style={{
                      fontFamily: "'Vazirmatn', sans-serif",
                      fontSize: "0.98rem",
                      fontWeight: 900,
                      color: "#2a1a0a"
                    }}>

                        {formatPrice(displayPrice)}
                      </span>
                      <span style={{ fontSize: "0.72rem", color: "#8a7a6a", fontWeight: 400, marginRight: 2 }}>
                        تومان
                      </span>
                    </div>
                  </div>

                  {/* Add to cart */}
                  <button
                type="button"
                onClick={async (e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  await addToCart(p.id);
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
                  fontFamily: "'Vazirmatn', 'Estedad', sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 500,
                  color: "#3a2a1a",
                  cursor: "pointer",
                  transition: "background 0.2s ease, border-color 0.2s ease",
                  direction: "rtl"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#f0e8d8";
                  e.currentTarget.style.borderColor = "#c9a882";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#faf5ec";
                  e.currentTarget.style.borderColor = "#e8d8c0";
                }}>

                    افزودن به سبد
                    <ShoppingCart size={15} strokeWidth={2} />
                  </button>
                </Link>);

        })}
      </div>

      <style>{`
        .tea-card:hover {
          transform: translateY(-4px) !important;
          box-shadow: 0 8px 28px rgba(42,26,10,0.14) !important;
        }
        .tea-card:hover img {
          transform: scale(1.06) !important;
        }
      `}</style>
    </section>);

};

export default TeaCategorySlider;