import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { PillButton } from "@/components/ui/PillButton";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { CONTACT_INFO } from "@/content/about-data";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Contact | Blejoe Logistics" };

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main>
        <div className="mx-auto max-w-7xl px-4 pt-28 sm:px-6 sm:pt-32 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-brand-navy-900">Get a Quote</h1>
          <p className="mt-2 max-w-xl text-brand-navy-700">
            Tell us what you need moved, stored, or lifted — we&apos;ll get back to you.
          </p>
        </div>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          {/* Form — UI only, not wired to a backend yet */}
          <form className="lg:col-span-3">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="text-sm font-medium text-brand-navy-900">Full name</label>
                <input
                  type="text"
                  className="mt-1.5 w-full rounded-xl border border-brand-gray-200 px-4 py-2.5 text-sm outline-none focus:border-brand-blue-600"
                  placeholder="Your name"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="text-sm font-medium text-brand-navy-900">Phone</label>
                <input
                  type="tel"
                  className="mt-1.5 w-full rounded-xl border border-brand-gray-200 px-4 py-2.5 text-sm outline-none focus:border-brand-blue-600"
                  placeholder="+234"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-brand-navy-900">Email</label>
                <input
                  type="email"
                  className="mt-1.5 w-full rounded-xl border border-brand-gray-200 px-4 py-2.5 text-sm outline-none focus:border-brand-blue-600"
                  placeholder="you@company.com"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm font-medium text-brand-navy-900">
                  What do you need?
                </label>
                <textarea
                  rows={5}
                  className="mt-1.5 w-full rounded-xl border border-brand-gray-200 px-4 py-2.5 text-sm outline-none focus:border-brand-blue-600"
                  placeholder="Warehousing, transportation, crane hire, HIAB, etc."
                />
              </div>
            </div>

            <div className="mt-6">
              <PillButton variant="primary" type="button">
                Send Message
              </PillButton>
              <p className="mt-3 text-xs text-brand-navy-700/60">
                Form is UI-only for now — needs a form backend (e.g. Formspree, Resend, or a
                simple API route) wired up before launch.
              </p>
            </div>
          </form>

          {/* Contact details */}
          <div className="space-y-5 lg:col-span-2">
            <div className="rounded-card border border-brand-gray-200 bg-white p-6">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-brand-blue-600" />
                <p className="text-sm text-brand-navy-700">{CONTACT_INFO.address}</p>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <Phone size={18} className="shrink-0 text-brand-blue-600" />
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`} className="text-sm text-brand-navy-700">
                  {CONTACT_INFO.phone}
                </a>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <Mail size={18} className="shrink-0 text-brand-blue-600" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm text-brand-navy-700">
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="mt-4 flex items-start gap-3">
                <Clock size={18} className="mt-0.5 shrink-0 text-brand-blue-600" />
                <div className="text-sm text-brand-navy-700">
                  {CONTACT_INFO.hours.map((h) => (
                    <p key={h.days}>
                      {h.days}: {h.time}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex h-48 items-center justify-center rounded-card border border-dashed border-brand-gray-200 bg-brand-sky-100/40">
              <p className="text-sm text-brand-navy-700/60">
                Map embed placeholder — swap in Google Maps/Mapbox embed for the Ikeja address
              </p>
            </div>
          </div>
        </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
