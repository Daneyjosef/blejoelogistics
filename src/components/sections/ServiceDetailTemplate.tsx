import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { PillButton } from "@/components/ui/PillButton";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Check } from "lucide-react";
import type { Service } from "@/content/services-data";

export function ServiceDetailTemplate({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <div className="flex min-h-screen flex-col">
      <Nav />

      <main>
      <section className="relative overflow-hidden bg-brand-navy-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <span className="flex w-fit items-center gap-2 rounded-pill bg-white/10 px-4 py-1.5 text-xs font-semibold text-white">
            <Icon size={14} /> {service.name}
          </span>
          <h1 className="mt-5 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            {service.tagline}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/80">{service.detailIntro}</p>
          <div className="mt-8">
            <PillButton href="/contact" variant="primary">
              Get a Quote
            </PillButton>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-brand-navy-900">What&apos;s Included</h2>
        </Reveal>
        <RevealGroup className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {service.features?.map((feature) => (
            <RevealItem
              key={feature}
              className="flex items-start gap-3 rounded-card border border-brand-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-sky-100 text-brand-blue-600">
                <Check size={16} />
              </span>
              <p className="font-medium text-brand-navy-900">{feature}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </section>

      <Reveal className="mx-auto max-w-7xl px-4 pb-16 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-brand-navy-900">
          Ready to get started?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-brand-navy-700">
          Tell us about your {service.name.toLowerCase()} needs and we&apos;ll put together a plan.
        </p>
        <div className="mt-8 flex justify-center">
          <PillButton href="/contact" variant="primary">
            Get a Quote
          </PillButton>
        </div>
      </Reveal>
      </main>

      <Footer />
    </div>
  );
}
