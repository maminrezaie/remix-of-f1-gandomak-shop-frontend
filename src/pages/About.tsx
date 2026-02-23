import Layout from "@/components/Layout";
import { Leaf, Heart, Award } from "lucide-react";

const values = [
  { icon: Leaf, title: "طبیعی و ارگانیک", desc: "تمامی محصولات ما بدون مواد شیمیایی و از منابع طبیعی تهیه می‌شوند" },
  { icon: Heart, title: "سلامت‌محور", desc: "سلامت شما اولویت ماست. محصولاتی با بالاترین استانداردهای بهداشتی" },
  { icon: Award, title: "کیفیت برتر", desc: "انتخاب بهترین محصولات از سراسر ایران با ضمانت اصالت و کیفیت" },
];

const About = () => (
  <Layout>
    <section className="container py-16 max-w-4xl">
      <h1 className="text-4xl font-bold text-foreground mb-6 text-center">درباره گندمک شاپ</h1>
      <p className="text-lg text-muted-foreground text-center leading-relaxed mb-16 max-w-2xl mx-auto">
        گندمک شاپ با هدف ارائه بهترین محصولات طبیعی ایران، از زعفران مرغوب خراسان گرفته تا آجیل و دمنوش‌های دست‌چین، تلاش می‌کند سفره‌های ایرانی را با طعم و عطر اصیل طبیعت رنگین‌تر کند.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {values.map((v) => (
          <div key={v.title} className="text-center p-8 rounded-2xl bg-card border border-border/50 shadow-card">
            <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-4">
              <v.icon className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{v.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-card rounded-2xl p-8 md:p-12 border border-border/50 shadow-card space-y-4">
        <h2 className="text-2xl font-bold text-foreground">داستان ما</h2>
        <p className="text-muted-foreground leading-loose">
          ما در گندمک شاپ باور داریم که طبیعت ایران گنجینه‌ای بی‌نظیر از محصولات ارزشمند دارد. از مزارع زعفران خراسان تا باغ‌های پسته کرمان، از جنگل‌های شمال تا دشت‌های بکر جنوب — هر محصولی که در فروشگاه ما می‌بینید، حاصل تلاش کشاورزان و تولیدکنندگان ایرانی است.
        </p>
        <p className="text-muted-foreground leading-loose">
          ما مستقیم از تولیدکننده خرید می‌کنیم تا هم قیمت مناسبی به شما ارائه دهیم و هم از کیفیت و تازگی محصولات اطمینان حاصل کنیم. هر بسته‌ای که به دست شما می‌رسد، نتیجه دقت و وسواس ما در انتخاب بهترین‌هاست.
        </p>
      </div>
    </section>
  </Layout>
);

export default About;
