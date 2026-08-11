import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { FinalCTA } from "@/components/sections/FinalCTA";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Projects | Blejoe Logistics" };

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main>
        <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-brand-navy-900">Projects</h1>
          <p className="mt-2 max-w-xl text-brand-navy-700">
            Case studies and completed jobs across logistics and heavy equipment hire.
          </p>
        </div>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-card border border-dashed border-brand-gray-200 bg-brand-sky-100/40 p-10 text-center">
            <p className="font-semibold text-brand-navy-900">
              No project case studies exist on the live site yet.
            </p>
            <p className="mx-auto mt-2 max-w-md text-sm text-brand-navy-700">
              This page is a placeholder structure — send project names, photos, and a short
              write-up for each job you want featured (client name optional) and I&apos;ll build
              out real case study cards here.
            </p>
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
