"use client";

import { useState } from "react";
import {
  Check,
  X,
  Zap,
  Sparkles,
  ShieldCheck,
  Headphones,
  Smartphone,
  Download,
  Flame,
  Music2,
  ArrowRight,
} from "lucide-react";
import { Reveal, SectionHead, AndroidIcon } from "./shared";
import { ANDROID_APP_LINK } from "../app/page";

interface ComparisonRow {
  feature: string;
  jamRoom: string;
  jamRoomSub: string;
  spotifyJam: string;
  discord: string;
  highlight?: boolean;
}

const COMPARISON_DATA: ComparisonRow[] = [
  {
    feature: "Price & Subscription",
    jamRoom: "100% Free Forever",
    jamRoomSub: "Zero paywalls or hidden fees",
    spotifyJam: "$11.99/mo Premium required for every friend",
    discord: "Free but requires complex bots/paid Nitro",
    highlight: true,
  },
  {
    feature: "Sync Playback Latency",
    jamRoom: "~50ms Ultra-Low Latency",
    jamRoomSub: "Lockstep sync with zero drift",
    spotifyJam: "Frequent desync & buffering lag",
    discord: "High audio latency & compression",
    highlight: true,
  },
  {
    feature: "Background & Lock Screen",
    jamRoom: "Survives screen locks & app kills",
    jamRoomSub: "Persistent foreground audio service",
    spotifyJam: "Basic lockscreen only",
    discord: "Drains battery, no native lockscreen player",
    highlight: true,
  },
  {
    feature: "Account & Authentication",
    jamRoom: "Firebase Verified Sign-In",
    jamRoomSub: "Fast, secure authentication & sync",
    spotifyJam: "Requires Spotify account + paid Premium",
    discord: "Requires Discord account & bot config",
  },
  {
    feature: "Offline .m4a Downloads",
    jamRoom: "Free with artwork & metadata",
    jamRoomSub: "Plays without network",
    spotifyJam: "Stream only (no portable files)",
    discord: "No offline downloads",
  },
  {
    feature: "Local Phone Storage Music",
    jamRoom: "Full device storage scan",
    jamRoomSub: "Blends local MP3s into your library",
    spotifyJam: "Clunky local files desktop sync",
    discord: "Not supported",
  },
  {
    feature: "Synced Karaoke Lyrics",
    jamRoom: "Live line tracking in real time",
    jamRoomSub: "Interactive sing-along bar",
    spotifyJam: "Static lyrics only",
    discord: "Not supported",
  },
];

export default function Community() {
  const [activeTab, setActiveTab] = useState<"comparison" | "reasons">("comparison");

  return (
    <section id="why" className="relative py-16 sm:py-24 md:py-36">
      {/* Background glow orb */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 h-[500px] w-[500px] rounded-full opacity-25 blur-[120px]"
        style={{
          background: "radial-gradient(circle, oklch(0.78 0.22 320), oklch(0.72 0.2 260), transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <Reveal>
          <SectionHead
            eyebrow="Why JAM ROOM?"
            title={
              <>
                Why Pay For Music Sync? <span className="text-gradient">Experience True Freedom.</span>
              </>
            }
            sub="Listening to music with friends shouldn't cost $12/month, buffer out of sync, or stop playing the second you lock your screen. See why thousands of crews choose JAM ROOM."
          />
        </Reveal>

        {/* View Switcher Pills */}
        <div className="mt-8 sm:mt-10 flex justify-center">
          <div className="inline-flex rounded-full glass p-1 border border-white/10 shadow-lg">
            <button
              onClick={() => setActiveTab("comparison")}
              className={`rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition cursor-pointer ${
                activeTab === "comparison"
                  ? "bg-brand-gradient text-white shadow-[var(--shadow-glow)]"
                  : "text-muted-foreground hover:text-white"
              }`}
            >
              JAM ROOM vs The Rest
            </button>
            <button
              onClick={() => setActiveTab("reasons")}
              className={`rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition cursor-pointer ${
                activeTab === "reasons"
                  ? "bg-brand-gradient text-white shadow-[var(--shadow-glow)]"
                  : "text-muted-foreground hover:text-white"
              }`}
            >
              3 Reasons to Download Today
            </button>
          </div>
        </div>

        {/* ============================================================ */}
        {/* TAB 1: HEAD-TO-HEAD COMPARISON MATRIX                       */}
        {/* ============================================================ */}
        {activeTab === "comparison" && (
          <Reveal delay={100}>
            <div className="mt-10 overflow-hidden rounded-3xl glass-strong border border-white/10 shadow-[var(--shadow-glow)]">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/5">
                      <th className="py-5 px-4 sm:px-6 font-display font-bold text-white text-xs uppercase tracking-wider">
                        Feature / Capability
                      </th>
                      <th className="py-5 px-4 sm:px-6 font-display font-bold text-[var(--neon)] text-xs uppercase tracking-wider bg-brand-soft/20 border-x border-white/10">
                        <div className="flex items-center gap-1.5">
                          <Flame size={14} />
                          <span>JAM ROOM (Free APK)</span>
                        </div>
                      </th>
                      <th className="py-5 px-4 sm:px-6 font-display font-semibold text-zinc-400 text-xs uppercase tracking-wider">
                        Spotify Jam
                      </th>
                      <th className="py-5 px-4 sm:px-6 font-display font-semibold text-zinc-400 text-xs uppercase tracking-wider">
                        Discord / YouTube
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {COMPARISON_DATA.map((row, idx) => (
                      <tr
                        key={row.feature}
                        className={`transition hover:bg-white/[0.03] ${
                          row.highlight ? "bg-white/[0.015]" : ""
                        }`}
                      >
                        {/* Feature title */}
                        <td className="py-4 px-4 sm:px-6 font-semibold text-white whitespace-nowrap">
                          {row.feature}
                        </td>

                        {/* JAM ROOM Column (Highlighted) */}
                        <td className="py-4 px-4 sm:px-6 bg-brand-soft/10 border-x border-white/10">
                          <div className="flex items-start gap-2">
                            <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold mt-0.5">
                              <Check size={11} strokeWidth={3} />
                            </span>
                            <div>
                              <div className="font-bold text-white tracking-wide">
                                {row.jamRoom}
                              </div>
                              <div className="text-[11px] text-[var(--neon-3)] font-medium mt-0.5">
                                {row.jamRoomSub}
                              </div>
                            </div>
                          </div>
                        </td>

                        {/* Spotify Jam */}
                        <td className="py-4 px-4 sm:px-6 text-zinc-400">
                          <div className="flex items-start gap-2">
                            <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-red-500/20 text-red-400 text-[10px] font-bold mt-0.5">
                              <X size={11} strokeWidth={3} />
                            </span>
                            <span>{row.spotifyJam}</span>
                          </div>
                        </td>

                        {/* Discord / Others */}
                        <td className="py-4 px-4 sm:px-6 text-zinc-400">
                          <div className="flex items-start gap-2">
                            <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-zinc-800 text-zinc-400 text-[10px] font-bold mt-0.5">
                              <X size={11} strokeWidth={3} />
                            </span>
                            <span>{row.discord}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        )}

        {/* ============================================================ */}
        {/* TAB 2: 3 CORE REASONS TO DOWNLOAD TODAY                      */}
        {/* ============================================================ */}
        {activeTab === "reasons" && (
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {/* Reason 1 */}
            <Reveal delay={50}>
              <div className="glass-strong h-full rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between">
                <div>
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-soft text-[var(--neon)] shadow-sm">
                    <Zap size={24} />
                  </div>
                  <div className="mt-4 text-xs font-mono uppercase tracking-wider text-[var(--neon)] font-bold">
                    Reason #1
                  </div>
                  <h3 className="mt-2 font-display text-xl font-bold text-white">
                    The Free Aux Cord For Your Whole Crew
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    No more arguing over who connects to the Bluetooth speaker, and no more requiring
                    everyone to pay $11.99/month for Spotify Premium. Anyone in the room can add tracks,
                    reorder the queue, and vote on the playlist live.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 text-xs text-[var(--neon-3)] font-semibold flex items-center justify-between">
                  <span>Shared Queue & Chat</span>
                  <ArrowRight size={13} />
                </div>
              </div>
            </Reveal>

            {/* Reason 2 */}
            <Reveal delay={120}>
              <div className="glass-strong h-full rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between shadow-[var(--shadow-glow)]">
                <div>
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-soft text-[var(--neon-2)] shadow-sm">
                    <Smartphone size={24} />
                  </div>
                  <div className="mt-4 text-xs font-mono uppercase tracking-wider text-[var(--neon-2)] font-bold">
                    Reason #2
                  </div>
                  <h3 className="mt-2 font-display text-xl font-bold text-white">
                    Music That Survives Real Life
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    Ever used a free music app that stops playback the exact moment you lock your phone
                    or switch to WhatsApp? JAM ROOM runs as a resilient foreground audio service with
                    lock screen controls and notification actions that survives app switches and aggressive OS kills.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 text-xs text-[var(--neon)] font-semibold flex items-center justify-between">
                  <span>Background Audio Engine</span>
                  <ArrowRight size={13} />
                </div>
              </div>
            </Reveal>

            {/* Reason 3 */}
            <Reveal delay={190}>
              <div className="glass-strong h-full rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between">
                <div>
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-soft text-[var(--neon-3)] shadow-sm">
                    <Headphones size={24} />
                  </div>
                  <div className="mt-4 text-xs font-mono uppercase tracking-wider text-[var(--neon-3)] font-bold">
                    Reason #3
                  </div>
                  <h3 className="mt-2 font-display text-xl font-bold text-white">
                    ~50ms Lockstep Sync — Zero Lag
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    Stop counting &quot;3, 2, 1, press play&quot; on phone calls. With high-precision socket
                    synchronization and drift correction, everyone in the room hears the drop at the exact
                    same millisecond, whether you&apos;re in the next room or across the country.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 text-xs text-zinc-300 font-semibold flex items-center justify-between">
                  <span>Ultra-Low Latency Audio</span>
                  <ArrowRight size={13} />
                </div>
              </div>
            </Reveal>
          </div>
        )}

        {/* High-Converting Bottom Conversion Bar */}
        <Reveal delay={150}>
          <div className="mt-12 sm:mt-16 rounded-3xl glass p-6 sm:p-8 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-white/[0.04] via-brand-soft/20 to-white/[0.04]">
            <div className="text-center sm:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-[var(--neon-3)] font-semibold mb-2">
                <Sparkles size={13} /> Firebase Verified • Safe & Secure Download
              </div>
              <h4 className="font-display text-xl sm:text-2xl font-bold text-white">
                Ready to start the vibe with your crew?
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
                Download the free 40MB Android APK via Google Drive. Install in seconds with Firebase secure auth.
              </p>
            </div>

            <a
              href={ANDROID_APP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-3 rounded-full bg-brand-gradient px-8 py-4 text-sm font-semibold text-white shadow-[var(--shadow-glow-strong)] transition hover:scale-105 active:scale-95"
            >
              <AndroidIcon /> Download JAM ROOM Free
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
