"use client";

import { Zap } from "lucide-react";
import { Reveal, SectionHead } from "./shared";

export default function Community() {
  const pills = [
    "Late Night",
    "Study",
    "Workout",
    "Road Trip",
    "Party",
    "Chill",
    "Friends",
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <section className="relative py-16 sm:py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        <Reveal>
          <SectionHead
            eyebrow="For your crew"
            title={
              <>
                Every Group Needs a <span className="text-gradient">JAM ROOM.</span>
              </>
            }
            sub="Late-night conversations. Weekend meetups. Study sessions. Gym time. Road trips. House parties. Whatever the moment, create a JAM ROOM and give your group one shared vibe."
          />
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-2.5 sm:gap-3">
            {pills.map((p, i) => (
              <span
                key={p}
                className="rounded-full glass px-4 py-2 text-sm text-white select-none animate-float"
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {p}
              </span>
            ))}
          </div>
          <div className="mt-10 text-center">
            <button
              onClick={() => handleScroll("download")}
              className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition hover:scale-105 active:scale-95 border-0 cursor-pointer"
            >
              <Zap size={16} /> Start Your JAM
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
