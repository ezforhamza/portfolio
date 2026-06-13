"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "./CountUp";
import TechIcon, { techLabel } from "./TechIcon";

const ease = [0.22, 1, 0.36, 1] as const;

const STATS = [
  { value: 11, suffix: "+", label: "Apps in production" },
  { value: 5, suffix: ".0", label: "Upwork rating" },
  { value: 4, suffix: "+", label: "Years coding" },
  { value: 2022, suffix: "", label: "Coding since", raw: true },
];

const FACTS = [
  { k: "Based in", v: "Sahiwal, Pakistan" },
  { k: "Focus", v: "Flutter · React / Next.js · AI" },
  { k: "Education", v: "BS Software Engineering, COMSATS" },
  { k: "Languages", v: "English — Native / Bilingual" },
];

// slugs map to clean monochrome icons in TechIcon (Simple Icons)
const STACK = [
  "flutter",
  "dart",
  "react",
  "nextdotjs",
  "nodedotjs",
  "typescript",
  "javascript",
  "tailwindcss",
  "supabase",
  "firebase",
  "expo",
  "openai",
  "git",
  "figma",
];

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-12%" },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-bg px-5 py-24 sm:px-10 sm:py-32 lg:px-16"
    >
      {/* soft ambient lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_80%_at_15%_20%,rgba(245,166,35,0.08),transparent_55%)]" />

      <div className="relative mx-auto w-full max-w-7xl">
        {/* Header */}
        <motion.p
          {...reveal}
          transition={{ duration: 0.7, ease }}
          className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-fg-faint"
        >
          <span className="inline-block h-px w-10 bg-accent" />
          About
        </motion.p>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Portrait — vertically centered against the content column */}
          <div className="lg:self-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-12%" }}
              transition={{ duration: 0.9, ease }}
              className="group relative mx-auto w-full max-w-md lg:mx-0"
            >
              {/* amber glow behind frame */}
              <div className="pointer-events-none absolute -inset-3 rounded-[28px] bg-accent/15 opacity-60 blur-2xl" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src="/about-portrait-v2.webp"
                  alt="Hamza Tanveer"
                  fill
                  sizes="(max-width: 1024px) 100vw, 38vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
                {/* available pill */}
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-bg/50 px-3 py-1.5 text-xs font-medium backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                  </span>
                  Available for work
                </div>
                {/* name */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-display text-lg font-semibold">
                    Hamza Tanveer
                  </p>
                  <p className="text-sm text-fg-muted">
                    Full-stack &amp; mobile developer
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bio + stats + facts */}
          <div className="flex flex-col">
            <motion.h2
              {...reveal}
              transition={{ duration: 0.8, ease }}
              className="text-balance font-display text-3xl font-semibold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl"
            >
              I ship real products —{" "}
              <span className="text-accent">mobile, web, and the backend</span>{" "}
              behind them.
            </motion.h2>

            <motion.div
              {...reveal}
              transition={{ duration: 0.8, delay: 0.1, ease }}
              className="mt-6 space-y-4 text-[15px] leading-relaxed text-fg-muted sm:text-base"
            >
              <p>
                I&apos;m a full-stack and mobile developer specializing in
                cross-platform apps with Flutter and AI-powered web platforms.
                I&apos;ve shipped multiple production apps — HeyInterests and
                AIumni among them — each with mobile and web versions, and real
                users.
              </p>
              <p>
                My process is simple: scope it properly so there are no
                surprises, ship weekly so you&apos;re never in the dark, and
                deliver tested, working code. I respond fast, I don&apos;t
                vanish mid-project, and I finish what I start.
              </p>
            </motion.div>

            {/* Animated stats strip */}
            <motion.dl
              {...reveal}
              transition={{ duration: 0.8, delay: 0.12, ease }}
              className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4"
            >
              {STATS.map((s) => (
                <div key={s.label} className="bg-bg p-5">
                  <dd className="font-display text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
                    {s.raw ? (
                      `'${String(s.value).slice(2)}`
                    ) : (
                      <CountUp to={s.value} suffix={s.suffix} />
                    )}
                  </dd>
                  <dt className="mt-1.5 text-xs leading-tight text-fg-faint">
                    {s.label}
                  </dt>
                </div>
              ))}
            </motion.dl>

            {/* Facts */}
            <motion.dl
              {...reveal}
              transition={{ duration: 0.8, delay: 0.16, ease }}
              className="mt-8 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2"
            >
              {FACTS.map((f) => (
                <div key={f.k} className="border-t border-border pt-3">
                  <dt className="text-xs uppercase tracking-[0.15em] text-fg-faint">
                    {f.k}
                  </dt>
                  <dd className="mt-1.5 font-display text-base font-medium text-fg">
                    {f.v}
                  </dd>
                </div>
              ))}
            </motion.dl>

            {/* Toolkit */}
            <motion.div
              {...reveal}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              className="mt-10"
            >
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-fg-faint">
                Toolkit
              </p>
              <ul className="flex flex-wrap gap-2">
                {STACK.map((s) => (
                  <li
                    key={s}
                    className="group/chip inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm text-fg-muted transition-colors duration-200 hover:border-accent/40 hover:text-fg"
                  >
                    <TechIcon
                      slug={s}
                      className="h-4 w-4 text-fg-faint transition-colors duration-200 group-hover/chip:text-accent"
                    />
                    {techLabel(s)}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
