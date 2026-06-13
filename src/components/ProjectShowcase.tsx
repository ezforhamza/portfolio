"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export type Scene = {
  tag: string;
  title: string;
  body: string;
  image: string;
  alt: string;
};

export type ProjectLink = {
  label: string;
  href: string;
  primary?: boolean;
  icon?: "apple" | "play" | "instagram";
};

export type Project = {
  /** zero-padded order shown in the corner, e.g. "01" */
  number: string;
  name: string;
  logo: { src: string; width: number; height: number; className?: string };
  /** accent CSS color for this project's section (glow, tags, dots) */
  accent: string;
  tech: string[];
  /** availability, e.g. ["Web", "iOS", "Android"] */
  platforms?: string[];
  links: ProjectLink[];
  scenes: Scene[];
};

export default function ProjectShowcase({ project }: { project: Project }) {
  const { scenes, accent } = project;
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    setActive(Math.min(scenes.length - 1, Math.floor(p * scenes.length)));
  });

  const current = scenes[active];

  return (
    <section className="relative bg-bg" aria-label={`${project.name} — case study`}>
      {/* Crawlable project heading + summary (visually hidden, helps SEO) */}
      <h2 className="sr-only">{project.name}</h2>
      <p className="sr-only">
        {project.name} by Hamza Tanveer — {scenes[0]?.body} Built with{" "}
        {project.tech.join(", ")}.
      </p>
      <div
        ref={trackRef}
        className="relative"
        style={{ height: `${scenes.length * 85}dvh` }}
      >
        <div className="sticky top-0 flex h-dvh flex-col overflow-hidden">
          {/* modern ambient lighting — soft, diffuse, no hard edge */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background: `radial-gradient(140% 90% at 70% 40%, ${accent}14 0%, transparent 55%)`,
            }}
          />
          {/* faint accent line that grows with progress, anchored to the image side */}
          <div
            aria-hidden
            className="pointer-events-none absolute right-0 top-1/2 h-[55vh] w-px -translate-y-1/2 opacity-40 lg:right-[8%]"
            style={{
              background: `linear-gradient(to bottom, transparent, ${accent}55, transparent)`,
            }}
          />

          <div className="mx-auto flex h-full w-full max-w-7xl flex-col px-5 pt-[88px] pb-4 sm:px-10 sm:pt-28 lg:px-16">
            {/* Top bar */}
            <div className="flex shrink-0 items-center justify-between gap-3 sm:gap-4">
              <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                <span className="shrink-0 text-[11px] font-medium uppercase tracking-[0.2em] text-fg-faint sm:text-xs">
                  <span className="sm:hidden">{project.number}</span>
                  <span className="hidden sm:inline">
                    {project.number} / Selected work
                  </span>
                </span>
                <span className="hidden h-4 w-px bg-border sm:block" />
                <Image
                  src={project.logo.src}
                  alt={project.name}
                  width={project.logo.width}
                  height={project.logo.height}
                  className={project.logo.className ?? "h-6 w-auto sm:h-8"}
                />
              </div>
              <div className="hidden flex-wrap items-center gap-2 md:flex">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-fg-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Stage — mobile: text then image, generous space; desktop: side by side */}
            <div className="grid min-h-0 flex-1 grid-cols-1 content-center items-center gap-4 overflow-hidden py-3 sm:gap-7 sm:py-5 lg:grid-cols-[0.85fr_1.3fr] lg:items-center lg:gap-8 lg:overflow-visible lg:py-4 xl:gap-12">
              <div className="order-1 flex items-center lg:order-1">
                <AnimatedText scene={current} index={active} accent={accent} />
              </div>

              <div className="relative order-2 aspect-[16/12] max-h-[42dvh] w-full lg:order-2 lg:aspect-auto lg:max-h-none lg:h-[68vh]">
                {scenes.map((scene, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-out"
                    style={{ opacity: i === active ? 1 : 0 }}
                    aria-hidden={i !== active}
                  >
                    <div className="relative h-full w-full drop-shadow-[0_24px_60px_rgba(0,0,0,0.5)] sm:drop-shadow-[0_40px_90px_rgba(0,0,0,0.6)]">
                      <Image
                        src={scene.image}
                        alt={scene.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 65vw"
                        className="object-contain"
                        priority={i === 0}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom: stepper + actions */}
            <div className="flex shrink-0 flex-col gap-4 pb-8 sm:flex-row sm:items-center sm:justify-between sm:pb-10">
              {/* stepper + platforms row */}
              <div className="flex items-center justify-between gap-3 sm:justify-start">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    {scenes.map((_, i) => (
                      <span
                        key={i}
                        className="h-1 rounded-full transition-all duration-300"
                        style={{
                          width: i === active ? 24 : 8,
                          backgroundColor:
                            i === active ? accent : "var(--color-border)",
                        }}
                      />
                    ))}
                  </div>
                  <span className="text-xs tabular-nums text-fg-faint">
                    {String(active + 1).padStart(2, "0")} /{" "}
                    {String(scenes.length).padStart(2, "0")}
                  </span>
                </div>
                {project.platforms && project.platforms.length > 0 && (
                  <div className="flex items-center gap-1.5 text-[11px] text-fg-faint sm:ml-2 sm:text-xs">
                    {project.platforms.map((p, i) => (
                      <span key={p} className="flex items-center gap-1.5">
                        {i > 0 && (
                          <span className="h-1 w-1 rounded-full bg-fg-faint/50" />
                        )}
                        {p}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* actions — full-width primary on mobile for big touch target */}
              <div className="flex items-center gap-2.5">
                {project.links.map((link) =>
                  link.primary ? (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full px-4 text-sm font-medium text-bg transition-opacity duration-200 hover:opacity-90 sm:flex-initial sm:px-5"
                      style={{ backgroundColor: accent }}
                    >
                      {link.label}
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M7 17L17 7M17 7H8M17 7v9"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.03] px-4 text-sm font-medium text-fg transition-colors duration-200 hover:border-white/25 sm:px-5"
                    >
                      <LinkIcon icon={link.icon} />
                      <span className={link.icon ? "hidden sm:inline" : ""}>
                        {link.label}
                      </span>
                    </a>
                  )
                )}
              </div>
            </div>
          </div>

          {/* overall progress line — driven directly by the scroll MotionValue
              (scaleX) so it tracks scroll smoothly in both directions */}
          <div className="absolute inset-x-0 bottom-0 h-px bg-border">
            <motion.div
              className="h-full w-full origin-left"
              style={{ scaleX: scrollYProgress, backgroundColor: accent }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function AnimatedText({
  scene,
  index,
  accent,
}: {
  scene: Scene;
  index: number;
  accent: string;
}) {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="max-w-xl"
    >
      <span
        className="mb-2.5 inline-flex w-fit items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] sm:mb-4 sm:text-xs"
        style={{ color: accent }}
      >
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: accent }}
        />
        {scene.tag}
      </span>
      <h3 className="text-balance font-display text-xl font-semibold leading-[1.15] tracking-tight sm:text-3xl lg:text-[2.25rem]">
        {scene.title}
      </h3>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-fg-muted sm:mt-5 sm:text-base">
        {scene.body}
      </p>
    </motion.div>
  );
}

function LinkIcon({ icon }: { icon?: ProjectLink["icon"] }) {
  if (icon === "apple") {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M17.05 12.04c-.03-2.6 2.13-3.85 2.22-3.91-1.21-1.77-3.1-2.02-3.77-2.05-1.6-.16-3.13.94-3.94.94-.81 0-2.07-.92-3.4-.9-1.75.03-3.36 1.02-4.26 2.58-1.82 3.16-.46 7.83 1.3 10.39.86 1.25 1.88 2.66 3.22 2.61 1.29-.05 1.78-.83 3.34-.83 1.56 0 2 .83 3.37.81 1.39-.03 2.27-1.28 3.12-2.54.98-1.46 1.39-2.87 1.41-2.94-.03-.01-2.71-1.04-2.74-4.12l.13-.05zM14.6 4.6c.71-.86 1.19-2.06 1.06-3.25-1.02.04-2.26.68-2.99 1.54-.66.76-1.23 1.98-1.08 3.15 1.14.09 2.3-.58 3.01-1.44z" />
      </svg>
    );
  }
  if (icon === "play") {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M3.6 2.3c-.3.2-.5.6-.5 1.1v17.2c0 .5.2.9.5 1.1l9.1-9.7L3.6 2.3zm10.3 7.7l2.6-2.8L6.1 1.5c-.4-.2-.8-.3-1.1-.2l8.9 8.7zm0 4L5 22.7c.3.1.7 0 1.1-.2l10.4-5.7-2.6-2.8zm6.5-3.5l-2.2-1.2-2.9 3.1 2.9 3.1 2.2-1.2c.7-.4.7-1.4 0-1.8z" />
      </svg>
    );
  }
  return null;
}
