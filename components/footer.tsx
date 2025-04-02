import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import portfolioData from "@/data/portfolio.json";
import Logo from "@/components/logo";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { social } = portfolioData.contact;

  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Logo className="h-8 w-8" />
            <span className="text-xl font-bold">{portfolioData.hero.name}</span>
          </div>

          <div className="flex items-center gap-4">
            {social.github && (
              <Link
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            )}
            {social.linkedin && (
              <Link
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            )}
            {social.twitter && (
              <Link
                href={social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            )}
            {social.email && (
              <Link
                href={`mailto:${social.email}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            )}
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-muted-foreground">
          © {currentYear} {portfolioData.hero.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
