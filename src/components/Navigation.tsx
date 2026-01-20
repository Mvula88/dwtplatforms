"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: "all 0.3s ease",
          backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.95)" : "transparent",
          backdropFilter: isScrolled ? "blur(12px)" : "none",
          boxShadow: isScrolled ? "0 4px 6px -1px rgba(0, 0, 0, 0.1)" : "none",
          padding: isScrolled ? "12px 0" : "20px 0",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "24px",
            paddingRight: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
            <div style={{ position: "relative" }}>
              <span
                style={{
                  fontSize: "28px",
                  fontFamily: "var(--font-luckiest-guy), cursive",
                  letterSpacing: "0.02em",
                  transition: "color 0.3s ease",
                  color: isScrolled ? "#0d4f4f" : "#ffffff",
                }}
              >
                DWT
              </span>
            </div>
            <span
              style={{
                display: "none",
                fontSize: "14px",
                fontWeight: 500,
                transition: "color 0.3s ease",
                color: isScrolled ? "#1a6b6b" : "rgba(255, 255, 255, 0.8)",
              }}
              className="logo-tagline"
            >
              Websites & Software
            </span>
            <style>{`
              @media (min-width: 640px) {
                .logo-tagline { display: inline !important; }
              }
            `}</style>
          </Link>

          {/* Desktop Navigation */}
          <div
            style={{
              display: "none",
              alignItems: "center",
              gap: "32px",
            }}
            className="desktop-nav"
          >
            <style>{`
              @media (min-width: 1024px) {
                .desktop-nav { display: flex !important; }
              }
            `}</style>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  position: "relative",
                  fontWeight: 500,
                  fontSize: "14px",
                  transition: "color 0.3s ease",
                  textDecoration: "none",
                  color: isScrolled ? "#1a1a1a" : "rgba(255, 255, 255, 0.9)",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div
            style={{
              display: "none",
              alignItems: "center",
              gap: "12px",
            }}
            className="desktop-cta"
          >
            <style>{`
              @media (min-width: 1024px) {
                .desktop-cta { display: flex !important; }
              }
            `}</style>
            <a
              href="https://wa.me/264813214813"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 20px",
                borderRadius: "9999px",
                fontWeight: 600,
                fontSize: "14px",
                textDecoration: "none",
                transition: "all 0.3s ease",
                backgroundColor: isScrolled ? "#25D366" : "rgba(255, 255, 255, 0.1)",
                color: isScrolled ? "#ffffff" : "#ffffff",
                border: isScrolled ? "none" : "1px solid rgba(255, 255, 255, 0.3)",
                boxShadow: isScrolled ? "0 4px 6px rgba(37, 211, 102, 0.3)" : "none",
              }}
            >
              <svg style={{ width: "16px", height: "16px" }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "6px",
              padding: "8px",
              transition: "color 0.3s ease",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <style>{`
              @media (min-width: 1024px) {
                .mobile-menu-btn { display: none !important; }
              }
            `}</style>
            <span
              style={{
                width: "24px",
                height: "2px",
                transition: "all 0.3s ease",
                backgroundColor: isScrolled ? "#0d4f4f" : "#ffffff",
                transform: isMobileMenuOpen ? "rotate(45deg) translateY(8px)" : "none",
              }}
            />
            <span
              style={{
                width: "24px",
                height: "2px",
                transition: "all 0.3s ease",
                backgroundColor: isScrolled ? "#0d4f4f" : "#ffffff",
                opacity: isMobileMenuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                width: "24px",
                height: "2px",
                transition: "all 0.3s ease",
                backgroundColor: isScrolled ? "#0d4f4f" : "#ffffff",
                transform: isMobileMenuOpen ? "rotate(-45deg) translateY(-8px)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 40,
          transition: "opacity 0.3s ease",
          opacity: isMobileMenuOpen ? 1 : 0,
          pointerEvents: isMobileMenuOpen ? "auto" : "none",
        }}
        className="mobile-overlay"
        onClick={closeMobileMenu}
      >
        <style>{`
          @media (min-width: 1024px) {
            .mobile-overlay { display: none !important; }
          }
        `}</style>
      </div>

      {/* Mobile Menu Panel */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100%",
          width: "300px",
          backgroundColor: "#ffffff",
          zIndex: 50,
          transform: isMobileMenuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease",
          boxShadow: "-4px 0 6px rgba(0, 0, 0, 0.1)",
        }}
        className="mobile-panel"
      >
        <style>{`
          @media (min-width: 1024px) {
            .mobile-panel { display: none !important; }
          }
        `}</style>
        <div style={{ padding: "24px" }}>
          {/* Close Button */}
          <button
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              padding: "8px",
              color: "#1a1a1a",
              background: "none",
              border: "none",
              cursor: "pointer",
              transition: "color 0.3s ease",
            }}
            onClick={closeMobileMenu}
            aria-label="Close mobile menu"
          >
            <svg style={{ width: "24px", height: "24px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Mobile Logo */}
          <div style={{ marginBottom: "32px", paddingTop: "8px" }}>
            <span style={{ fontSize: "28px", fontFamily: "var(--font-luckiest-guy), cursive", color: "#0d4f4f" }}>DWT</span>
            <span style={{ display: "block", fontSize: "14px", color: "#1a6b6b", marginTop: "4px" }}>Websites & Software</span>
          </div>

          {/* Mobile Navigation Links */}
          <nav style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                style={{
                  color: "#1a1a1a",
                  fontWeight: 500,
                  fontSize: "18px",
                  padding: "12px 0",
                  borderBottom: "1px solid #f0f0f0",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div style={{ marginTop: "32px", display: "flex", flexDirection: "column", gap: "12px" }}>
            <a
              href="https://wa.me/264813214813"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                width: "100%",
                padding: "14px 16px",
                backgroundColor: "#25D366",
                color: "#ffffff",
                borderRadius: "9999px",
                fontWeight: 600,
                textDecoration: "none",
                transition: "background-color 0.3s ease",
              }}
              onClick={closeMobileMenu}
            >
              <svg style={{ width: "20px", height: "20px" }} fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
            <a
              href="#contact"
              onClick={closeMobileMenu}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                padding: "14px 16px",
                backgroundColor: "#0d4f4f",
                color: "#ffffff",
                borderRadius: "9999px",
                fontWeight: 600,
                textDecoration: "none",
                transition: "background-color 0.3s ease",
              }}
            >
              Get a Quote
            </a>
          </div>

          {/* Contact Info */}
          <div style={{ marginTop: "32px", paddingTop: "24px", borderTop: "1px solid #f0f0f0" }}>
            <p style={{ fontSize: "14px", color: "#666", marginBottom: "12px" }}>Contact us directly:</p>
            <a
              href="tel:+264813214813"
              style={{
                display: "block",
                color: "#0d4f4f",
                fontWeight: 500,
                marginBottom: "8px",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
            >
              +264 81 321 4813
            </a>
            <a
              href="mailto:dwtnamibia@gmail.com"
              style={{
                color: "#0d4f4f",
                fontWeight: 500,
                fontSize: "14px",
                textDecoration: "none",
                transition: "color 0.3s ease",
              }}
            >
              dwtnamibia@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
