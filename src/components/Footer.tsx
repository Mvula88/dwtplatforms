"use client";

import Link from "next/link";
import { useState, ReactNode } from "react";

const quickLinks = [
  { href: "#hero", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
];

const services = ["Website Design", "Custom Software", "School Systems", "Hosting & Support", "E-Commerce", "Maintenance"];

// Animated Social Icon component
function SocialIcon({ href, label, hoverColor, children }: { href: string; label: string; hoverColor: string; children: ReactNode }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        backgroundColor: isHovered ? hoverColor : "rgba(255, 255, 255, 0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
        color: "#ffffff",
        textDecoration: "none",
        transform: isHovered ? "translateY(-5px) scale(1.1)" : "translateY(0) scale(1)",
        boxShadow: isHovered ? `0 10px 20px ${hoverColor}40` : "none",
      }}
      aria-label={label}
    >
      <svg style={{ width: "20px", height: "20px" }} fill="currentColor" viewBox="0 0 24 24">
        {children}
      </svg>
    </a>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "#0d4f4f", color: "#ffffff" }}>
      {/* Main Footer */}
      <div
        style={{
          maxWidth: "1280px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "16px",
          paddingRight: "16px",
          paddingTop: "48px",
          paddingBottom: "64px",
        }}
        className="footer-main"
      >
        <style>{`
          @media (min-width: 640px) {
            .footer-main { padding-left: 24px !important; padding-right: 24px !important; }
          }
          @media (min-width: 768px) {
            .footer-main { padding-top: 64px !important; padding-bottom: 80px !important; }
          }
        `}</style>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "48px",
          }}
          className="footer-grid"
        >
          <style>{`
            @media (min-width: 768px) {
              .footer-grid { grid-template-columns: repeat(2, 1fr) !important; }
            }
            @media (min-width: 1024px) {
              .footer-grid { grid-template-columns: repeat(4, 1fr) !important; gap: 64px !important; }
            }
          `}</style>

          {/* Brand Column */}
          <div>
            <Link href="/" style={{ display: "inline-block", marginBottom: "24px", textDecoration: "none" }}>
              <span style={{ fontSize: "32px", fontFamily: "var(--font-luckiest-guy), cursive", color: "#ffffff" }}>DWT</span>
              <span style={{ display: "block", fontSize: "14px", color: "rgba(255, 255, 255, 0.6)", marginTop: "4px" }}>
                Websites & Software
              </span>
            </Link>
            <p style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "14px", lineHeight: 1.7, marginBottom: "24px" }}>
              If you can dream it, we can build it. Professional web design and software development for Namibian businesses.
            </p>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                borderRadius: "9999px",
              }}
            >
              <svg style={{ width: "20px", height: "20px", color: "#5ce1e6" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span style={{ fontSize: "14px", fontWeight: 500, color: "rgba(255, 255, 255, 0.8)" }}>Proudly Namibian</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "24px" }}>Quick Links</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      color: "rgba(255, 255, 255, 0.7)",
                      fontSize: "14px",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor: "#5ce1e6",
                        opacity: 0.5,
                        transition: "all 0.3s ease",
                      }}
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "24px" }}>Our Services</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    style={{
                      color: "rgba(255, 255, 255, 0.7)",
                      fontSize: "14px",
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        backgroundColor: "#5ce1e6",
                        opacity: 0.5,
                        transition: "all 0.3s ease",
                      }}
                    />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ fontSize: "18px", fontWeight: 700, marginBottom: "24px" }}>Contact Us</h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "16px" }}>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <svg style={{ width: "20px", height: "20px", color: "#5ce1e6", marginTop: "2px", flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "14px" }}>Oshakati, Namibia</span>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <svg style={{ width: "20px", height: "20px", color: "#5ce1e6", marginTop: "2px", flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+264813214813" style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "14px", textDecoration: "none", transition: "color 0.3s ease" }}>
                  +264 81 321 4813
                </a>
              </li>
              <li style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <svg style={{ width: "20px", height: "20px", color: "#5ce1e6", marginTop: "2px", flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:dwtnamibia@gmail.com" style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "14px", textDecoration: "none", transition: "color 0.3s ease" }}>
                  dwtnamibia@gmail.com
                </a>
              </li>
            </ul>

            {/* Social Links */}
            <div style={{ marginTop: "32px" }}>
              <h5 style={{ fontSize: "14px", fontWeight: 600, marginBottom: "16px" }}>Follow Us</h5>
              <div style={{ display: "flex", gap: "12px" }}>
                <SocialIcon href="https://www.facebook.com/profile.php?id=100090720976816" label="Facebook" hoverColor="#1877f2">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </SocialIcon>
                <SocialIcon href="https://www.instagram.com/dwtplatforms/" label="Instagram" hoverColor="#e4405f">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </SocialIcon>
                <SocialIcon href="https://wa.me/264813214813" label="WhatsApp" hoverColor="#25d366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </SocialIcon>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: "1px solid rgba(255, 255, 255, 0.1)" }}>
        <div
          style={{
            maxWidth: "1280px",
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "24px",
            paddingRight: "24px",
            paddingTop: "24px",
            paddingBottom: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "16px",
            }}
            className="footer-bottom"
          >
            <style>{`
              @media (min-width: 768px) {
                .footer-bottom { flex-direction: row !important; }
              }
            `}</style>
            <p style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "14px", textAlign: "center" }}>
              &copy; {currentYear} Digital Wave Technologies. All rights reserved.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "24px", fontSize: "14px", color: "rgba(255, 255, 255, 0.6)" }}>
              <a href="#" style={{ color: "rgba(255, 255, 255, 0.6)", textDecoration: "none", transition: "color 0.3s ease" }}>
                Privacy Policy
              </a>
              <a href="#" style={{ color: "rgba(255, 255, 255, 0.6)", textDecoration: "none", transition: "color 0.3s ease" }}>
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
