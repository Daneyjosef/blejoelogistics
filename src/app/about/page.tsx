import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { WhoWeAre } from "@/components/sections/WhoWeAre";
import { CoverageStats } from "@/components/sections/CoverageStats";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "About | Blejoe Logistics" };

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main>
        <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-brand-navy-900">About Blejoe Logistics</h1>
          <p className="mt-2 max-w-xl text-brand-navy-700">
            Revolutionizing goods movement with precision and reliability.
          </p>
        </div>
        <WhoWeAre />
        <CoverageStats />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
