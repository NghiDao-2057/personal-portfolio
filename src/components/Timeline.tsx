"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import SectionWrapper from "./SectionWrapper";

export default function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { lang } = useLanguage();
  const tt = translations[lang].timeline;

  return (
    <SectionWrapper
      id="timeline"
      title={tt.section_title}
      subtitle={tt.section_subtitle}
    >
      <div ref={ref} className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/40 via-violet-500/40 to-transparent" />

        <div className="space-y-12">
          {tt.items.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-cyan-400 to-violet-500 ring-4 ring-primary z-10 mt-1" />

                {/* Card */}
                <div
                  className={`ml-12 md:ml-0 md:w-[45%] ${
                    isLeft ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="glass rounded-xl p-5 card-glow hover:bg-white/[0.03] transition-colors">
                    <span className="text-xs font-bold text-cyan-400 tracking-wider">
                      {item.year}
                    </span>
                    <h4 className="text-white font-bold mt-1 mb-2">
                      {item.title}
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
