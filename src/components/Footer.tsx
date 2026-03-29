"use client";

import { personalInfo } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { FiGithub, FiMail, FiPhone, FiArrowUp } from "react-icons/fi";

export default function Footer() {
  const { lang } = useLanguage();
  const tf = translations[lang].footer;

  return (
    <footer className="relative border-t border-white/[0.05]">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-slate-500 text-sm text-center md:text-left">
          © {new Date().getFullYear()} {personalInfo.name}. {tf.copyright}
        </p>

        <div className="flex items-center gap-5">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-cyan-400 transition-colors"
            aria-label="GitHub"
          >
            <FiGithub className="text-lg" />
          </a>
          <a
            href={`https://mail.google.com/mail/?view=cm&to=${personalInfo.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-cyan-400 transition-colors"
            aria-label="Email"
          >
            <FiMail className="text-lg" />
          </a>
          <a
            href={`tel:${personalInfo.phone.replace(/\s/g, "")}`}
            className="text-slate-500 hover:text-cyan-400 transition-colors"
            aria-label="Phone"
          >
            <FiPhone className="text-lg" />
          </a>
        </div>

        <a
          href="#home"
          className="text-slate-500 hover:text-white transition-colors flex items-center gap-1 text-sm"
        >
          <FiArrowUp /> {tf.back_to_top}
        </a>
      </div>
    </footer>
  );
}
