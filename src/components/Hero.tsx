"use client";

import { motion } from "framer-motion";
import { personalInfo, education } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import {
  FiGithub,
  FiMail,
  FiDownload,
  FiArrowDown,
  FiArrowRight,
} from "react-icons/fi";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang].hero;
  const featured = translations[lang].projects.items.slice(0, 2);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background orbs */}
      <div className="bg-orb w-[600px] h-[600px] bg-cyan-500 -top-40 -left-40 animate-float-slow" />
      <div className="bg-orb w-[500px] h-[500px] bg-violet-600 -bottom-32 -right-32 animate-float-slower" />
      <div className="bg-orb w-[300px] h-[300px] bg-blue-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-glow" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
          {/* ─── LEFT COLUMN (3 cols) ─── */}
          <div className="lg:col-span-3">
            {/* Status badge */}
            <motion.div
              {...fadeUp(0)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-slate-300 mb-8"
            >
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              {t.badge}
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.12)}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.15] mb-6 glow-text"
            >
              {t.headline1}{" "}
              <span className="gradient-text">{t.headline2}</span>{t.headline3}
            </motion.h1>

            {/* Bio */}
            <motion.p
              {...fadeUp(0.25)}
              className="text-slate-400 leading-relaxed mb-6 max-w-xl"
            >
              {t.bio(personalInfo.name)}
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              {...fadeUp(0.38)}
              className="flex flex-wrap gap-3 mb-6"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                {t.cta1}
              </a>
              <a
                href={personalInfo.cvVietnamese}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg glass text-slate-200 font-semibold text-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                {t.cta2}
              </a>
              <a
                href={personalInfo.cvEnglish}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg glass text-slate-200 font-semibold text-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                <FiDownload className="text-base" />
                {t.cta3}
              </a>
            </motion.div>

            {/* Social row */}
            <motion.div
              {...fadeUp(0.48)}
              className="flex flex-wrap gap-3 mb-5"
            >
              {[
                {
                  icon: <FiGithub />,
                  label: "GitHub",
                  href: personalInfo.github,
                },
                {
                  icon: <FiMail />,
                  label: "Email",
                  href: `https://mail.google.com/mail/?view=cm&to=${personalInfo.email}`,
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    s.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full glass text-sm text-slate-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  {s.icon} {s.label}
                </a>
              ))}
            </motion.div>

            {/* Contact info line */}
            <motion.p
              {...fadeUp(0.55)}
              className="text-sm text-slate-500 mb-6 flex flex-wrap items-center gap-x-2"
            >
              <a
                href={`mailto:${personalInfo.email}`}
                className="hover:text-cyan-400 transition-colors"
              >
                {personalInfo.email}
              </a>
              <span>·</span>
              <a
                href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
                className="hover:text-cyan-400 transition-colors"
              >
                {personalInfo.phone}
              </a>
              <span>·</span>
              <span>{t.searching}</span>
            </motion.p>

            {/* Tag badges */}
            <motion.div {...fadeUp(0.62)} className="flex flex-wrap gap-2">
              {t.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs text-slate-400 border border-white/[0.06] bg-white/[0.02] hover:border-cyan-500/30 hover:text-cyan-300 transition-all duration-300 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ─── RIGHT COLUMN (2 cols) ─── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-2 space-y-5"
          >
            {/* ── Summary card ── */}
            <div className="glass rounded-2xl p-5 card-glow">
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-semibold mb-4">
                {t.summary_label}
              </h3>

              <div className="space-y-4">
                <div>
                  <p className="text-white font-bold text-lg">{t.sum_year}</p>
                  <p className="text-slate-500 text-xs">
                    {t.sum_year_sub}
                  </p>
                </div>
                <div className="section-divider" />
                <div>
                  <p className="text-white font-bold text-lg">
                    {t.sum_projects}
                  </p>
                  <p className="text-slate-500 text-xs">
                    {t.sum_projects_sub}
                  </p>
                </div>
                <div className="section-divider" />
                <div>
                  <p className="text-white font-bold text-lg">{t.sum_tools}</p>
                  <p className="text-slate-500 text-xs">
                    {t.sum_tools_sub}
                  </p>
                </div>
              </div>

              <a
                href="#contact"
                className="mt-5 w-full inline-flex justify-center items-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-500/15 text-emerald-400 text-sm font-semibold hover:bg-emerald-500/25 transition-colors"
              >
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                {t.ready}
              </a>

              <p className="text-[10px] text-slate-600 mt-3 text-center">
                GPA {education.gpa} · {education.school}
              </p>
            </div>

            {/* ── CV quick links ── */}
            <div className="glass rounded-2xl p-5 card-glow">
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-semibold mb-3">
                {t.cv_label}
              </h3>
              <p className="text-slate-500 text-xs mb-3">
                {t.cv_sub}
              </p>
              <div className="flex flex-wrap gap-2">
                <a
                  href={personalInfo.cvVietnamese}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg glass text-xs text-slate-300 hover:text-white hover:bg-white/10 transition-all"
                >
                  {t.cv_vi}
                </a>
                <a
                  href={personalInfo.cvEnglish}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg glass text-xs text-slate-300 hover:text-white hover:bg-white/10 transition-all"
                >
                  {t.cv_en}
                </a>
                <a
                  href={personalInfo.cvVietnamese}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg glass text-xs text-slate-300 hover:text-white hover:bg-white/10 transition-all"
                >
                  <FiDownload className="inline mr-1" />
                  {t.cv_pdf}
                </a>
              </div>
            </div>

            {/* ── Featured projects ── */}
            <div className="glass rounded-2xl p-5 card-glow">
              <h3 className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-semibold mb-3">
                {t.featured_label}
              </h3>
              <div className="space-y-3">
                {featured.map((p) => (
                  <a
                    key={p.slug}
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 rounded-xl hover:bg-white/[0.04] transition-colors group"
                  >
                    <p className="text-white font-semibold text-sm group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                      {p.title}
                      <FiArrowRight className="text-xs opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </p>
                    <p className="text-slate-500 text-xs mt-0.5">
                      {p.description.slice(0, 70)}...
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FiArrowDown className="text-slate-500 text-xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
