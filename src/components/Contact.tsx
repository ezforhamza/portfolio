"use client";

import { motion } from "framer-motion";
import TechIcon from "./TechIcon";

const ease = [0.22, 1, 0.36, 1] as const;

const EMAIL = "hamzatanveer4347@gmail.com";
const UPWORK = "https://www.upwork.com/freelancers/~014e1746ed64a8ed7d";
const GITHUB = "https://github.com/ezforhamza";
const INSTAGRAM = "https://www.instagram.com/ezforhamza";

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-12%" },
};

const SOCIALS = [
  { slug: "upwork", label: "Upwork", href: UPWORK },
  { slug: "github", label: "GitHub", href: GITHUB },
  { slug: "instagram", label: "Instagram", href: INSTAGRAM },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative flex min-h-dvh flex-col overflow-hidden border-t border-border bg-bg px-5 pb-8 pt-24 sm:px-10 sm:pb-10 sm:pt-28 lg:px-16"
    >
      {/* ambient amber glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[60vh] bg-[radial-gradient(80%_70%_at_50%_0%,rgba(245,166,35,0.12),transparent_65%)]" />

      {/* main content — vertically centered in the viewport */}
      <div className="relative mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center">
        <motion.p
          {...reveal}
          transition={{ duration: 0.7, ease }}
          className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-fg-faint"
        >
          <span className="inline-block h-px w-10 bg-accent" />
          Contact
        </motion.p>

        <motion.h2
          {...reveal}
          transition={{ duration: 0.85, delay: 0.05, ease }}
          className="text-balance text-center font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
        >
          Got an app idea?
          <br />
          <span className="text-accent">Let&apos;s build it.</span>
        </motion.h2>

        <motion.p
          {...reveal}
          transition={{ duration: 0.85, delay: 0.1, ease }}
          className="mx-auto mt-6 max-w-xl text-center text-[15px] leading-relaxed text-fg-muted sm:text-lg"
        >
          Tell me what you&apos;re building and I&apos;ll tell you honestly if I
          can help. Fast replies, weekly updates, and code that actually ships.
        </motion.p>

        {/* Primary CTA */}
        <motion.div
          {...reveal}
          transition={{ duration: 0.85, delay: 0.15, ease }}
          className="mt-10 flex flex-col items-center gap-4"
        >
          <a
            href={`mailto:${EMAIL}`}
            className="group inline-flex min-h-[52px] max-w-full items-center gap-2.5 rounded-full bg-accent px-5 text-sm font-medium text-bg transition-opacity duration-200 hover:opacity-90 sm:gap-3 sm:px-7 sm:text-base"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
              className="shrink-0"
            >
              <path
                d="M3 7l9 6 9-6M4 5h16a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V6a1 1 0 011-1z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="truncate">{EMAIL}</span>
          </a>

          {/* Social links */}
          <div className="mt-2 flex w-full flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.slug}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="group inline-flex min-h-[44px] items-center gap-2 rounded-full border border-border bg-surface px-4 text-sm font-medium text-fg-muted transition-colors duration-200 hover:border-accent/40 hover:text-fg sm:px-5"
              >
                <TechIcon
                  slug={s.slug}
                  className="h-4 w-4 text-fg-faint transition-colors duration-200 group-hover:text-accent"
                />
                {s.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer — pinned to the bottom of the full-height section */}
      <div className="relative mx-auto mt-10 flex w-full max-w-5xl shrink-0 flex-col items-center gap-3 border-t border-border pt-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="font-display text-sm font-medium">Hamza Tanveer</p>
        <p className="text-xs text-fg-faint">
          Full-stack &amp; mobile developer · Sahiwal, Pakistan
        </p>
        <p className="text-xs text-fg-faint">
          © {new Date().getFullYear()} — Built with Next.js
        </p>
      </div>
    </section>
  );
}
