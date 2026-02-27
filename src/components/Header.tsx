import { Link } from "react-router-dom";
import { BASE_PATH } from "@/lib/constants";
import { Search, ShoppingCart, User, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "فروشگاه", path: "/shop" },
  { label: "محصولات", path: "/shop", hasDropdown: true },
  { label: "درباره ما", path: "/about", hasDropdown: true },
  { label: "تماس با ما", path: "/contact" },
  { label: "وبلاگ", path: "https://gandomakshop.ir/blog/", external: true },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-nav h-[68px]">
      <div className="container flex items-center justify-between h-full">
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img src={`${BASE_PATH}logo.png`} alt="گندمک شاپ" className="h-12 w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.label}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                to={item.path}
                className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-3.5 h-3.5 opacity-50" />}
              </Link>
            )
          )}
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-1.5">
          {/* Search */}
          <button
            className="w-[42px] h-[42px] rounded-full border-[1.5px] border-accent flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-200"
            aria-label="جستجو"
          >
            <Search className="w-4.5 h-4.5" />
          </button>

          {/* Cart */}
          <a
            href="https://gandomakshop.ir/cart/"
            className="relative p-2.5 rounded-full text-foreground/70 hover:text-primary transition-colors duration-200"
            aria-label="سبد خرید"
          >
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute top-1 left-1 w-[18px] h-[18px] rounded-full bg-destructive text-destructive-foreground text-[10px] font-bold flex items-center justify-center">
              ۰
            </span>
          </a>

          {/* Login Text */}
          <a
            href="https://gandomakshop.ir/my-account/"
            className="hidden sm:block text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200 px-2"
          >
            ورود
          </a>

          {/* User */}
          <a
            href="https://gandomakshop.ir/my-account/"
            className="w-[42px] h-[42px] rounded-full border-[1.5px] border-accent flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-200"
            aria-label="حساب کاربری"
          >
            <User className="w-4.5 h-4.5" />
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2.5 rounded-full text-foreground/70 hover:text-primary"
            aria-label="منو"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="lg:hidden border-t border-border bg-card animate-fade-in">
          <div className="container py-4 flex flex-col gap-1">
            {navItems.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-lg text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
