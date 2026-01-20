"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: (
      <svg style={{ width: "24px", height: "24px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Proudly Namibian",
    description: "We understand the local business landscape and build solutions that work for Namibian companies.",
  },
  {
    icon: (
      <svg style={{ width: "24px", height: "24px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Affordable Pricing",
    description: "Quality doesn't have to break the bank. Fair, transparent pricing designed for SMEs.",
  },
  {
    icon: (
      <svg style={{ width: "24px", height: "24px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Full Service",
    description: "From design to deployment to ongoing support - we handle everything so you can focus on your business.",
  },
  {
    icon: (
      <svg style={{ width: "24px", height: "24px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Modern Technology",
    description: "We use the latest technologies to build fast, secure, and scalable solutions that grow with you.",
  },
];

const stats = [
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 24, suffix: "/7", label: "Support Available" },
];

// Animated counter hook
function useCounter(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, start]);

  return count;
}

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
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
    <section id="why-us" ref={ref} style={{ paddingTop: "96px", paddingBottom: "128px", backgroundColor: "#ffffff", position: "relative", overflow: "hidden" }}>
      {/* Background decorations */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "-10%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(92, 225, 230, 0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", marginLeft: "auto", marginRight: "auto", paddingLeft: "24px", paddingRight: "24px", position: "relative", zIndex: 10 }}>
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
            transition: "all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)",
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
            Why Choose Us
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
            Your Success Is Our Priority
          </h2>
          <p style={{ fontSize: "18px", color: "#666", lineHeight: 1.7 }}>
            We&apos;re not just developers - we&apos;re your digital partners, committed to helping your business thrive online.
          </p>
        </div>

        {/* Features Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            gap: "32px",
            marginBottom: "64px",
          }}
          className="features-grid"
        >
          <style>{`
            @media (min-width: 640px) {
              .features-grid { grid-template-columns: repeat(2, 1fr) !important; }
            }
            @media (min-width: 1024px) {
              .features-grid { grid-template-columns: repeat(4, 1fr) !important; gap: 48px !important; }
            }
          `}</style>
          {features.map((feature, i) => (
            <div
              key={feature.title}
              onMouseEnter={() => setHoveredFeature(i)}
              onMouseLeave={() => setHoveredFeature(null)}
              style={{
                textAlign: "center",
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? hoveredFeature === i
                    ? "translateY(-8px)"
                    : "translateY(0)"
                  : "translateY(32px)",
                transition: `all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 100}ms`,
                cursor: "pointer",
                padding: "20px",
                borderRadius: "20px",
                backgroundColor: hoveredFeature === i ? "rgba(13, 79, 79, 0.03)" : "transparent",
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  marginLeft: "auto",
                  marginRight: "auto",
                  borderRadius: "16px",
                  backgroundColor: hoveredFeature === i ? "#0d4f4f" : "rgba(13, 79, 79, 0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: hoveredFeature === i ? "#ffffff" : "#0d4f4f",
                  marginBottom: "20px",
                  transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  transform: hoveredFeature === i ? "scale(1.1) rotate(5deg)" : "scale(1) rotate(0deg)",
                  boxShadow: hoveredFeature === i ? "0 10px 30px rgba(13, 79, 79, 0.2)" : "none",
                }}
              >
                {feature.icon}
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#1a1a1a", marginBottom: "12px", transition: "color 0.3s ease" }}>
                {feature.title}
              </h3>
              <p style={{ color: "#666", fontSize: "14px", lineHeight: 1.7 }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats with animated counters */}
        <div
          style={{
            background: "linear-gradient(135deg, #0d4f4f 0%, #1a6b6b 100%)",
            borderRadius: "24px",
            padding: "48px 32px",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0) scale(1)" : "translateY(32px) scale(0.95)",
            transition: "all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 300ms",
            position: "relative",
            overflow: "hidden",
          }}
          className="stats-container"
        >
          {/* Animated background elements */}
          <div
            style={{
              position: "absolute",
              top: "-50%",
              right: "-10%",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              background: "rgba(92, 225, 230, 0.1)",
              animation: isVisible ? "float 6s ease-in-out infinite" : "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-30%",
              left: "-5%",
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              background: "rgba(255, 255, 255, 0.05)",
              animation: isVisible ? "float 8s ease-in-out infinite reverse" : "none",
            }}
          />

          <style>{`
            @media (min-width: 1024px) {
              .stats-container { padding: 64px 48px !important; }
            }
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-20px); }
            }
          `}</style>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "32px",
              position: "relative",
              zIndex: 10,
            }}
            className="stats-grid"
          >
            <style>{`
              @media (min-width: 1024px) {
                .stats-grid { grid-template-columns: repeat(4, 1fr) !important; }
              }
            `}</style>
            {stats.map((stat, i) => (
              <StatItem key={stat.label} stat={stat} isVisible={isVisible} delay={i * 100} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatItem({ stat, isVisible, delay }: { stat: { value: number; suffix: string; label: string }; isVisible: boolean; delay: number }) {
  const count = useCounter(stat.value, 2000, isVisible);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        textAlign: "center",
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? isHovered
            ? "scale(1.1)"
            : "scale(1)"
          : "translateY(20px)",
        transition: `all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms`,
        cursor: "pointer",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          fontSize: "clamp(2rem, 5vw, 3rem)",
          fontWeight: 800,
          color: "#ffffff",
          marginBottom: "8px",
          textShadow: isHovered ? "0 0 30px rgba(92, 225, 230, 0.5)" : "none",
          transition: "text-shadow 0.3s ease",
        }}
      >
        {count}{stat.suffix}
      </div>
      <div
        style={{
          color: "rgba(255, 255, 255, 0.7)",
          fontSize: "14px",
          fontWeight: 500,
          transition: "color 0.3s ease",
        }}
      >
        {stat.label}
      </div>
    </div>
  );
}
