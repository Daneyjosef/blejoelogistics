import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { CONTACT_INFO } from "@/content/about-data";
import { SERVICES } from "@/content/services-data";

const FOOTER_NAV = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

// Social links are placeholders — the live site shows 5 social icons
// but doesn't expose which platforms/URLs. Confirm real handles before
// launch and swap the hrefs below. Monograms used instead of brand
// icons since lucide-react no longer ships brand/logo glyphs.
const SOCIAL_LINKS = [
  { label: "Facebook", monogram: "f", href: "#" },
  { label: "Instagram", monogram: "ig", href: "#" },
  { label: "LinkedIn", monogram: "in", href: "#" },
  { label: "Twitter / X", monogram: "x", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-brand-navy-950 text-white/80">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/brand/blejoe-logo.png"
              alt="Blejoe Logistics"
              width={160}
              height={54}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="mt-4 max-w-xs text-sm text-white/60">
              Logistics and heavy equipment hire — trusted delivery across Lagos and beyond.
            </p>
            <div className="mt-5 flex gap-2">
              {SOCIAL_LINKS.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-[11px] font-semibold uppercase text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <span aria-hidden="true">{s.monogram}</span>
                  <span className="sr-only">{s.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-white/60">
              Navigate
            </p>
            <ul className="mt-4 space-y-2">
              {FOOTER_NAV.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-white/60">
              Services
            </p>
            <ul className="mt-4 space-y-2">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={s.href} className="text-sm text-white/70 hover:text-white">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-white/60">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`} className="hover:text-white">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white">
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Blejoe Logistics. All rights reserved.</p>
          <p>18 Adeleke Street off Tinuade Street, Allen Avenue, Ikeja, Lagos</p>
        </div>
      </div>
    </footer>
  );
}
