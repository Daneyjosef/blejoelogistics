import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Blejoe Logistics",
};

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main>
        <div className="mx-auto max-w-7xl px-4 pt-28 sm:px-6 sm:pt-32 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-brand-navy-900">Services</h1>
          <p className="mt-2 max-w-xl text-brand-navy-700">
            Logistics and heavy equipment hire, from one trusted partner in Lagos.
          </p>
        </div>
        <ServicesGrid />
      </main>
      <Footer />
    </div>
  );
}
