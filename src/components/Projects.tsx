"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { FiGithub } from "react-icons/fi";
import SectionWrapper from "./SectionWrapper";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { lang } = useLanguage();
  const tp = translations[lang].projects;

  return (
    <SectionWrapper
      id="projects"
      title={tp.section_title}
      subtitle={tp.section_subtitle}
    >
      <div ref={ref} className="grid md:grid-cols-2 gap-6">
        {tp.items.map((project, i) => (
          <motion.article
            key={project.slug}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="group glass rounded-2xl overflow-hidden card-glow flex flex-col"
          >
            {/* Header */}
            <div className="p-6 pb-4 flex-1">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] uppercase tracking-widest font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-full">
                  {project.badge}
                </span>
                <span className="text-xs text-slate-500">{project.period}</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-1.5 mb-5">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="text-slate-400 text-xs flex items-start gap-2"
                  >
                    <span className="text-cyan-500 mt-0.5 shrink-0">▸</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer */}
            <div className="px-6 pb-5">
              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded text-[11px] text-slate-400 bg-white/[0.04] border border-white/[0.05]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <FiGithub /> {tp.github_link}
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}
