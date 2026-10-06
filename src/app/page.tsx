import Navbar from "@/components/ui/sections/Navbar";
import Hero from "@/components/ui/sections/Hero";
import Services from "@/components/ui/sections/Services";
import Pricing from "@/components/ui/sections/Pricing";
import AskKiwi from "@/components/ui/sections/AskKiwi";
import FAQ from "@/components/ui/sections/FAQ";
import Footer from "@/components/ui/sections/Footer";
import ChatWidget from "@/components/ui/sections/ChatWidget";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#1C1C1C] font-sans text-white">
      {/* Fondo: malla sutil + resplandor kiwi */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[900px] opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <Navbar />
      <main className="relative">
        <Hero />
        <Services />
        <Pricing />
        <AskKiwi />
        <FAQ />
        <Footer />
      </main>
      <ChatWidget />
      <SpeedInsights />
      <Analytics />
    </div>
  );
}
