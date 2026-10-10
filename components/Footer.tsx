"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Logo, SoundWave } from "./shared";
import { TAGLINE } from "../app/page";

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  const cols = [
    {
      title: "Product",
      links: [
        { label: "Home", targetId: "home" },
        { label: "Jam Rooms", targetId: "jam-rooms" },
        { label: "Features", targetId: "features" },
        { label: "Why JAM ROOM", targetId: "why" },
        { label: "How It Works", targetId: "how" },
        { label: "Download", targetId: "download" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms", href: "/privacy" },
        { label: "Contact", href: "mailto:tharunpoongavanam@gmail.com" },
      ],
    },
  ];

  const handleLinkClick = (targetId: string) => {
    if (pathname === "/") {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push("/");
      // Wait for navigation, then scroll if element exists
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  };

  return (
    <footer className="border-t border-white/5 py-12 bg-black/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          <div className="space-y-4">
            <button onClick={() => handleLinkClick("home")} className="bg-transparent border-0 cursor-pointer text-left">
              <Logo />
            </button>
            <p className="max-w-xs text-sm text-muted-foreground italic">
              &quot;{TAGLINE}&quot;
            </p>
            <div className="h-8 w-40 opacity-50 select-none">
              <SoundWave className="h-full w-full" />
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title} className="space-y-3">
              <div className="text-xs uppercase tracking-widest text-muted-foreground font-bold">
                {c.title}
              </div>
              <ul className="space-y-2">
                {"links" in c &&
                  c.links.map((l) => (
                    <li key={l.label}>
                      {"targetId" in l ? (
                        <button
                          onClick={() => handleLinkClick(l.targetId)}
                          className="text-sm text-foreground/80 transition hover:text-foreground font-medium bg-transparent border-0 cursor-pointer text-left p-0"
                        >
                          {l.label}
                        </button>
                      ) : l.href.startsWith("/") ? (
                        <Link
                          href={l.href}
                          className="text-sm text-foreground/80 transition hover:text-foreground font-medium"
                        >
                          {l.label}
                        </Link>
                      ) : (
                        <a
                          href={l.href}
                          className="text-sm text-foreground/80 transition hover:text-foreground font-medium"
                        >
                          {l.label}
                        </a>
                      )}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t border-white/5 pt-6 text-xs text-muted-foreground leading-relaxed text-center sm:text-left">
          <div>© 2026 JAM ROOM. All rights reserved.</div>
          <div className="mt-2 max-w-3xl">
            JAM ROOM is an independent music application fetching the music from
            YouTube and YouTube Music, and is not affiliated with or endorsed by
            Spotify, YouTube, YouTube Music, or other third-party music
            streaming services.
          </div>
        </div>
      </div>
    </footer>
  );
}
