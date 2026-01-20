"use client";

import { useEffect, useState, useRef } from "react";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Parallax mouse effect - only on desktop
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current && window.innerWidth > 768) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
        const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "linear-gradient(135deg, #0d4f4f 0%, #1a6b6b 50%, #0d4f4f 100%)",
      }}
    >
      {/* Animated Gradient Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, #0d4f4f 0%, #1a6b6b 25%, #0d4f4f 50%, #1a6b6b 75%, #0d4f4f 100%)",
          backgroundSize: "400% 400%",
          animation: "gradient 15s ease infinite",
        }}
      />

      {/* Pattern Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.1,
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Floating Elements with Parallax - Hidden on small mobile */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }} className="floating-elements">
        <style>{`
          @media (max-width: 480px) {
            .floating-elements > *:not(.wave-svg) { opacity: 0.3 !important; }
          }
        `}</style>

        {/* Code symbol - parallax */}
        <span
          className="floating-code"
          style={{
            position: "absolute",
            top: "20%",
            left: "10%",
            fontSize: "clamp(2rem, 5vw, 3.75rem)",
            color: "rgba(92, 225, 230, 0.2)",
            fontFamily: "monospace",
            opacity: isLoaded ? 1 : 0,
            transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px) ${isLoaded ? "translateY(0)" : "translateY(40px)"}`,
            transition: "opacity 1s ease, transform 0.3s ease-out",
            animation: isLoaded ? "float 6s ease-in-out infinite" : "none",
          }}
        >
          &lt;/&gt;
        </span>

        {/* Curly braces - parallax */}
        <span
          style={{
            position: "absolute",
            bottom: "30%",
            right: "15%",
            fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            color: "rgba(92, 225, 230, 0.15)",
            fontFamily: "monospace",
            opacity: isLoaded ? 1 : 0,
            transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px) ${isLoaded ? "translateY(0)" : "translateY(40px)"}`,
            transition: "opacity 1s ease 0.3s, transform 0.3s ease-out",
            animation: isLoaded ? "floatRotate 8s ease-in-out infinite" : "none",
          }}
        >
          {"{  }"}
        </span>

        {/* Large circle - parallax + morph */}
        <div
          className="hide-mobile"
          style={{
            position: "absolute",
            top: "30%",
            right: "20%",
            width: "clamp(64px, 10vw, 128px)",
            height: "clamp(64px, 10vw, 128px)",
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
            border: "2px solid rgba(92, 225, 230, 0.2)",
            opacity: isLoaded ? 1 : 0,
            transform: `translate(${mousePosition.x * -40}px, ${mousePosition.y * -40}px)`,
            transition: "opacity 1s ease 0.5s, transform 0.3s ease-out",
            animation: isLoaded ? "morph 8s ease-in-out infinite" : "none",
          }}
        />

        {/* Small circle - parallax */}
        <div
          className="hide-mobile"
          style={{
            position: "absolute",
            bottom: "20%",
            left: "20%",
            width: "clamp(40px, 6vw, 80px)",
            height: "clamp(40px, 6vw, 80px)",
            borderRadius: "50%",
            border: "2px solid rgba(255, 255, 255, 0.1)",
            opacity: isLoaded ? 1 : 0,
            transform: `translate(${mousePosition.x * -25}px, ${mousePosition.y * -25}px)`,
            transition: "opacity 1s ease 0.7s, transform 0.3s ease-out",
            animation: isLoaded ? "float 7s ease-in-out infinite reverse" : "none",
          }}
        />

        {/* Glowing orb */}
        <div
          className="hide-mobile"
          style={{
            position: "absolute",
            top: "60%",
            right: "10%",
            width: "clamp(100px, 15vw, 200px)",
            height: "clamp(100px, 15vw, 200px)",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(92, 225, 230, 0.15) 0%, transparent 70%)",
            opacity: isLoaded ? 1 : 0,
            transform: `translate(${mousePosition.x * -50}px, ${mousePosition.y * -50}px)`,
            transition: "opacity 1s ease 0.6s, transform 0.3s ease-out",
            animation: isLoaded ? "pulseSoft 4s ease-in-out infinite" : "none",
          }}
        />

        {/* Additional floating element */}
        <div
          className="hide-mobile"
          style={{
            position: "absolute",
            top: "15%",
            right: "35%",
            width: "clamp(30px, 5vw, 60px)",
            height: "clamp(30px, 5vw, 60px)",
            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
            background: "rgba(92, 225, 230, 0.1)",
            opacity: isLoaded ? 1 : 0,
            transform: `translate(${mousePosition.x * -35}px, ${mousePosition.y * -35}px)`,
            transition: "opacity 1s ease 0.8s, transform 0.3s ease-out",
            animation: isLoaded ? "morph 10s ease-in-out infinite, float 5s ease-in-out infinite" : "none",
          }}
        />

        {/* Wave Pattern */}
        <svg
          className="wave-svg"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            color: "rgba(255, 255, 255, 0.05)",
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateY(0)" : "translateY(80px)",
            transition: "all 1s ease 0.5s",
          }}
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,117.3C672,107,768,117,864,144C960,171,1056,213,1152,213.3C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>

        {/* Dot Grid - parallax */}
        <div
          className="hide-mobile"
          style={{
            position: "absolute",
            top: "40%",
            left: "5%",
            width: "clamp(48px, 8vw, 96px)",
            height: "clamp(48px, 8vw, 96px)",
            backgroundImage: "radial-gradient(circle, #5ce1e6 2px, transparent 2px)",
            backgroundSize: "12px 12px",
            opacity: isLoaded ? 1 : 0,
            transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`,
            transition: "opacity 1s ease 0.3s, transform 0.3s ease-out",
          }}
        />

        {/* Spinning ring */}
        <div
          className="hide-mobile"
          style={{
            position: "absolute",
            bottom: "40%",
            right: "30%",
            width: "clamp(50px, 8vw, 100px)",
            height: "clamp(50px, 8vw, 100px)",
            border: "1px dashed rgba(92, 225, 230, 0.2)",
            borderRadius: "50%",
            opacity: isLoaded ? 0.6 : 0,
            transition: "opacity 1s ease 0.9s",
            animation: isLoaded ? "spin 30s linear infinite" : "none",
          }}
        />
      </div>

      <style>{`
        @media (max-width: 640px) {
          .hide-mobile { display: none !important; }
        }
      `}</style>

      {/* Content */}
      <div
        style={{
          width: "100%",
          maxWidth: "1280px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "16px",
          paddingRight: "16px",
          paddingTop: "100px",
          paddingBottom: "60px",
          position: "relative",
          zIndex: 10,
          textAlign: "center",
        }}
        className="hero-content"
      >
        <style>{`
          @media (min-width: 640px) {
            .hero-content { padding-left: 24px !important; padding-right: 24px !important; padding-top: 100px !important; padding-bottom: 40px !important; }
          }
        `}</style>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            marginBottom: "24px",
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
          className="tagline-badge"
        >
          <style>{`
            @media (min-width: 640px) {
              .tagline-badge { margin-bottom: 32px !important; }
            }
          `}</style>
          <div style={{ width: "40px", height: "2px", backgroundColor: "rgba(92, 225, 230, 0.6)", borderRadius: "2px" }} />
          <span style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "13px", fontWeight: 500, letterSpacing: "0.05em", textTransform: "uppercase" }} className="tagline-text">
            If you can dream it, we can build it
          </span>
          <style>{`
            @media (min-width: 640px) {
              .tagline-text { font-size: 14px !important; }
            }
          `}</style>
          <div style={{ width: "40px", height: "2px", backgroundColor: "rgba(92, 225, 230, 0.6)", borderRadius: "2px" }} />
        </div>

        {/* Main Headline */}
        <h1
          style={{
            fontSize: "clamp(2rem, 10vw, 4.5rem)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.1,
            marginBottom: "20px",
          }}
          className="hero-headline"
        >
          <style>{`
            @media (min-width: 640px) {
              .hero-headline { margin-bottom: 24px !important; }
            }
          `}</style>
          <span
            style={{
              display: "block",
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(32px)",
              transition: "all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.1s",
            }}
          >
            Any Website.
          </span>
          <span
            style={{
              display: "block",
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(32px)",
              transition: "all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s",
            }}
          >
            Any{" "}
            <span style={{ color: "#5ce1e6", position: "relative", display: "inline-block" }}>
              Software
              <svg
                style={{
                  position: "absolute",
                  bottom: "-4px",
                  left: 0,
                  width: "100%",
                  opacity: isLoaded ? 1 : 0,
                  transition: "opacity 0.5s ease 0.8s",
                }}
                className="underline-svg"
                viewBox="0 0 200 8"
                fill="none"
              >
                <style>{`
                  @media (min-width: 640px) {
                    .underline-svg { bottom: -8px !important; }
                  }
                `}</style>
                <path
                  d="M1 5.5C47.6667 2.16667 141 -2.4 199 5.5"
                  stroke="#5ce1e6"
                  strokeWidth="3"
                  strokeLinecap="round"
                  style={{
                    strokeDasharray: 200,
                    strokeDashoffset: isLoaded ? 0 : 200,
                    transition: "stroke-dashoffset 1s ease 0.8s",
                  }}
                />
              </svg>
            </span>
            .
          </span>
          <span
            style={{
              display: "block",
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(32px)",
              transition: "all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s",
            }}
          >
            Any Idea.
          </span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "clamp(0.875rem, 3vw, 1.25rem)",
            color: "rgba(255, 255, 255, 0.8)",
            maxWidth: "672px",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "32px",
            lineHeight: 1.6,
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateY(0)" : "translateY(32px)",
            transition: "all 0.7s ease 0.4s",
            paddingLeft: "8px",
            paddingRight: "8px",
          }}
          className="hero-subtitle"
        >
          <style>{`
            @media (min-width: 640px) {
              .hero-subtitle { margin-bottom: 40px !important; line-height: 1.7 !important; padding-left: 0 !important; padding-right: 0 !important; }
            }
          `}</style>
          We build digital solutions for Namibian businesses. From stunning websites to powerful
          custom software, we turn your vision into reality.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateY(0)" : "translateY(32px)",
            transition: "all 0.7s ease 0.5s",
          }}
          className="cta-buttons"
        >
          <style>{`
            @media (min-width: 480px) {
              .cta-buttons { flex-direction: row !important; gap: 16px !important; }
            }
          `}</style>
          <a
            href="#services"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "12px 24px",
              fontSize: "14px",
              fontWeight: 600,
              borderRadius: "9999px",
              border: "2px solid rgba(255, 255, 255, 1)",
              backgroundColor: "transparent",
              color: "#ffffff",
              textDecoration: "none",
              transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
              position: "relative",
              overflow: "hidden",
              width: "100%",
              maxWidth: "280px",
            }}
            className="cta-secondary"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#ffffff";
              e.currentTarget.style.color = "#0d4f4f";
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = "0 10px 30px rgba(255, 255, 255, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#ffffff";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <style>{`
              @media (min-width: 480px) {
                .cta-secondary { width: auto !important; max-width: none !important; padding: 14px 32px !important; font-size: 15px !important; }
              }
            `}</style>
            View Our Services
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ transition: "transform 0.3s ease" }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "12px 24px",
              fontSize: "14px",
              fontWeight: 600,
              borderRadius: "9999px",
              border: "2px solid #5ce1e6",
              backgroundColor: "#5ce1e6",
              color: "#0d4f4f",
              textDecoration: "none",
              transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
              boxShadow: "0 4px 15px rgba(92, 225, 230, 0.3)",
              width: "100%",
              maxWidth: "280px",
            }}
            className="cta-primary"
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#4dd4d9";
              e.currentTarget.style.transform = "translateY(-3px) scale(1.02)";
              e.currentTarget.style.boxShadow = "0 15px 40px rgba(92, 225, 230, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#5ce1e6";
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 4px 15px rgba(92, 225, 230, 0.3)";
            }}
          >
            <style>{`
              @media (min-width: 480px) {
                .cta-primary { width: auto !important; max-width: none !important; padding: 14px 32px !important; font-size: 15px !important; }
              }
            `}</style>
            Get Started
            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Trust Badges */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
            marginTop: "40px",
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateY(0)" : "translateY(32px)",
            transition: "all 0.7s ease 0.6s",
          }}
          className="trust-badges"
        >
          <style>{`
            @media (min-width: 640px) {
              .trust-badges { flex-direction: row !important; gap: 24px !important; margin-top: 64px !important; }
            }
          `}</style>
          {[
            { text: "100+ Projects", delay: 0 },
            { text: "Proudly Namibian", delay: 100 },
            { text: "24/7 Support", delay: 200 },
          ].map(({ text, delay }) => (
            <div
              key={text}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "rgba(255, 255, 255, 0.6)",
                fontSize: "13px",
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                transition: `all 0.5s ease ${0.7 + delay / 1000}s`,
              }}
              className="trust-badge-item"
            >
              <style>{`
                @media (min-width: 640px) {
                  .trust-badge-item { font-size: 14px !important; }
                }
              `}</style>
              <svg width="18" height="18" fill="#5ce1e6" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div
        style={{
          position: "absolute",
          bottom: "24px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "none",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          color: "rgba(255, 255, 255, 0.6)",
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.7s ease 0.8s",
          cursor: "pointer",
        }}
        className="scroll-indicator"
        onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
      >
        <style>{`
          @media (min-width: 768px) {
            .scroll-indicator { display: flex !important; bottom: 32px !important; }
          }
        `}</style>
        <span style={{ fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase" }}>Scroll</span>
        <div
          style={{
            width: "24px",
            height: "40px",
            border: "2px solid rgba(255, 255, 255, 0.3)",
            borderRadius: "9999px",
            display: "flex",
            justifyContent: "center",
            paddingTop: "8px",
            transition: "border-color 0.3s ease",
          }}
        >
          <span
            style={{
              width: "4px",
              height: "12px",
              backgroundColor: "rgba(255, 255, 255, 0.6)",
              borderRadius: "9999px",
              animation: "bounce 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes floatRotate {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }
        @keyframes morph {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
        }
        @keyframes pulseSoft {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </section>
  );
}
