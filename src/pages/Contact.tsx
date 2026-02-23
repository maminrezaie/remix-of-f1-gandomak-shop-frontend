import Layout from "@/components/Layout";
import { Phone, Mail, Clock, MapPin, MessageCircle, Send, Users, Headphones } from "lucide-react";

const contactInfo = [
  { icon: Phone, title: "تلفن تماس", value: "۰۹۱۵۳۷۵۰۲۳۴", href: "tel:09153750234" },
  { icon: Mail, title: "ایمیل", value: "info@gandomakshop.ir", href: "mailto:info@gandomakshop.ir" },
  { icon: Clock, title: "ساعت پاسخگویی", value: "شنبه تا پنجشنبه — ۹ صبح تا ۶ عصر", href: null },
  { icon: MapPin, title: "آدرس", value: "ایران", href: null },
];

const socialLinks = [
  {
    icon: MessageCircle,
    title: "واتساپ",
    description: "پاسخگویی سریع در واتساپ",
    href: "https://wa.me/989153750234",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: Send,
    title: "کانال ایتا",
    description: "عضو کانال ایتا ما شوید",
    href: "https://web.eitaa.com/#@gandomakshopir",
    color: "bg-blue-500/10 text-blue-600",
  },
];

const features = [
  { icon: Headphones, title: "پشتیبانی تلفنی", desc: "تماس مستقیم با کارشناسان" },
  { icon: Users, title: "مشاوره رایگان", desc: "راهنمایی در انتخاب محصول" },
  { icon: Clock, title: "پاسخ سریع", desc: "پاسخگویی در کمتر از ۲۴ ساعت" },
];

const Contact = () => (
  <Layout>
    {/* Hero */}
    <section className="bg-gradient-primary text-primary-foreground py-16 md:py-24">
      <div className="container text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">تماس با ما</h1>
        <p className="text-lg text-primary-foreground/80">
          خوشحال می‌شویم صدای شما را بشنویم — از هر طریقی که راحت‌ترید با ما در ارتباط باشید
        </p>
      </div>
    </section>

    {/* Features Strip */}
    <section className="container -mt-8 relative z-10">
      <div className="grid sm:grid-cols-3 gap-4">
        {features.map((f) => (
          <div key={f.title} className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border/50 shadow-card">
            <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
              <f.icon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-sm">{f.title}</h3>
              <p className="text-xs text-muted-foreground">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Contact Info Cards */}
    <section className="container py-16 max-w-5xl">
      <h2 className="text-2xl font-bold text-foreground mb-8 text-center">اطلاعات تماس</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {contactInfo.map((c) => (
          <div key={c.title} className="p-6 rounded-2xl bg-card border border-border/50 shadow-card flex items-start gap-4">
            <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
              <c.icon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">{c.title}</h3>
              {c.href ? (
                <a href={c.href} className="text-muted-foreground hover:text-primary transition-colors">
                  {c.value}
                </a>
              ) : (
                <p className="text-muted-foreground">{c.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Social / Messaging */}
    <section className="container pb-16 max-w-5xl">
      <h2 className="text-2xl font-bold text-foreground mb-8 text-center">شبکه‌های ارتباطی</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {socialLinks.map((s) => (
          <a
            key={s.title}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-card border border-border/50 shadow-card flex items-center gap-4 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className={`p-3 rounded-full shrink-0 ${s.color}`}>
              <s.icon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="container pb-16 max-w-4xl">
      <div className="p-8 md:p-12 bg-gradient-primary rounded-2xl text-center text-primary-foreground">
        <h2 className="text-2xl font-bold mb-3">سوالی دارید؟</h2>
        <p className="text-primary-foreground/80 mb-6">
          با ما تماس بگیرید، کارشناسان ما آماده پاسخگویی هستند
        </p>
        <a
          href="tel:09153750234"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-accent text-accent-foreground font-semibold hover:brightness-110 transition-all"
        >
          <Phone className="w-5 h-5" />
          تماس با ما
        </a>
      </div>
    </section>
  </Layout>
);

export default Contact;
