"use client";

import {
  Headphones,
  Globe,
  HardDrive,
  Image as ImageIcon,
  ScrollText,
  Smartphone,
  Download,
  MessageSquare,
  Library,
  Search,
  Maximize2,
  Palette,
  Disc,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Reveal, SectionHead, Equalizer, Avatar } from "./shared";

export default function Features() {
  return (
    <section
      id="features"
      className="relative py-16 sm:py-20 md:py-32"
      aria-label="Core Features and Capabilities"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <meta itemProp="name" content="JAM ROOM Core Features" />
      <meta
        itemProp="description"
        content="Synchronized playback across all devices at ~50ms latency, YouTube streaming 5-step fallback chain, device storage audio, offline .m4a downloads, and synced lyrics."
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <Reveal>
          <SectionHead
            eyebrow="Core Features"
            title={
              <>
                Engineered for the <span className="text-gradient">Ultimate JAM</span>
              </>
            }
            sub="No fluff. Just the essential, high-performance features that power your synchronized listening experience."
          />
        </Reveal>

        {/* ============================================================ */}
        {/* ROW 1: THE REAL-TIME SYNC & STREAMING ENGINE (Asymmetric 7/5) */}
        {/* ============================================================ */}
        <div className="mt-12 sm:mt-16 grid gap-6 lg:grid-cols-12 items-stretch">
          {/* Card 1: Jam Rooms & Live Chat */}
          <Reveal className="lg:col-span-7 flex">
            <div
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              className="glass-strong relative w-full rounded-3xl p-6 sm:p-8 overflow-hidden shadow-[var(--shadow-glow)] border border-white/10 flex flex-col justify-between"
            >
              <meta itemProp="position" content="1" />
              <meta itemProp="name" content="Jam Rooms" />
              <meta
                itemProp="description"
                content="Synchronized playback across all devices at ~50ms latency"
              />

              {/* Ambient purple/cyan radial glow */}
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full opacity-30 blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, oklch(0.78 0.22 320), transparent 70%)",
                }}
              />

              <div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-soft text-white shadow-sm">
                      <Headphones size={20} />
                    </div>
                    <span className="font-display text-sm font-bold tracking-wider text-white">
                      JAM ROOMS
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-semibold text-[var(--neon)]">
                    <span className="h-2 w-2 rounded-full bg-red-500 animate-ping" />
                    ~50ms Latency
                  </span>
                </div>

                <h3 className="mt-5 font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Synchronized Playback <span className="text-gradient">Across All Devices</span>
                </h3>

                <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
                  Synchronized playback across all devices at ~50ms latency. Plus a shared real-time
                  queue and chat inside every room so everyone stays connected in lockstep.
                </p>
              </div>

              {/* Live Room Mockup Card */}
              <div className="mt-6 rounded-2xl glass p-4 border border-white/10 bg-black/40">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {["AR", "SN", "KV", "MJ"].map((u, i) => (
                        <Avatar key={u} label={u} i={i} size={28} />
                      ))}
                    </div>
                    <span className="text-xs text-zinc-300 font-medium">4 Listeners synced</span>
                  </div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-[var(--neon-3)] bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon-3)] animate-pulse" />
                    Ping: ~50ms • Zero Drift
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-2 text-white font-medium">
                    <MessageSquare size={14} className="text-[var(--neon)]" />
                    <span>Live Chat & Queue inside every room</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Equalizer bars={3} className="h-3.5" />
                    <span className="text-[11px] text-zinc-400">Lockstep Audio</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card 2: YouTube Streaming & Offline Downloads */}
          <Reveal delay={120} className="lg:col-span-5 flex">
            <div
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              className="glass-strong relative w-full rounded-3xl p-6 sm:p-8 overflow-hidden border border-white/10 flex flex-col justify-between"
            >
              <meta itemProp="position" content="2" />
              <meta itemProp="name" content="YouTube Streaming" />
              <meta
                itemProp="description"
                content="5-step fallback chain — survives rate limits automatically"
              />

              <div>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-soft text-white shadow-sm">
                      <Globe size={20} />
                    </div>
                    <span className="font-display text-sm font-bold tracking-wider text-white">
                      STREAMING & OFFLINE
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-xs font-semibold text-[var(--neon-2)]">
                    5-Step Fallback
                  </span>
                </div>

                <h3 className="mt-5 font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                  YouTube Streaming & <span className="text-gradient">Offline Downloads</span>
                </h3>

                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  5-step fallback chain — survives rate limits automatically. Download `.m4a` +
                  metadata + art to enjoy music anywhere without network connectivity.
                </p>
              </div>

              {/* Failover Diagram */}
              <div className="mt-6 space-y-2.5">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold flex items-center justify-between">
                  <span>Failover Pipeline</span>
                  <span className="text-[var(--neon-3)]">Survives Rate Limits</span>
                </div>

                <div className="grid grid-cols-5 gap-1.5 text-center text-[10px] font-mono">
                  {["Stream 1", "Stream 2", "Proxy", "Mirror", "Cache"].map((node, idx) => (
                    <div
                      key={node}
                      className={`p-2 rounded-xl border transition-all ${
                        idx === 0
                          ? "bg-brand-soft border-white/20 text-white font-semibold"
                          : "glass border-white/5 text-muted-foreground"
                      }`}
                    >
                      <div className="text-[8px] opacity-60">Step {idx + 1}</div>
                      <div className="truncate mt-0.5">{node}</div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5 text-zinc-300">
                    <Download size={13} className="text-[var(--neon-3)]" />
                    Offline Downloads
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400">.m4a + Metadata + Art</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ============================================================ */}
        {/* ROW 2: SYNCED LYRICS, VINYL SPINNER & BLINK-FREE UI (Full width) */}
        {/* ============================================================ */}
        <Reveal delay={200} className="mt-6">
          <div
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
            className="glass-strong relative rounded-3xl p-6 sm:p-8 md:p-10 overflow-hidden border border-white/10"
          >
            <meta itemProp="position" content="3" />
            <meta itemProp="name" content="Synced Lyrics & Animated UI" />
            <meta
              itemProp="description"
              content="Real-time synchronized lyrics display with interactive line tracking. Neon dark theme, vinyl spinner, animated equalizer wave, and blink-free cached artwork."
            />

            <div className="grid gap-8 md:grid-cols-12 md:items-center">
              {/* Left Column */}
              <div className="md:col-span-7">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-semibold text-[var(--neon-3)]">
                    <ScrollText size={13} /> Synced Lyrics
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-semibold text-[var(--neon)]">
                    <Palette size={13} /> Animated UI
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-semibold text-zinc-300">
                    <ImageIcon size={13} /> Blink-Free Artwork
                  </span>
                </div>

                <h3 className="mt-5 font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                  Synced Lyrics & <span className="text-gradient">Animated Vinyl UI</span>
                </h3>

                <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
                  Real-time synchronized lyrics display with interactive line tracking. Experience a
                  stunning neon dark theme, vinyl spinner, animated equalizer wave, and instant
                  in-memory artwork cache preventing image flicker on rebuilds.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1.5 text-zinc-300">
                    <Maximize2 size={14} className="text-[var(--neon-3)]" />
                    <span>Responsive Layout (Down to 320px)</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-zinc-300">
                    <Sparkles size={14} className="text-[var(--neon)]" />
                    <span>Blink-Free Cached Artwork</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Rotating Vinyl & Interactive Lyrics Bar */}
              <div className="md:col-span-5">
                <div className="rounded-2xl glass p-5 sm:p-6 border border-white/15 bg-black/50 shadow-2xl flex flex-col sm:flex-row items-center gap-5">
                  {/* Rotating Vinyl Record */}
                  <div className="relative shrink-0">
                    <div
                      className="h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-zinc-950 border-2 border-white/20 shadow-[0_0_25px_rgba(255,94,168,0.3)] flex items-center justify-center animate-spin"
                      style={{ animationDuration: "6s" }}
                    >
                      {/* Vinyl Grooves */}
                      <div className="absolute inset-2 rounded-full border border-white/10" />
                      <div className="absolute inset-4 rounded-full border border-white/5" />
                      <div className="absolute inset-7 rounded-full border border-white/5" />
                      {/* Vinyl Label */}
                      <div className="h-7 w-7 rounded-full bg-brand-gradient flex items-center justify-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-black" />
                      </div>
                    </div>
                  </div>

                  {/* Karaoke Lyric Snippet */}
                  <div className="min-w-0 flex-1 w-full space-y-1.5 text-left">
                    <div className="text-[10px] uppercase tracking-wider text-[var(--neon-3)] font-semibold flex items-center gap-1">
                      <ScrollText size={12} /> Interactive Line Tracking
                    </div>
                    <div className="text-xs text-muted-foreground/50 truncate">
                      ♪ &quot;Feel the rhythm in the room...&quot;
                    </div>
                    <div className="text-sm font-bold text-white tracking-wide truncate bg-white/10 px-3 py-1.5 rounded-xl border-l-2 border-[var(--neon)]">
                      ► &quot;Synchronized across the crew&quot;
                    </div>
                    <div className="text-xs text-muted-foreground/50 truncate">
                      ♪ &quot;One room. One song. One vibe.&quot;
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ============================================================ */}
        {/* ROW 3: STORAGE, BACKGROUND & LIBRARY (4 Clean Sleek Cards)    */}
        {/* ============================================================ */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 4: Device Storage Music */}
          <Reveal delay={100}>
            <div
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              className="glass rounded-3xl p-6 h-full flex flex-col justify-between border border-white/10 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/5"
            >
              <meta itemProp="position" content="4" />
              <meta itemProp="name" content="Device Storage Music" />
              <meta
                itemProp="description"
                content="Scan, search, and play local audio files directly from phone storage"
              />

              <div>
                <div className="flex items-center justify-between">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-soft text-white">
                    <HardDrive size={18} />
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-muted-foreground">
                    Local Audio
                  </span>
                </div>

                <h4 className="mt-4 font-display text-base font-bold text-white">
                  Device Storage Music
                </h4>

                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Scan, search, and play local audio files directly from phone storage.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-semibold text-[var(--neon-3)] flex items-center justify-between">
                <span>Direct Local Scan</span>
                <ArrowRight size={12} />
              </div>
            </div>
          </Reveal>

          {/* Card 5: Background Playback */}
          <Reveal delay={150}>
            <div
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              className="glass rounded-3xl p-6 h-full flex flex-col justify-between border border-white/10 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/5"
            >
              <meta itemProp="position" content="5" />
              <meta itemProp="name" content="Background Playback" />
              <meta
                itemProp="description"
                content="Lock screen controls, notification actions, survives app switches & kills"
              />

              <div>
                <div className="flex items-center justify-between">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-soft text-white">
                    <Smartphone size={18} />
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-muted-foreground">
                    Playback
                  </span>
                </div>

                <h4 className="mt-4 font-display text-base font-bold text-white">
                  Background Playback
                </h4>

                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Lock screen controls, notification actions, survives app switches & kills.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-semibold text-[var(--neon)] flex items-center justify-between">
                <span>Foreground Audio</span>
                <ArrowRight size={12} />
              </div>
            </div>
          </Reveal>

          {/* Card 6: Personal Library */}
          <Reveal delay={200}>
            <div
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              className="glass rounded-3xl p-6 h-full flex flex-col justify-between border border-white/10 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/5"
            >
              <meta itemProp="position" content="6" />
              <meta itemProp="name" content="Personal Library" />
              <meta
                itemProp="description"
                content="Liked songs, playlists, downloads, and device audio in one place"
              />

              <div>
                <div className="flex items-center justify-between">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-soft text-white">
                    <Library size={18} />
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-muted-foreground">
                    Library
                  </span>
                </div>

                <h4 className="mt-4 font-display text-base font-bold text-white">
                  Personal Library
                </h4>

                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Liked songs, playlists, downloads, and device audio in one place.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-semibold text-[var(--neon-2)] flex items-center justify-between">
                <span>All-in-One Hub</span>
                <ArrowRight size={12} />
              </div>
            </div>
          </Reveal>

          {/* Card 7: Library Search */}
          <Reveal delay={250}>
            <div
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              className="glass rounded-3xl p-6 h-full flex flex-col justify-between border border-white/10 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/5"
            >
              <meta itemProp="position" content="7" />
              <meta itemProp="name" content="Library Search" />
              <meta
                itemProp="description"
                content="Instant search across personal playlists, downloads, and device songs"
              />

              <div>
                <div className="flex items-center justify-between">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-soft text-white">
                    <Search size={18} />
                  </div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-muted-foreground">
                    Search
                  </span>
                </div>

                <h4 className="mt-4 font-display text-base font-bold text-white">
                  Library Search
                </h4>

                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Instant search across personal playlists, downloads, and device songs.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-semibold text-zinc-300 flex items-center justify-between">
                <span>Unified Fast Search</span>
                <ArrowRight size={12} />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
