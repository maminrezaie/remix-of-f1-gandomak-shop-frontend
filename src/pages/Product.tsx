import { useParams } from "react-router-dom";
import { BASE_PATH } from "@/lib/constants";
import { useQuery } from "@tanstack/react-query";
import { fetchProduct, formatPrice, addToCart } from "@/lib/api";
import Layout from "@/components/Layout";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Product = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState(0);

  const { data: product, isLoading, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id!),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <Layout>
        <div className="container py-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="aspect-square bg-muted rounded-2xl animate-pulse" />
            <div className="space-y-4">
              <div className="h-8 bg-muted rounded w-3/4 animate-pulse" />
              <div className="h-6 bg-muted rounded w-1/3 animate-pulse" />
              <div className="h-32 bg-muted rounded animate-pulse" />
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !product) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <p className="text-muted-foreground text-lg">محصول مورد نظر یافت نشد</p>
          <Link to="/shop" className="inline-flex items-center gap-2 mt-4 text-primary font-medium">
            <ArrowRight className="w-4 h-4" />
            بازگشت به فروشگاه
          </Link>
        </div>
      </Layout>
    );
  }

  const images = product.images?.length ? product.images : [{ src: `${BASE_PATH}placeholder.svg`, alt: product.name, id: 0 }];

  return (
    <Layout>
      <div className="container py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-primary transition-colors">خانه</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-primary transition-colors">محصولات</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted border border-border">
              <img
                src={images[selectedImage].src}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            {images.length > 1 && (
              <div className="flex gap-3">
                {images.map((img, i) => (
                  <button
                    key={img.id}
                    onClick={() => setSelectedImage(i)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-colors ${
                      i === selectedImage ? "border-primary" : "border-border hover:border-primary/50"
                    }`}
                  >
                    <img src={img.src} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-foreground">{product.name}</h1>

            {product.categories?.[0] && (
              <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">
                {product.categories[0].name}
              </span>
            )}

            <div className="space-y-1">
              {product.on_sale && product.regular_price && (
                <span className="text-muted-foreground line-through text-lg">
                  {formatPrice(product.regular_price)}
                </span>
              )}
              <p className="text-3xl font-bold text-primary">{formatPrice(product.price)}</p>
            </div>

            <button
              onClick={() => addToCart(product.id)}
              className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-colors shadow-lg"
            >
              <ShoppingCart className="w-5 h-5" />
              افزودن به سبد خرید
            </button>

            <a
              href="https://gandomakshop.ir/checkout/"
              className="flex items-center justify-center w-full py-4 rounded-xl border-2 border-primary text-primary font-semibold text-lg hover:bg-primary/5 transition-colors"
            >
              خرید مستقیم
            </a>

            {product.short_description && (
              <div
                className="text-muted-foreground leading-relaxed prose prose-sm max-w-none"
                dangerouslySetInnerHTML={{ __html: product.short_description }}
              />
            )}

            {product.description && (
              <div className="pt-6 border-t border-border">
                <h3 className="font-semibold text-foreground mb-3">توضیحات محصول</h3>
                <div
                  className="text-muted-foreground leading-relaxed prose prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Product;
