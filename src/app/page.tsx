"use client";

import Head from "next/head";
import Navbar from "@/components/ui/sections/Navbar";
import Hero from "@/components/ui/sections/Hero";
import Services from "@/components/ui/sections/Services";
import Pricing from "@/components/ui/sections/Pricing";
// import Testimonials from "@/components/ui/sections/Testimonials";
import FAQ from "@/components/ui/sections/FAQ";
import Footer from "@/components/ui/sections/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
// import { CursorFollower } from "@/components/ui/sections/CursorFollower";

export default function Page() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <title>Kiwisoft</title>
      </Head>

      <div className="min-h-screen bg-[#1C1C1C] text-white font-sans">
        <Navbar />

        <main className="pt-20">
          <Hero />
          <Services />
          <Pricing />
          {/* <Testimonials /> */}
          {/* <CursorFollower /> */}
          <SpeedInsights />
          <Analytics />
          <FAQ />
          <Footer />
        </main>
      </div>
    </>
  );
}
