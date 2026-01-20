"use client";

import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", service: "", message: "" });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [hoveredContact, setHoveredContact] = useState<number | null>(null);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct WhatsApp message
    const serviceName = formState.service
      ? {
          website: "Website Design",
          software: "Custom Software",
          systems: "School/Business Systems",
          hosting: "Hosting & Support",
          other: "Other",
        }[formState.service] || formState.service
      : "Not specified";

    const message = `Hello DWT! I'm interested in your services.

*Name:* ${formState.name}
*Email:* ${formState.email}
*Service:* ${serviceName}

*Message:*
${formState.message}`;

    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://wa.me/264813214813?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputStyle = (fieldName: string) => ({
    width: "100%",
    padding: "14px 16px",
    borderRadius: "12px",
    border: focusedField === fieldName ? "2px solid #5ce1e6" : "1px solid #e5e5e5",
    fontSize: "15px",
    color: "#1a1a1a",
    outline: "none",
    transition: "all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",
    boxSizing: "border-box" as const,
    boxShadow: focusedField === fieldName ? "0 0 0 4px rgba(92, 225, 230, 0.15)" : "none",
    transform: focusedField === fieldName ? "scale(1.01)" : "scale(1)",
  });

  return (
    <section
      id="contact"
      ref={ref}
      className="contact-section"
      style={{
        paddingTop: "64px",
        paddingBottom: "80px",
        background: "linear-gradient(135deg, #0d4f4f 0%, #1a6b6b 50%, #0d4f4f 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @media (min-width: 768px) {
          .contact-section { padding-top: 96px !important; padding-bottom: 128px !important; }
        }
      `}</style>
      {/* Background Pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.1,
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Animated Decorative Elements */}
      <div
        style={{
          position: "absolute",
          top: "80px",
          left: "40px",
          width: "160px",
          height: "160px",
          borderRadius: "50%",
          border: "2px solid rgba(255, 255, 255, 0.1)",
          animation: isVisible ? "float 8s ease-in-out infinite" : "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "80px",
          right: "80px",
          width: "240px",
          height: "240px",
          borderRadius: "50%",
          border: "2px solid rgba(255, 255, 255, 0.05)",
          animation: isVisible ? "float 10s ease-in-out infinite reverse" : "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "40%",
          right: "20%",
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          background: "rgba(92, 225, 230, 0.1)",
          animation: isVisible ? "pulseSoft 4s ease-in-out infinite" : "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "30%",
          left: "10%",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.05)",
          animation: isVisible ? "float 6s ease-in-out infinite" : "none",
        }}
      />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulseSoft {
          0%, 100% { transform: scale(1); opacity: 0.5; }
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
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "16px" }}>
            <div style={{ width: "40px", height: "2px", backgroundColor: "rgba(92, 225, 230, 0.5)", borderRadius: "2px" }} />
            <svg style={{ width: "20px", height: "20px", color: "#5ce1e6" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <div style={{ width: "40px", height: "2px", backgroundColor: "rgba(92, 225, 230, 0.5)", borderRadius: "2px" }} />
          </div>
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 800,
              color: "#ffffff",
              marginBottom: "16px",
              lineHeight: 1.2,
            }}
          >
            Ready to Go Digital?
          </h2>
          <p style={{ fontSize: "18px", color: "rgba(255, 255, 255, 0.7)", lineHeight: 1.7 }}>
            Let&apos;s discuss your project and see how we can help your business grow online. No commitment required.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "48px",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          <style>{`
            @media (min-width: 1024px) {
              .contact-grid { grid-template-columns: 1fr 1fr !important; }
            }
          `}</style>

          {/* Contact Info */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(32px)",
              transition: "all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 100ms",
            }}
          >
            <h3 style={{ fontSize: "24px", fontWeight: 700, color: "#ffffff", marginBottom: "32px" }}>
              Contact Information
            </h3>

            {/* WhatsApp - Primary CTA */}
            <a
              href="https://wa.me/264813214813"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredContact(0)}
              onMouseLeave={() => setHoveredContact(null)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "24px",
                backgroundColor: hoveredContact === 0 ? "#1ebe57" : "#25D366",
                borderRadius: "16px",
                marginBottom: "24px",
                textDecoration: "none",
                transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                transform: hoveredContact === 0 ? "translateY(-4px) scale(1.02)" : "translateY(0) scale(1)",
                boxShadow: hoveredContact === 0 ? "0 20px 40px rgba(37, 211, 102, 0.4)" : "0 4px 14px rgba(37, 211, 102, 0.2)",
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "12px",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                  transform: hoveredContact === 0 ? "rotate(10deg) scale(1.1)" : "rotate(0deg) scale(1)",
                }}
              >
                <svg style={{ width: "28px", height: "28px", color: "#ffffff" }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ color: "#ffffff", fontWeight: 700, fontSize: "18px" }}>WhatsApp Us</div>
                <div style={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "14px" }}>+264 81 321 4813</div>
                <div style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "12px", marginTop: "4px" }}>Fastest response</div>
              </div>
              <svg
                style={{
                  width: "24px",
                  height: "24px",
                  color: "rgba(255, 255, 255, 0.6)",
                  transition: "transform 0.3s ease",
                  transform: hoveredContact === 0 ? "translateX(4px)" : "translateX(0)",
                }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            {/* Other Contact Methods */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <a
                href="tel:+264813214813"
                onMouseEnter={() => setHoveredContact(1)}
                onMouseLeave={() => setHoveredContact(null)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "20px",
                  backgroundColor: hoveredContact === 1 ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(8px)",
                  borderRadius: "16px",
                  textDecoration: "none",
                  transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  transform: hoveredContact === 1 ? "translateX(8px)" : "translateX(0)",
                  border: hoveredContact === 1 ? "1px solid rgba(92, 225, 230, 0.3)" : "1px solid transparent",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    backgroundColor: hoveredContact === 1 ? "rgba(92, 225, 230, 0.2)" : "rgba(255, 255, 255, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                  }}
                >
                  <svg style={{ width: "20px", height: "20px", color: "#5ce1e6" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div style={{ color: "#ffffff", fontWeight: 600 }}>Call Us</div>
                  <div style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "14px" }}>+264 81 321 4813</div>
                </div>
              </a>

              <a
                href="mailto:dwtnamibia@gmail.com"
                onMouseEnter={() => setHoveredContact(2)}
                onMouseLeave={() => setHoveredContact(null)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "20px",
                  backgroundColor: hoveredContact === 2 ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(8px)",
                  borderRadius: "16px",
                  textDecoration: "none",
                  transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  transform: hoveredContact === 2 ? "translateX(8px)" : "translateX(0)",
                  border: hoveredContact === 2 ? "1px solid rgba(92, 225, 230, 0.3)" : "1px solid transparent",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    backgroundColor: hoveredContact === 2 ? "rgba(92, 225, 230, 0.2)" : "rgba(255, 255, 255, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                  }}
                >
                  <svg style={{ width: "20px", height: "20px", color: "#5ce1e6" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div style={{ color: "#ffffff", fontWeight: 600 }}>Email Us</div>
                  <div style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "14px" }}>dwtnamibia@gmail.com</div>
                </div>
              </a>

              <div
                onMouseEnter={() => setHoveredContact(3)}
                onMouseLeave={() => setHoveredContact(null)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "20px",
                  backgroundColor: hoveredContact === 3 ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(8px)",
                  borderRadius: "16px",
                  transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  transform: hoveredContact === 3 ? "translateX(8px)" : "translateX(0)",
                  border: hoveredContact === 3 ? "1px solid rgba(92, 225, 230, 0.3)" : "1px solid transparent",
                  cursor: "default",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    backgroundColor: hoveredContact === 3 ? "rgba(92, 225, 230, 0.2)" : "rgba(255, 255, 255, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                  }}
                >
                  <svg style={{ width: "20px", height: "20px", color: "#5ce1e6" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div style={{ color: "#ffffff", fontWeight: 600 }}>Visit Us</div>
                  <div style={{ color: "rgba(255, 255, 255, 0.6)", fontSize: "14px" }}>Oshakati, Namibia</div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div
              style={{
                marginTop: "32px",
                padding: "24px",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderRadius: "16px",
                backdropFilter: "blur(8px)",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 300ms",
              }}
            >
              <h4 style={{ color: "#ffffff", fontWeight: 600, marginBottom: "16px" }}>Business Hours</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "14px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", color: "rgba(255, 255, 255, 0.7)" }}>
                  <span>Monday - Friday</span>
                  <span style={{ fontWeight: 500 }}>8:00 AM - 5:00 PM</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", color: "rgba(255, 255, 255, 0.7)" }}>
                  <span>Saturday</span>
                  <span style={{ fontWeight: 500 }}>9:00 AM - 1:00 PM</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", color: "rgba(255, 255, 255, 0.7)" }}>
                  <span>Sunday</span>
                  <span style={{ fontWeight: 500 }}>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "24px",
              padding: "32px",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0) scale(1)" : "translateY(32px) scale(0.95)",
              transition: "all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 200ms",
            }}
            className="contact-form-container"
          >
            <style>{`
              @media (min-width: 1024px) {
                .contact-form-container { padding: 40px !important; }
              }
            `}</style>
            <h3 style={{ fontSize: "24px", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>
              Send Us a Message
            </h3>
            <p style={{ color: "#666", fontSize: "14px", marginBottom: "32px" }}>
              Fill out the form below and we&apos;ll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div>
                <label htmlFor="name" style={{ display: "block", fontSize: "14px", fontWeight: 500, color: "#333", marginBottom: "8px" }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  required
                  placeholder="John Doe"
                  style={inputStyle("name")}
                />
              </div>

              <div>
                <label htmlFor="email" style={{ display: "block", fontSize: "14px", fontWeight: 500, color: "#333", marginBottom: "8px" }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  required
                  placeholder="john@example.com"
                  style={inputStyle("email")}
                />
              </div>

              <div>
                <label htmlFor="service" style={{ display: "block", fontSize: "14px", fontWeight: 500, color: "#333", marginBottom: "8px" }}>
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formState.service}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("service")}
                  onBlur={() => setFocusedField(null)}
                  style={{
                    ...inputStyle("service"),
                    backgroundColor: "#ffffff",
                    cursor: "pointer",
                  }}
                >
                  <option value="">Select a service</option>
                  <option value="website">Website Design</option>
                  <option value="software">Custom Software</option>
                  <option value="systems">School/Business Systems</option>
                  <option value="hosting">Hosting & Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" style={{ display: "block", fontSize: "14px", fontWeight: 500, color: "#333", marginBottom: "8px" }}>
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={4}
                  placeholder="Tell us about your project..."
                  style={{
                    ...inputStyle("message"),
                    resize: "none",
                  }}
                />
              </div>

              <button
                type="submit"
                onMouseEnter={() => setIsButtonHovered(true)}
                onMouseLeave={() => setIsButtonHovered(false)}
                style={{
                  width: "100%",
                  padding: "16px 24px",
                  borderRadius: "12px",
                  border: "none",
                  fontWeight: 600,
                  fontSize: "15px",
                  cursor: "pointer",
                  transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  background: isButtonHovered ? "#1ebe57" : "#25D366",
                  color: "#ffffff",
                  boxShadow: isButtonHovered
                    ? "0 15px 35px rgba(37, 211, 102, 0.5)"
                    : "0 4px 14px rgba(37, 211, 102, 0.3)",
                  transform: isButtonHovered ? "translateY(-2px) scale(1.02)" : "translateY(0) scale(1)",
                }}
              >
                <svg
                  style={{
                    width: "22px",
                    height: "22px",
                    transition: "transform 0.3s ease",
                    transform: isButtonHovered ? "scale(1.1)" : "scale(1)",
                  }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>

    </section>
  );
}
