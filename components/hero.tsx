"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

interface HeroProps {
  data: {
    name: string;
    title: string;
    subtitle: string;
    description: string;
    ctaText: string;
    ctaLink: string;
    typingTexts?: string[];
  };
}

export function Hero({ data }: HeroProps) {
  const {
    name,
    title,
    subtitle,
    description,
    ctaText,
    ctaLink,
    typingTexts = [],
  } = data;

  return (
    <section
      id="hero"
      className="relative flex min-h-[90vh] flex-col items-center justify-center py-12 text-center"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(var(--primary-rgb),0.15),transparent_50%)]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container max-w-4xl space-y-6"
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          {title}
        </h1>

        <div className="h-16 md:h-20">
          {typingTexts.length > 0 ? (
            <TypeAnimation
              sequence={[...typingTexts.flatMap((text) => [text, 1500])]}
              wrapper="h2"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
              className="text-xl font-medium text-primary sm:text-2xl md:text-3xl"
            />
          ) : (
            <h2 className="text-xl font-medium text-primary sm:text-2xl md:text-3xl">
              {subtitle}
            </h2>
          )}
        </div>

        <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
          {description}
        </p>

        <div className="flex justify-center gap-4 pt-4">
          <Button asChild size="lg">
            <a href={ctaLink}>{ctaText}</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#about">
              Learn More
              <ArrowDown className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
