import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Blog | Blejoe Logistics" };

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main>
        <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-brand-navy-900">Blog</h1>
          <p className="mt-2 max-w-xl text-brand-navy-700">
            Logistics and heavy equipment insights from the Blejoe team.
          </p>
        </div>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-card border border-dashed border-brand-gray-200 bg-brand-sky-100/40 p-10 text-center">
            <p className="font-semibold text-brand-navy-900">No blog posts yet.</p>
            <p className="mx-auto mt-2 max-w-md text-sm text-brand-navy-700">
              The live site's Blog nav item had no visible posts either. This listing is wired and
              ready — send post titles/content when you have them, or confirm whether Blog should
              launch empty and fill in over time.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
