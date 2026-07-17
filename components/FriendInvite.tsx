"use client";

import { Share2, Download, PartyPopper } from "lucide-react";
import { Reveal, SectionHead, PhoneFrame, Avatar } from "./shared";
import { ANDROID_APP_LINK } from "../app/page";

export default function FriendInvite() {
  return (
    <section className="relative py-16 sm:py-20 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:px-8 lg:grid-cols-2 lg:items-center">
        <Reveal className="text-center lg:text-left">
          <div>
            <SectionHead
              center={false}
              eyebrow="Invite your crew"
              title={
                <>
                  One Link. <span className="text-gradient">Your Whole Crew.</span>
                </>
              }
              sub="Create a JAM ROOM, share the invite, and bring everyone into the listening session."
            />
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <a
                href={ANDROID_APP_LINK}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition hover:scale-105 active:scale-95"
              >
                <Download size={16} /> Get the App
              </a>
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 active:scale-95">
                <Share2 size={16} /> Share Invite
              </button>
            </div>
          </div>
        </Reveal>
        
        <Reveal delay={150} className="w-full flex justify-center">
          <div className="relative w-full max-w-[280px]">
            <PhoneFrame>
              <div className="flex h-full flex-col p-5">
                <div className="flex items-center justify-between text-[8px] sm:text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
                  <span>JAM ROOM</span>
                  <span>9:41</span>
                </div>
                <div className="mt-8 grid place-items-center">
                  <div className="grid h-16 w-16 place-items-center rounded-2xl bg-brand-gradient text-white shadow-[var(--shadow-glow)] animate-bounce">
                    <PartyPopper size={28} />
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
                    You've been invited to
                  </div>
                  <div className="mt-1 font-display text-xl font-bold text-white">
                    FRIDAY NIGHT VIBES
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground italic">
                    &quot;Arun invited you to listen together.&quot;
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-center gap-2">
                  <div className="flex -space-x-2">
                    {["AR", "SN", "KV", "MJ"].map((l, i) => (
                      <Avatar key={l} label={l} i={i} size={24} />
                    ))}
                  </div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground">
                    6 people are jamming.
                  </div>
                </div>
                <button className="mt-auto rounded-2xl bg-brand-gradient py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)] hover:scale-[1.02] active:scale-98">
                  JOIN THE JAM
                </button>
                <div className="mt-3 text-center text-[9px] sm:text-[10px] text-muted-foreground">
                  Open JAM ROOM and join the room.
                </div>
              </div>
            </PhoneFrame>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
