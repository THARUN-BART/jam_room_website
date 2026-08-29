"use client";

import { useEffect, useState } from "react";
import { BackgroundOrbs } from "../components/shared";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import MainRoomSection from "../components/MainRoomSection";
import HowItWorks from "../components/HowItWorks";
import SocialStory from "../components/SocialStory";
import Features from "../components/Features";
import PlaylistImport from "../components/PlaylistImport";
import FriendInvite from "../components/FriendInvite";
import AppShowcase from "../components/AppShowcase";
import Community from "../components/Community";
import DownloadCTA from "../components/DownloadCTA";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

export const APP_NAME = "JAM ROOM";
export const TAGLINE = "One Room. One Song. One Vibe.";
export const ANDROID_APP_LINK =
  "https://drive.google.com/file/d/1hucnPBQu0TvBf0OKDxe-Wfp7l2Os2NRZ/view?usp=drive_link";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Show splash screen for 1.8 seconds, then trigger fade out transition
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      const removeTimer = setTimeout(() => {
        setShowSplash(false);
      }, 700); // Wait for transition to complete
      return () => clearTimeout(removeTimer);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash && (
        <div
          className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0b0714] transition-all duration-700 ease-in-out ${
            isFadingOut
              ? "opacity-0 scale-105 pointer-events-none blur-md"
              : "opacity-100"
          }`}
        >
          {/* Subtle background glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,oklch(0.78_0.22_320_/_0.15),transparent_65%)] animate-pulse-glow" />

          <div className="relative flex flex-col items-center gap-6 text-center px-4">
            {/* Logo container with pulse-glow and scale-up animation */}
            <div className="relative h-24 w-24 md:h-32 md:w-32 rounded-[2rem] overflow-hidden shadow-[0_0_50px_oklch(0.78_0.22_320_/_0.4)] border border-white/10 transition-transform duration-500 animate-float">
              <img
                src="/App_Ic.png"
                alt="JAM ROOM Logo"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Title and Subtitle */}
            <div className="mt-2 space-y-2">
              <div className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white">
                JAM ROOM
              </div>
              <p className="text-sm md:text-base text-muted-foreground font-medium tracking-wide">
                One Room. One Song. One Vibe.
              </p>
            </div>

            {/* Equalizer Visualizer */}
            <div className="mt-6 flex items-end justify-center gap-1.5 h-6">
              {[0, 1, 2, 3, 4, 3, 2, 1, 2, 3, 4].map((bar, i) => (
                <div
                  key={i}
                  className="w-1 rounded-full bg-brand-gradient"
                  style={{
                    height: `${30 + bar * 15}%`,
                    transformOrigin: "bottom",
                    animation: `eq-bar ${
                      0.6 + i * 0.1
                    }s ease-in-out infinite alternate`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      <div
        className={`relative min-h-screen overflow-x-hidden transition-opacity duration-1000 ${
          showSplash ? "opacity-0" : "opacity-100"
        }`}
      >
        <BackgroundOrbs />
        <Nav />
        <Hero />
        <MainRoomSection />
        <HowItWorks />
        <SocialStory />
        <Features />
        <PlaylistImport />
        <FriendInvite />
        <AppShowcase />
        <Community />
        <DownloadCTA />
        <FAQ />
        <Footer />
      </div>
    </>
  );
}
