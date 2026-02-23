export interface WooProduct {
  id: number;
  name: string;
  slug: string;
  price: string;
  regular_price: string;
  sale_price: string;
  description: string;
  short_description: string;
  images: { id: number; src: string; alt: string }[];
  categories: { id: number; name: string; slug: string }[];
  on_sale: boolean;
  stock_status: string;
}

export interface WooCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
  image: { src: string; alt: string } | null;
}
