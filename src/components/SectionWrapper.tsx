"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Props {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({
  id,
  title,
  subtitle,
  children,
  className = "",
}: Props) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id={id} ref={ref} className={`relative py-24 px-6 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-6xl mx-auto"
      >
        {title && (
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold glow-text mb-3">
              <span className="gradient-text">{title}</span>
            </h2>
            {subtitle && (
              <p className="text-slate-400 max-w-xl text-lg">{subtitle}</p>
            )}
            <div className="mt-4 w-20 h-1 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500" />
          </div>
        )}
        {children}
      </motion.div>
    </section>
  );
}
