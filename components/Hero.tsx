"use client";

import { Sparkles, Zap, Users, Music2 } from "lucide-react";
import { Reveal, Avatar, AlbumArt, Equalizer, SoundWave, AndroidIcon } from "./shared";
import { ANDROID_APP_LINK } from "../app/page";

export default function Hero() {
  const friends = [
    { l: "AR", angle: 0 },
    { l: "SN", angle: 60 },
    { l: "KV", angle: 120 },
    { l: "MJ", angle: 180 },
    { l: "PT", angle: 240 },
    { l: "DA", angle: 300 },
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 md:pt-40 md:pb-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:px-8 lg:grid-cols-2 lg:items-center">
        <div className="text-center lg:text-left">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground">
              <span className="grid h-2 w-2 place-items-center rounded-full bg-[var(--neon-3)]">
                <span className="absolute h-2 w-2 rounded-full bg-[var(--neon-3)] animate-ping" />
              </span>
              Social music, live now
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
              Don't Just Listen.
              <br />
              <span className="text-gradient">Listen Together.</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Create a JAM ROOM, invite your friends, and enjoy music together.
              One room. One song. One vibe.
            </p>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm text-muted-foreground">
              <Sparkles size={16} className="text-[var(--neon)]" />
              Create Room <span className="opacity-40">•</span> Invite Friends{" "}
              <span className="opacity-40">•</span> Listen Together
            </div>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => handleScroll("how")}
                className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-6 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition hover:scale-[1.04] active:scale-95 border-0 cursor-pointer"
              >
                <Zap size={18} />
                Start the Vibe
              </button>
              <a
                href={ANDROID_APP_LINK}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full glass-strong px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10 active:scale-95"
              >
                <AndroidIcon />
                Download for Android
              </a>
            </div>
          </Reveal>
          <Reveal delay={480}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <div className="flex -space-x-3">
                {["AR", "SN", "KV", "MJ"].map((l, i) => (
                  <Avatar key={l} label={l} i={i} size={36} />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                Made for friends, groups, and crews.
              </div>
            </div>
          </Reveal>
        </div>

        {/* Hero visual */}
        <Reveal delay={200} className="w-full">
          <div className="relative mx-auto aspect-square w-full max-w-[280px] xs:max-w-[340px] sm:max-w-[420px] md:max-w-[500px]">
            {/* Concentric rings */}
            <div className="absolute inset-0 rounded-full border border-white/10" />
            <div className="absolute inset-6 xs:inset-8 rounded-full border border-white/10" />
            <div className="absolute inset-12 xs:inset-16 rounded-full border border-white/5" />

            {/* Rotating orbit line */}
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              fill="none"
            >
              <circle
                cx="50"
                cy="50"
                r="42"
                stroke="url(#heroRing)"
                strokeWidth="0.3"
                strokeDasharray="1 2"
              />
              <defs>
                <linearGradient id="heroRing" x1="0" x2="1">
                  <stop offset="0%" stopColor="oklch(0.78 0.22 320)" />
                  <stop offset="100%" stopColor="oklch(0.82 0.2 190)" />
                </linearGradient>
              </defs>
            </svg>

            {/* Friend avatars around */}
            {friends.map((f, i) => {
              const rad = (f.angle * Math.PI) / 180;
              const R = 44; // %
              const x = 50 + R * Math.cos(rad);
              const y = 50 + R * Math.sin(rad);
              return (
                <div
                  key={i}
                  className="absolute -translate-x-1/2 -translate-y-1/2 animate-float"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    animationDelay: `${i * 0.25}s`,
                  }}
                >
                  <Avatar label={f.l} i={i} size={i % 2 === 0 ? 36 : 48} ring />
                </div>
              );
            })}

            {/* Central player - responsive typography and sizes */}
            <div className="absolute left-1/2 top-1/2 w-[82%] xs:w-[78%] -translate-x-1/2 -translate-y-1/2">
              <div className="glass-strong rounded-2xl xs:rounded-3xl p-3 xs:p-5 shadow-[var(--shadow-glow)]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[8px] xs:text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
                    <span className="grid h-1.5 w-1.5 xs:h-2 xs:w-2 place-items-center">
                      <span className="absolute h-1.5 w-1.5 xs:h-2 xs:w-2 rounded-full bg-red-500 animate-ping" />
                      <span className="h-1.5 w-1.5 xs:h-2 xs:w-2 rounded-full bg-red-500" />
                    </span>
                    Live
                  </div>
                  <Equalizer className="h-4 xs:h-6" />
                </div>
                <div className="mt-1 xs:mt-2 font-display text-xs xs:text-sm font-semibold tracking-wide text-white">
                  FRIDAY NIGHT VIBES
                </div>
                <div className="mt-2 xs:mt-4 flex items-center gap-2 xs:gap-3">
                  <AlbumArt size={48} seed={0} className="xs:w-16 xs:h-16" />
                  <div className="min-w-0 flex-1">
                    <div className="text-[8px] xs:text-[10px] uppercase tracking-widest text-muted-foreground">
                      Now Playing
                    </div>
                    <div className="truncate text-xs xs:text-sm font-semibold text-white">Midnight Drive</div>
                    <div className="truncate text-[10px] xs:text-xs text-muted-foreground">
                      Artist Name
                    </div>
                  </div>
                </div>
                <div className="mt-2 xs:mt-4">
                  <div className="h-1 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full w-[42%] bg-brand-gradient" />
                  </div>
                  <div className="mt-1 flex justify-between text-[8px] xs:text-[10px] text-muted-foreground">
                    <span>2:14</span>
                    <span>3:48</span>
                  </div>
                </div>
                <div className="mt-2 xs:mt-3 flex items-center justify-between text-[9px] xs:text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users size={12} /> 6 Friends
                  </div>
                  <div className="flex -space-x-1.5">
                    {["AR", "SN", "KV"].map((l, i) => (
                      <Avatar key={l} label={l} i={i} size={18} ring={false} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating music notes */}
            {[
              ["8%", "18%", 0],
              ["88%", "18%", 1],
              ["10%", "82%", 2],
              ["82%", "78%", 3],
            ].map(([l, t, d], i) => (
              <Music2
                key={i}
                className="absolute text-white/30 animate-float-slow hidden xs:block"
                style={{
                  left: l as string,
                  top: t as string,
                  animationDelay: `${d}s`,
                }}
                size={16}
              />
            ))}
          </div>
        </Reveal>
      </div>

      {/* moving waveform strip */}
      <div className="mt-12 sm:mt-16 h-8 sm:h-10 w-full overflow-hidden opacity-60">
        <SoundWave className="h-full w-full" />
      </div>
    </section>
  );
}
