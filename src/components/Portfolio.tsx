"use client";

import { useEffect, useRef, useState } from "react";

type Category = "all" | "websites" | "software" | "systems";

const projects = [
  { id: 1, title: "E-Commerce Platform", category: "websites" as const, description: "Full-featured online store with payment integration", tags: ["Next.js", "Stripe", "Tailwind"] },
  { id: 2, title: "School Management System", category: "systems" as const, description: "Complete student and staff management solution", tags: ["React", "Node.js", "PostgreSQL"] },
  { id: 3, title: "Restaurant Website", category: "websites" as const, description: "Modern restaurant site with online reservations", tags: ["WordPress", "PHP", "MySQL"] },
  { id: 4, title: "Inventory Management", category: "software" as const, description: "Real-time stock tracking and reporting system", tags: ["Vue.js", "Laravel", "MySQL"] },
  { id: 5, title: "Tourism Portal", category: "websites" as const, description: "Booking platform for Namibian tours and activities", tags: ["Next.js", "Sanity", "Vercel"] },
  { id: 6, title: "HR Management System", category: "systems" as const, description: "Employee management with payroll integration", tags: ["React", "Express", "MongoDB"] },
];

const categories = [
  { value: "all" as const, label: "All Projects" },
  { value: "websites" as const, label: "Websites" },
  { value: "software" as const, label: "Software" },
  { value: "systems" as const, label: "Systems" },
];

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [active, setActive] = useState<Category>("all");
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="work" ref={ref} style={{ paddingTop: "96px", paddingBottom: "128px", backgroundColor: "#f8f9fa" }}>
      <div style={{ maxWidth: "1280px", marginLeft: "auto", marginRight: "auto", paddingLeft: "24px", paddingRight: "24px" }}>
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            maxWidth: "768px",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "48px",
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
            Portfolio
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
            Our Work
          </h2>
          <p style={{ fontSize: "18px", color: "#666", lineHeight: 1.7 }}>
            Take a look at some of the projects we&apos;ve delivered for our clients across various industries.
          </p>
        </div>

        {/* Filter */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "12px",
            marginBottom: "48px",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(32px)",
            transition: "all 0.7s ease 100ms",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActive(cat.value)}
              style={{
                padding: "10px 24px",
                borderRadius: "9999px",
                fontSize: "14px",
                fontWeight: 500,
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
                backgroundColor: active === cat.value ? "#0d4f4f" : "#ffffff",
                color: active === cat.value ? "#ffffff" : "#666",
                boxShadow: active === cat.value ? "0 4px 14px rgba(13, 79, 79, 0.25)" : "none",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(1, 1fr)",
            gap: "32px",
          }}
          className="portfolio-grid"
        >
          <style>{`
            @media (min-width: 768px) {
              .portfolio-grid { grid-template-columns: repeat(2, 1fr) !important; }
            }
            @media (min-width: 1024px) {
              .portfolio-grid { grid-template-columns: repeat(3, 1fr) !important; }
            }
          `}</style>
          {filtered.map((project, i) => (
            <div
              key={project.id}
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(32px)",
                transition: `all 0.7s ease ${200 + i * 100}ms`,
              }}
            >
              {/* Image Area */}
              <div
                style={{
                  position: "relative",
                  height: "192px",
                  background: "linear-gradient(135deg, #0d4f4f 0%, #1a6b6b 100%)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0.2,
                    backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                    backgroundSize: "24px 24px",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    top: "16px",
                    left: "16px",
                    padding: "6px 12px",
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    backdropFilter: "blur(8px)",
                    borderRadius: "9999px",
                    fontSize: "12px",
                    fontWeight: 500,
                    color: "#ffffff",
                    textTransform: "capitalize",
                  }}
                >
                  {project.category}
                </span>
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg style={{ width: "64px", height: "64px", color: "rgba(255, 255, 255, 0.2)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "24px" }}>
                <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#1a1a1a", marginBottom: "8px" }}>
                  {project.title}
                </h3>
                <p style={{ color: "#666", fontSize: "14px", marginBottom: "16px" }}>
                  {project.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: "6px 12px",
                        backgroundColor: "#f5f5f5",
                        color: "#666",
                        borderRadius: "9999px",
                        fontSize: "12px",
                        fontWeight: 500,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            textAlign: "center",
            marginTop: "48px",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(32px)",
            transition: "all 0.7s ease 500ms",
          }}
        >
          <a
            href="#contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 28px",
              background: "linear-gradient(135deg, #0d4f4f 0%, #1a6b6b 100%)",
              color: "#ffffff",
              borderRadius: "9999px",
              fontWeight: 600,
              fontSize: "15px",
              textDecoration: "none",
              boxShadow: "0 4px 14px rgba(13, 79, 79, 0.3)",
            }}
          >
            Discuss Your Project
            <svg style={{ width: "16px", height: "16px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
