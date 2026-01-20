"use client";

import { useEffect, useRef, useState } from "react";

interface PricingPlan {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  ctaHref: string;
}

const plans: PricingPlan[] = [
  {
    name: "Starter",
    price: "N$999",
    description: "Perfect for small businesses just getting started online",
    features: [
      "1-3 page website",
      "Mobile responsive design",
      "Contact form",
      "Basic SEO setup",
      "WhatsApp integration",
      "1 month free support",
    ],
    ctaText: "Get Started",
    ctaHref: "#contact",
  },
  {
    name: "Business",
    price: "N$1,999",
    description: "For growing businesses that need more functionality",
    features: [
      "5-7 page website",
      "Everything in Starter",
      "Photo gallery",
      "Google Maps integration",
      "Social media links",
      "3 months free support",
    ],
    isPopular: true,
    ctaText: "Get Started",
    ctaHref: "#contact",
  },
  {
    name: "Professional",
    price: "N$4,999",
    description: "Complete solution for established businesses",
    features: [
      "10+ page website",
      "Everything in Business",
      "Blog / News section",
      "Content management system",
      "Advanced SEO",
      "6 months free support",
    ],
    ctaText: "Get Started",
    ctaHref: "#contact",
  },
  {
    name: "Custom",
    price: "Let's Talk",
    description: "Tailored solutions for unique requirements",
    features: [
      "Custom software development",
      "E-commerce solutions",
      "Business systems",
      "API integrations",
      "Dedicated support",
      "Flexible timeline",
    ],
    ctaText: "Contact Us",
    ctaHref: "#contact",
  },
];

const Pricing = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="section bg-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#f5f5f5] to-transparent" />

      <div className="container relative z-10 mx-auto max-w-[1200px] px-5">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-1.5 bg-[#0d4f4f]/10 text-[#0d4f4f] rounded-full text-sm font-semibold mb-4">
            Pricing
          </span>
          <h2 className="section-title">Simple, Transparent Pricing</h2>
          <p className="section-subtitle">
            No hidden fees. No surprises. Choose the plan that fits your needs
            and budget.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative group bg-white rounded-3xl p-8 transition-all duration-500 transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              } ${
                plan.isPopular
                  ? "shadow-2xl border-2 border-[#5ce1e6] lg:-translate-y-4"
                  : "shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1.5 bg-gradient-to-r from-[#0d4f4f] to-[#1a6b6b] text-white text-xs font-bold rounded-full shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-4">
                <span className="text-4xl font-extrabold text-[#0d4f4f]">
                  {plan.price}
                </span>
                {plan.period && (
                  <span className="text-gray-500 text-sm">/{plan.period}</span>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-gray-600"
                  >
                    <svg
                      className="w-5 h-5 text-[#5ce1e6] flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href={plan.ctaHref}
                className={`block w-full py-3.5 rounded-full font-semibold text-center transition-all duration-300 ${
                  plan.isPopular
                    ? "bg-gradient-to-r from-[#0d4f4f] to-[#1a6b6b] text-white hover:shadow-lg hover:shadow-[#0d4f4f]/30"
                    : "bg-[#f5f5f5] text-[#0d4f4f] hover:bg-[#0d4f4f] hover:text-white"
                }`}
              >
                {plan.ctaText}
              </a>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div
          className={`mt-16 text-center transform transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.5s" }}
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#0d4f4f]/5 rounded-full">
            <svg
              className="w-5 h-5 text-[#0d4f4f]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-sm text-[#1a1a1a]">
              All plans include free consultation and no upfront payment required
            </span>
          </div>
        </div>

        {/* Hosting Add-on */}
        <div
          className={`mt-12 bg-gradient-to-r from-[#0d4f4f] to-[#1a6b6b] rounded-3xl p-8 md:p-10 transform transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.6s" }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Need Hosting?
              </h3>
              <p className="text-white/80 text-sm md:text-base">
                Reliable, fast hosting with 24/7 support starting from N$99/month.
              </p>
            </div>
            <a
              href="#contact"
              className="btn bg-white text-[#0d4f4f] hover:bg-[#5ce1e6] whitespace-nowrap"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
