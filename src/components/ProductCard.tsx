import { WooProduct } from "@/types/product";
import { formatPrice, addToCart } from "@/lib/api";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  product: WooProduct;
}

const ProductCard = ({ product }: Props) => {
  const image = product.images?.[0]?.src || "/placeholder.svg";

  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer">
      <Link to={`/product/${product.id}`} className="block overflow-hidden aspect-[4/3] relative">
        <img
          src={image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Inner gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>
      <div className="p-4 space-y-3">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-foreground line-clamp-2 leading-relaxed hover:text-primary transition-colors duration-200" style={{ fontWeight: 600, fontFamily: "'Vazirmatn', sans-serif" }}>
            {product.name}
          </h3>
        </Link>
        {product.categories?.[0] && (
          <span className="text-xs text-muted-foreground">{product.categories[0].name}</span>
        )}
        <div className="flex items-center justify-between pt-2">
          <div className="flex flex-col">
            {product.on_sale && product.regular_price && (
              <span className="text-xs text-muted-foreground line-through">
                {formatPrice(product.regular_price)}
              </span>
            )}
            <span className="text-primary text-lg" style={{ fontWeight: 700, fontFamily: "'Vazirmatn', sans-serif" }}>
              {formatPrice(product.price)}
            </span>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              addToCart(product.id);
            }}
            className="p-2.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 shadow-sm"
            aria-label="افزودن به سبد خرید"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
