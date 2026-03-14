import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-5xl mx-auto text-center z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          {/* 👤 Profile Image */}
          <div className="flex justify-center">
            <img
              src="/profile.jpg"
              alt="Akhil Ramula"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg border-4 border-primary opacity-0 animate-fade-in"
            />
          </div>

          {/* 💬 Text Content */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in">Hi, I'm</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                {" "}
                Akhil
              </span>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                {" "}
                Ramula
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground opacity-0 animate-fade-in-delay-3">
             <b> Cloud & Full Stack Developer </b> specializing in Java, Spring Boot,
              and React, with experience building scalable backend services and
              modern web applications. <br /> <br />
             <b>AWS Certified (SAA-C03, DVA-C02, CLF-C02) </b> with a strong focus on
              cloud-native development, RESTful APIs, and reliable software
              systems.
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};