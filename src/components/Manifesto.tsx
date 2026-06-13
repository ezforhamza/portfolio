"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const LINE = "I build apps people actually use — real products, shipped end-to-end and running in production.";
const WORDS = LINE.split(" ");
const HIGHLIGHT = new Set(["actually", "use", "production"]);

function Word({
  word,
  range,
  progress,
  highlight,
}: {
  word: string;
  range: [number, number];
  progress: MotionValue<number>;
  highlight: boolean;
}) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  return (
    <span className="relative mr-[0.28em] inline-block">
      <motion.span
        style={{ opacity }}
        className={highlight ? "text-accent" : "text-fg"}
      >
        {word}
      </motion.span>
    </span>
  );
}

export default function Manifesto() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.25"],
  });

  return (
    <section
      ref={ref}
      className="relative flex min-h-dvh items-center px-6 py-32 sm:px-10 lg:px-16"
    >
      <div className="mx-auto w-full max-w-5xl">
        <p className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-fg-faint">
          <span className="inline-block h-px w-10 bg-accent" />
          Philosophy
        </p>
        <p className="font-display text-3xl font-medium leading-[1.2] tracking-tight sm:text-5xl lg:text-6xl">
          {WORDS.map((word, i) => {
            const start = i / WORDS.length;
            const end = start + 1 / WORDS.length;
            return (
              <Word
                key={i}
                word={word}
                range={[start, end]}
                progress={scrollYProgress}
                highlight={HIGHLIGHT.has(word.replace(/[^a-z]/gi, ""))}
              />
            );
          })}
        </p>
      </div>
    </section>
  );
}
