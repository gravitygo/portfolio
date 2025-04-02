"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description?: string;
  image?: string;
  github?: string;
  liveSite?: string;
  skills: string[];
}

interface ProjectsProps {
  data: {
    title: string;
    subtitle: string;
    projects: Project[];
  };
}

export function Projects({ data }: ProjectsProps) {
  const { title, subtitle, projects } = data;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-2">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground">{subtitle}</p>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} variants={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  variants,
}: {
  project: Project;
  variants: any;
}) {
  const { title, description, image, github, liveSite, skills } = project;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={variants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className="h-full overflow-hidden flex flex-col">
        {image && (
          <div className="relative h-48 overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className={`object-cover transition-transform duration-500 ${isHovered ? "scale-110" : "scale-100"}`}
            />
          </div>
        )}
        <CardContent className="flex-grow p-6">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          {description && (
            <p className="text-muted-foreground mb-4">{description}</p>
          )}
          <div className="flex flex-wrap gap-2 mt-auto">
            {skills.map((skill, skillIndex) => (
              <Badge key={skillIndex} variant="outline">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0 gap-2">
          {github && (
            <Button asChild variant="outline" size="sm">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <Github className="h-4 w-4" />
                Code
              </a>
            </Button>
          )}
          {liveSite && (
            <Button asChild size="sm">
              <a
                href={liveSite}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <ExternalLink className="h-4 w-4" />
                Live Site
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
