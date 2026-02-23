const posts = [
  {
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=200&fit=crop",
    title: "سافرانال زعفران چیست؟",
    excerpt: "زعفران یکی از ارزشمندترین گیاهان دارویی جهان است که شهرت آن تنها به رنگ و طعم محدود نمی‌شود، بلکه عطر منحصربه‌فرد آن نیز نقش مهمی در تمایز این ادویه دارد...",
    date: "۱۴۰۴/۰۹/۲۵",
    link: "#",
  },
  {
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=200&fit=crop",
    title: "پیکروکروسین زعفران چیست؟",
    excerpt: "زعفران یکی از پیچیده‌ترین گیاهان دارویی جهان است که ارزش آن تنها به رنگ و عطر محدود نمی‌شود، بلکه طعم خاص و منحصر به فرد آن نیز اهمیت بالایی دارد...",
    date: "۱۴۰۴/۰۹/۲۷",
    link: "#",
  },
  {
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=400&h=200&fit=crop",
    title: "چرا زعفران گران‌ترین ادویه دنیا است؟",
    excerpt: "زعفران که به طلای سرخ شهرت دارد، گران‌ترین ادویه جهان است و این جایگاه را به‌دلایل متعددی به دست آورده است. این ادویه ارزشمند نه‌تنها در صنایع دارویی، آرایشی و طب سنتی بلکه...",
    date: "۱۴۰۴/۱۰/۰۴",
    link: "#",
  },
  {
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=400&h=200&fit=crop",
    title: "راهنمای کاشت زرشک در گلدان و شرایط نگهداری آن",
    excerpt: "زرشک به عنوان یکی از ارزشمندترین محصولات کشاورزی ایران و سوغات شناخته‌شده مشهدالرضا، جایگاه ویژه‌ای در سبد غذایی خانواده‌های ایرانی دارد...",
    date: "۱۴۰۴/۱۱/۱۶",
    link: "#",
  },
];

const JournalSection = () => (
  <section className="journal-section" dir="rtl">
    <h2 className="journal-title">ژورنال گندمک</h2>

    <div className="journal-grid">
      {posts.map((p) => (
        <article key={p.title} className="journal-card">
          {/* Image */}
          <div className="journal-card__img-zone">
            <img src={p.image} alt={p.title} loading="lazy" />
            <span className="journal-card__badge">گندمک</span>
            <span className="journal-card__img-title">{p.title}</span>
          </div>

          {/* Body */}
          <div className="journal-card__body">
            <h3 className="journal-card__title">{p.title}</h3>
            <p className="journal-card__excerpt">{p.excerpt}</p>

            <div className="journal-card__footer">
              <span className="journal-card__date">{p.date}</span>
              <a href={p.link} className="journal-card__link">
                ادامه مطلب ←
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default JournalSection;
