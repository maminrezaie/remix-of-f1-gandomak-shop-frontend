import Layout from "@/components/Layout";
import { Leaf, Heart, Award, Truck, Shield, Users, MapPin, Star } from "lucide-react";
import saffronField from "@/assets/saffron-field.jpg";

const values = [
  { icon: Leaf, title: "طبیعی و ارگانیک", desc: "تمامی محصولات ما بدون مواد شیمیایی و افزودنی مصنوعی، مستقیماً از طبیعت ایران تهیه می‌شوند." },
  { icon: Heart, title: "سلامت‌محور", desc: "سلامت شما اولویت ماست. هر محصول با رعایت بالاترین استانداردهای بهداشتی بسته‌بندی و ارسال می‌شود." },
  { icon: Award, title: "کیفیت برتر", desc: "از مزارع زعفران تا باغ‌های پسته، فقط بهترین‌ها را با ضمانت اصالت انتخاب می‌کنیم." },
  { icon: Shield, title: "ضمانت اصالت", desc: "تمام محصولات دارای گواهی اصالت و قابلیت پیگیری از مبدأ تا مقصد هستند." },
];

const stats = [
  { value: "۵۰۰۰+", label: "مشتری راضی" },
  { value: "۱۵۰+", label: "محصول طبیعی" },
  { value: "۲۰+", label: "استان تأمین‌کننده" },
  { value: "۹۸٪", label: "رضایت مشتریان" },
];

const sourcing = [
  { icon: MapPin, region: "خراسان رضوی", product: "زعفران نگین و سرگل ممتاز", detail: "مستقیم از کشاورزان قائنات و تربت حیدریه" },
  { icon: MapPin, region: "کرمان", product: "پسته اکبری و فندقی", detail: "از باغ‌های رفسنجان با کیفیت صادراتی" },
  { icon: MapPin, region: "گیلان و مازندران", product: "دمنوش‌ و گیاهان دارویی", detail: "برداشت دستی از جنگل‌های هیرکانی" },
  { icon: MapPin, region: "فارس و اصفهان", product: "ادویه‌جات و خشکبار", detail: "تهیه‌شده با روش‌های سنتی و طبیعی" },
];

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[340px] md:h-[420px] overflow-hidden">
      <img src={saffronField} alt="مزارع زعفران ایران" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent" />
      <div className="relative container h-full flex flex-col items-center justify-end pb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-background mb-3 font-serif">درباره گندمک شاپ</h1>
        <p className="text-background/80 text-lg max-w-xl">از دل طبیعت ایران، تا سفره شما</p>
      </div>
    </section>

    {/* Stats */}
    <section className="container -mt-10 relative z-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-card rounded-2xl p-6 text-center border border-border/50 shadow-card">
            <div className="text-3xl font-bold text-primary mb-1">{s.value}</div>
            <div className="text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Brand Story */}
    <section className="container py-16 max-w-4xl">
      <div className="bg-card rounded-2xl p-8 md:p-12 border border-border/50 shadow-card space-y-5">
        <h2 className="text-2xl font-bold text-foreground font-serif">داستان ما</h2>
        <p className="text-muted-foreground leading-loose">
          گندمک شاپ از یک باور ساده شروع شد: <strong className="text-foreground">مردم ایران لایق بهترین محصولات طبیعی سرزمین خودشان هستند.</strong> ما دیدیم که بسیاری از خانواده‌ها به محصولات بی‌کیفیت و تقلبی دسترسی دارند، در حالی که کشاورزان و تولیدکنندگان ایرانی بهترین زعفران، آجیل، ادویه و دمنوش‌های جهان را تولید می‌کنند.
        </p>
        <p className="text-muted-foreground leading-loose">
          ما تصمیم گرفتیم پلی باشیم بین تولیدکنندگان اصیل ایرانی و مصرف‌کنندگانی که به کیفیت اهمیت می‌دهند. از مزارع زعفران خراسان تا باغ‌های پسته کرمان، از جنگل‌های شمال تا دشت‌های بکر جنوب — هر محصولی که در فروشگاه ما می‌بینید، حاصل تلاش و عشق کشاورزان ایرانی است.
        </p>
        <p className="text-muted-foreground leading-loose">
          ما مستقیم از تولیدکننده خرید می‌کنیم تا هم قیمت منصفانه‌ای به شما ارائه دهیم، هم از تازگی و اصالت محصولات مطمئن باشیم، و هم از معیشت کشاورزان حمایت کنیم. هر بسته‌ای که به دست شما می‌رسد، نتیجه دقت و وسواس ما در انتخاب بهترین‌هاست.
        </p>
      </div>
    </section>

    {/* Values */}
    <section className="bg-muted/30 py-16">
      <div className="container max-w-5xl">
        <h2 className="text-2xl font-bold text-foreground text-center mb-10 font-serif">ارزش‌های ما</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="text-center p-8 rounded-2xl bg-card border border-border/50 shadow-card">
              <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-4">
                <v.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Sourcing */}
    <section className="container py-16 max-w-5xl">
      <h2 className="text-2xl font-bold text-foreground text-center mb-3 font-serif">از کجا تأمین می‌کنیم؟</h2>
      <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
        ما با کشاورزان و تولیدکنندگان محلی در سراسر ایران همکاری مستقیم داریم.
      </p>
      <div className="grid sm:grid-cols-2 gap-5">
        {sourcing.map((s) => (
          <div key={s.region} className="flex gap-4 p-6 rounded-2xl bg-card border border-border/50 shadow-card">
            <div className="shrink-0 w-12 h-12 rounded-full bg-accent/60 flex items-center justify-center text-primary">
              <s.icon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-0.5">{s.region}</h3>
              <p className="text-sm text-primary font-medium mb-1">{s.product}</p>
              <p className="text-sm text-muted-foreground">{s.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Sustainability */}
    <section className="bg-primary/5 py-16">
      <div className="container max-w-4xl">
        <h2 className="text-2xl font-bold text-foreground text-center mb-3 font-serif">تعهد ما به پایداری</h2>
        <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
          ما به آینده سرزمینمان اهمیت می‌دهیم و در هر مرحله از زنجیره تأمین، اصول پایداری را رعایت می‌کنیم.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-card">
            <Leaf className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold text-foreground mb-2">کشاورزی پایدار</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              همکاری با کشاورزانی که از روش‌های کشاورزی سازگار با محیط‌زیست استفاده می‌کنند و از سموم شیمیایی پرهیز می‌کنند.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-card">
            <Users className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold text-foreground mb-2">تجارت منصفانه</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              خرید مستقیم از تولیدکنندگان با قیمت عادلانه برای حمایت از معیشت جوامع روستایی و کشاورزان محلی.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-card border border-border/50 shadow-card">
            <Truck className="w-8 h-8 text-primary mb-3" />
            <h3 className="font-semibold text-foreground mb-2">بسته‌بندی سبز</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              استفاده از بسته‌بندی‌های قابل بازیافت و کاهش پلاستیک در تمام مراحل ارسال و بسته‌بندی محصولات.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="container py-16 text-center">
      <div className="bg-card rounded-2xl p-10 md:p-14 border border-border/50 shadow-card max-w-3xl mx-auto">
        <Star className="w-10 h-10 text-primary mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-foreground mb-3 font-serif">همراه ما باشید</h2>
        <p className="text-muted-foreground mb-6 max-w-lg mx-auto leading-relaxed">
          با خرید از گندمک شاپ، نه تنها بهترین محصولات طبیعی را دریافت می‌کنید، بلکه از کشاورزان ایرانی و محیط‌زیست حمایت می‌کنید.
        </p>
        <a
          href="/shop"
          className="inline-flex h-11 px-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors"
        >
          مشاهده محصولات
        </a>
      </div>
    </section>
  </Layout>
);

export default About;
