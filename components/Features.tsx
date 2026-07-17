"use client";

import {
  Users,
  Radio,
  Headphones,
  Wifi,
  ListMusic,
  Play,
  Zap,
  ShieldCheck,
  SkipForward,
  MonitorSmartphone,
  Volume2,
  Heart,
  Search,
  Shuffle,
  Music2,
} from "lucide-react";
import { Reveal, SectionHead } from "./shared";

export default function Features() {
  const features = [
    {
      t: "CREATE JAM ROOMS",
      d: "Create your own music room and start a shared listening session.",
      i: <Radio size={20} />,
    },
    {
      t: "INVITE FRIENDS",
      d: "Share your room invite and bring your friends into the vibe.",
      i: <Users size={20} />,
    },
    {
      t: "LISTEN TOGETHER",
      d: "Enjoy a shared music experience with everyone inside your JAM ROOM.",
      i: <Headphones size={20} />,
    },
    {
      t: "LIVE ROOM MEMBERS",
      d: "See who's currently listening with you.",
      i: <Wifi size={20} />,
    },
    {
      t: "SHARED MUSIC QUEUE",
      d: "Add tracks and build the room's music queue together.",
      i: <ListMusic size={20} />,
    },
    {
      t: "ROOM MUSIC CONTROLS",
      d: "Control music playback using supported room permissions.",
      i: <Play size={20} />,
    },
    {
      t: "REAL-TIME ROOM EXPERIENCE",
      d: "See room activity and music updates in real time.",
      i: <Zap size={20} />,
    },
    {
      t: "AD-FREE LISTENING",
      d: "Enjoy your music without advertising interruptions.",
      i: <ShieldCheck size={20} />,
    },
    {
      t: "UNLIMITED SKIPS",
      d: "Stay in control and move through supported tracks freely.",
      i: <SkipForward size={20} />,
    },
    {
      t: "BACKGROUND PLAYBACK",
      d: "Keep your music playing while using other apps.",
      i: <MonitorSmartphone size={20} />,
    },
    {
      t: "HIGH-QUALITY AUDIO",
      d: "Enjoy clear and immersive audio playback.",
      i: <Volume2 size={20} />,
    },
    {
      t: "CREATE PLAYLISTS",
      d: "Create playlists for every mood and moment.",
      i: <ListMusic size={20} />,
    },
    {
      t: "FAVORITE SONGS",
      d: "Save the music you love for easy access.",
      i: <Heart size={20} />,
    },
    {
      t: "MUSIC SEARCH",
      d: "Quickly discover available songs, artists, albums, and playlists.",
      i: <Search size={20} />,
    },
    {
      t: "SHUFFLE & REPEAT",
      d: "Choose exactly how you want to enjoy your music.",
      i: <Shuffle size={20} />,
    },
    {
      t: "MODERN MUSIC PLAYER",
      d: "A beautiful and easy-to-use listening experience.",
      i: <Music2 size={20} />,
    },
  ];

  return (
    <section id="features" className="relative py-16 sm:py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <Reveal>
          <SectionHead
            eyebrow="Features"
            title={
              <>
                Everything You Need to <span className="text-gradient">JAM</span>
              </>
            }
            sub="Powerful music features built around a shared listening experience."
          />
        </Reveal>
        <div className="mt-10 sm:mt-14 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.t} delay={(i % 4) * 80}>
              <div className="group glass relative h-full overflow-hidden rounded-2xl p-5 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10">
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-0 blur-2xl transition group-hover:opacity-80"
                  style={{
                    background:
                      "radial-gradient(circle, oklch(0.78 0.22 320 / 0.6), transparent 70%)",
                  }}
                />
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-soft text-white">
                  {f.i}
                </div>
                <h3 className="mt-4 font-display text-sm font-bold tracking-wider text-white">
                  {f.t}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
