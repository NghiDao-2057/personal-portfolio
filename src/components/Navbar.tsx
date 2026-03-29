"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, toggle } = useLanguage();
  const t = translations[lang];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = t.nav.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(`#${sections[i]}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [t.nav]);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-lg shadow-black/20" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
        {/* Logo */}
        <a
          href="#home"
          className="text-base font-bold gradient-text italic shrink-0 whitespace-nowrap pr-1"
        >
          Đào Nguyễn Uyển Nghi
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {t.nav.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative px-4 py-2 text-sm rounded-lg transition-colors duration-300 ${
                  active === link.href
                    ? "text-cyan-400"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {link.label}
                {active === link.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-lg bg-white/5"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: VI/EN toggle + mobile hamburger */}
        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle language"
            className="hidden md:flex items-center glass rounded-full overflow-hidden text-xs font-bold"
          >
            <span
              className={`px-3 py-1.5 transition-colors duration-300 ${
                lang === "vi"
                  ? "bg-white/10 text-white"
                  : "text-slate-500 hover:text-slate-300"
              }`}
            >
              VI
            </span>
            <span
              className={`px-3 py-1.5 transition-colors duration-300 ${
                lang === "en"
                  ? "bg-white/10 text-white"
                  : "text-slate-500 hover:text-slate-300"
              }`}
            >
              EN
            </span>
          </button>

          {/* Mobile hamburger */}
          <button
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <span
              className={`block w-6 h-0.5 bg-slate-300 transition-transform duration-300 ${
                mobileOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-slate-300 transition-opacity duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-slate-300 transition-transform duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass overflow-hidden"
          >
            <ul className="flex flex-col py-4">
              {t.nav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-6 py-3 text-sm transition-colors ${
                      active === link.href
                        ? "text-cyan-400 bg-white/5"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              {/* Mobile language toggle */}
              <li className="px-6 pt-3 pb-1">
                <button
                  onClick={toggle}
                  className="flex items-center glass rounded-full overflow-hidden text-xs font-bold"
                >
                  <span
                    className={`px-3 py-1.5 transition-colors ${
                      lang === "vi" ? "bg-white/10 text-white" : "text-slate-500"
                    }`}
                  >
                    VI
                  </span>
                  <span
                    className={`px-3 py-1.5 transition-colors ${
                      lang === "en" ? "bg-white/10 text-white" : "text-slate-500"
                    }`}
                  >
                    EN
                  </span>
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
