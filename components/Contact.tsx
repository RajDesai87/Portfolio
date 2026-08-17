"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Copy, Check, Download, ArrowUpRight, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

const PRIMARY_EMAIL = "rajgpdesai2007@gmail.com";

const contactOptions = [
  {
    icon: Mail,
    isCustomIcon: false,
    label: "Direct Email",
    value: PRIMARY_EMAIL,
    href: `mailto:${PRIMARY_EMAIL}`,
    display: PRIMARY_EMAIL,
    copyable: true,
    accent: "text-teal-400 bg-teal-500/10 border-teal-500/30",
  },
  {
    customIcon: GithubIcon,
    isCustomIcon: true,
    label: "GitHub Profile",
    value: "https://github.com/RajDesai87",
    href: "https://github.com/RajDesai87",
    display: "github.com/RajDesai87",
    copyable: false,
    accent: "text-blue-400 bg-blue-500/10 border-blue-500/30",
  },
  {
    customIcon: LinkedinIcon,
    isCustomIcon: true,
    label: "LinkedIn Profile",
    value: "https://www.linkedin.com/in/raj-desai132",
    href: "https://www.linkedin.com/in/raj-desai132",
    display: "linkedin.com/in/raj-desai132",
    copyable: false,
    accent: "text-indigo-400 bg-indigo-500/10 border-indigo-500/30",
  },
  {
    icon: MapPin,
    isCustomIcon: false,
    label: "Location",
    value: "Ahmedabad, Gujarat, India",
    href: null,
    display: "Ahmedabad, Gujarat, India",
    copyable: false,
    accent: "text-amber-400 bg-amber-500/10 border-amber-500/30",
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PRIMARY_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="contact" className="w-full py-32 sm:py-36 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex flex-col items-center justify-center text-center">
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Centered Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center space-y-3.5 mb-12 sm:mb-14"
        >
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs sm:text-sm text-[var(--accent-from)] font-semibold bg-[var(--accent-from)]/10 border border-[var(--accent-from)]/25 px-4 py-1.5 rounded-full">
              $ mail --compose
            </span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] tracking-tight">
            Get In Touch
          </h2>
          <p className="text-[var(--text-secondary)] text-base sm:text-xl max-w-2xl font-normal leading-relaxed text-center">
            I am actively looking for Backend / Python Developer internship roles. Reach out directly via email or connect on LinkedIn.
          </p>
        </motion.div>

        {/* Centered Action & Contact Console */}
        <div className="w-full max-w-2xl mx-auto space-y-8">
          
          {/* Main Action Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full card-interactive glass-panel rounded-3xl p-8 sm:p-12 md:p-14 border border-[var(--border-glass)] shadow-2xl space-y-8 text-center"
          >
            <div className="space-y-3.5">
              <span className="font-mono text-xs sm:text-sm text-emerald-500 font-semibold inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>OPEN TO INTERNSHIPS</span>
              </span>
              <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)]">
                Let&apos;s Connect
              </h3>
              <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-lg mx-auto">
                Feel free to email me directly or explore my open-source repositories and credentials.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href={`mailto:${PRIMARY_EMAIL}`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-base text-[#0B0E14] shadow-xl shadow-[var(--accent-from)]/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
                style={{
                  background:
                    "linear-gradient(135deg, var(--accent-from), var(--accent-via), var(--accent-to))",
                }}
              >
                <Send size={18} />
                <span>Send Email</span>
              </a>

              {/* Note: Drop your resume PDF into /public/resume.pdf */}
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-base border border-[var(--border)] bg-[var(--bg)] text-[var(--text-primary)] hover:border-[var(--accent-from)] hover:text-[var(--accent-from)] transition-all shadow-sm"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>
            </div>
          </motion.div>

          {/* Contact Links List */}
          <div className="w-full space-y-4 text-left">
            {contactOptions.map((item, idx) => {
              return (
                <motion.div
                  key={item.label}
                  className="card-interactive glass-panel rounded-3xl p-6 sm:p-7 border border-[var(--border)] hover:border-[var(--accent-from)]/60 transition-all flex items-center justify-between shadow-sm group"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.35, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex items-center gap-4.5 min-w-0">
                    <div className={`w-13 h-13 rounded-2xl border flex items-center justify-center flex-shrink-0 shadow-xs p-3 ${item.accent}`}>
                      {item.isCustomIcon && item.customIcon ? (
                        <item.customIcon size={22} />
                      ) : item.icon ? (
                        <item.icon size={22} aria-hidden="true" />
                      ) : null}
                    </div>

                    <div className="min-w-0">
                      <div className="font-mono text-xs sm:text-sm text-[var(--text-muted)] font-medium">
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("mailto") ? undefined : "_blank"}
                          rel="noopener noreferrer"
                          className="text-base sm:text-lg font-bold text-[var(--text-primary)] hover:text-[var(--accent-from)] transition-colors truncate block"
                        >
                          {item.display}
                        </a>
                      ) : (
                        <div className="text-base sm:text-lg font-bold text-[var(--text-primary)] truncate">
                          {item.display}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 flex-shrink-0 ml-4">
                    {item.copyable && (
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--bg)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent-from)] transition-colors cursor-pointer"
                        aria-label="Copy email address"
                      >
                        {copied ? (
                          <>
                            <Check size={14} className="text-green-500" />
                            <span className="text-green-500 font-semibold">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy size={14} />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    )}
                    {item.href && !item.href.startsWith("mailto") && (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl text-[var(--text-muted)] group-hover:text-[var(--text-primary)] group-hover:bg-[var(--bg)] transition-colors"
                        aria-label={`Open ${item.label} in new tab`}
                      >
                        <ArrowUpRight size={20} />
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
