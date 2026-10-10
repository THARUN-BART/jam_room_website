"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { Reveal, SectionHead, PhoneFrame } from "./shared";
import { ANDROID_APP_LINK } from "../app/page";

export default function AppShowcase() {
  const screens = [
    {
      title: "Splash Screen",
      subtitle: "Welcome to JAM ROOM",
      description:
        "Start the vibe right away. An elegant, motion-accented entry into your social music space designed with modern dark mode principles.",
      image: "/demo_images/Splash_screen.webp",
    },
    {
      title: "Discover Screen",
      subtitle: "Your Music Feed",
      description:
        "Explore active rooms, live jams, and search for your favorite songs to add directly to the queue.",
      image: "/demo_images/Home_screen.webp",
    },
    {
      title: "Live Room Player",
      subtitle: "One Room. One Vibe.",
      description:
        "See active listeners, control playback, and watch the background glow adjust dynamically to the current track's album art.",
      image: "/demo_images/Room_player.webp",
    },
    {
      title: "Immersive Player",
      subtitle: "Focus on the Sound",
      description:
        "Get a detailed view of the track being played, complete with rich cover art representation and playback status indicators.",
      image: "/demo_images/player.webp",
    },
    {
      title: "Shared Queue",
      subtitle: "Collaborative Playlists",
      description:
        "Add new tracks and view upcoming songs. Everyone in the room has a voice in shaping the playlist live.",
      image: "/demo_images/Room_queue.webp",
    },
    {
      title: "Live Lyrics",
      subtitle: "Sing Along",
      description:
        "Never miss a beat or a lyric. Synchronized lyrics update in real-time so the entire crew can sing along.",
      image: "/demo_images/Lyric_sheet.webp",
    },
    {
      title: "Listening Stats",
      subtitle: "Your Music Story",
      description:
        "Track your jam sessions, favorite genres, top tracks, and check out your room's listening history.",
      image: "/demo_images/Stats_screen.webp",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(1); // Default to Discover
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Swipe gesture states
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (onSwipeLeft: () => void, onSwipeRight: () => void) => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) {
      onSwipeLeft();
    } else if (isRightSwipe) {
      onSwipeRight();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev + 1) % screens.length);
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex(
          (prev) => (prev - 1 + screens.length) % screens.length
        );
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, screens.length]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="relative py-16 sm:py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <Reveal>
          <SectionHead
            eyebrow="Inside the app"
            title={
              <>
                See JAM ROOM in <span className="text-gradient">Action</span>
              </>
            }
            sub="Explore the real app screens and features of JAM ROOM."
          />
        </Reveal>

        {/* Interactive Walkthrough */}
        <div className="mt-10 sm:mt-14 grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* Active Screen Detail Card */}
          <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1 text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              <Reveal>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-[var(--neon)] uppercase tracking-wider">
                  Screen {activeIndex + 1} of {screens.length}
                </span>
              </Reveal>
              <Reveal delay={50}>
                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
                  {screens[activeIndex].title}
                </h3>
              </Reveal>
              <Reveal delay={100}>
                <h4 className="text-base sm:text-lg font-semibold text-muted-foreground">
                  {screens[activeIndex].subtitle}
                </h4>
              </Reveal>
              <Reveal delay={150}>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0">
                  {screens[activeIndex].description}
                </p>
              </Reveal>

              <Reveal delay={200}>
                <div className="pt-2 sm:pt-4 flex flex-wrap justify-center lg:justify-start gap-3">
                  <button
                    onClick={() => openLightbox(activeIndex)}
                    className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-5 py-3 text-sm font-semibold text-white shadow-[var(--shadow-glow)] transition hover:scale-[1.03] active:scale-95 cursor-pointer"
                  >
                    View Fullscreen
                  </button>
                  <a
                    href={ANDROID_APP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 active:scale-95"
                  >
                    <Download size={16} /> Get the App
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Pagination Thumbnails */}
            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/10">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Select a screen to view
              </div>
              <div className="flex gap-2 overflow-x-auto pb-3 -mx-4 px-4 scrollbar-none md:flex-wrap md:overflow-visible md:pb-0 md:mx-0 md:px-0">
                {screens.map((screen, idx) => (
                  <button
                    key={screen.title}
                    onClick={() => setActiveIndex(idx)}
                    className={`px-3 py-1.5 sm:px-4 sm:py-2 text-xs font-semibold rounded-full border transition-all duration-300 shrink-0 ${
                      idx === activeIndex
                        ? "bg-white/10 border-white text-white shadow-md cursor-default"
                        : "border-white/10 bg-white/5 text-muted-foreground hover:bg-white/10 hover:border-white/20 hover:text-foreground cursor-pointer"
                    }`}
                  >
                    {screen.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Active Screen Mockup Display with next/prev buttons and swipe support */}
          <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
            <Reveal delay={100} className="w-full">
              <div className="relative flex items-center justify-between w-full max-w-[340px] md:max-w-none px-2 xs:px-4 md:px-0">
                {/* Prev button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIndex((prev) => (prev - 1 + screens.length) % screens.length);
                  }}
                  className="absolute left-1 z-20 p-2 rounded-full glass hover:bg-white/10 text-white transition cursor-pointer lg:left-4 shadow-lg active:scale-90"
                  aria-label="Previous Screen"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Main Interactive Phone Frame */}
                <div
                  className="relative group cursor-pointer mx-auto max-w-[200px] xs:max-w-[250px] sm:max-w-[280px] w-full"
                  onClick={() => openLightbox(activeIndex)}
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={() => handleTouchEnd(
                    () => setActiveIndex((prev) => (prev + 1) % screens.length),
                    () => setActiveIndex((prev) => (prev - 1 + screens.length) % screens.length)
                  )}
                >
                  {/* Background glow behind phone */}
                  <div className="absolute -inset-4 bg-brand-gradient rounded-[3rem] opacity-35 blur-2xl transition-all duration-500 group-hover:opacity-50 group-hover:scale-105" />
                  
                  {/* Active Phone Frame */}
                  <div className="relative transition-transform duration-500 group-hover:scale-[1.02]">
                    <PhoneFrame>
                      <img
                        src={screens[activeIndex].image}
                        alt={screens[activeIndex].title}
                        className="h-full w-full object-cover object-top select-none"
                      />
                    </PhoneFrame>
                  </div>

                  {/* Hover overlay hint */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="glass-strong px-4 py-2 rounded-full text-xs font-semibold text-white tracking-wide shadow-lg">
                      Click to Zoom
                    </div>
                  </div>
                </div>

                {/* Next button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIndex((prev) => (prev + 1) % screens.length);
                  }}
                  className="absolute right-1 z-20 p-2 rounded-full glass hover:bg-white/10 text-white transition cursor-pointer lg:right-4 shadow-lg active:scale-90"
                  aria-label="Next Screen"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Scrollable Horizontal Cards for all screens */}
        <div className="mt-16 sm:mt-20 pt-8 sm:pt-10 border-t border-white/5">
          <div className="text-sm font-semibold text-muted-foreground uppercase tracking-widest text-center mb-8">
            App Screen Gallery
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
            {screens.map((screen, idx) => (
              <div
                key={screen.title}
                onClick={() => setActiveIndex(idx)}
                className={`flex-none w-36 xs:w-44 group cursor-pointer transition-all duration-300 ${
                  idx === activeIndex
                    ? "scale-100 opacity-100"
                    : "scale-95 opacity-60 hover:opacity-90 hover:scale-98"
                }`}
              >
                <div className="aspect-[9/19] w-full rounded-2xl overflow-hidden border border-white/10 bg-black/40 p-1 group-hover:border-white/20">
                  <img
                    src={screen.image}
                    alt={screen.title}
                    className="h-full w-full object-cover object-top rounded-xl"
                  />
                </div>
                <div className="mt-3 text-center">
                  <div className="text-xs font-semibold truncate text-white">{screen.title}</div>
                  <div className="text-[10px] text-muted-foreground truncate">{screen.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 p-4 md:p-8 animate-fade-in"
          onClick={() => setLightboxOpen(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={() => handleTouchEnd(
            () => setLightboxIndex((prev) => (prev + 1) % screens.length),
            () => setLightboxIndex((prev) => (prev - 1 + screens.length) % screens.length)
          )}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 md:top-8 md:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition z-55 cursor-pointer"
            aria-label="Close Lightbox"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation - Left */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev - 1 + screens.length) % screens.length);
            }}
            className="hidden md:block absolute left-4 md:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition z-55 cursor-pointer"
            aria-label="Previous image"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Main Image Container */}
          <div
            className="relative max-h-[72vh] xs:max-h-[76vh] md:max-h-[80vh] aspect-[9/19] w-full max-w-[260px] xs:max-w-[280px] sm:max-w-[320px] md:max-w-[360px] overflow-hidden rounded-[2rem] border border-white/20 bg-black/60 shadow-2xl animate-scale-up"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={screens[lightboxIndex].image}
              alt={screens[lightboxIndex].title}
              className="h-full w-full object-cover object-top select-none pointer-events-none"
            />
          </div>

          {/* Navigation - Right */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev + 1) % screens.length);
            }}
            className="hidden md:block absolute right-4 md:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition z-55 cursor-pointer"
            aria-label="Next image"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Info Caption */}
          <div className="mt-6 text-center max-w-md px-4" onClick={(e) => e.stopPropagation()}>
            <h4 className="text-base md:text-lg font-bold text-white font-display">
              {screens[lightboxIndex].title}
            </h4>
            <p className="text-xs md:text-sm text-gray-400 mt-1">
              {screens[lightboxIndex].description}
            </p>
            <div className="mt-3 text-[10px] text-gray-500 font-semibold tracking-wider uppercase">
              Image {lightboxIndex + 1} of {screens.length} (Swipe to browse)
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
