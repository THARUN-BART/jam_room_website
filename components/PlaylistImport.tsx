"use client";

import { useState, type ReactNode } from "react";
import { Link2, Search, CheckCircle2, Loader2, Sparkles } from "lucide-react";
import { Reveal, SectionHead } from "./shared";

export default function PlaylistImport() {
  const [state, setState] = useState<"idle" | "loading" | "success">("idle");
  const [url, setUrl] = useState("");

  const doImport = () => {
    if (!url) return;
    setState("loading");
    setTimeout(() => setState("success"), 1600);
  };

  return (
    <section className="relative py-16 sm:py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        <Reveal>
          <SectionHead
            eyebrow="Playlist import"
            title={
              <>
                Your Playlists.{" "}
                <span className="text-gradient">Now Part of the JAM.</span>
              </>
            }
            sub="Already have playlists you love? Import supported playlist information and quickly find matching tracks available inside JAM ROOM."
          />
        </Reveal>

        <Reveal delay={120}>
          <div className="mx-auto mt-10 max-w-2xl">
            <div className="glass-strong rounded-2xl p-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              <div className="flex items-center flex-1 px-2 py-1">
                <div className="text-muted-foreground shrink-0 pl-1">
                  <Link2 size={18} />
                </div>
                <input
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Paste YouTube Music playlist link..."
                  className="flex-1 bg-transparent px-3 py-2 text-sm text-white outline-none placeholder:text-muted-foreground/60 w-full"
                />
              </div>
              <button
                onClick={doImport}
                disabled={state === "loading" || !url}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-gradient px-5 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition hover:scale-[1.02] active:scale-98 disabled:opacity-50 select-none cursor-pointer"
              >
                {state === "loading" ? (
                  <Loader2 className="animate-spin" size={16} />
                ) : (
                  <Sparkles size={16} />
                )}
                Import Playlist
              </button>
            </div>
            <p className="mt-3 text-center sm:text-left text-xs text-muted-foreground">
              Demo UI. JAM ROOM imports supported playlist info and matches
              tracks it is authorized to provide.
            </p>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mx-auto mt-12 grid gap-4 sm:grid-cols-3 max-w-4xl">
            <ImportStage
              active
              state={state}
              step={1}
              title="Playlist Link"
              icon={<Link2 size={18} />}
              desc="We read supported playlist information."
            />
            <ImportStage
              active={state !== "idle"}
              state={state}
              step={2}
              title="Finding Supported Tracks"
              icon={<Search size={18} />}
              desc="Matching your tracks to available music."
              loading={state === "loading"}
            />
            <ImportStage
              active={state === "success"}
              state={state}
              step={3}
              title="Added to JAM ROOM"
              icon={<CheckCircle2 size={18} />}
              desc="Ready to play inside your JAM ROOM."
            />
          </div>
          <div className="mx-auto mt-8 max-w-xl text-center text-sm font-medium">
            {state === "idle" && (
              <span className="text-muted-foreground">
                Paste a link above to see the demo flow.
              </span>
            )}
            {state === "loading" && (
              <span className="text-muted-foreground inline-flex items-center gap-2">
                <Loader2 className="animate-spin" size={14} /> Finding your
                tracks...
              </span>
            )}
            {state === "success" && (
              <span className="text-[var(--neon-3)]">
                Playlist imported successfully. 42 of 45 tracks matched.
              </span>
            )}
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
}: {
  step: number;
  title: string;
  icon: ReactNode;
  desc: string;
  active: boolean;
  loading?: boolean;
  state: string;
}) {
  return (
    <div
      className={`glass rounded-2xl p-5 transition-all ${
        active ? "border-white/20 shadow-md" : "opacity-50"
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`grid h-10 w-10 place-items-center rounded-xl shrink-0 ${
            active ? "bg-brand-gradient text-white" : "bg-white/5 text-muted-foreground"
          }`}
        >
          {loading ? <Loader2 className="animate-spin" size={18} /> : icon}
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
        <p className="mt-2 text-xs text-[var(--neon-3)] font-semibold">
          42 of 45 tracks matched
        </p>
      )}
    </div>
  );
}
