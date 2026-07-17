"use client";

import { Users, Music2 } from "lucide-react";
import { Reveal, SectionHead, Equalizer, Avatar } from "./shared";

export default function SocialStory() {
  const people = [
    { l: "AR", x: "8%", y: "20%", city: "Mumbai" },
    { l: "SN", x: "18%", y: "72%", city: "Delhi" },
    { l: "KV", x: "82%", y: "18%", city: "Bengaluru" },
    { l: "MJ", x: "88%", y: "68%", city: "Pune" },
    { l: "PT", x: "50%", y: "8%", city: "Hyderabad" },
    { l: "DA", x: "50%", y: "88%", city: "Chennai" },
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
          <div className="relative mx-auto mt-10 sm:mt-14 aspect-[12/8] sm:aspect-[16/10] w-full max-w-4xl rounded-3xl glass p-4 sm:p-6 overflow-hidden">
            {/* SVG connecting lines */}
            <svg
              className="absolute inset-0 h-full w-full pointer-events-none"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="cx" x1="0" x2="1">
                  <stop
                    offset="0%"
                    stopColor="oklch(0.78 0.22 320)"
                    stopOpacity="0.7"
                  />
                  <stop
                    offset="100%"
                    stopColor="oklch(0.82 0.2 190)"
                    stopOpacity="0.7"
                  />
                </linearGradient>
              </defs>
              {people.map((p, i) => (
                <line
                  key={i}
                  x1={p.x}
                  y1={p.y}
                  x2="50%"
                  y2="50%"
                  stroke="url(#cx)"
                  strokeWidth="1.2"
                  strokeDasharray="3 4"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    from="0"
                    to="-14"
                    dur="1.2s"
                    repeatCount="indefinite"
                  />
                </line>
              ))}
            </svg>

            {/* Center hub */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="glass-strong grid h-16 w-16 sm:h-24 sm:w-24 place-items-center rounded-2xl shadow-[var(--shadow-glow-strong)]">
                <Music2 className="text-white h-6 w-6 sm:h-8 sm:w-8" />
                <Equalizer bars={4} className="absolute -bottom-5 sm:-bottom-6 h-3 sm:h-4" />
              </div>
              <div className="mt-6 sm:mt-8 whitespace-nowrap text-center text-[8px] sm:text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
                Connected through music
              </div>
            </div>

            {people.map((p, i) => (
              <div
                key={i}
                className="absolute -translate-x-1/2 -translate-y-1/2 animate-float"
                style={{ left: p.x, top: p.y, animationDelay: `${i * 0.2}s` }}
              >
                <Avatar label={p.l} i={i} size={32} ring />
                <div className="mt-1 text-center text-[7px] sm:text-[9px] uppercase tracking-wider text-muted-foreground font-semibold">
                  {p.city}
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
