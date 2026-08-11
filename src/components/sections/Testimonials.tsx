import { Star } from "lucide-react";
import { TESTIMONIALS } from "@/content/about-data";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function Testimonials() {
  return (
    <section className="bg-brand-sky-100/60 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-10 max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-blue-600">
            Testimonials
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-brand-navy-900 sm:text-4xl">
            What clients say
          </h2>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <RevealItem
              key={t.name}
              className="rounded-card border border-brand-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex gap-0.5 text-brand-orange-500">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-3 text-sm text-brand-navy-700">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-4 text-sm font-bold text-brand-navy-900">{t.name}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
