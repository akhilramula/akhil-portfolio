export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative bg-secondary/20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Experience</span>
        </h2>

        <div className="gradient-border p-6 md:p-8 rounded-xl bg-card card-hover transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-foreground">
                Full Stack Java Developer Intern
              </h3>
              <p className="text-sm text-muted-foreground">
                SK Soft Solutions · May 2024 – May 2025
              </p>
            </div>
            <span className="mt-4 md:mt-0 text-sm px-3 py-1 bg-primary/10 text-primary rounded-full w-fit">
              Internship
            </span>
          </div>

          <div className="text-left mt-4">
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground text-sm md:text-base">
              <li>Enhanced RESTful APIs using Java and Spring Boot</li>
              <li>Modernized frontend with reusable React components</li>
              <li>Optimized database queries in MongoDB and MySQL</li>
              <li>Worked in Agile sprints and contributed to code reviews</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
