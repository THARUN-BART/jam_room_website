"use client";

import { Download } from "lucide-react";
import { Reveal, SoundWave, AndroidIcon } from "./shared";
import { ANDROID_APP_LINK } from "../app/page";

export default function DownloadCTA() {
  return (
    <section id="download" className="relative py-16 sm:py-24 md:py-40">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 md:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] glass-strong p-8 sm:p-12 md:p-16">
            <div
              className="absolute inset-0 opacity-60"
              style={{
                background:
                  "radial-gradient(600px 400px at 20% 20%, oklch(0.55 0.24 320 / 0.5), transparent 60%), radial-gradient(600px 400px at 80% 80%, oklch(0.6 0.22 190 / 0.4), transparent 60%)",
              }}
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 opacity-70">
              <SoundWave className="h-full w-full" />
            </div>
            <div className="relative text-center">
              <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground font-semibold">
                <AndroidIcon /> Available for Android
              </div>
              <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-white">
                Your Friends Are Waiting.
                <br />
                <span className="text-gradient">Start the JAM.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
                Download JAM ROOM on Android, create your room, invite your
                friends, and start listening together.
              </p>
              <a
                href={ANDROID_APP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-brand-gradient px-6 py-4 sm:px-8 text-sm sm:text-base font-semibold text-white shadow-[var(--shadow-glow-strong)] transition hover:scale-[1.04] active:scale-95"
              >
                <AndroidIcon /> Download JAM ROOM
              </a>
              <div className="mt-4 text-xs sm:text-sm text-muted-foreground font-medium">
                Available for Android
              </div>
              <p className="mx-auto mt-6 max-w-2xl text-[10px] sm:text-xs text-muted-foreground leading-relaxed">
                If the download link points to an APK file, Android may ask you
                to allow installation from your browser. Review the app source
                and requested permissions before installing.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
