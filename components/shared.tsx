"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Music2 } from "lucide-react";

/* ---------- Reveal on scroll ---------- */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 700ms ease-out ${delay}ms, transform 700ms ease-out ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ---------- Logo ---------- */
export function Logo({ size = 36 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2.5 select-none">
      <div
        className="relative overflow-hidden rounded-xl border border-white/10 shadow-md bg-black/20"
        style={{ width: size, height: size }}
      >
        <img
          src="/App_Ic.png"
          alt="JAM ROOM logo"
          className="h-full w-full object-cover"
        />
      </div>
      <span className="font-display text-lg font-bold tracking-wider text-white">
        JAM<span className="text-gradient"> ROOM</span>
      </span>
    </div>
  );
}

/* ---------- Equalizer bars ---------- */
export function Equalizer({
  bars = 5,
  className = "",
}: {
  bars?: number;
  className?: string;
}) {
  return (
    <div className={`flex items-end gap-[3px] h-6 ${className}`}>
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          className="w-[3px] rounded-full bg-brand-gradient origin-bottom"
          style={{
            height: "100%",
            animation: `eq-bar 0.9s ease-in-out ${i * 0.12}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

/* ---------- Sound wave line ---------- */
export function SoundWave({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 40" className={className} preserveAspectRatio="none">
      <defs>
        <linearGradient id="sw" x1="0" x2="1">
          <stop offset="0%" stopColor="oklch(0.78 0.22 320)" />
          <stop offset="50%" stopColor="oklch(0.72 0.2 260)" />
          <stop offset="100%" stopColor="oklch(0.82 0.2 190)" />
        </linearGradient>
      </defs>
      <path
        d="M0 20 Q 25 0, 50 20 T 100 20 T 150 20 T 200 20 T 250 20 T 300 20 T 350 20 T 400 20"
        fill="none"
        stroke="url(#sw)"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.9"
      >
        <animate
          attributeName="d"
          dur="4s"
          repeatCount="indefinite"
          values="M0 20 Q 25 0, 50 20 T 100 20 T 150 20 T 200 20 T 250 20 T 300 20 T 350 20 T 400 20;
                  M0 20 Q 25 40, 50 20 T 100 20 T 150 20 T 200 20 T 250 20 T 300 20 T 350 20 T 400 20;
                  M0 20 Q 25 0, 50 20 T 100 20 T 150 20 T 200 20 T 250 20 T 300 20 T 350 20 T 400 20"
        />
      </path>
    </svg>
  );
}

/* ---------- Avatar (initials on gradient) ---------- */
const AVATAR_GRADIENTS = [
  "linear-gradient(135deg,#ff5ea8,#7a5cff)",
  "linear-gradient(135deg,#5ce1e6,#7a5cff)",
  "linear-gradient(135deg,#ffb15c,#ff5ea8)",
  "linear-gradient(135deg,#a1ff5c,#5ce1e6)",
  "linear-gradient(135deg,#7a5cff,#5ce1e6)",
  "linear-gradient(135deg,#ff5ea8,#ffb15c)",
  "linear-gradient(135deg,#5ce1e6,#a1ff5c)",
  "linear-gradient(135deg,#c05cff,#ff5ea8)",
];
export function Avatar({
  label,
  i,
  size = 44,
  ring = true,
}: {
  label: string;
  i: number;
  size?: number;
  ring?: boolean;
}) {
  return (
    <div
      className={`grid place-items-center rounded-full font-semibold text-white select-none shrink-0 ${
        ring ? "ring-2 ring-white/20" : ""
      }`}
      style={{
        width: size,
        height: size,
        background: AVATAR_GRADIENTS[i % AVATAR_GRADIENTS.length],
        fontSize: size * 0.36,
        boxShadow: "0 8px 24px -8px rgba(122,92,255,0.6)",
      }}
    >
      {label}
    </div>
  );
}

/* ---------- Album art placeholder ---------- */
export function AlbumArt({
  size = 64,
  seed = 0,
  className = "",
}: {
  size?: number;
  seed?: number;
  className?: string;
}) {
  const grads = [
    "linear-gradient(135deg,#ff5ea8,#7a5cff 60%,#5ce1e6)",
    "linear-gradient(135deg,#ffb15c,#ff5ea8 60%,#7a5cff)",
    "linear-gradient(135deg,#5ce1e6,#a1ff5c)",
    "linear-gradient(135deg,#7a5cff,#c05cff 60%,#ff5ea8)",
    "linear-gradient(135deg,#5ce1e6,#7a5cff)",
  ];
  return (
    <div
      className={`relative overflow-hidden rounded-xl shrink-0 ${className}`}
      style={{
        width: size,
        height: size,
        background: grads[seed % grads.length],
      }}
    >
      <div
        className="absolute inset-0 opacity-70 mix-blend-overlay"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.6), transparent 50%)",
        }}
      />
      <Music2
        className="absolute right-1.5 bottom-1.5 text-white/80"
        size={size * 0.28}
      />
    </div>
  );
}

/* ---------- Phone Frame ---------- */
export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto aspect-[9/19] w-full max-w-[250px] xs:max-w-[280px] rounded-[2.5rem] border border-white/15 bg-black p-2 shadow-[var(--shadow-glow)] animate-float-slow">
      <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black/80" />
      <div
        className="h-full w-full overflow-hidden rounded-[2rem] relative"
        style={{
          background:
            "radial-gradient(1000px 400px at 30% -10%, oklch(0.35 0.18 320 / 0.5), transparent 60%), oklch(0.12 0.02 280)",
        }}
      >
        {children}
      </div>
    </div>
  );
}

/* ---------- Background orbs ---------- */
export function BackgroundOrbs() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        className="absolute -top-40 -left-32 h-[300px] w-[300px] sm:h-[520px] sm:w-[520px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.7 0.22 320 / 0.7), transparent 60%)",
        }}
      />
      <div
        className="absolute top-1/3 -right-32 h-[350px] w-[350px] sm:h-[600px] sm:w-[600px] rounded-full opacity-35 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.6 0.22 260 / 0.7), transparent 60%)",
        }}
      />
      <div
        className="absolute bottom-0 left-1/4 h-[300px] w-[300px] sm:h-[520px] sm:w-[520px] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.7 0.2 190 / 0.7), transparent 60%)",
        }}
      />
    </div>
  );
}

/* ---------- Android Icon ---------- */
export function AndroidIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.6 9.5 19 7.1a.4.4 0 0 0-.7-.5l-1.4 2.4A8 8 0 0 0 12 8c-1.8 0-3.5.5-4.9 1.4L5.7 6.6a.4.4 0 0 0-.7.5l1.4 2.4A7.9 7.9 0 0 0 4 15h16a7.9 7.9 0 0 0-2.4-5.5ZM8.5 12.9a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8Zm7 0a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8Z" />
    </svg>
  );
}

/* ---------- Section heading ---------- */
export function SectionHead({
  eyebrow,
  title,
  sub,
  center = true,
}: {
  eyebrow?: string;
  title: ReactNode;
  sub?: string;
  center?: boolean;
}) {
  return (
    <div className={`${center ? "mx-auto text-center" : ""} max-w-3xl px-4`}>
      {eyebrow && (
        <div
          className={`${
            center ? "mx-auto" : ""
          } inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-widest text-muted-foreground`}
        >
          {eyebrow}
        </div>
      )}
      <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white">
        {title}
      </h2>
      {sub && <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">{sub}</p>}
    </div>
  );
}

/* ---------- Brand Icons ---------- */
export function SpotifyIcon({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

export function YouTubeIcon({
  size = 20,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

/* ---------- Google Icon ---------- */
export function GoogleIcon({
  size = 18,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}
