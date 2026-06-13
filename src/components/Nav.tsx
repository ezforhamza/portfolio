"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:px-6"
    >
      <nav
        className={`flex w-full max-w-7xl items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-300 sm:px-5 ${
          scrolled
            ? "border-border bg-bg/70 backdrop-blur-xl"
            : "border-white/10 bg-white/5 backdrop-blur-md"
        }`}
      >
        <a
          href="#top"
          className="group flex items-center gap-2.5 pl-1 font-display text-base font-semibold tracking-tight"
        >
          <span className="relative h-7 w-7 overflow-hidden rounded-full">
            <Image
              src="/avatar-round.webp"
              alt="Hamza Tanveer"
              fill
              sizes="28px"
              className="object-cover"
            />
          </span>
          <span className="hidden sm:inline">Hamza Tanveer</span>
        </a>

        <div className="flex items-center gap-1">
          <ul className="mr-1 hidden items-center md:flex">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm text-fg-muted transition-colors duration-200 hover:text-fg"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-bg transition-colors duration-200 hover:bg-accent-soft sm:px-5"
          >
            Let&apos;s talk
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
