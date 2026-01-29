"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const CertificationsSection = () => {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect - Associate (SAA-C03)",
      issuer: "Amazon Web Services (AWS)",
      link: "https://www.credly.com/badges/118bec7b-abba-4812-b19c-18aa004b0f25",
    },
    ,{
      title: "AWS Certified Cloud Practitioner (CLF-C02)",
      issuer: "Amazon Web Services (AWS)",
      link: "https://www.credly.com/badges/252fe228-47c4-4b06-82ce-aa6d5f6839f9/public_url",
    },
    {
      title: "GitHub Copilot (GH-300)",
      issuer: "Microsoft",
      link: "https://learn.microsoft.com/api/credentials/share/en-us/ramulaakhil-4326/DCD140598D72DC9A?sharingId=3979C23E0DCECE7D",
    },
    {
      title: "Introduction to Artificial Intelligence",
      issuer: "IBM",
      link: "https://www.credly.com/badges/a1ca003a-81ac-4bde-a325-c8ee9af635ad/public_url",
    },
    {
      title: "Introduction to MongoDB",
      issuer: "MongoDB University",
    },
    {
      title: "SQL (Basic) Certification",
      issuer: "HackerRank",
      link: "https://www.hackerrank.com/certificates/baaf541e14ef",
    },
    {
      title: "SQL (Intermediate) Certification",
      issuer: "HackerRank",
      link: "https://www.hackerrank.com/certificates/480f35848f8e",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 900,
      offset: 120,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section
      id="certifications"
      className="relative py-24 px-4 bg-secondary/10"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-primary">Certifications</span>
          </h2>
          <p className="mt-3 text-muted-foreground text-sm">
            Verified skills & industry-recognized achievements
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card/70 backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Accent Gradient Bar */}
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary via-purple-500 to-pink-500 opacity-70 group-hover:opacity-100 transition-opacity" />

              {/* Subtle Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="relative z-10 pl-4">
                <h4 className="text-lg font-semibold text-foreground mb-1">
                  {cert.title}
                </h4>

                <p className="text-sm text-muted-foreground mb-4">
                  Issued by {cert.issuer}
                </p>

                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all"
                  >
                    View Certificate
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
