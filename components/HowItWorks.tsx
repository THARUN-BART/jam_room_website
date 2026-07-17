"use client";

import { type ReactNode } from "react";
import { PlusCircle, Users, Headphones, Copy, Share2 } from "lucide-react";
import { Reveal, SectionHead, Equalizer, SoundWave, Avatar } from "./shared";

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-16 sm:py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <Reveal>
          <SectionHead
            eyebrow="How it works"
            title={
              <>
                Start a JAM in <span className="text-gradient">3 Steps</span>
              </>
            }
            sub="Your shared music room is only a few taps away."
          />
        </Reveal>

        <div className="relative mt-12 sm:mt-16 grid gap-6 md:grid-cols-3">
          {/* connecting line */}
          <div className="pointer-events-none absolute left-0 right-0 top-24 hidden md:block">
            <div
              className="mx-auto h-px w-4/5"
              style={{
                background:
                  "linear-gradient(90deg, transparent, oklch(0.78 0.22 320 / 0.6), oklch(0.72 0.2 260 / 0.6), oklch(0.82 0.2 190 / 0.6), transparent)",
              }}
            />
          </div>

          <Reveal>
            <StepCard
              step="01"
              title="CREATE A ROOM"
              icon={<PlusCircle size={22} />}
              desc="Start your own JAM ROOM in seconds. Name your room and set the vibe."
            >
              <div className="glass rounded-2xl p-4">
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
                  Room Name
                </div>
                <div className="mt-2 rounded-lg bg-white/5 px-3 py-2 text-sm text-white select-none">
                  Friday Night Vibes
                </div>
                <button className="mt-3 w-full rounded-lg bg-brand-gradient py-2.5 text-xs font-semibold text-white transition active:scale-95 shadow-sm">
                  CREATE ROOM
                </button>
              </div>
            </StepCard>
          </Reveal>
          
          <Reveal delay={150}>
            <StepCard
              step="02"
              title="INVITE YOUR FRIENDS"
              icon={<Users size={22} />}
              desc="Share your JAM ROOM invite with your friends and bring the crew together."
            >
              <div className="glass rounded-2xl p-4">
                <div className="font-display text-sm font-bold text-white truncate">
                  Friday Night Vibes
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  You're invited to a JAM ROOM.
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <button className="inline-flex items-center justify-center gap-1 rounded-lg glass px-2 py-2.5 text-xs text-white transition active:scale-95">
                    <Copy size={12} />
                    Copy Link
                  </button>
                  <button className="inline-flex items-center justify-center gap-1 rounded-lg bg-brand-gradient px-2 py-2.5 text-xs font-semibold text-white transition active:scale-95">
                    <Share2 size={12} />
                    Share
                  </button>
                </div>
              </div>
            </StepCard>
          </Reveal>
          
          <Reveal delay={300}>
            <StepCard
              step="03"
              title="LISTEN TOGETHER"
              icon={<Headphones size={22} />}
              desc="Join the room and enjoy the shared music experience with your friends."
            >
              <div className="glass rounded-2xl p-4">
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {["AR", "SN", "KV", "MJ"].map((l, i) => (
                      <Avatar key={l} label={l} i={i} size={24} />
                    ))}
                  </div>
                  <Equalizer bars={4} className="h-5" />
                </div>
                <div className="mt-3 h-10 overflow-hidden">
                  <SoundWave className="h-full w-full" />
                </div>
              </div>
            </StepCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function StepCard({
  step,
  title,
  desc,
  icon,
  children,
}: {
  step: string;
  title: string;
  desc: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="glass-strong relative rounded-3xl p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]">
      <div className="flex items-center justify-between">
        <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-gradient text-white shadow-[var(--shadow-glow)]">
          {icon}
        </div>
        <div className="font-display text-4xl font-bold text-white/10 select-none">
          {step}
        </div>
      </div>
      <h3 className="mt-4 font-display text-lg font-bold tracking-wide text-white">
        {title}
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
      <div className="mt-5">{children}</div>
    </div>
  );
}
