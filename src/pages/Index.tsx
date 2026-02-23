import HeroSection from "@/components/HeroSection";
import Layout from "@/components/Layout";
import FloatingChatButton from "@/components/FloatingChatButton";
import CategoryGrid from "@/components/CategoryGrid";
import ProductRow from "@/components/ProductRow";
import FeatureBanner from "@/components/FeatureBanner";
import TeaCategorySlider from "@/components/TeaCategorySlider";
import { Leaf, Truck, Shield } from "lucide-react";

const features = [
  { icon: Leaf, title: "۱۰۰٪ طبیعی", desc: "بدون مواد نگهدارنده و افزودنی" },
  { icon: Truck, title: "ارسال سریع", desc: "ارسال به سراسر ایران" },
  { icon: Shield, title: "ضمانت کیفیت", desc: "تضمین اصالت و کیفیت محصولات" },
];

const Index = () => {
  return (
    <Layout>
      <HeroSection />

      {/* Art-directed category grid */}
      <CategoryGrid />

      {/* Feature Banner — herbal tea */}
      <FeatureBanner />

      {/* Tea & herbal drinks slider */}
      <TeaCategorySlider />

      {/* Product Cards — horizontal scroll row */}
      <ProductRow />

      {/* Features */}
      <section className="bg-background">
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="flex items-center gap-4 p-6 rounded-2xl bg-card border border-border shadow-card"
              >
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <f.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FloatingChatButton />
    </Layout>
  );
};

export default Index;
