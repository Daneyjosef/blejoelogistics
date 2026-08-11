import Image from "next/image";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { PillButton } from "@/components/ui/PillButton";
import { FloatingCard } from "@/components/ui/FloatingCard";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { HEAVY_EQUIPMENT_ITEMS, USE_CASES } from "@/content/services-data";
import { HardHat } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Heavy Equipment Hire | Blejoe Logistics",
  description:
    "Forklift hire, crane hire, HIAB lorry-mounted crane hire, and heavy machinery truck hire in Lagos.",
};

export default function HeavyEquipmentHirePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />

      <main>
      {/* Hero banner */}
      <section className="relative overflow-hidden bg-brand-navy-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <span className="flex w-fit items-center gap-2 rounded-pill bg-white/10 px-4 py-1.5 text-xs font-semibold text-white">
            <HardHat size={14} /> Heavy Equipment Hire
          </span>
          <h1 className="mt-5 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Forklift, crane, HIAB, and machinery haulage — on hire, on schedule
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/80">
            A dedicated second pillar of Blejoe Logistics: the lifting and heavy-haulage capacity
            your site or project needs, backed by the same reliability as our logistics services.
          </p>
          <div className="mt-8">
            <PillButton href="/contact" variant="primary">
              Request a Quote
            </PillButton>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-brand-navy-900">What&apos;s Included</h2>
          <p className="mt-2 max-w-xl text-brand-navy-700">
            Four hire lines, each available with an experienced operator.
          </p>
        </Reveal>

        <RevealGroup className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {HEAVY_EQUIPMENT_ITEMS.map((item) => (
            <RevealItem
              key={item.slug}
              className="overflow-hidden rounded-card border border-brand-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-48 w-full bg-brand-sky-100">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-brand-navy-700/60">
                      Photo needed — placeholder
                    </span>
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-brand-navy-900">{item.name}</h3>
                <p className="mt-1 text-sm text-brand-navy-700">{item.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      {/* Typical use cases */}
      <section className="bg-brand-sky-100/60 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-brand-navy-900">Typical Use Cases</h2>
            <p className="mt-2 max-w-xl text-brand-navy-700">
              How this equipment gets put to work on Nigerian sites and projects.
            </p>
          </Reveal>

          <RevealGroup className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {USE_CASES.map((useCase) => (
              <RevealItem key={useCase.title}>
                <FloatingCard as="static">
                  <h3 className="font-bold text-brand-navy-900">{useCase.title}</h3>
                  <p className="mt-1 text-sm text-brand-navy-700">{useCase.description}</p>
                </FloatingCard>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Quote CTA */}
      <Reveal className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-brand-navy-900">
          Need a forklift, crane, or HIAB on site?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-brand-navy-700">
          Tell us the job and the timeline — we&apos;ll match the right equipment and operator.
        </p>
        <div className="mt-8 flex justify-center">
          <PillButton href="/contact" variant="primary">
            Request a Quote
          </PillButton>
        </div>
      </Reveal>
      </main>

      <Footer />
    </div>
  );
}
