import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import AOS from "aos";
import "aos/dist/aos.css";

const skills = [
  // Frontend
  {
    name: "HTML/CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    category: "frontend",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    category: "frontend",
  },
  {
    name: "React.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    category: "frontend",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    category: "frontend",
  },

  // Backend
  {
    name: "Java",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    category: "backend",
  },
  {
    name: "Spring Boot",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    category: "backend",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    category: "backend",
  },

  // Databases
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    category: "databases",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    category: "databases",
  },

  // Cloud & Tools
  {
    name: "AWS",
    icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazonaws.svg",
    category: "cloud-tools",
  },
  {
  name: "Agile / Scrum",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg", // Jira icon as a common Agile tool
  category: "cloud-tools",
},
  {
    name: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    category: "cloud-tools",
  },
  {
    name: "Postman",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    category: "cloud-tools",
  },
  {
  name: "JUnit",
  icon: "https://logo.svgcdn.com/devicon/junit-original-wordmark.svg",
  category: "cloud-tools",
},
{
  name: "Mockito",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
  category: "cloud-tools",
},
];

const categories = ["all", "frontend", "backend", "databases", "cloud-tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          data-aos="fade-up"
        >
          My <span className="text-primary"> Skills</span>
        </h2>

        {/* Filter Buttons */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-12"
          data-aos="zoom-in"
        >
          {categories.map((category, key) => {
            const displayName =
              category === "cloud-tools"
                ? "Cloud & Tools"
                : category.charAt(0).toUpperCase() + category.slice(1);
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-secondary/70 text-foreground hover:bg-secondary/50"
                )}
              >
                {displayName}
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-xl shadow-md card-hover text-center transition-transform hover:scale-105"
              data-aos="zoom-in-up"
              data-aos-delay={key * 50}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-12 h-12 mx-auto mb-4"
              />
              <h3 className="font-semibold text-md text-muted-foreground">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
