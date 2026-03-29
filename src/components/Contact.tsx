"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, FormEvent } from "react";
import { personalInfo } from "@/data/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { FiMail, FiPhone, FiGithub, FiMapPin, FiSend } from "react-icons/fi";
import SectionWrapper from "./SectionWrapper";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { lang } = useLanguage();
  const tc = translations[lang].contact;

  const contactLinks = [
    {
      icon: <FiMail />,
      label: tc.email_label,
      value: personalInfo.email,
      href: `https://mail.google.com/mail/?view=cm&to=${personalInfo.email}`,
    },
    {
      icon: <FiPhone />,
      label: tc.phone_label,
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s/g, "")}`,
    },
    {
      icon: <FiGithub />,
      label: tc.github_label,
      value: "NghiDao-2057",
      href: personalInfo.github,
    },
    {
      icon: <FiMapPin />,
      label: tc.address_label,
      value: personalInfo.location,
      href: "#",
    },
  ];

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({
      view: "cm",
      to: personalInfo.email,
      su: subject || tc.gmail_subject,
      body: `Từ: ${name}\nEmail: ${email}\n\n${message}`,
    });
    window.open(`https://mail.google.com/mail/?${params.toString()}`, "_blank");
  };

  return (
    <SectionWrapper
      id="contact"
      title={tc.section_title}
      subtitle={tc.section_subtitle}
    >
      <div ref={ref} className="grid md:grid-cols-5 gap-8">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="md:col-span-2 space-y-4"
        >
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            {tc.description}
          </p>

          {contactLinks.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/[0.04] transition-colors group"
            >
              <span className="text-cyan-400 text-lg group-hover:scale-110 transition-transform">
                {c.icon}
              </span>
              <div>
                <p className="text-xs text-slate-500">{c.label}</p>
                <p className="text-slate-300 text-sm">{c.value}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="md:col-span-3 glass rounded-2xl p-6 card-glow space-y-5"
        >
          <h3 className="text-xs uppercase tracking-widest text-cyan-400 font-semibold mb-2">
            {tc.form_title}
          </h3>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-slate-500 mb-1 block">
                {tc.name_label}
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-white/[0.04] border border-white/[0.06] rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/40 transition-colors"
                placeholder={tc.name_placeholder}
              />
            </div>
            <div>
              <label className="text-xs text-slate-500 mb-1 block">
                {tc.email_input_label}
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white/[0.04] border border-white/[0.06] rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/40 transition-colors"
                placeholder={tc.email_placeholder}
              />
            </div>
          </div>

          <div>
            <label className="text-xs text-slate-500 mb-1 block">
              {tc.subject_label}
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full bg-white/[0.04] border border-white/[0.06] rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/40 transition-colors"
              placeholder={tc.subject_placeholder}
            />
          </div>

          <div>
            <label className="text-xs text-slate-500 mb-1 block">
              {tc.message_label}
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              className="w-full bg-white/[0.04] border border-white/[0.06] rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/40 transition-colors resize-none"
              placeholder={tc.message_placeholder}
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            <FiSend /> {tc.send_btn}
          </button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
}
