import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield, Mail, AlertCircle, FileText } from "lucide-react";

const APP_NAME = "JAM ROOM";
const CONTACT_EMAIL = "tharunpoongavanam@gmail.com";

export const metadata: Metadata = {
  title: "Privacy Policy & Terms — JAM ROOM",
  description: "Privacy Policy, Terms of Service, and official disclaimers for JAM ROOM.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://joinjamroom.vercel.app/privacy",
  },
  openGraph: {
    title: "Privacy Policy & Terms — JAM ROOM",
    description: "Privacy Policy, Terms of Service, and official disclaimers for JAM ROOM.",
    url: "https://joinjamroom.vercel.app/privacy",
  },
};

function Logo({ size = 36 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2.5">
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
      <span className="font-display text-lg font-bold tracking-wider">
        JAM<span className="text-gradient"> ROOM</span>
      </span>
    </div>
  );
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0b0714] text-foreground selection:bg-primary/20">
      {/* Background glow effects */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-background/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="shrink-0">
            <Logo />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-foreground transition hover:bg-white/10"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-6 py-12 md:py-20">
        {/* Title */}
        <div className="text-center md:text-left mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Privacy Policy & <span className="text-gradient">Terms</span>
          </h1>
          <p className="mt-4 text-muted-foreground">Last Updated: July 16, 2026</p>
        </div>

        {/* Disclaimer Alert */}
        <div className="mb-12 flex gap-4 rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-md">
          <AlertCircle className="h-6 w-6 shrink-0 text-primary animate-pulse" />
          <div className="space-y-2">
            <h4 className="font-bold text-foreground">Independent Application Disclaimer</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong>{APP_NAME}</strong> is an independent music application fetching the music from
              YouTube and YouTube Music, and is not affiliated with, endorsed by, or partnered with
              Spotify, YouTube, YouTube Music, or any other third-party music streaming services. All
              product names, logos, brands, and trademarks are property of their respective owners.
            </p>
          </div>
        </div>

        {/* Sections Grid */}
        <div className="space-y-12">
          {/* Privacy Policy */}
          <section className="glass rounded-3xl p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold font-display">Privacy Policy</h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed text-sm md:text-base">
              <p>
                Your privacy is paramount to us. This Privacy Policy details how {APP_NAME} handles
                information in connection with our website and application.
              </p>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">1. Music Streaming & APIs</h3>
                <p>
                  {APP_NAME} is fetching the music from YouTube and YouTube Music directly using public
                  APIs and embeddable players.
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1.5">
                  <li>We do not download, store, rip, or extract copyrighted audio or video streams onto our servers.</li>
                  <li>All playback is streamed directly from public servers in accordance with the terms of service of the third-party providers.</li>
                  <li>You are responsible for complying with the terms of the third-party services when using our application.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">2. Data Collection</h3>
                <p>
                  {APP_NAME} is designed to be a peer-to-peer and synchronized social room experience. We do
                  not require you to create an account, and we do not collect, sell, or share personal data.
                  Temporary room identifiers and queue configurations are used solely to synchronize state between
                  participants in a room and are deleted when the session ends.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">3. Local Storage</h3>
                <p>
                  We use browser Local Storage to save preferences such as your temporary room nickname, volume
                  preferences, and room history on your own device. This data is stored locally and never transmitted
                  to our databases.
                </p>
              </div>
            </div>
          </section>

          {/* Terms of Service */}
          <section id="terms" className="glass rounded-3xl p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold font-display">Terms of Service</h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed text-sm md:text-base">
              <p>By using {APP_NAME}, you agree to comply with and be bound by the following Terms of Service.</p>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">1. Permitted Use</h3>
                <p>You agree to use {APP_NAME} solely for personal, non-commercial entertainment. You must not attempt to:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1.5">
                  <li>Bypass, disable, or interfere with security-related features or digital rights management tools.</li>
                  <li>Exploit, scrape, or systematically download content from the platform or its streaming sources.</li>
                  <li>Use the service to distribute spam, malware, or offensive content in public chat and queue features.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">2. Service Availability & Warranties</h3>
                <p>
                  Since our playback mechanics rely on third-party integrations (such as YouTube and YouTube Music),
                  we cannot guarantee that music playback will always be uninterrupted, error-free, or available.
                  The service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">3. Limitation of Liability</h3>
                <p>
                  In no event shall {APP_NAME} or its developers be held liable for any damages, losses, or legal claims
                  arising out of your use or inability to use the application.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="glass rounded-3xl p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold font-display">Contact Us</h2>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
              <p>
                If you have any questions, feedback, or concerns regarding this Privacy Policy, the Terms of Service,
                or the application in general, please reach out to us:
              </p>
              <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-4">
                <Mail className="text-primary h-5 w-5" />
                <div>
                  <div className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Email Address</div>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-foreground font-semibold hover:underline">
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Mini Footer */}
      <footer className="border-t border-white/5 py-8 text-center text-xs text-muted-foreground">
        <div>© 2026 {APP_NAME}. All rights reserved.</div>
      </footer>
    </div>
  );
}
