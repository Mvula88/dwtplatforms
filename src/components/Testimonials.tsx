"use client";

import { useEffect, useRef, useState } from "react";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number;
}

const testimonials: Testimonial[] = [
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

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="section bg-[#f5f5f5] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div
          className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#0d4f4f]/5 -translate-x-1/2 -translate-y-1/2"
        />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#5ce1e6]/5 translate-x-1/3 translate-y-1/3"
        />
      </div>

      <div className="container relative z-10 mx-auto max-w-[1200px] px-5">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-[#0d4f4f]/10 text-[#0d4f4f] rounded-full text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don&apos;t just take our word for it - hear from businesses we&apos;ve helped
            succeed online.
          </p>
        </div>

        {/* Testimonials Grid - Desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              } hover:-translate-y-2`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0d4f4f] to-[#1a6b6b] flex items-center justify-center mb-4">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Author */}
              <div className="border-t border-gray-100 pt-4">
                <div className="font-semibold text-[#1a1a1a] text-sm">
                  {testimonial.name}
                </div>
                <div className="text-gray-500 text-xs">
                  {testimonial.role}, {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel - Mobile */}
        <div className="md:hidden">
          <div
            className={`bg-white rounded-3xl p-8 shadow-lg transition-all duration-500 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Quote Icon */}
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0d4f4f] to-[#1a6b6b] flex items-center justify-center mb-6 mx-auto">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Rating */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Quote */}
            <p className="text-gray-600 text-center leading-relaxed mb-6">
              &quot;{testimonials[activeIndex].quote}&quot;
            </p>

            {/* Author */}
            <div className="text-center">
              <div className="font-semibold text-[#1a1a1a]">
                {testimonials[activeIndex].name}
              </div>
              <div className="text-gray-500 text-sm">
                {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
              </div>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-[#0d4f4f] w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-12 transform transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.5s" }}
        >
          <p className="text-gray-600 mb-4">Ready to join our happy clients?</p>
          <a
            href="#contact"
            className="btn btn-primary inline-flex"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
