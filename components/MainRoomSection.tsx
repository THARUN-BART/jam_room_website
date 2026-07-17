"use client";

import { type ReactNode } from "react";
import {
  Users,
  Shuffle,
  SkipBack,
  Pause,
  SkipForward,
  Repeat,
  PlusCircle,
  ListMusic,
  Send,
} from "lucide-react";
import { Reveal, SectionHead, Avatar, AlbumArt } from "./shared";

export default function MainRoomSection() {
  const queue = [
    { t: "Neon Skyline", a: "The Waves", d: "3:24", s: 1 },
    { t: "After Hours", a: "Kai Rivers", d: "4:02", s: 2 },
    { t: "Golden Hour", a: "Lumen", d: "3:15", s: 3 },
    { t: "City Lights", a: "Nova Ray", d: "3:47", s: 4 },
  ];
  const members = ["AR", "SN", "KV", "MJ", "PT", "DA"];

  return (
    <section id="jam-rooms" className="relative py-16 sm:py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <Reveal>
          <SectionHead
            eyebrow="The JAM ROOM"
            title={
              <>
                One Room. One Song. <span className="text-gradient">One Vibe.</span>
              </>
            }
            sub="Music hits different when your friends are listening with you. Create your own JAM ROOM, invite your crew, and share the music experience together."
          />
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-10 md:mt-12 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
            {/* Room panel */}
            <div className="glass-strong rounded-3xl p-5 sm:p-6 shadow-[var(--shadow-glow)]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rounded-full bg-red-500 animate-pulse" />{" "}
                    Live
                  </div>
                  <div className="mt-1 font-display text-xl sm:text-2xl font-bold text-white">
                    FRIDAY NIGHT VIBES
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                  <div className="text-[10px] xs:text-xs uppercase tracking-widest text-muted-foreground">
                    6 Jamming
                  </div>
                  <div className="flex -space-x-2">
                    {members.map((l, i) => (
                      <Avatar key={l} label={l} i={i} size={28} />
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 sm:mt-8 grid gap-6 sm:grid-cols-[auto_1fr] sm:items-center">
                <AlbumArt size={140} seed={0} className="mx-auto sm:mx-0 w-32 h-32 sm:w-[140px] sm:h-[140px]" />
                <div className="min-w-0 flex-1 text-center sm:text-left">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    Now Playing
                  </div>
                  <div className="mt-1 truncate font-display text-xl sm:text-2xl font-bold text-white">
                    Midnight Drive
                  </div>
                  <div className="truncate text-sm text-muted-foreground">
                    Artist Name
                  </div>
                  <div className="mt-4">
                    <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full w-[58%] bg-brand-gradient" />
                    </div>
                    <div className="mt-1.5 flex justify-between text-xs text-muted-foreground">
                      <span>2:14</span>
                      <span>3:48</span>
                    </div>
                  </div>
                  <div className="mt-5 flex items-center justify-center sm:justify-start gap-3">
                    <RoomBtn>
                      <Shuffle size={16} />
                    </RoomBtn>
                    <RoomBtn>
                      <SkipBack size={18} />
                    </RoomBtn>
                    <RoomBtn primary>
                      <Pause size={22} />
                    </RoomBtn>
                    <RoomBtn>
                      <SkipForward size={18} />
                    </RoomBtn>
                    <RoomBtn>
                      <Repeat size={16} />
                    </RoomBtn>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/5 flex flex-wrap justify-center sm:justify-start gap-2">
                <TagBtn icon={<Send size={14} />}>Invite Friends</TagBtn>
                <TagBtn icon={<PlusCircle size={14} />}>Add Music</TagBtn>
                <TagBtn icon={<ListMusic size={14} />}>View Queue</TagBtn>
              </div>
            </div>

            {/* Queue */}
            <div className="glass rounded-3xl p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
                    Up Next
                  </div>
                  <button className="text-xs text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition">
                    <PlusCircle size={14} /> Add to Queue
                  </button>
                </div>
                <ul className="mt-4 space-y-3">
                  {queue.map((q, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 rounded-xl p-2 transition hover:bg-white/5"
                    >
                      <AlbumArt size={48} seed={q.s} />
                      <div className="min-w-0 flex-1">
                        <div className="truncate text-sm font-semibold text-white">
                          {q.t}
                        </div>
                        <div className="truncate text-xs text-muted-foreground mt-0.5">
                          {q.a}
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground">{q.d}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function RoomBtn({
  children,
  primary,
}: {
  children: ReactNode;
  primary?: boolean;
}) {
  return (
    <button
      className={`grid place-items-center rounded-full transition active:scale-90 ${
        primary
          ? "h-11 w-11 sm:h-12 sm:w-12 bg-brand-gradient text-white shadow-[var(--shadow-glow)] hover:scale-105"
          : "h-9 w-9 sm:h-10 sm:w-10 glass hover:bg-white/10"
      }`}
    >
      {children}
    </button>
  );
}

function TagBtn({ children, icon }: { children: ReactNode; icon: ReactNode }) {
  return (
    <button className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-white/10 active:scale-95">
      {icon}
      {children}
    </button>
  );
}
