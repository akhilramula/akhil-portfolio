import { ArrowUp, Mail, Github, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card border-t border-border mt-12 pt-8 relative">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Akhil Ramula. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground flex flex-wrap justify-center items-center gap-4">
          <a
            href="mailto:akhilramula38@gmail.com"
            className="flex items-center gap-1 hover:underline"
          >
            <Mail size={14} /> akhilramula38@gmail.com
          </a>
          <span>|</span>
          <a
            href="https://github.com/akhilramula"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:underline"
          >
            <Github size={14} /> GitHub
          </a>
          <span>|</span>
          <a
            href="https://linkedin.com/in/akhilramula"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:underline"
          >
            <Linkedin size={14} /> LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
};
