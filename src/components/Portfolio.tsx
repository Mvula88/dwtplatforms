"use client";

import { useEffect, useRef, useState } from "react";

type Category = "all" | "websites" | "software" | "systems";

interface Project {
  id: number;
  title: string;
  category: Exclude<Category, "all">;
  description: string;
  image: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "websites",
    description: "Full-featured online store with payment integration",
    image: "/projects/ecommerce.jpg",
    tags: ["Next.js", "Stripe", "Tailwind"],
  },
  {
    id: 2,
    title: "School Management System",
    category: "systems",
    description: "Complete student and staff management solution",
    image: "/projects/school.jpg",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    id: 3,
    title: "Restaurant Website",
    category: "websites",
    description: "Modern restaurant site with online reservations",
    image: "/projects/restaurant.jpg",
    tags: ["WordPress", "PHP", "MySQL"],
  },
  {
    id: 4,
    title: "Inventory Management",
    category: "software",
    description: "Real-time stock tracking and reporting system",
    image: "/projects/inventory.jpg",
    tags: ["Vue.js", "Laravel", "MySQL"],
  },
  {
    id: 5,
    title: "Tourism Portal",
    category: "websites",
    description: "Booking platform for Namibian tours and activities",
    image: "/projects/tourism.jpg",
    tags: ["Next.js", "Sanity", "Vercel"],
  },
  {
    id: 6,
    title: "HR Management System",
    category: "systems",
    description: "Employee management with payroll integration",
    image: "/projects/hr.jpg",
    tags: ["React", "Express", "MongoDB"],
  },
];

const categories: { value: Category; label: string }[] = [
  { value: "all", label: "All Projects" },
  { value: "websites", label: "Websites" },
  { value: "software", label: "Software" },
  { value: "systems", label: "Systems" },
];

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="section bg-[#f5f5f5] relative overflow-hidden"
    >
      <div className="container relative z-10 mx-auto max-w-[1200px] px-5">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transform transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-[#0d4f4f]/10 text-[#0d4f4f] rounded-full text-sm font-semibold mb-4">
            Portfolio
          </span>
          <h2 className="section-title">Our Work</h2>
          <p className="section-subtitle">
            Take a look at some of the projects we&apos;ve delivered for our clients
            across various industries.
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transform transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.1s" }}
        >
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
                activeCategory === category.value
                  ? "bg-[#0d4f4f] text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-[#0d4f4f]/10 hover:text-[#0d4f4f]"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              } hover:-translate-y-2`}
              style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-52 bg-gradient-to-br from-[#0d4f4f] to-[#1a6b6b] overflow-hidden">
                {/* Placeholder Image Pattern */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: "20px 20px",
                  }}
                />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium capitalize">
                  {project.category}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#0d4f4f]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="#contact"
                    className="px-6 py-3 bg-white text-[#0d4f4f] rounded-full font-semibold text-sm hover:bg-[#5ce1e6] transition-colors duration-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                  >
                    View Details
                  </a>
                </div>

                {/* Project Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-20 h-20 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#1a1a1a] mb-2 group-hover:text-[#0d4f4f] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#f5f5f5] text-gray-600 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div
          className={`text-center mt-12 transform transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.5s" }}
        >
          <a
            href="#contact"
            className="btn btn-primary inline-flex group"
          >
            <span>Discuss Your Project</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
