"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import SectionWrapper from "./SectionWrapper";

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { lang } = useLanguage();
  const ts = translations[lang].skills;

  return (
    <SectionWrapper
      id="skills"
      title={ts.section_title}
      subtitle={ts.section_subtitle}
    >
      <div ref={ref} className="grid sm:grid-cols-2 gap-6">
        {ts.groups.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: gi * 0.12 }}
            className="glass rounded-2xl p-6 card-glow hover:bg-white/[0.03] transition-colors"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl">{group.icon}</span>
              <h3 className="text-white font-bold text-lg">{group.category}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {group.items.map((skill, si) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.4,
                    delay: gi * 0.12 + si * 0.06,
                  }}
                  className="px-3 py-1.5 rounded-lg text-sm text-slate-300 bg-white/[0.05] border border-white/[0.06] hover:border-cyan-500/30 hover:text-cyan-300 hover:bg-cyan-500/[0.06] transition-all duration-300 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
