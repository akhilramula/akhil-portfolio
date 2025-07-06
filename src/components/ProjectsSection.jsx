"use client";

import { ArrowRight, ExternalLink, Github } from "lucide-react";

// Map tags to colors
const tagColors = {
  "Spring Boot": "bg-green-100 text-green-800",
  Thymeleaf: "bg-yellow-100 text-yellow-800",
  MySQL: "bg-blue-100 text-blue-800",
  JPA: "bg-indigo-100 text-indigo-800",
  Bootstrap: "bg-pink-100 text-pink-800",
  Java: "bg-amber-100 text-amber-800",
  JSP: "bg-purple-100 text-purple-800",
  JDBC: "bg-sky-100 text-sky-800",
  "JavaMail": "bg-orange-100 text-orange-800",
  "Spring Security": "bg-emerald-100 text-emerald-800",
  "OpenWeather API": "bg-cyan-100 text-cyan-800",
  WebSocket: "bg-red-100 text-red-800",
};

const projects = [
  {
    id: 1,
    title: "RC Photography",
    description:
      "Responsive landing page for a local photography business built with Spring Boot and Thymeleaf.",
    image: "/projects/rc_photography.png",
    tags: ["Spring Boot", "Thymeleaf", "MySQL", "JPA", "Bootstrap"],
    demoUrl: "#",
    githubUrl: "https://github.com/akhilramula/RC_Photography",
  },
  {
    id: 2,
    title: "Apartment Connect",
    description:
      "Full-featured apartment booking portal with chat, admin tools, and email activation.",
    image: "/projects/apartment-connect.png",
    tags: ["Spring Boot", "JPA", "JavaMail", "Spring Security", "Bootstrap"],
    demoUrl: "#",
    githubUrl: "https://github.com/mallikarjun1978/AppartmentConnect",
  },
  {
    id: 3,
    title: "E-Commerce Website",
    description:
      "Dynamic e-commerce platform with product search and role-based login functionality.",
    image: "/projects/e-commerce.png",
    tags: ["Java", "JSP", "JDBC", "MySQL", "Bootstrap"],
    demoUrl: "#",
    githubUrl: "https://github.com/akhilramula/EcommerceApplication",
  },
  {
    id: 4,
    title: "University Job Board",
    description:
      "Placement portal with role-based access for admins, students, and employers.",
    image: "/projects/job-board.png",
    tags: ["Spring Boot", "JDBC", "JSP", "Bootstrap"],
    demoUrl: "#",
    githubUrl: "https://github.com/akhilramula/University_Placements_Portal",
  },
  {
    id: 5,
    title: "Weather Forecasting Website",
    description:
      "Real-time weather updates using OpenWeather API and Spring Boot.",
    image: "/projects/weather.png",
    tags: ["OpenWeather API", "Spring Boot", "Thymeleaf"],
    demoUrl: "#",
    githubUrl: "https://github.com/akhilramula/Weather_App",
  },
  {
    id: 6,
    title: "Chat Room Website",
    description:
      "WebSocket-powered real-time chat app with multi-device responsiveness.",
    image: "/projects/chat-room.png",
    tags: ["Spring Boot", "WebSocket", "Thymeleaf"],
    demoUrl: "#",
    githubUrl: "https://github.com/akhilramula/Chat_Room",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of my recent projects showcasing real-world applications
          and full stack development using modern technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-md transition-transform duration-500 hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden rounded-t-lg shadow-inner group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        tagColors[tag] || "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/akhilramula"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
