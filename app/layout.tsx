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
  metadataBase: new URL("https://jam-room-connect.vercel.app"),

  title: "JAM ROOM — Listen to Music Together With Friends",

  description:
    "Create a JAM ROOM, invite your friends, and enjoy a shared music listening experience. Discover music, build shared queues, import supported playlists, and listen together.",

  keywords: [
    "music",
    "social music",
    "jam room",
    "listen together",
    "shared queue",
    "youtube music playlist",
    "sync music",
    "friends music room",
    "android music app",
    "jam room connect",
  ],

  authors: [
    {
      name: "JAM ROOM",
    },
  ],

  robots: {
    index: true,
    follow: true,
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
    url: "https://jam-room-connect.vercel.app",
    siteName: "JAM ROOM",
    title: "JAM ROOM — Listen to Music Together With Friends",
    description:
      "Create a JAM ROOM, invite your friends, and enjoy a shared music listening experience. One Room. One Song. One Vibe.",
    images: [
      {
        url: "/App_Ic.png",
        width: 1200,
        height: 630,
        alt: "JAM ROOM Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "JAM ROOM — Listen to Music Together With Friends",
    description:
      "Create a JAM ROOM, invite your friends, and enjoy a shared music listening experience. One Room. One Song. One Vibe.",
    images: ["/App_Ic.png"],
  },

  verification: {
    google: "roOr-Q_4b3cj7UZKFFeKu2qMneuQYU63a2yFFhqe0GI",
  },
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
      <body className="antialiased min-h-screen bg-[#0b0714] text-foreground">
        {children}
      </body>
    </html>
  );
}
