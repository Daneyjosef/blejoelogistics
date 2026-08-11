"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { MISSION_STATEMENT, CORE_VALUES, CEO } from "@/content/about-data";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function WhoWeAre() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  // Scroll-linked, not just scroll-triggered: progress tracks the
  // section's position in the viewport directly, so scrolling down
  // pulls the two columns together and scrolling back up pushes them
  // apart again — it's the same progress value, just read backwards.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start 0.35"],
  });

  const rawLeftX = useTransform(scrollYProgress, [0, 1], [-360, 0]);
  const rawRightX = useTransform(scrollYProgress, [0, 1], [360, 0]);
  const leftX = reduceMotion ? 0 : rawLeftX;
  const rightX = reduceMotion ? 0 : rawRightX;

  return (
    <section
      ref={sectionRef}
      className="mx-auto max-w-7xl overflow-x-clip px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
        <motion.div style={{ x: leftX }}>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-blue-600">
              Who We Are
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-brand-navy-900 sm:text-4xl">
              Precision-built logistics, from Lagos outward
            </h2>
            <p className="mt-4 text-brand-navy-700">{MISSION_STATEMENT}</p>

            <blockquote className="mt-8 rounded-card border border-brand-gray-200 bg-brand-sky-100/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <p className="text-sm italic text-brand-navy-900">
                &ldquo;Our commitment is to exceed customer expectations at every stage of the
                journey.&rdquo;
              </p>
              <p className="mt-2 text-xs font-semibold text-brand-navy-700">
                {CEO.name}, {CEO.role}
              </p>
            </blockquote>
          </Reveal>
        </motion.div>

        <motion.div style={{ x: rightX }}>
          <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {CORE_VALUES.map((value) => (
              <RevealItem
                key={value.title}
                className="rounded-card border border-brand-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="font-bold text-brand-navy-900">{value.title}</h3>
                <p className="mt-1 text-sm text-brand-navy-700">{value.description}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </motion.div>
      </div>
    </section>
  );
}
