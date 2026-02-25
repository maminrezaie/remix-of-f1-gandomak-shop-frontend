import { useState, useEffect } from "react";
const images = [
  "https://gandomakshop.ir/wp-content/uploads/2026/02/hero-spices-cEVrjBtw.jpg",
  "https://gandomakshop.ir/wp-content/uploads/2026/02/hero-cinnamon-DbntteBr.jpg",
  "https://gandomakshop.ir/wp-content/uploads/2026/02/hero-bottles-BHUSsZNl.jpg",
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative" style={{ minHeight: "72vh", height: "72vh", maxHeight: "780px" }}>
      {/* Background Photos — crossfade */}
      <div className="absolute inset-0">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt="ادویه‌جات"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              objectPosition: src.includes("hero-bottles") ? "center 70%" : "center top",
              opacity: activeIndex === i ? 1 : 0,
              transition: "opacity 1.5s ease-in-out",
            }}
          />
        ))}

      </div>

      {/* Centered text block */}
      <div
        className="relative z-30 flex flex-col items-center justify-end h-full"
        style={{ minHeight: "72vh", paddingBottom: "1.5rem" }}
      >
        <div
          className="text-center animate-fade-in-up"
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.2rem" }}
        >
          <span
            style={{
              fontFamily: "'Dancing Script', cursive",
              fontWeight: 700,
              fontSize: "clamp(1.4rem, 2.8vw, 2rem)",
              color: "#5a3e2e",
              opacity: 0.82,
              direction: "ltr",
              display: "block",
              letterSpacing: "0.01em",
              lineHeight: 1.3,
              marginBottom: "0.15rem",
            }}
          >
            a delightful journey
          </span>
          <h1
            style={{
              fontFamily: "'YekanBakh', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(1.3rem, 2.4vw, 1.9rem)",
              color: "#2a1a0a",
              direction: "rtl",
              letterSpacing: "-0.01em",
              lineHeight: 1.3,
              whiteSpace: "normal",
              margin: 0,
            }}
          >
            سفری خاطره‌انگیز از مزرعه تا بسته‌بندی
          </h1>
        </div>
      </div>

      {/* Dissolve overlay — covers both images and text */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background: `linear-gradient(to bottom,
            transparent 0%,
            transparent 50%,
            rgba(250,245,236,0.4) 65%,
            rgba(250,245,236,0.88) 80%,
            hsl(37, 54%, 95%) 100%
          )`,
        }}
      />
    </section>
  );
};

export default HeroSection;
