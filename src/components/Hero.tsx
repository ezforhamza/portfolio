"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Grain from "./Grain";

const CHIPS = [
  { label: "5.0", sub: "Upwork rating" },
  { label: "11+", sub: "Apps in production" },
  { label: "Flutter", sub: "iOS · Android · Web" },
  { label: "'22", sub: "GitHub since" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0.6, 0.96]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative h-[170vh]">
      <div className="sticky top-0 h-dvh w-full overflow-hidden">
        {/* Background photo */}
        <motion.div
          style={{ scale: imageScale, y: imageY }}
          className="absolute inset-0"
        >
          <Image
            src="/hamza.webp"
            alt="Hamza Tanveer at his development workstation"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </motion.div>

        {/* Cinematic washes */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-t from-bg via-bg/45 to-bg/20"
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(125%_85%_at_50%_25%,transparent_28%,rgba(10,10,11,0.7)_100%)]" />
        {/* Warm accent glow from the left, echoing the lamp in the photo */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_12%_55%,rgba(245,166,35,0.12),transparent_60%)]" />
        <Grain />

        {/* Foreground content */}
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative z-30 flex h-full flex-col justify-end px-6 pb-14 sm:px-10 sm:pb-16 lg:px-16 lg:pb-20"
        >
          <div className="mx-auto w-full max-w-7xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease }}
              className="font-display text-5xl font-semibold leading-[0.95] tracking-tight text-balance sm:text-7xl lg:text-8xl"
            >
              Hamza Tanveer
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45, ease }}
              className="mt-5 max-w-xl text-lg leading-relaxed text-fg-muted sm:text-xl"
            >
              Full-stack & mobile developer. I build{" "}
              <span className="text-accent">Flutter apps</span> and{" "}
              <span className="text-accent">AI-powered web platforms</span> that
              people actually use.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-bg transition-colors duration-200 hover:bg-accent-soft"
              >
                View work
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="transition-transform duration-200 group-hover:translate-y-0.5"
                >
                  <path
                    d="M12 5v14M5 12l7 7 7-7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="https://www.upwork.com/freelancers/~014e1746ed64a8ed7d"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-fg backdrop-blur-sm transition-colors duration-200 hover:border-white/30 hover:bg-white/10"
              >
                Hire on Upwork
              </a>
            </motion.div>

            {/* Credibility chips */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75, ease }}
              className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-6"
            >
              {CHIPS.map((chip) => (
                <li key={chip.sub} className="flex flex-col">
                  <span className="font-display text-xl font-semibold text-fg sm:text-2xl">
                    {chip.label === "5.0" ? (
                      <span className="inline-flex items-center gap-1.5">
                        {chip.label}
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="text-accent"
                        >
                          <path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7L12 2z" />
                        </svg>
                      </span>
                    ) : (
                      chip.label
                    )}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-fg-faint">
                    {chip.sub}
                  </span>
                </li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
