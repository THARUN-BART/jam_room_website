"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal, SectionHead } from "./shared";

export default function FAQ() {
  const items = [
    {
      q: "What is JAM ROOM?",
      a: "JAM ROOM is a social music app that lets you create a music room, invite friends, and enjoy a shared listening experience.",
    },
    {
      q: "How do JAM ROOM rooms work?",
      a: "Create a room, share your invite with friends, and use the room's supported music and queue features together.",
    },
    {
      q: "Is JAM ROOM available for Android?",
      a: "Yes. JAM ROOM is currently available for supported Android devices.",
    },
    {
      q: "Can I invite my friends?",
      a: "Yes. You can share a JAM ROOM invite and bring your friends into your room.",
    },
    {
      q: "Can we add music to the queue?",
      a: "JAM ROOM supports shared queue features based on the room's available controls and permissions.",
    },
    {
      q: "Can I import my YouTube Music playlist?",
      a: "JAM ROOM can import supported playlist information and match available tracks when this functionality is enabled. Private, restricted, or unsupported playlists may not be available.",
    },
    {
      q: "Does JAM ROOM download music from YouTube?",
      a: "No. JAM ROOM does not download or extract copyrighted audio from YouTube. Playlist import is designed to work with supported playlist information and legally available music sources.",
    },
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-16 sm:py-20 md:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 md:px-8">
        <Reveal>
          <SectionHead
            eyebrow="FAQ"
            title={
              <>
                Questions? <span className="text-gradient">We got answers.</span>
              </>
            }
          />
        </Reveal>
        <div className="mt-10 space-y-3">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 40}>
                <div
                  className={`glass rounded-2xl transition-all duration-300 ${
                    isOpen ? "border-white/20 bg-white/5" : "border-white/5"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-sans text-white text-sm sm:text-base font-semibold cursor-pointer select-none active:bg-white/5 rounded-2xl"
                  >
                    <span>{it.q}</span>
                    <ChevronDown
                      className={`transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-180 text-[var(--neon)]" : "text-muted-foreground"
                      }`}
                      size={18}
                    />
                  </button>
                  <div
                    className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0 px-5 pb-5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {it.a}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
