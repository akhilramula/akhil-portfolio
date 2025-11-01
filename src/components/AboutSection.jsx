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
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Text Side */}
          <div className="space-y-6" data-aos="fade-right">
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm a <b>Java Full Stack Developer</b> with hands-on experience in
              building scalable, real-time applications using Spring Boot,
              React.js, MySQL and MongoDB.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              I’m an <b>AWS Certified Cloud Practitioner</b> with a strong
              foundation in backend systems, REST APIs, and microservices.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              During my internship at SK Soft Solutions, I revamped UI
              components, optimized databases, and improved system performance
              across the stack.
            </p>

            <p className="text-muted-foreground text-lg leading-relaxed">
              I enjoy working in Agile teams and aspire to contribute to
              distributed systems like Azure Storage.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 pt-4 justify-center"
              data-aos="zoom-in"
            >
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/Akhil_Ramula_resume.pdf"
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
                    Full Stack Development
                  </h4>
                  <p className="text-muted-foreground">
                    Building modern APIs and UIs using Spring Boot, React.js,
                    and Databases like MySQL and MongoDB.
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
                  <h4 className="font-semibold text-lg">Cloud & Dev Tools</h4>
                  <p className="text-muted-foreground">
                    AWS Certified | Git, Maven, Postman, Agile & CI experience.
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
                  <h4 className="font-semibold text-lg">Team Collaboration</h4>
                  <p className="text-muted-foreground">
                    Agile delivery, code reviews & cross-functional teamwork.
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
