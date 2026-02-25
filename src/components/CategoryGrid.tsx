import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { fetchCategories } from "@/lib/api";

/*
 * Art-directed category grid — "Broken Symmetry" layout
 * Each card gets a unique visual treatment: size, crop, label position.
 * The grid feels curated, not templated.
 */

/* Image overrides by category name */
const IMAGE_OVERRIDES: Record<string, string> = {
  "مغزها": "https://gandomakshop.ir/wp-content/uploads/2026/02/nuts-r-cZBtQp.png",
  "زعفران": "https://gandomakshop.ir/wp-content/uploads/2026/02/decorNegin.jpg",
  "ادویه": "https://gandomakshop.ir/wp-content/uploads/2026/02/cat-spices-CEoIQ4aw.jpg",
  "پک هدیه": "https://gandomakshop.ir/wp-content/uploads/2026/02/cat-gift-BrIJ2BuC.jpg"
};

/* Ordered list of override URLs to assign to API categories that aren't in IMAGE_OVERRIDES */
const FALLBACK_IMAGES = [
"https://gandomakshop.ir/wp-content/uploads/2026/02/photo24341951758.jpg",
"https://gandomakshop.ir/wp-content/uploads/2026/02/photo22467440919.jpg",
"https://gandomakshop.ir/wp-content/uploads/2026/02/decorNegin.jpg"];


interface CardLayout {
  gridArea: string;
  objectPosition: string;
  labelPosition: "bottom-right" | "bottom-center" | "top-right" | "outside" | "inset-left" | "bottom-left";
  scrim: "light" | "heavy" | "none";
  inset?: boolean;
}

/* Six slots, each hand-placed. */
const layouts: CardLayout[] = [
{
  gridArea: "1 / 1 / 3 / 2",
  objectPosition: "center 70%",
  labelPosition: "bottom-right",
  scrim: "heavy"
},
{
  gridArea: "1 / 2 / 2 / 3",
  objectPosition: "center center",
  labelPosition: "bottom-center",
  scrim: "light"
},
{
  gridArea: "1 / 3 / 2 / 4",
  objectPosition: "30% center",
  labelPosition: "top-right",
  scrim: "light"
},
{
  gridArea: "2 / 2 / 3 / 3",
  objectPosition: "center center",
  labelPosition: "bottom-center",
  scrim: "light"
},
{
  gridArea: "2 / 3 / 4 / 4",
  objectPosition: "80% 20%",
  labelPosition: "bottom-left",
  scrim: "heavy"
},
{
  gridArea: "3 / 1 / 4 / 3",
  objectPosition: "center 40%",
  labelPosition: "bottom-right",
  scrim: "light"
}];


const CategoryGrid = () => {
  const { data: allCategories, isLoading } = useQuery({
    queryKey: ["categories-grid"],
    queryFn: () => fetchCategories()
  });

  /* Build final categories list with image overrides */
  const categories = (() => {
    if (!allCategories) return undefined;

    let cats = allCategories.
    filter((c) => c.image?.src).
    sort((a, b) => b.count - a.count).
    slice(0, 6);

    /* Apply image overrides */
    let fallbackIdx = 0;
    cats = cats.map((c) => {
      const override = IMAGE_OVERRIDES[c.name];
      if (override) {
        return { ...c, image: { src: override, alt: c.name } };
      }
      // Assign fallback images to remaining categories
      const img = FALLBACK_IMAGES[fallbackIdx % FALLBACK_IMAGES.length];
      fallbackIdx++;
      return { ...c, image: { src: img, alt: c.name } };
    });

    /* Inject زعفران if not present */
    if (!cats.some((c) => c.name === "زعفران")) {
      cats.push({
        id: -1,
        name: "زعفران",
        slug: "saffron",
        image: { src: IMAGE_OVERRIDES["زعفران"], alt: "زعفران" },
        count: 0
      });
    }

    return cats.slice(0, 6);
  })();

  if (isLoading) {
    return (
      <section style={{ background: "var(--cream, #faf5ec)" }}>
        <div className="category-grid-wrapper">
          <div className="category-grid-header">
          <span className="category-grid-tagline"></span>
            
          </div>
          <div className="category-grid">
            {Array.from({ length: 6 }).map((_, i) =>
            <div
              key={i}
              className="category-card"
              style={{ gridArea: layouts[i].gridArea, background: "var(--tan, #e8d8c0)", opacity: 0.4 }}>

                <div className="animate-pulse w-full h-full" />
              </div>
            )}
          </div>
        </div>
      </section>);

  }

  if (!categories || categories.length === 0) return null;

  return (
    <section style={{ background: "var(--cream, #faf5ec)" }}>
      <div className="category-grid-wrapper">
        {/* Section header */}
        <div className="category-grid-header">
          <span className="category-grid-tagline"></span>
          
        </div>

        {/* The grid */}
        <div className="category-grid">
          {categories.map((cat, i) => {
            const layout = layouts[i % layouts.length];
            return (
              <CategoryCard key={cat.id} cat={cat} layout={layout} />);

          })}
        </div>
      </div>
    </section>);

};

interface CategoryCardProps {
  cat: {id: number;name: string;slug: string;image: {src: string;alt: string;} | null;count: number;};
  layout: CardLayout;
}

const CategoryCard = ({ cat, layout }: CategoryCardProps) => {
  const labelEl =
  <span className={`category-label category-label--${layout.labelPosition}`}>
      {cat.name}
    </span>;


  return (
    <div style={{ gridArea: layout.gridArea, position: "relative" }}>
      <Link
        to={`/shop?category=${cat.id}`}
        className={`category-card ${layout.inset ? "category-card--inset" : ""}`}>

        {cat.image?.src &&
        <div className="category-card__img-wrap">
            <img
            src={cat.image.src}
            alt={cat.image.alt || cat.name}
            loading="lazy"
            style={{ objectPosition: layout.objectPosition }}
            className={layout.inset ? "category-card__img--inset" : undefined} />

          </div>
        }

        {/* Gradient scrim */}
        {layout.scrim !== "none" &&
        <div className={`category-card__scrim category-card__scrim--${layout.scrim}`} />
        }

        {/* Label inside card */}
        {layout.labelPosition !== "outside" && labelEl}
      </Link>

      {/* Label outside card */}
      {layout.labelPosition === "outside" &&
      <Link to={`/shop?category=${cat.id}`} className="category-label--outside-wrap">
          {labelEl}
        </Link>
      }
    </div>);

};

export default CategoryGrid;