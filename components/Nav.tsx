"use client";

import { useEffect, useState } from "react";
import { Logo } from "./shared";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);

  const links = [
    { targetId: "home", label: "Home" },
    { targetId: "jam-rooms", label: "Jam Rooms" },
    { targetId: "features", label: "Features" },
    { targetId: "how", label: "How It Works" },
    { targetId: "download", label: "Download" },
  ];

  const handleScroll = (id: string) => {
    setOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/60 border-b border-white/5"
          : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 md:px-8">
        <button onClick={() => handleScroll("home")} className="shrink-0 bg-transparent border-0 cursor-pointer text-left">
          <Logo />
        </button>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <button
              key={l.targetId}
              onClick={() => handleScroll(l.targetId)}
              className="text-sm font-medium text-muted-foreground transition hover:text-foreground bg-transparent border-0 cursor-pointer"
            >
              {l.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleScroll("download")}
            className="hidden rounded-full bg-brand-gradient px-4 py-2 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition hover:scale-[1.03] active:scale-95 md:inline-flex border-0 cursor-pointer"
          >
            Get JAM ROOM
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg glass md:hidden transition active:scale-95 border-0 cursor-pointer"
            aria-label="Menu"
          >
            <div className="space-y-1">
              <span className={`block h-0.5 w-5 bg-foreground transition-transform ${open ? "rotate-45 translate-y-1.5" : ""}`} />
              <span className={`block h-0.5 w-5 bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 bg-foreground transition-transform ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
            </div>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden mx-4 mb-3 rounded-2xl glass-strong p-4 animate-reveal">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <button
                key={l.targetId}
                onClick={() => handleScroll(l.targetId)}
                className="text-left text-sm font-medium text-muted-foreground hover:text-foreground py-2 border-b border-white/5 last:border-0 bg-transparent border-0 cursor-pointer"
              >
                {l.label}
              </button>
            ))}
            <button
              onClick={() => handleScroll("download")}
              className="mt-2 rounded-full bg-brand-gradient px-4 py-2 text-center text-sm font-semibold text-white shadow-md border-0 cursor-pointer"
            >
              Get JAM ROOM
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
