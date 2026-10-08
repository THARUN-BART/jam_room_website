"use client";

import { Users, Music2, Radio } from "lucide-react";
import { Reveal, SectionHead, Equalizer, Avatar } from "./shared";

export default function SocialStory() {
  const people = [
    { l: "AR", x: "16%", y: "24%", city: "Mumbai" },
    { l: "PT", x: "50%", y: "12%", city: "Hyderabad" },
    { l: "KV", x: "84%", y: "24%", city: "Bengaluru" },
    { l: "MJ", x: "84%", y: "76%", city: "Pune" },
    { l: "DA", x: "50%", y: "88%", city: "Chennai" },
    { l: "SN", x: "16%", y: "76%", city: "Delhi" },
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-16 sm:py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <Reveal>
          <SectionHead
            eyebrow="Connected through music"
            title={
              <>
                Music Was Never Meant to <span className="text-gradient">Feel Lonely.</span>
              </>
            }
            sub="Different rooms. Different streets. Different cities. One JAM ROOM. Create a room, send the invite, press play, and share the moment through music."
          />
        </Reveal>

        <Reveal delay={150}>
          <div className="relative mx-auto mt-10 sm:mt-14 aspect-[4/3] sm:aspect-[16/10] w-full max-w-4xl rounded-3xl glass p-4 sm:p-8 overflow-hidden border border-white/10 shadow-[var(--shadow-glow)]">
            {/* Concentric radar rings centered at 50% 50% */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="h-44 w-44 sm:h-56 sm:w-56 rounded-full border border-white/5 animate-pulse" />
              <div className="absolute h-80 w-80 sm:h-96 sm:w-96 rounded-full border border-white/[0.04]" />
              <div className="absolute h-[420px] w-[420px] sm:h-[500px] sm:w-[500px] rounded-full border border-white/[0.02]" />
              {/* Radial gradient glow in center */}
              <div
                className="absolute h-64 w-64 rounded-full opacity-35 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, oklch(0.78 0.22 320 / 0.8), oklch(0.72 0.2 260 / 0.4), transparent 70%)",
                }}
              />
            </div>

            {/* SVG connecting lines terminating cleanly at center (z-0 behind hub) */}
            <svg
              className="absolute inset-0 h-full w-full pointer-events-none z-0"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="oklch(0.78 0.22 320)" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="oklch(0.72 0.2 260)" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="oklch(0.82 0.2 190)" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              {people.map((p, i) => (
                <g key={i}>
                  {/* Base glowing line */}
                  <line
                    x1={p.x}
                    y1={p.y}
                    x2="50%"
                    y2="50%"
                    stroke="url(#lineGrad)"
                    strokeWidth="1.5"
                    strokeDasharray="4 5"
                    opacity="0.75"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="0"
                      to="-18"
                      dur="1.5s"
                      repeatCount="indefinite"
                    />
                  </line>
                </g>
              ))}
            </svg>

            {/* Center Hub - High z-index with solid dark background so lines never bleed through */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
              {/* Pulse halo around hub */}
              <div className="absolute -inset-3 rounded-3xl bg-brand-gradient opacity-20 blur-xl animate-pulse" />

              <div className="relative rounded-2xl sm:rounded-3xl p-3 sm:p-5 border border-white/20 bg-[#120924] shadow-[0_0_50px_rgba(255,94,168,0.35)] flex flex-col items-center justify-center gap-2">
                <div className="grid h-12 w-12 sm:h-16 sm:w-16 place-items-center rounded-xl sm:rounded-2xl bg-brand-gradient text-white shadow-lg">
                  <Music2 className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                <Equalizer bars={5} className="h-3 sm:h-4" />
              </div>

              {/* Status Badge */}
              <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[#120924]/90 border border-white/10 px-3 py-1 shadow-md">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-ping" />
                <span className="text-[9px] sm:text-[11px] font-semibold tracking-wider uppercase text-white whitespace-nowrap">
                  Connected Through Music
                </span>
              </div>
            </div>

            {/* Connected City Nodes */}
            {people.map((p, i) => (
              <div
                key={i}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center group cursor-default"
                style={{ left: p.x, top: p.y }}
              >
                <div className="relative">
                  {/* Subtle ping ring around avatar */}
                  <span className="absolute -inset-1 rounded-full bg-brand-gradient opacity-40 blur-sm group-hover:opacity-80 transition" />
                  <Avatar label={p.l} i={i} size={36} ring />
                </div>

                {/* City Tag with live listening dot */}
                <div className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-[#120924]/85 border border-white/10 px-2 py-0.5 shadow-sm">
                  <span className="h-1 w-1 rounded-full bg-[var(--neon-3)]" />
                  <span className="text-[8px] sm:text-[10px] font-semibold text-zinc-300 uppercase tracking-wide whitespace-nowrap">
                    {p.city}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => handleScroll("download")}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition hover:scale-105 active:scale-95 border-0 cursor-pointer"
            >
              <Users size={16} /> Bring Your Friends
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

