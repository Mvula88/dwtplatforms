"use client";

import { useEffect, useRef, useState } from "react";

interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
}

const plans: Plan[] = [
  {
    name: "Starter",
    price: "N$999",
    description: "Perfect for small businesses just getting started online",
    features: ["1-3 page website", "Mobile responsive design", "Contact form", "Basic SEO setup", "WhatsApp integration", "1 month free support"],
    ctaText: "Get Started",
  },
  {
    name: "Business",
    price: "N$1,999",
    description: "For growing businesses that need more functionality",
    features: ["5-7 page website", "Everything in Starter", "Photo gallery", "Google Maps integration", "Social media links", "3 months free support"],
    isPopular: true,
    ctaText: "Get Started",
  },
  {
    name: "Professional",
    price: "N$4,999",
    description: "Complete solution for established businesses",
    features: ["10+ page website", "Everything in Business", "Blog / News section", "Advanced SEO", "6 months free support"],
    ctaText: "Get Started",
  },
  {
    name: "Custom",
    price: "Let's Talk",
    description: "Tailored solutions for unique requirements",
    features: ["Custom software development", "E-commerce solutions", "Business systems", "API integrations", "Dedicated support", "Flexible timeline"],
    ctaText: "Contact Us",
  },
];

export default function Pricing() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="pricing" ref={ref} style={{ paddingTop: "64px", paddingBottom: "80px", backgroundColor: "#ffffff" }} className="pricing-section">
      <style>{`
        @media (min-width: 768px) {
          .pricing-section { padding-top: 96px !important; padding-bottom: 128px !important; }
        }
      `}</style>
      <div style={{ maxWidth: "1280px", marginLeft: "auto", marginRight: "auto", paddingLeft: "24px", paddingRight: "24px" }}>
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "768px",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "64px",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(32px)",
            transition: "all 0.7s ease",
          }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "8px 20px",
              backgroundColor: "rgba(13, 79, 79, 0.1)",
              color: "#0d4f4f",
              borderRadius: "9999px",
              fontSize: "14px",
              fontWeight: 600,
              marginBottom: "16px",
            }}
          >
            Pricing
          </span>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              color: "#1a1a1a",
              marginBottom: "16px",
              lineHeight: 1.2,
            }}
          >
            Simple, Transparent Pricing
          </h2>
          <p style={{ fontSize: "18px", color: "#666", lineHeight: 1.7 }}>
            No hidden fees. No surprises. Choose the plan that fits your needs and budget.
          </p>
        </div>

        {/* Pricing Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            gap: "24px",
          }}
          className="pricing-grid"
        >
          <style>{`
            @media (min-width: 768px) {
              .pricing-grid { grid-template-columns: repeat(2, 1fr) !important; }
            }
            @media (min-width: 1024px) {
              .pricing-grid { grid-template-columns: repeat(4, 1fr) !important; gap: 32px !important; }
            }
          `}</style>
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                position: "relative",
                backgroundColor: "#ffffff",
                borderRadius: "24px",
                padding: "32px",
                boxShadow: hoveredCard === i || plan.isPopular
                  ? "0 25px 50px -12px rgba(13, 79, 79, 0.25)"
                  : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                border: plan.isPopular ? "2px solid #5ce1e6" : "1px solid rgba(0, 0, 0, 0.05)",
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? hoveredCard === i
                    ? "translateY(-16px) scale(1.02)"
                    : plan.isPopular
                      ? "translateY(-8px)"
                      : "translateY(0)"
                  : "translateY(32px) scale(0.95)",
                transition: `all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 100}ms`,
                cursor: "pointer",
              }}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div
                  style={{
                    position: "absolute",
                    top: "-16px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    padding: "6px 16px",
                    background: "linear-gradient(135deg, #0d4f4f 0%, #1a6b6b 100%)",
                    borderRadius: "9999px",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#ffffff",
                    boxShadow: "0 4px 14px rgba(13, 79, 79, 0.3)",
                    animation: "pulseSoft 2s ease-in-out infinite",
                  }}
                >
                  Most Popular
                </div>
              )}
              <style>{`
                @keyframes pulseSoft {
                  0%, 100% { transform: translateX(-50%) scale(1); box-shadow: 0 4px 14px rgba(13, 79, 79, 0.3); }
                  50% { transform: translateX(-50%) scale(1.05); box-shadow: 0 6px 20px rgba(13, 79, 79, 0.4); }
                }
              `}</style>

              {/* Plan Name */}
              <h3 style={{ fontSize: "20px", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>
                {plan.name}
              </h3>

              {/* Price */}
              <div style={{ marginBottom: "16px" }}>
                <span style={{ fontSize: "36px", fontWeight: 800, color: "#0d4f4f" }}>{plan.price}</span>
              </div>

              {/* Description */}
              <p style={{ color: "#666", fontSize: "14px", marginBottom: "24px", lineHeight: 1.6 }}>
                {plan.description}
              </p>

              {/* Features */}
              <ul style={{ listStyle: "none", padding: 0, margin: 0, marginBottom: "32px" }}>
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                      fontSize: "14px",
                      color: "#555",
                      marginBottom: "12px",
                    }}
                  >
                    <svg style={{ width: "20px", height: "20px", color: "#5ce1e6", flexShrink: 0, marginTop: "2px" }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="#contact"
                style={{
                  display: "block",
                  width: "100%",
                  padding: "14px 24px",
                  borderRadius: "9999px",
                  fontWeight: 600,
                  fontSize: "15px",
                  textAlign: "center",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  background: plan.isPopular ? "linear-gradient(135deg, #0d4f4f 0%, #1a6b6b 100%)" : "#f5f5f5",
                  color: plan.isPopular ? "#ffffff" : "#0d4f4f",
                  boxShadow: plan.isPopular ? "0 4px 14px rgba(13, 79, 79, 0.3)" : "none",
                }}
              >
                {plan.ctaText}
              </a>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div
          style={{
            marginTop: "48px",
            textAlign: "center",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(32px)",
            transition: "all 0.7s ease 500ms",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "12px 24px",
              backgroundColor: "rgba(13, 79, 79, 0.05)",
              borderRadius: "9999px",
            }}
          >
            <svg style={{ width: "20px", height: "20px", color: "#0d4f4f" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span style={{ fontSize: "14px", color: "#1a1a1a" }}>All plans include free consultation and no upfront payment required</span>
          </div>
        </div>

        {/* Hosting Add-on */}
        <div
          style={{
            marginTop: "48px",
            background: "linear-gradient(135deg, #0d4f4f 0%, #1a6b6b 100%)",
            borderRadius: "24px",
            padding: "32px",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(32px)",
            transition: "all 0.7s ease 500ms",
          }}
          className="hosting-addon"
        >
          <style>{`
            @media (min-width: 1024px) {
              .hosting-addon { padding: 48px !important; }
            }
          `}</style>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "24px",
              textAlign: "center",
            }}
            className="hosting-content"
          >
            <style>{`
              @media (min-width: 768px) {
                .hosting-content {
                  flex-direction: row !important;
                  text-align: left !important;
                }
              }
            `}</style>
            <div>
              <h3 style={{ fontSize: "24px", fontWeight: 700, color: "#ffffff", marginBottom: "8px" }}>
                Need Hosting?
              </h3>
              <p style={{ color: "rgba(255, 255, 255, 0.8)" }}>
                Reliable, fast hosting with 24/7 support starting from N$99/month.
              </p>
            </div>
            <a
              href="#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "14px 28px",
                backgroundColor: "#ffffff",
                color: "#0d4f4f",
                borderRadius: "9999px",
                fontWeight: 600,
                fontSize: "15px",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
