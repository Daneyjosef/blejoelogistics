"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PillButton } from "@/components/ui/PillButton";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

/**
 * Mobile primary navigation now lives in the bottom tab bar
 * (MobileTabBar) — no hamburger/slide-in panel here anymore, so the
 * hero video reads as full-screen instead of sitting under app chrome.
 * "About" isn't in the 4-tab bottom bar; it's still reachable via the
 * footer and the desktop nav.
 */
export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white/90 shadow-sm backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-3 py-3 sm:px-4 lg:px-5">
        <Link href="/" className="flex items-center">
          <Image
            src="/brand/blejoe-logo.png"
            alt="Blejoe Logistics"
            width={160}
            height={54}
            priority
            className="h-9 w-auto drop-shadow-[0_1px_6px_rgba(0,0,0,0.25)] lg:h-10"
          />
        </Link>

        {/* Desktop pill nav */}
        <nav className="hidden items-center gap-1 rounded-pill border border-brand-gray-200 bg-white px-2 py-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-pill px-4 py-2 text-sm font-medium text-brand-navy-700 transition-colors hover:bg-brand-sky-100 hover:text-brand-blue-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <PillButton href="/contact">Get a Quote</PillButton>
        </div>
      </div>
    </header>
  );
}
