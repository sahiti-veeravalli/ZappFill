import { createFileRoute } from "@tanstack/react-router";
import { AmbientBackground } from "@/components/site/Background";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Features } from "@/components/site/Features";
import { Demo } from "@/components/site/Demo";
import { DashboardPreview } from "@/components/site/DashboardPreview";
import { Security } from "@/components/site/Security";

import { Pricing } from "@/components/site/Pricing";
import { CTA } from "@/components/site/CTA";
import { GetInTouch } from "@/components/site/GetInTouch";
import { Footer } from "@/components/site/Footer";
import { CursorGlow } from "@/components/site/CursorGlow";
import { ThemeProvider } from "@/components/site/ThemeProvider";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "ZappFill — Fill forms in one click" },
      { name: "description", content: "AI-powered autofill for applications, registrations, and repetitive online forms. Detect, fill, learn — across every site." },
      { property: "og:title", content: "ZappFill — Fill forms in one click" },
      { property: "og:description", content: "AI-powered autofill for the web. Stop filling the same forms again." },
    ],
  }),
});

function Index() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen text-foreground antialiased">
        <AmbientBackground />
        <CursorGlow />
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <HowItWorks />
          <Features />
          <Demo />
          <DashboardPreview />
          <Security />
          
          <CTA />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
