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
