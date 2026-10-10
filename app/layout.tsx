import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import React from "react";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#0b0714",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://joinjamroom.vercel.app"),

  title: "JAM ROOM — Free Spotify Jam Alternative | Listen Together at ~50ms Latency",

  description:
    "Why pay for Spotify Jam? Download JAM ROOM for Android. 100% free synchronized music rooms at ~50ms latency, YouTube streaming with 5-step fallback, synced lyrics, background playback, and offline .m4a downloads. Zero ads, zero paywalls.",

  keywords: [
    "spotify jam free alternative",
    "listen to music together free",
    "jam rooms",
    "synchronized music playback",
    "social music player",
    "listen together without premium",
    "50ms latency audio sync",
    "youtube streaming fallback",
    "device storage music player",
    "blink-free cached artwork",
    "synced lyrics real-time",
    "background playback android",
    "offline downloads m4a",
    "live chat music queue",
    "personal music library",
    "library search music",
    "responsive music app 320px",
    "animated ui vinyl spinner",
    "shared queue music room",
    "free background music player android apk",
  ],

  authors: [
    {
      name: "JAM ROOM",
    },
  ],

  alternates: {
    canonical: "https://joinjamroom.vercel.app",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      {
        url: "/App_Ic.png",
        type: "image/png",
        sizes: "512x512",
      },
    ],
    apple: [
      {
        url: "/App_Ic.png",
        sizes: "180x180",
      },
    ],
    shortcut: "/App_Ic.png",
  },

  openGraph: {
    type: "website",
    url: "https://joinjamroom.vercel.app",
    siteName: "JAM ROOM",
    title: "JAM ROOM — Free Spotify Jam Alternative | Listen Together at ~50ms Latency",
    description:
      "100% free synchronized music rooms at ~50ms latency, YouTube streaming with 5-step fallback, synced lyrics, offline .m4a downloads, and background playback. One Room. One Song. One Vibe.",
    images: [
      {
        url: "/App_Ic.png",
        width: 1200,
        height: 630,
        alt: "JAM ROOM App Artwork",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "JAM ROOM — Free Spotify Jam Alternative | Listen Together at ~50ms Latency",
    description:
      "100% free synchronized music rooms at ~50ms latency, YouTube streaming 5-step fallback, synced lyrics, and offline .m4a downloads.",
    images: ["/App_Ic.png"],
  },

  verification: {
    google: "roOr-Q_4b3cj7UZKFFeKu2qMneuQYU63a2yFFhqe0GI",
  },
};

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://joinjamroom.vercel.app/#app",
      "name": "JAM ROOM",
      "operatingSystem": "Android 7.0 and up",
      "applicationCategory": "MultimediaApplication",
      "applicationSubCategory": "Social Music Streaming",
      "fileSize": "40MB",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "1420",
        "bestRating": "5",
        "worstRating": "1",
      },
      "description":
        "The free Spotify Jam alternative. Synchronized social music player featuring Jam Rooms with ~50ms latency, YouTube streaming 5-step fallback, offline .m4a downloads, synced lyrics, background playback, and device storage music scanner.",
      "url": "https://joinjamroom.vercel.app",
      "downloadUrl":
        "https://drive.google.com/file/d/19sNSnCmiwo9Ez-EVUFMeiJTTIrDxr4iH/view?usp=drive_link",
      "image": "https://joinjamroom.vercel.app/App_Ic.png",
      "screenshot": "https://joinjamroom.vercel.app/demo_images/Room_player.webp",
      "featureList": [
        "Jam Rooms: Synchronized playback across all devices at ~50ms latency",
        "YouTube Streaming: 5-step fallback chain — survives rate limits automatically",
        "Device Storage Music: Scan, search, and play local audio files directly from phone storage",
        "Blink-Free Cached Artwork: Instant in-memory artwork cache preventing any image flicker on rebuilds",
        "Synced Lyrics: Real-time synchronized lyrics display with interactive line tracking",
        "Background Playback: Lock screen controls, notification actions, survives app switches & kills",
        "Offline Downloads: .m4a + metadata + art — plays without network",
        "Live Chat & Queue: Shared real-time queue and chat inside every room",
        "Personal Library: Liked songs, playlists, downloads, and device audio in one place",
        "Library Search: Instant search across personal playlists, downloads, and device songs",
        "Responsive Layout: Fully responsive screens optimized across all device sizes down to 320px",
        "Animated UI: Neon dark theme, vinyl spinner, animated equalizer wave",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://joinjamroom.vercel.app/#website",
      "url": "https://joinjamroom.vercel.app",
      "name": "JAM ROOM",
      "description": "Listen to music together with friends in synchronized real-time rooms.",
      "publisher": {
        "@type": "Organization",
        "name": "JAM ROOM",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="antialiased min-h-screen bg-[#0b0714] text-foreground">
        {children}
      </body>
    </html>
  );
}
