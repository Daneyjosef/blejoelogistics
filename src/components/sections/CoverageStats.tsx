import { MapPin, Truck, Globe } from "lucide-react";
import { StatCard } from "@/components/ui/StatCard";
import { COVERAGE_LOCATIONS } from "@/content/about-data";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Bento panel pairing a stylized coverage map with stat cards, per the
 * reference layout. This is a dotted abstract panel (not a precise
 * geographic SVG of Nigeria) with pins placed by percentage coordinates
 * in COVERAGE_LOCATIONS — swap in a real Nigeria map SVG if the client
 * wants literal geographic accuracy, and add more cities once coverage
 * beyond Lagos is confirmed.
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
        <div className="relative overflow-hidden rounded-card border border-brand-gray-200 bg-brand-navy-900 p-6 lg:col-span-2">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "16px 16px",
            }}
          />
          <div className="relative flex h-64 items-center justify-center sm:h-80">
            {COVERAGE_LOCATIONS.map((loc) => (
              <div
                key={loc.name}
                className="absolute flex flex-col items-center"
                style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
              >
                <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue-600 text-white shadow-lg ring-4 ring-white/20">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-blue-600/60 motion-reduce:animate-none" />
                  <MapPin size={16} className="relative" />
                </span>
                <span className="mt-2 whitespace-nowrap rounded-pill bg-white px-3 py-1 text-xs font-semibold text-brand-navy-900">
                  {loc.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stat cards */}
        <div className="flex flex-col gap-5">
          <StatCard value="XX+" label="Years in operation" icon={Globe} placeholder />
          <StatCard value="XX+" label="Fleet vehicles" icon={Truck} placeholder />
        </div>
      </Reveal>
    </section>
  );
}
