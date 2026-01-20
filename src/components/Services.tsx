"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: (
      <svg style={{ width: "28px", height: "28px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Website Design",
    price: "From N$999",
    description: "Professional, mobile-friendly websites that make your business stand out online.",
    features: ["Responsive Design", "Fast Loading", "SEO Optimized", "WhatsApp Integration"],
  },
  {
    icon: (
      <svg style={{ width: "28px", height: "28px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: "Custom Software",
    price: "Get a Quote",
    description: "Tailored business systems and applications built specifically for your needs.",
    features: ["Custom Solutions", "Business Automation", "Cloud-Based", "Full Support"],
  },
  {
    icon: (
      <svg style={{ width: "28px", height: "28px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: "School Systems",
    price: "From N$99/mo",
    description: "NamClass - Complete student management for tutorial centres and schools.",
    features: ["Student Management", "Fee Tracking", "Progress Reports", "Parent Portal"],
  },
  {
    icon: (
      <svg style={{ width: "28px", height: "28px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    title: "Hosting & Support",
    price: "From N$99/mo",
    description: "Reliable hosting and ongoing maintenance to keep your site running smoothly.",
    features: ["99.9% Uptime", "Daily Backups", "SSL Security", "24/7 Monitoring"],
  },
];

export default function Services() {
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
    <section id="services" ref={ref} style={{ paddingTop: "64px", paddingBottom: "80px", backgroundColor: "#f8f9fa", position: "relative", overflow: "hidden" }} className="services-section">
      <style>{`
        @media (min-width: 768px) {
          .services-section { padding-top: 96px !important; padding-bottom: 128px !important; }
        }
      `}</style>
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "-5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(92, 225, 230, 0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "-5%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(13, 79, 79, 0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", marginLeft: "auto", marginRight: "auto", paddingLeft: "16px", paddingRight: "16px", position: "relative", zIndex: 10 }} className="services-container">
        <style>{`
          @media (min-width: 640px) {
            .services-container { padding-left: 24px !important; padding-right: 24px !important; }
          }
        `}</style>
        {/* Header */}
        <div
          style={{
            marginBottom: "40px",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(32px)",
            transition: "all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
          className="services-header"
        >
          <style>{`
            @media (min-width: 768px) {
              .services-header { margin-bottom: 64px !important; display: flex !important; align-items: flex-end !important; justify-content: space-between !important; }
            }
          `}</style>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
              <div style={{ width: "40px", height: "3px", backgroundColor: "#5ce1e6", borderRadius: "2px" }} />
              <span style={{ fontSize: "13px", fontWeight: 600, color: "#0d4f4f", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Services
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 800,
                color: "#1a1a1a",
                lineHeight: 1.2,
                marginBottom: "12px",
              }}
            >
              What We Build
            </h2>
            <p style={{ fontSize: "16px", color: "#666", lineHeight: 1.6, maxWidth: "500px" }} className="services-subtitle">
              <style>{`
                @media (min-width: 640px) {
                  .services-subtitle { font-size: 18px !important; }
                }
              `}</style>
              From simple websites to complex business systems — we bring your digital vision to life.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            gap: "24px",
          }}
          className="services-grid"
        >
          <style>{`
            @media (min-width: 768px) {
              .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
            }
            @media (min-width: 1024px) {
              .services-grid { grid-template-columns: repeat(4, 1fr) !important; gap: 32px !important; }
            }
          `}</style>
          {services.map((service, i) => (
            <div
              key={service.title}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "20px",
                padding: "24px",
                boxShadow: hoveredCard === i
                  ? "0 25px 50px -12px rgba(13, 79, 79, 0.25)"
                  : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? hoveredCard === i
                    ? "translateY(-12px) scale(1.02)"
                    : "translateY(0) scale(1)"
                  : "translateY(32px) scale(0.95)",
                transition: `all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 100}ms`,
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Hover gradient overlay */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "4px",
                  background: "linear-gradient(90deg, #0d4f4f, #5ce1e6, #0d4f4f)",
                  backgroundSize: "200% 100%",
                  opacity: hoveredCard === i ? 1 : 0,
                  transition: "opacity 0.3s ease",
                  animation: hoveredCard === i ? "shimmer 2s linear infinite" : "none",
                }}
              />

              {/* Icon */}
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "16px",
                  background: "linear-gradient(135deg, #0d4f4f 0%, #1a6b6b 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                  marginBottom: "24px",
                  transform: hoveredCard === i ? "scale(1.1) rotate(5deg)" : "scale(1) rotate(0deg)",
                  transition: "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  boxShadow: hoveredCard === i ? "0 10px 30px rgba(13, 79, 79, 0.3)" : "none",
                }}
              >
                {service.icon}
              </div>

              {/* Content */}
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#1a1a1a",
                  marginBottom: "8px",
                  transition: "color 0.3s ease",
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#5ce1e6",
                  marginBottom: "16px",
                  transition: "transform 0.3s ease",
                  transform: hoveredCard === i ? "scale(1.05)" : "scale(1)",
                  transformOrigin: "left center",
                }}
              >
                {service.price}
              </p>
              <p style={{ color: "#666", fontSize: "14px", lineHeight: 1.7, marginBottom: "24px" }}>
                {service.description}
              </p>

              {/* Features */}
              <ul style={{ listStyle: "none", padding: 0, margin: 0, marginBottom: "24px" }}>
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={feature}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      fontSize: "14px",
                      color: "#555",
                      marginBottom: "12px",
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "translateX(0)" : "translateX(-20px)",
                      transition: `all 0.5s ease ${i * 100 + featureIndex * 50 + 200}ms`,
                    }}
                  >
                    <svg
                      style={{
                        width: "20px",
                        height: "20px",
                        color: "#5ce1e6",
                        flexShrink: 0,
                        transform: hoveredCard === i ? "scale(1.2)" : "scale(1)",
                        transition: "transform 0.3s ease",
                      }}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link */}
              <a
                href="#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#0d4f4f",
                  fontWeight: 600,
                  fontSize: "14px",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                  transform: hoveredCard === i ? "translateX(5px)" : "translateX(0)",
                }}
              >
                Learn More
                <svg
                  style={{
                    width: "16px",
                    height: "16px",
                    transform: hoveredCard === i ? "translateX(5px)" : "translateX(0)",
                    transition: "transform 0.3s ease",
                  }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          style={{
            textAlign: "center",
            marginTop: "64px",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(32px)",
            transition: "all 0.7s ease 500ms",
          }}
        >
          <p style={{ color: "#666", marginBottom: "24px" }}>Not sure what you need? Let&apos;s discuss your project.</p>
          <a
            href="https://wa.me/264813214813"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 28px",
              backgroundColor: "#25D366",
              color: "#ffffff",
              borderRadius: "9999px",
              fontWeight: 600,
              fontSize: "15px",
              textDecoration: "none",
              boxShadow: "0 4px 14px rgba(37, 211, 102, 0.4)",
              transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px) scale(1.05)";
              e.currentTarget.style.boxShadow = "0 15px 40px rgba(37, 211, 102, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 14px rgba(37, 211, 102, 0.4)";
            }}
          >
            <svg style={{ width: "20px", height: "20px" }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat With Us
          </a>
        </div>
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </section>
  );
}
