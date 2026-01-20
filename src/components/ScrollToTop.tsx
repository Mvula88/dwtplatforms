"use client";

import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Scroll to top"
      style={{
        position: "fixed",
        bottom: isHovered ? "96px" : "92px",
        right: "24px",
        zIndex: 40,
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        background: isHovered
          ? "linear-gradient(135deg, #1a6b6b 0%, #0d4f4f 100%)"
          : "linear-gradient(135deg, #0d4f4f 0%, #1a6b6b 100%)",
        color: "#ffffff",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: isHovered
          ? "0 12px 28px rgba(13, 79, 79, 0.5)"
          : "0 4px 14px rgba(13, 79, 79, 0.3)",
        opacity: isVisible ? 1 : 0,
        transform: isVisible
          ? isHovered
            ? "scale(1.1)"
            : "scale(1)"
          : "scale(0.8)",
        pointerEvents: isVisible ? "auto" : "none",
        transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
      }}
    >
      <svg
        style={{
          width: "24px",
          height: "24px",
          transition: "transform 0.3s ease",
          transform: isHovered ? "translateY(-2px)" : "translateY(0)",
        }}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
}
