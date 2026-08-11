import { Nav } from "@/components/layout/Nav";
import { PillButton } from "@/components/ui/PillButton";
import { IconButton } from "@/components/ui/IconButton";
import { StatCard } from "@/components/ui/StatCard";
import { TrustBadge } from "@/components/ui/TrustBadge";
import { FloatingCard } from "@/components/ui/FloatingCard";
import { Truck, Globe, Package, Warehouse } from "lucide-react";
import { HEADLINE_OPTIONS, SELECTED_HEADLINE_ID } from "@/content/hero-copy";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { ServicesGridAlt } from "@/components/sections/ServicesGridAlt";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <h2 className="mb-5 text-sm font-semibold uppercase tracking-wide text-brand-navy-700/60">
        {title}
      </h2>
      <div className="flex flex-wrap items-center gap-4">{children}</div>
    </section>
  );
}

export default function ComponentPreviewPage() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />

      <Section title="Pill Buttons">
        <PillButton href="#" variant="primary">
          Get a Quote
        </PillButton>
        <PillButton href="#" variant="secondary">
          Our Services
        </PillButton>
        <PillButton href="#" variant="ghost">
          Learn More
        </PillButton>
      </Section>

      <Section title="Icon Buttons">
        <IconButton icon={Truck} label="Transportation" />
        <IconButton icon={Globe} label="Coverage" />
        <IconButton icon={Package} label="Warehousing" variant="dark" />
        <IconButton icon={Warehouse} label="Storage" size="sm" />
      </Section>

      <Section title="Stat Cards">
        <StatCard value="XX+" label="Tons delivered" icon={Truck} placeholder />
        <StatCard value="XX+" label="Years in operation" icon={Globe} placeholder />
      </Section>

      <Section title="Trust Badge">
        <TrustBadge line="Trusted logistics partner" />
      </Section>

      <Section title="Floating Card (generic)">
        <FloatingCard className="w-64">
          <p className="text-sm text-brand-navy-700">
            Generic floating overlay card content — used as the base for stat cards,
            trust badges, and any other hero overlay element.
          </p>
        </FloatingCard>
      </Section>

      <Section title="Hero Headline Options (pick one)">
        <div className="flex w-full flex-col gap-4">
          {HEADLINE_OPTIONS.map((opt) => (
            <div
              key={opt.id}
              className={`rounded-card border p-5 ${
                opt.id === SELECTED_HEADLINE_ID
                  ? "border-brand-blue-600 bg-brand-sky-100"
                  : "border-brand-gray-200"
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-navy-700/60">
                Option {opt.id.toUpperCase()}
                {opt.id === SELECTED_HEADLINE_ID && " — currently live on homepage"}
              </p>
              <p className="mt-1 text-xl font-bold text-brand-navy-900">{opt.headline}</p>
              <p className="mt-1 text-sm text-brand-navy-700">{opt.subtext}</p>
            </div>
          ))}
        </div>
      </Section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-brand-navy-700/60">
          Services Bento Grid — Option A (live on homepage)
        </h2>
        <div className="rounded-card border border-brand-gray-200 p-2">
          <ServicesGrid />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <h2 className="mb-2 text-sm font-semibold uppercase tracking-wide text-brand-navy-700/60">
          Services Bento Grid — Option B (4 equipment sub-cards)
        </h2>
        <div className="rounded-card border border-brand-gray-200 p-2">
          <ServicesGridAlt />
        </div>
      </div>

      <Section title="Brand Colors">
        {[
          ["Blue 600", "bg-brand-blue-600"],
          ["Blue 700", "bg-brand-blue-700"],
          ["Navy 900", "bg-brand-navy-900"],
          ["Navy 950", "bg-brand-navy-950"],
          ["Sky 100", "bg-brand-sky-100"],
          ["Gray 200", "bg-brand-gray-200"],
          ["Orange 500", "bg-brand-orange-500"],
        ].map(([label, cls]) => (
          <div key={label} className="flex flex-col items-center gap-2">
            <div className={`h-16 w-16 rounded-2xl border border-black/5 ${cls}`} />
            <span className="text-xs text-brand-navy-700">{label}</span>
          </div>
        ))}
      </Section>
    </main>
  );
}
