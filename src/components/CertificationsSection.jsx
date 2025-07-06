export const CertificationsSection = () => {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner (CLF-C02)",
      issuer: "Amazon Web Services (AWS)",
      link: "https://www.credly.com/badges/252fe228-47c4-4b06-82ce-aa6d5f6839f9/public_url",
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

  return (
    <section id="certifications" className="py-24 px-4 relative bg-secondary/10">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Certifications</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="gradient-border p-6 rounded-xl bg-card card-hover transition-shadow"
            >
              <h4 className="text-lg font-semibold text-foreground mb-1">
                {cert.title}
              </h4>
              <p className="text-sm text-muted-foreground mb-2">
                Issued by {cert.issuer}
              </p>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-sm hover:underline"
                >
                  View Certificate
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
