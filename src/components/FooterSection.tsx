import { MapPin, Phone, Mail, Linkedin, Instagram } from "lucide-react";

const linkColumns = [
  {
    title: "باشگاه مشتریان",
    links: ["باشگاه مشتریان", "جشنواره تخفیف ویژه", "پورتال کارمندان", "رده‌بندی باشگاه مشتریان"],
  },
  {
    title: "پرسش‌های متداول",
    links: ["نحوه ثبت سفارش", "فرآیند ارسال سفارش", "شیوه‌های پرداخت"],
  },
  {
    title: "قوانین و مقررات",
    links: ["قوانین وبسایت", "فرآیند بازگرداندن کالا", "فرم نظرسنجی", "حریم خصوصی"],
  },
];

const FooterSection = () => (
  <footer className="footer-wrapper" dir="rtl">
    <div className="footer-inner">
      {/* ZONE 1 — Brand */}
      <div className="footer-brand">
        <img src="/logo.png" alt="گندمک" className="footer-logo-img" />
        <p className="footer-about">
          گندمک با بیش از یک دهه تجربه در صنعت ادویه و دمنوش ایران، نمادی از کیفیت، اصالت و نوآوری
          است. داستان ما از مزارع خراسان آغاز می‌شود، جایی که نسل‌های متمادی با عشق و تخصص،
          ارزشمندترین ادویه جهان را پرورش داده‌اند.
        </p>
      </div>

      {/* ZONE 2 — Center */}
      <div className="footer-center">
        {/* Contact */}
        <div className="footer-contact">
          <div className="footer-contact-row">
            <MapPin className="footer-contact-icon" />
            <span>دفتر مرکزی: مشهد، شهرک صنعتی توس، فاز یک، بین تلاش شمالی ۵ و ۷، پلاک ۲۷۵</span>
          </div>
          <div className="footer-contact-row">
            <Phone className="footer-contact-icon" />
            <span>خدمات مشتریان: ۰۵۱-۳۱۲۰۲-۰۵۱</span>
          </div>
          <div className="footer-contact-row">
            <Mail className="footer-contact-icon" />
            <span>کد پستی: ۹۱۸۵۱۷۵۶۴۲۰</span>
          </div>

          <div className="footer-social">
            <a href="mailto:info@gandomakshop.ir" className="footer-social-item">
              <Mail size={14} />
              <span>ایمیل</span>
            </a>
            <a href="#" className="footer-social-item">
              <Linkedin size={14} />
              <span>لینکدین</span>
            </a>
            <a href="#" className="footer-social-item">
              <Instagram size={14} />
              <span>اینستاگرام</span>
            </a>
          </div>
        </div>

        {/* Link columns */}
        {linkColumns.map((col) => (
          <div key={col.title} className="footer-link-col">
            <h4 className="footer-col-title">{col.title}</h4>
            <ul className="footer-col-links">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ZONE 3 — Trust seals */}
      <div className="footer-trust">
        <div className="footer-seal">نماد اعتماد</div>
        <div className="footer-seal">نماد اعتماد</div>
      </div>
    </div>

    <div className="footer-divider" />
    <p className="footer-copy">کلیه حقوق این وب‌سایت متعلق به شرکت گندمک می‌باشد</p>
  </footer>
);

export default FooterSection;
