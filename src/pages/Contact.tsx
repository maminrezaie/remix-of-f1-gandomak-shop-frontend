import Layout from "@/components/Layout";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

const contactInfo = [
  { icon: Phone, title: "تلفن تماس", value: "۰۹۱۵۳۷۵۰۲۳۴", href: "tel:09153750234" },
  { icon: Mail, title: "ایمیل", value: "info@gandomakshop.ir", href: "mailto:info@gandomakshop.ir" },
  { icon: Clock, title: "ساعت پاسخگویی", value: "شنبه تا پنجشنبه — ۹ صبح تا ۶ عصر", href: null },
  { icon: MapPin, title: "آدرس", value: "ایران", href: null },
];

const Contact = () => (
  <Layout>
    <section className="container py-16 max-w-4xl">
      <h1 className="text-4xl font-bold text-foreground mb-4 text-center">تماس با ما</h1>
      <p className="text-lg text-muted-foreground text-center mb-12">
        خوشحال می‌شویم صدای شما را بشنویم
      </p>

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

      <div className="mt-12 p-8 md:p-12 bg-gradient-primary rounded-2xl text-center text-primary-foreground">
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
