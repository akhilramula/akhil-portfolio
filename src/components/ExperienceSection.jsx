"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const ExperienceSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section id="experience" className="py-24 px-4 relative bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <h2
          className="text-3xl md:text-4xl font-bold mb-20 text-center"
          data-aos="fade-up"
        >
          My <span className="text-primary">Experience</span>
        </h2>

        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[3px] h-full bg-gradient-to-b from-primary via-primary/40 to-transparent rounded-full" />

          {/* Experience 1 — Left */}
          <div className="mb-16 flex flex-col md:flex-row md:justify-between md:items-center">
            {/* Card (Left) */}
            <div
              className="md:w-[46%] md:text-right md:pr-10"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="bg-card/70 backdrop-blur-lg border border-primary/20 hover:border-primary/50 hover:shadow-[0_0_25px_-8px_var(--tw-shadow-color)] shadow-primary/40 transition-all duration-300 rounded-2xl p-6 md:p-8 gradient-border">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                  Full Stack Java Developer Intern
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  SK Soft Solutions · Hyderabad
                </p>
                <p className="text-xs text-primary/80 font-medium mb-4">
                  May 2024 – May 2025
                </p>
                <ul className="list-disc pl-5 md:pl-8 space-y-2 text-muted-foreground text-sm md:text-base text-left md:text-right">
                  <li>Enhanced RESTful APIs using Java and Spring Boot</li>
                  <li>Modernized frontend with reusable React components</li>
                  <li>Optimized database queries in MongoDB and MySQL</li>
                  <li>Worked in Agile sprints and contributed to code reviews</li>
                </ul>
              </div>
            </div>

            {/* Dot */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-primary rounded-full border-4 border-background shadow-[0_0_10px_var(--tw-shadow-color)] shadow-primary z-10" />

            {/* Spacer for flow */}
            <div className="md:w-[46%]" />
          </div>

          {/* Experience 2 — Right */}
          <div className="mb-16 flex flex-col md:flex-row md:justify-between md:items-center">
            {/* Spacer */}
            <div className="md:w-[46%]" />

            {/* Dot */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-primary rounded-full border-4 border-background shadow-[0_0_10px_var(--tw-shadow-color)] shadow-primary z-10" />

            {/* Card (Right) */}
            <div
              className="md:w-[46%] md:pl-10"
              data-aos="fade-left"
              data-aos-delay="150"
            >
              <div className="bg-card/70 backdrop-blur-lg border border-primary/20 hover:border-primary/50 hover:shadow-[0_0_25px_-8px_var(--tw-shadow-color)] shadow-primary/40 transition-all duration-300 rounded-2xl p-6 md:p-8 gradient-border">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground">
                  Artificial Intelligence Intern
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Edunet Foundation (AICTE Collaboration) · Remote
                </p>
                <p className="text-xs text-primary/80 font-medium mb-4">
                  Jun 2025 – Jul 2025
                </p>
                <ul className="list-disc pl-5 md:pl-8 space-y-2 text-muted-foreground text-sm md:text-base">
                  <li>
                    Completed 6-week internship focusing on Machine Learning and AI fundamentals using Python
                  </li>
                  <li>
                    Explored supervised learning, data preprocessing, and model evaluation techniques
                  </li>
                  <li>
                    Developed small-scale ML models and visualized insights from real-world datasets
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
