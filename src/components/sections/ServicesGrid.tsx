import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/content/services-data";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

/**
 * Option A — bento grid: the three logistics services as equal tiles,
 * with Heavy Equipment Hire as a full-width featured banner beneath —
 * gives it more visual weight than any single tile, with no dead grid
 * cells (a 2x2 tile inside a 4-col grid always leaves one empty cell;
 * a full-width banner avoids that entirely). See ServicesGridAlt for
 * Option B (Heavy Equipment Hire broken into 4 sub-cards).
 */
export function ServicesGrid() {
  const coreServices = SERVICES.filter((s) => s.slug !== "heavy-equipment-hire");
  const featured = SERVICES.find((s) => s.slug === "heavy-equipment-hire")!;

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <Reveal className="mb-10 max-w-xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-blue-600">
          What we do
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-brand-navy-900 sm:text-4xl">
          Core Services
        </h2>
        <p className="mt-3 text-brand-navy-700">
          Logistics and heavy equipment hire, from one trusted partner in Lagos.
        </p>
      </Reveal>

      <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {coreServices.map((service) => {
          const Icon = service.icon;
          return (
            <RevealItem key={service.slug}>
              <Link
                href={service.href}
                className="group relative flex h-full min-h-[220px] flex-col justify-between overflow-hidden rounded-card border border-brand-gray-200 bg-white p-6 text-brand-navy-900 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-sky-100 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-sky-100 text-brand-blue-600">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight">{service.name}</h3>
                  <p className="mt-1 text-sm text-brand-navy-700/80">{service.tagline}</p>
                </div>
                <span className="mt-4 flex h-9 w-9 items-center justify-center rounded-full bg-brand-navy-900 text-white transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={16} />
                </span>
              </Link>
            </RevealItem>
          );
        })}

        <RevealItem className="sm:col-span-3">
          <Link
            href={featured.href}
            className="group relative flex flex-col justify-between overflow-hidden rounded-card border border-brand-gray-200 bg-brand-navy-900 p-8 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand-navy-950 hover:shadow-lg sm:flex-row sm:items-center sm:gap-8"
          >
            <div className="flex items-start gap-4 sm:items-center">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                <featured.icon size={26} />
              </span>
              <div>
                <h3 className="text-2xl font-bold tracking-tight">{featured.name}</h3>
                <p className="mt-1 text-sm text-white/70">{featured.tagline}</p>
                <p className="mt-3 max-w-xl text-sm text-white/80">{featured.description}</p>
              </div>
            </div>
            <span className="mt-6 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-brand-navy-900 transition-transform duration-300 group-hover:rotate-45 sm:mt-0">
              <ArrowUpRight size={18} />
            </span>
          </Link>
        </RevealItem>
      </RevealGroup>
    </section>
  );
}
