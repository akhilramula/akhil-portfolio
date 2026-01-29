import { Briefcase, Code, User } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          data-aos="fade-up"
        >
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Text Side */}
          <div className="space-y-6" data-aos="fade-right">
            <p className="text-muted-foreground text-lg leading-relaxed">
              I’m a <b>Results-driven Software Engineer</b> specializing in
              <b> Java Full Stack and Cloud-ready application development</b>,
              with hands-on experience building scalable backend services and
              responsive frontends.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              I work extensively with <b>Spring Boot, REST APIs, React.js</b>,
              and modern databases like <b>MySQL, MongoDB, and Oracle</b> to
              deliver performant, production-ready solutions.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              I’m an <b>AWS Certified Solutions Architect – Associate, AWS Certified Cloud Practitioner</b> and
              <b> GitHub Copilot Certified</b>, with a strong foundation in
              Agile practices, CI/CD pipelines, and cloud fundamentals.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              During my internship at <b>SK Soft Solutions</b>, I reduced API
              response times by <b>40%</b>, improved UI engagement by <b>60%</b>,
              and optimized database performance by <b>30%</b> across multiple
              projects.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 pt-4 justify-center"
              data-aos="zoom-in"
            >
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/akhil_resume.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Card Grid */}
          <div className="grid grid-cols-1 gap-6">
            <div
              className="gradient-border p-6 card-hover"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Full Stack Engineering
                  </h4>
                  <p className="text-muted-foreground">
                    Designing scalable backend services and modern UIs using
                    Spring Boot, React.js, REST APIs, and SQL/NoSQL databases.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="gradient-border p-6 card-hover"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Cloud & DevOps Tools
                  </h4>
                  <p className="text-muted-foreground">
                    AWS Certified | Git, GitHub, Postman, CI/CD pipelines,
                    Agile workflows, and cloud-native best practices.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="gradient-border p-6 card-hover"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Professional Experience
                  </h4>
                  <p className="text-muted-foreground">
                    Internship experience delivering high-impact features,
                    performance optimizations, and Agile sprint contributions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
