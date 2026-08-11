import { PillButton } from "@/components/ui/PillButton";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <Reveal className="rounded-card bg-brand-navy-900 px-6 py-14 text-center sm:px-12">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to move with Blejoe?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-white/70">
          Warehousing, transportation, supply chain, or heavy equipment hire — tell us what you
          need and we&apos;ll get it moving.
        </p>
        <div className="mt-8 flex justify-center">
          <PillButton href="/contact" variant="primary">
            Get a Quote
          </PillButton>
        </div>
      </Reveal>
    </section>
  );
}
