"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AboutProps {
  data: {
    title: string;
    subtitle: string;
    description: string;
    image?: string;
  };
}

export function About({ data }: AboutProps) {
  const { title, subtitle, description, image } = data;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 md:grid-cols-2 md:gap-12 items-center"
        >
          {image && (
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src={image || "/placeholder.svg"}
                alt={title}
                width={600}
                height={600}
                className="w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          )}

          <div className={`space-y-6 ${!image ? "md:col-span-2" : ""}`}>
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {title}
              </h2>
              <p className="mt-2 text-xl text-primary">{subtitle}</p>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              {description.split("\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
