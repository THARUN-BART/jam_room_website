"use client";

import { useState, type ReactNode } from "react";
import {
  Link2,
  Search,
  CheckCircle2,
  Loader2,
  Sparkles,
  RefreshCw,
} from "lucide-react";
import { Reveal, SectionHead, SpotifyIcon, YouTubeIcon } from "./shared";

type SourceType = "spotify" | "youtube";

export default function PlaylistImport() {
  const [selectedSource, setSelectedSource] = useState<SourceType>("spotify");
  const [state, setState] = useState<"idle" | "loading" | "success">("idle");
  const [url, setUrl] = useState(
    "https://open.spotify.com/playlist/37i9dQZF1E360SMEa7qn4R"
  );

  const handleSourceSelect = (src: SourceType) => {
    setSelectedSource(src);
    setState("idle");
    if (src === "spotify") {
      setUrl("https://open.spotify.com/playlist/37i9dQZF1E360SMEa7qn4R");
    } else {
      setUrl("https://www.youtube.com/playlist?list=PL4fGSIFgk54G1Z2X_a6w24E8S0-");
    }
  };

  const doImport = () => {
    if (!url) return;
    setState("loading");
    setTimeout(() => setState("success"), 1600);
  };

  const isSpotify =
    selectedSource === "spotify" ||
    url.toLowerCase().includes("spotify.com") ||
    url.toLowerCase().includes("open.spotify");

  return (
    <section id="playlist-import" className="relative py-16 sm:py-20 md:py-32">
      {/* Background glow accent */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] sm:w-[700px] rounded-full opacity-20 blur-3xl transition-colors duration-700"
        style={{
          background: isSpotify
            ? "radial-gradient(circle, #1DB954, transparent 70%)"
            : "radial-gradient(circle, oklch(0.78 0.22 320), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        <Reveal>
          <SectionHead
            eyebrow="Spotify & YouTube Integration"
            title={
              <>
                Import from Spotify.{" "}
                <span className={isSpotify ? "text-[#1DB954]" : "text-gradient"}>
                  Sync with the JAM.
                </span>
              </>
            }
            sub="Got your favorite playlists on Spotify or YouTube? Paste any public link to import tracks into JAM ROOM with zero tokens or logins needed — and sync updates anytime with a single tap."
          />
        </Reveal>

        {/* Source selector tabs */}
        <Reveal delay={80}>
          <div className="mt-8 flex justify-center">
            <div className="glass inline-flex items-center gap-1.5 p-1.5 rounded-2xl border border-white/10 shadow-lg">
              <button
                onClick={() => handleSourceSelect("spotify")}
                className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedSource === "spotify"
                    ? "bg-[#1DB954] text-black shadow-[0_0_20px_rgba(29,185,84,0.4)]"
                    : "text-muted-foreground hover:text-white hover:bg-white/5"
                }`}
              >
                <SpotifyIcon size={18} />
                Spotify Playlist
              </button>
              <button
                onClick={() => handleSourceSelect("youtube")}
                className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedSource === "youtube"
                    ? "bg-brand-gradient text-white shadow-[var(--shadow-glow)]"
                    : "text-muted-foreground hover:text-white hover:bg-white/5"
                }`}
              >
                <YouTubeIcon size={18} />
                YouTube Playlist
              </button>
            </div>
          </div>
        </Reveal>

        {/* Import Input Box */}
        <Reveal delay={140}>
          <div className="mx-auto mt-6 max-w-2xl">
            <div className="glass-strong rounded-2xl p-2.5 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 border border-white/10 shadow-xl">
              <div className="flex items-center flex-1 px-2.5 py-1">
                <div
                  className={`shrink-0 pl-1 transition-colors ${
                    isSpotify ? "text-[#1DB954]" : "text-muted-foreground"
                  }`}
                >
                  {isSpotify ? <SpotifyIcon size={20} /> : <Link2 size={20} />}
                </div>
                <input
                  value={url}
                  onChange={(e) => {
                    setUrl(e.target.value);
                    if (state !== "idle") setState("idle");
                  }}
                  placeholder={
                    selectedSource === "spotify"
                      ? "https://open.spotify.com/playlist/..."
                      : "https://www.youtube.com/playlist?list=..."
                  }
                  className="flex-1 bg-transparent px-3 py-2 text-sm text-white outline-none placeholder:text-muted-foreground/60 w-full font-mono"
                />
              </div>
              <button
                onClick={doImport}
                disabled={state === "loading" || !url}
                className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-white shadow-md transition hover:scale-[1.02] active:scale-98 disabled:opacity-50 select-none cursor-pointer ${
                  isSpotify
                    ? "bg-[#1DB954] text-black hover:bg-[#1ed760] shadow-[0_0_24px_rgba(29,185,84,0.35)]"
                    : "bg-brand-gradient shadow-[var(--shadow-glow)]"
                }`}
              >
                {state === "loading" ? (
                  <Loader2 className="animate-spin" size={16} />
                ) : (
                  <Sparkles size={16} />
                )}
                Import {isSpotify ? "Spotify" : "YouTube"}
              </button>
            </div>

            <div className="mt-3 flex flex-wrap items-center justify-between gap-2 px-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1DB954]" />
                Zero login & no Spotify account required
              </span>
              <span className="inline-flex items-center gap-1.5">
                <RefreshCw size={12} className="text-[#1DB954]" />
                One-tap sync button to refresh modified playlists
              </span>
            </div>
          </div>
        </Reveal>

        {/* 3 Step Pipeline Cards */}
        <Reveal delay={200}>
          <div className="mx-auto mt-12 grid gap-4 sm:grid-cols-3 max-w-4xl">
            <ImportStage
              active
              state={state}
              step={1}
              title={isSpotify ? "Paste Spotify Link" : "Playlist Link"}
              icon={isSpotify ? <SpotifyIcon size={20} /> : <Link2 size={18} />}
              desc={
                isSpotify
                  ? "Read public track names, artists, and artwork directly via Spotify's open web format without tokens."
                  : "Read public playlist metadata from any YouTube or YouTube Music link."
              }
              accentColor={isSpotify ? "#1DB954" : undefined}
            />
            <ImportStage
              active={state !== "idle"}
              state={state}
              step={2}
              title="Smart Match & Disambiguation"
              icon={<Search size={18} />}
              desc="Evaluates title and artist candidate scores, discarding covers, karaoke, and remixes to find the exact high-res audio stream."
              loading={state === "loading"}
              accentColor={isSpotify ? "#1DB954" : undefined}
            />
            <ImportStage
              active={state === "success"}
              state={state}
              step={3}
              title="Library & Live Sync"
              icon={<RefreshCw size={18} />}
              desc="Instantly ready in your personal library and shared rooms. Tap the Sync button anytime to pull newly added Spotify tracks."
              accentColor={isSpotify ? "#1DB954" : undefined}
            />
          </div>

          <div className="mx-auto mt-8 max-w-xl text-center text-sm font-medium">
            {state === "idle" && (
              <span className="text-muted-foreground">
                Paste a link above or click Import to see the interactive flow.
              </span>
            )}
            {state === "loading" && (
              <span className="text-muted-foreground inline-flex items-center gap-2">
                <Loader2 className="animate-spin text-[#1DB954]" size={16} />
                Resolving tracks and fetching per-track cover artwork...
              </span>
            )}
            {state === "success" && (
              <div className="inline-flex flex-col items-center gap-1.5">
                <span className="text-[#1DB954] font-semibold inline-flex items-center gap-2">
                  <CheckCircle2 size={16} />
                  Playlist imported successfully! 50 of 50 tracks matched.
                </span>
                <span className="text-xs text-muted-foreground">
                  Saved with source link. You can tap the Sync icon in JAM ROOM anytime to check for updates.
                </span>
              </div>
            )}
          </div>
        </Reveal>

        {/* Feature highlight banner */}
        <Reveal delay={260}>
          <div className="mt-14 mx-auto max-w-4xl glass rounded-3xl p-6 sm:p-8 border border-white/10 bg-gradient-to-r from-[#1DB954]/10 via-transparent to-purple-500/10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-xl">
                <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider bg-[#1DB954]/20 text-[#1DB954] border border-[#1DB954]/30">
                  <RefreshCw size={12} className="animate-spin-slow" />
                  Continuous Sync Engine
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                  Did the Spotify playlist change? Just tap Refresh.
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Unlike traditional playlist importers that duplicate tracks or fail when playlists expand, JAM ROOM keeps your imported Spotify playlists synced. Our incremental resolver keeps already-matched songs and only queries the new additions.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0 self-center md:self-auto">
                <div className="flex items-center gap-2 px-4 py-3 rounded-2xl glass-strong border border-[#1DB954]/30 shadow-lg text-white font-mono text-sm">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#1DB954] animate-pulse" />
                  <span>Sync Enabled</span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ImportStage({
  step,
  title,
  icon,
  desc,
  active,
  loading,
  state,
  accentColor,
}: {
  step: number;
  title: string;
  icon: ReactNode;
  desc: string;
  active: boolean;
  loading?: boolean;
  state: string;
  accentColor?: string;
}) {
  return (
    <div
      className={`glass rounded-2xl p-5 transition-all duration-300 ${
        active ? "border-white/20 shadow-md" : "opacity-40"
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`grid h-10 w-10 place-items-center rounded-xl shrink-0 transition-colors ${
            active
              ? accentColor
                ? "bg-[#1DB954] text-black shadow-[0_0_16px_rgba(29,185,84,0.3)]"
                : "bg-brand-gradient text-white"
              : "bg-white/5 text-muted-foreground"
          }`}
        >
          {loading ? (
            <Loader2 className="animate-spin" size={18} />
          ) : (
            icon
          )}
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
            Step {step}
          </div>
          <div className="font-display text-sm font-bold text-white">{title}</div>
        </div>
      </div>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{desc}</p>
      {state === "success" && step === 2 && (
        <p className="mt-2 text-xs text-[#1DB954] font-semibold inline-flex items-center gap-1.5">
          <CheckCircle2 size={12} />
          50 of 50 tracks matched accurately
        </p>
      )}
    </div>
  );
}
