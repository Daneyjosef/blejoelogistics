import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES, HEAVY_EQUIPMENT_ITEMS } from "@/content/services-data";

/**
 * Option B — the three existing service lines as normal tiles, plus
 * Heavy Equipment Hire broken out into 4 individual sub-cards
 * (forklift / crane / HIAB / machinery truck), each equally weighted
 * against the logistics tiles.
 */
export function ServicesGridAlt() {
  const coreServices = SERVICES.filter((s) => s.slug !== "heavy-equipment-hire");

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mb-10 max-w-xl">
        <h2 className="text-3xl font-bold tracking-tight text-brand-navy-900 sm:text-4xl">
          Core Services — Option B
        </h2>
        <p className="mt-3 text-brand-navy-700">
          Heavy Equipment Hire split into 4 equally-weighted sub-cards instead of one tile.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {coreServices.map((service) => {
          const Icon = service.icon;
          return (
            <Link
              key={service.slug}
              href={service.href}
              className="group flex flex-col justify-between rounded-card border border-brand-gray-200 bg-white p-6 text-brand-navy-900 transition-colors duration-300 hover:bg-brand-sky-100"
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
          );
        })}
      </div>

      <div className="mt-5 rounded-card bg-brand-navy-900 p-6">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-white/60">
          Heavy Equipment Hire
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {HEAVY_EQUIPMENT_ITEMS.map((item) => (
            <div key={item.slug} className="rounded-2xl bg-white/5 p-4">
              <h4 className="font-semibold text-white">{item.name}</h4>
              <p className="mt-1 text-xs text-white/70">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
