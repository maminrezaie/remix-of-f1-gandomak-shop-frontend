import featuredImg from "@/assets/featured-tea.png";

const TeacupIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[52px] h-[52px] stroke-current fill-none" strokeWidth={1.3}>
    <path d="M4 19h16" />
    <path d="M6 19V9h12v10" />
    <path d="M18 11h2a2 2 0 010 4h-2" />
    <path d="M9 3s.5 2-.5 3M12 3s.5 2-.5 3M15 3s.5 2-.5 3" />
  </svg>
);

const FeatureBanner = () => {
  return (
    <section
      className="relative"
      style={{ background: "#faf5ec", padding: "3rem 2rem 3rem", direction: "rtl" }}
    >
      {/* Hairline separator */}
      <div className="w-full h-px" style={{ background: "#e0d0b8", marginBottom: "0.75rem" }} />

      {/* Script subtitle — centered below divider */}
      <span
        className="font-dancing block text-center"
        style={{
          fontWeight: 700,
          fontSize: "clamp(1.1rem, 2vw, 1.45rem)",
          color: "#cc2222",
          lineHeight: 1.4,
          marginBottom: "1.25rem",
          direction: "ltr",
        }}
      >
        favorite collection
      </span>

      <div
        className="feature-banner-grid mx-auto grid items-start gap-8"
        style={{
          maxWidth: 1400,
          gridTemplateColumns: "55% 45%",
          direction: "ltr",
          minHeight: 320,
        }}
      >
        {/* LEFT column — image */}
        <div className="flex items-start justify-start" style={{ overflow: "visible", marginTop: "-5rem", marginLeft: "50px" }}>
          <div style={{ width: "100%", maxWidth: 400, background: "#faf5ec", lineHeight: 0 }}>
            <img
              src={featuredImg}
              alt="دمنوش های گیاهی و میوه‌ای"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                mixBlendMode: "multiply",
              }}
            />
          </div>
        </div>

        {/* RIGHT column — text */}
        <div
          className="flex flex-col justify-center"
          style={{
            direction: "rtl",
            textAlign: "right",
            paddingTop: 0,
            marginTop: "-1rem",
            alignItems: "flex-end",
            paddingRight: "3rem",
          }}
        >
          {/* Badge — static, pushed to left of RTL column */}
          <div
            className="flex flex-col items-center"
            style={{ alignSelf: "flex-start", marginBottom: "0.75rem", color: "#c9a882" }}
          >
            <TeacupIcon />
            <span
              className="font-vazir text-center leading-snug"
              style={{ fontSize: "0.68rem", fontWeight: 600, color: "#c9a882", direction: "rtl" }}
            >
              محصول
              <br />
              جدید
            </span>
          </div>

          {/* Title */}
          <h2
            style={{
              fontFamily: "'YekanBakh', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(1.3rem, 2.4vw, 1.9rem)",
              color: "#2a1a0a",
              direction: "rtl",
              textAlign: "right",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
              marginTop: 0,
              marginBottom: "20px",
              marginRight: "20px",
              alignSelf: "stretch",
            }}
          >
            دمنوش های گیاهی و میوه‌ای
          </h2>


          {/* Description */}
          <p
            className="font-vazir"
            style={{
              fontWeight: 400,
              fontSize: "0.875rem",
              color: "#5a4a3a",
              lineHeight: 1.9,
              direction: "rtl",
              textAlign: "right",
              alignSelf: "stretch",
              marginTop: "1.5rem",
            }}
          >
            دمنوش‌های گیاهی و میوه‌ای گندمک نوشیدنی‌های گرم و انرژی‌بخشی با ترکیبات متنوع و طبیعی با
            طعم‌هایی خاص و دلنشین، عطرهایی بی‌نظیر و دل‌انگیز، و خواص درمانی فراوانی هستند
          </p>
        </div>
      </div>

      {/* Responsive override */}
      <style>{`
        @media (max-width: 860px) {
          .feature-banner-grid {
            grid-template-columns: 1fr !important;
          }
          .feature-banner-grid > div:first-child {
            order: 1;
            margin-top: 0 !important;
          }
          .feature-banner-grid > div:first-child > div {
            max-width: 360px !important;
            margin: 0 auto;
          }
          .feature-banner-grid > div:last-child {
            order: 2;
            align-items: center !important;
            text-align: center !important;
            padding-right: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FeatureBanner;
