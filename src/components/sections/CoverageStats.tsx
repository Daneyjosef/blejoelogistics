import { MapPin, Truck, Globe } from "lucide-react";
import { StatCard } from "@/components/ui/StatCard";
import { CONTACT_INFO, COMPANY_STATS } from "@/content/about-data";
import { Reveal } from "@/components/ui/Reveal";

const MAP_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(
  CONTACT_INFO.address + ", Nigeria"
)}&output=embed`;

/**
 * Bento panel pairing a real embedded map (Google Maps, no API key
 * required for this basic embed) with stat cards, per the reference
 * layout. Swap in a Nigeria-wide coverage view once branches beyond
 * Lagos are confirmed.
 */
export function CoverageStats() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <Reveal className="mb-10 max-w-xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-blue-600">
          Coverage
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-brand-navy-900 sm:text-4xl">
          Based in Lagos, built to move
        </h2>
      </Reveal>

      <Reveal className="grid grid-cols-1 gap-5 lg:grid-cols-3" delay={0.1}>
        {/* Map panel */}
        <div className="relative overflow-hidden rounded-card border border-brand-gray-200 bg-brand-navy-900">
          <div className="relative h-64 w-full sm:h-80">
            <iframe
              title="Blejoe Logistics — Ikeja, Lagos"
              src={MAP_EMBED_SRC}
              className="h-full w-full border-0 grayscale-[15%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2 rounded-pill bg-white px-3 py-1.5 text-xs font-semibold text-brand-navy-900 shadow-lg">
              <MapPin size={14} className="text-brand-blue-600" />
              Ikeja, Lagos (HQ)
            </div>
          </div>
        </div>

        {/* Stat cards */}
        <div className="flex flex-col gap-5">
          <StatCard
            value={`${COMPANY_STATS.yearsInOperation}+`}
            label="Years in operation"
            icon={Globe}
            countTo={COMPANY_STATS.yearsInOperation}
            suffix="+"
          />
          <StatCard
            value={`${COMPANY_STATS.fleetVehicles}+`}
            label="Fleet vehicles"
            icon={Truck}
            countTo={COMPANY_STATS.fleetVehicles}
            suffix="+"
          />
        </div>
      </Reveal>
    </section>
  );
}
