import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { fetchProducts, fetchCategories } from "@/lib/api";
import ProductCard from "@/components/ProductCard";
import Layout from "@/components/Layout";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "";

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  const { data: products, isLoading } = useQuery({
    queryKey: ["products", activeCategory],
    queryFn: () =>
      fetchProducts(activeCategory ? { category: activeCategory } : undefined),
  });

  const selectCategory = (catId: string) => {
    if (catId === activeCategory) {
      searchParams.delete("category");
    } else {
      searchParams.set("category", catId);
    }
    setSearchParams(searchParams);
  };

  return (
    <Layout>
      <section className="container py-12">
        <h1 className="text-3xl font-bold text-foreground mb-8">محصولات</h1>

        {/* Category Filter */}
        {categories && categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-10">
            <button
              onClick={() => selectCategory("")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                !activeCategory
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              همه
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => selectCategory(String(cat.id))}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === String(cat.id)
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        )}

        {/* Products Grid */}
        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="bg-muted rounded-xl aspect-square animate-pulse" />
            ))}
          </div>
        ) : products && products.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-muted-foreground">
            <p className="text-lg">محصولی یافت نشد</p>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default Shop;
