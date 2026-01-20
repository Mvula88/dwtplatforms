"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    id: 1,
    quote: "DWT built our company website and it exceeded all expectations. Professional, fast, and great communication throughout the project.",
    name: "Maria Shikongo",
    role: "Owner",
    company: "Oshakati Fashion House",
    rating: 5,
  },
  {
    id: 2,
    quote: "The school management system they developed for us has transformed how we operate. Parents love the online portal!",
    name: "Johannes Nghidinwa",
    role: "Principal",
    company: "Excel Tutorial Centre",
    rating: 5,
  },
  {
    id: 3,
    quote: "Affordable, reliable, and they truly understand what Namibian businesses need. Highly recommend their services.",
    name: "Sarah Amushila",
    role: "Director",
    company: "Northern Car Rentals",
    rating: 5,
  },
  {
    id: 4,
    quote: "Our custom inventory system has saved us countless hours. The team was responsive and delivered exactly what we needed.",
    name: "Thomas Hamutenya",
    role: "Operations Manager",
    company: "Ongwediva Hardware",
    rating: 5,
  },
];

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
        setIsTransitioning(false);
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index: number) => {
    if (index !== activeIndex) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveIndex(index);
        setIsTransitioning(false);
      }, 300);
    }
  };

  return (
    <section
      id="testimonials"
      ref={ref}
      className="testimonials-section"
      style={{
        paddingTop: "64px",
        paddingBottom: "80px",
        backgroundColor: "#f8f9fa",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @media (min-width: 768px) {
          .testimonials-section { padding-top: 96px !important; padding-bottom: 128px !important; }
        }
      `}</style>
      {/* Animated Background Decorations */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "256px",
          height: "256px",
          borderRadius: "50%",
          backgroundColor: "rgba(13, 79, 79, 0.05)",
          transform: "translate(-50%, -50%)",
          animation: isVisible ? "float 8s ease-in-out infinite" : "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "384px",
          height: "384px",
          borderRadius: "50%",
          backgroundColor: "rgba(92, 225, 230, 0.05)",
          transform: "translate(33%, 33%)",
          animation: isVisible ? "float 10s ease-in-out infinite reverse" : "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "10%",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          backgroundColor: "rgba(13, 79, 79, 0.03)",
          animation: isVisible ? "float 6s ease-in-out infinite" : "none",
        }}
      />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes starPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.8; }
        }
      `}</style>

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
            Clients
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
            Trusted by businesses across Namibia
          </h2>
          <p style={{ fontSize: "18px", color: "#666", lineHeight: 1.7 }}>
            Here&apos;s what they have to say.
          </p>
        </div>

        {/* Testimonials Grid - Desktop */}
        <div
          style={{
            display: "none",
          }}
          className="testimonials-grid"
        >
          <style>{`
            @media (min-width: 768px) {
              .testimonials-grid {
                display: grid !important;
                grid-template-columns: repeat(2, 1fr) !important;
                gap: 24px !important;
              }
            }
            @media (min-width: 1024px) {
              .testimonials-grid {
                grid-template-columns: repeat(4, 1fr) !important;
                gap: 32px !important;
              }
            }
          `}</style>
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.id}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "24px",
                padding: "32px",
                boxShadow: hoveredCard === i
                  ? "0 25px 50px -12px rgba(13, 79, 79, 0.25)"
                  : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                border: hoveredCard === i ? "1px solid rgba(92, 225, 230, 0.3)" : "1px solid rgba(0, 0, 0, 0.05)",
                display: "flex",
                flexDirection: "column",
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? hoveredCard === i
                    ? "translateY(-12px) scale(1.02)"
                    : "translateY(0) scale(1)"
                  : "translateY(32px) scale(0.95)",
                transition: `all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 100}ms`,
                cursor: "pointer",
              }}
            >
              {/* Quote Icon */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "16px",
                  background: hoveredCard === i
                    ? "linear-gradient(135deg, #5ce1e6 0%, #0d4f4f 100%)"
                    : "linear-gradient(135deg, #0d4f4f 0%, #1a6b6b 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                  transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  transform: hoveredCard === i ? "rotate(10deg) scale(1.1)" : "rotate(0deg) scale(1)",
                  boxShadow: hoveredCard === i ? "0 10px 20px rgba(13, 79, 79, 0.3)" : "none",
                }}
              >
                <svg style={{ width: "20px", height: "20px", color: "#ffffff" }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Rating */}
              <div style={{ display: "flex", gap: "4px", marginBottom: "16px" }}>
                {[...Array(testimonial.rating)].map((_, j) => (
                  <svg
                    key={j}
                    style={{
                      width: "16px",
                      height: "16px",
                      color: "#fbbf24",
                      animation: hoveredCard === i ? `starPulse 0.6s ease-in-out ${j * 0.1}s` : "none",
                    }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p style={{ color: "#666", fontSize: "14px", lineHeight: 1.7, marginBottom: "24px", flex: 1 }}>
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Author */}
              <div style={{ borderTop: "1px solid #f0f0f0", paddingTop: "16px", marginTop: "auto" }}>
                <div style={{ fontWeight: 600, color: "#1a1a1a", fontSize: "14px" }}>{testimonial.name}</div>
                <div style={{ color: "#888", fontSize: "12px" }}>{testimonial.role}, {testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel - Mobile */}
        <div className="testimonials-mobile" style={{ display: "block" }}>
          <style>{`
            @media (min-width: 768px) {
              .testimonials-mobile { display: none !important; }
            }
          `}</style>
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "24px",
              padding: "32px",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              textAlign: "center",
              opacity: isVisible ? (isTransitioning ? 0.5 : 1) : 0,
              transform: isVisible
                ? isTransitioning
                  ? "translateY(10px) scale(0.98)"
                  : "translateY(0) scale(1)"
                : "translateY(32px)",
              transition: "all 0.3s ease",
            }}
          >
            {/* Quote Icon */}
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "16px",
                background: "linear-gradient(135deg, #0d4f4f 0%, #1a6b6b 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "24px",
                marginLeft: "auto",
                marginRight: "auto",
                boxShadow: "0 10px 30px rgba(13, 79, 79, 0.2)",
              }}
            >
              <svg style={{ width: "24px", height: "24px", color: "#ffffff" }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Rating */}
            <div style={{ display: "flex", justifyContent: "center", gap: "4px", marginBottom: "24px" }}>
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <svg
                  key={i}
                  style={{
                    width: "20px",
                    height: "20px",
                    color: "#fbbf24",
                    animation: !isTransitioning ? `starPulse 0.6s ease-in-out ${i * 0.1}s` : "none",
                  }}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Quote */}
            <p style={{ color: "#666", lineHeight: 1.7, marginBottom: "24px" }}>
              &quot;{testimonials[activeIndex].quote}&quot;
            </p>

            {/* Author */}
            <div style={{ fontWeight: 600, color: "#1a1a1a" }}>{testimonials[activeIndex].name}</div>
            <div style={{ color: "#888", fontSize: "14px" }}>
              {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "24px" }}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                style={{
                  height: "10px",
                  borderRadius: "9999px",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  backgroundColor: index === activeIndex ? "#0d4f4f" : "#d1d5db",
                  width: index === activeIndex ? "32px" : "10px",
                  transform: index === activeIndex ? "scale(1.1)" : "scale(1)",
                  boxShadow: index === activeIndex ? "0 4px 10px rgba(13, 79, 79, 0.3)" : "none",
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          style={{
            textAlign: "center",
            marginTop: "48px",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(32px)",
            transition: "all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 500ms",
          }}
        >
          <p style={{ color: "#666", marginBottom: "24px" }}>Ready to join our happy clients?</p>
          <CTAButton />
        </div>
      </div>
    </section>
  );
}

function CTAButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href="#contact"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "14px 28px",
        background: isHovered
          ? "linear-gradient(135deg, #1a6b6b 0%, #0d4f4f 100%)"
          : "linear-gradient(135deg, #0d4f4f 0%, #1a6b6b 100%)",
        color: "#ffffff",
        borderRadius: "9999px",
        fontWeight: 600,
        fontSize: "15px",
        textDecoration: "none",
        boxShadow: isHovered
          ? "0 10px 30px rgba(13, 79, 79, 0.5)"
          : "0 4px 14px rgba(13, 79, 79, 0.3)",
        transform: isHovered ? "translateY(-3px) scale(1.05)" : "translateY(0) scale(1)",
        transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
      }}
    >
      Start Your Project
      <svg
        style={{
          width: "16px",
          height: "16px",
          transform: isHovered ? "translateX(4px)" : "translateX(0)",
          transition: "transform 0.3s ease",
        }}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </a>
  );
}
