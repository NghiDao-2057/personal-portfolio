"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { personalInfo, education } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import SectionWrapper from "./SectionWrapper";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { lang } = useLanguage();
  const t = translations[lang].about;

  return (
    <SectionWrapper
      id="about"
      title={t.section_title}
      subtitle={t.section_subtitle}
    >
      <div ref={ref} className="grid md:grid-cols-5 gap-8">
        {/* Bio — 3 cols */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="md:col-span-3 space-y-6"
        >
          <p className="text-slate-300 text-lg leading-relaxed">{t.bio}</p>

          {/* Strengths */}
          <div className="grid sm:grid-cols-3 gap-4 pt-4">
            {t.strengths.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="glass rounded-xl p-4 card-glow hover:bg-white/[0.04] transition-colors"
              >
                <span className="text-2xl mb-2 block">{s.icon}</span>
                <h4 className="text-white font-semibold text-sm mb-1">
                  {s.title}
                </h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {s.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education card — 2 cols */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="md:col-span-2"
        >
          <div className="glass rounded-2xl p-6 card-glow h-full">
            <h3 className="text-xs uppercase tracking-widest text-cyan-400 mb-6 font-semibold">
              {t.edu_label}
            </h3>

            <div className="space-y-5">
              <div>
                <p className="font-bold text-white text-lg">{education.school}</p>
                <p className="text-slate-400 text-sm">{t.degree}</p>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-400">{education.period}</span>
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 font-semibold text-xs">
                  GPA {education.gpa}
                </span>
              </div>

              <div className="section-divider" />

              <div>
                <h4 className="text-xs uppercase tracking-widest text-violet-400 mb-3 font-semibold">
                  {t.lang_label}
                </h4>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🇬🇧</span>
                  <div>
                    <p className="text-white text-sm font-medium">{t.lang_name}</p>
                    <p className="text-slate-400 text-xs">{t.lang_level}</p>
                  </div>
                </div>
              </div>

              <div className="section-divider" />

              <div>
                <h4 className="text-xs uppercase tracking-widest text-violet-400 mb-3 font-semibold">
                  {t.status_label}
                </h4>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <p className="text-slate-300 text-sm">{t.status_text}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
