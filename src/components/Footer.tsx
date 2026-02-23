import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background/90">
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold mb-4 font-serif text-primary-foreground">گندمک شاپ</h3>
          <p className="text-background/60 leading-relaxed text-sm">
            فروشگاه آنلاین محصولات طبیعی ایران — زعفران، ادویه، آجیل و دمنوش‌های اصیل با کیفیت تضمینی
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-lg mb-4">دسترسی سریع</h4>
          <div className="flex flex-col gap-2">
            <Link to="/shop" className="text-sm text-background/60 hover:text-accent transition-colors">محصولات</Link>
            <Link to="/about" className="text-sm text-background/60 hover:text-accent transition-colors">درباره ما</Link>
            <Link to="/contact" className="text-sm text-background/60 hover:text-accent transition-colors">تماس با ما</Link>
            <a href="https://gandomakshop.ir/my-account/" className="text-sm text-background/60 hover:text-accent transition-colors">حساب کاربری</a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-lg mb-4">ارتباط با ما</h4>
          <div className="flex flex-col gap-3">
            <a href="tel:09153750234" className="flex items-center gap-2 text-sm text-background/60 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              <span dir="ltr">0915-375-0234</span>
            </a>
            <a href="mailto:info@gandomakshop.ir" className="flex items-center gap-2 text-sm text-background/60 hover:text-accent transition-colors">
              <Mail className="w-4 h-4" />
              info@gandomakshop.ir
            </a>
            <div className="flex items-center gap-2 text-sm text-background/60">
              <MapPin className="w-4 h-4 shrink-0" />
              ایران
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10 mt-12 pt-8 text-center text-sm text-background/40">
        © {new Date().getFullYear()} گندمک شاپ — تمامی حقوق محفوظ است
      </div>
    </div>
  </footer>
);

export default Footer;
