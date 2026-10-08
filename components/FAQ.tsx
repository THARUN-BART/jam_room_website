"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal, SectionHead } from "./shared";

export default function FAQ() {
  const items = [
    {
      q: "What is JAM ROOM?",
      a: "JAM ROOM is a social music app that lets you create a music room, invite friends, and enjoy a synchronized shared listening experience.",
    },
    {
      q: "How does Jam Room synchronization achieve ~50ms latency?",
      a: "JAM ROOM uses high-precision timestamp sync and clock-drift correction across connected devices, ensuring everyone in the room hears the exact same beat in near-instant lockstep at ~50ms latency.",
    },
    {
      q: "What is the 5-step YouTube streaming fallback chain?",
      a: "To protect your listening sessions from API rate limits and broken streams, JAM ROOM employs an automated 5-step fallback pipeline that automatically swaps to alternative sources without interrupting playback.",
    },
    {
      q: "Can I play audio files from my phone's local storage?",
      a: "Yes! JAM ROOM scans, indexes, and plays local audio files directly from your phone storage, allowing you to search and listen to device music alongside streaming playlists.",
    },
    {
      q: "Does background playback survive app switches and system task kills?",
      a: "Yes. JAM ROOM features a persistent foreground audio service equipped with lock screen controls and media notification actions that survives app minimization, switches, and aggressive OS background kills.",
    },
    {
      q: "How do offline downloads work in JAM ROOM?",
      a: "Downloaded tracks are stored in .m4a format complete with embedded metadata and full-resolution album artwork, letting you enjoy your music anytime without network connectivity.",
    },
    {
      q: "What makes artwork loading blink-free?",
      a: "JAM ROOM uses an instant in-memory artwork cache that eliminates image flicker and reload flashes during UI re-renders and song transitions.",
    },
    {
      q: "Can I import my YouTube Music playlist?",
      a: "JAM ROOM can import supported playlist information and match available tracks when this functionality is enabled. Private, restricted, or unsupported playlists may not be available.",
    },
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      className="relative py-16 sm:py-20 md:py-32"
      aria-label="Frequently Asked Questions"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 md:px-8">
        <Reveal>
          <SectionHead
            eyebrow="FAQ"
            title={
              <>
                Questions? <span className="text-gradient">We got answers.</span>
              </>
            }
            sub="Everything you need to know about Jam Rooms, streaming fallbacks, and features."
          />
        </Reveal>
        <div className="mt-10 space-y-3">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 30}>
                <div
                  itemScope
                  itemProp="mainEntity"
                  itemType="https://schema.org/Question"
                  className={`glass rounded-2xl transition-all duration-300 ${
                    isOpen ? "border-white/20 bg-white/5" : "border-white/5"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-sans text-white text-sm sm:text-base font-semibold cursor-pointer select-none active:bg-white/5 rounded-2xl"
                  >
                    <span itemProp="name">{it.q}</span>
                    <ChevronDown
                      className={`transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-180 text-[var(--neon)]" : "text-muted-foreground"
                      }`}
                      size={18}
                    />
                  </button>
                  <div
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                    className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div
                      itemProp="text"
                      className="min-h-0 px-5 pb-5 text-xs sm:text-sm text-muted-foreground leading-relaxed"
                    >
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
