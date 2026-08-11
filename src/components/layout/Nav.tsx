"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { PillButton } from "@/components/ui/PillButton";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/*
        Fixed (not sticky) so it overlays the full-viewport hero video
        instead of pushing it down. Transparent at the top of the page,
        picks up a white background + blur once scrolled. Also note:
        this must stay OUTSIDE the mobile panel's containing element
        (see below) since backdrop-blur creates a containing block for
        position:fixed descendants.
      */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-white/90 shadow-sm backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-3 py-3 sm:px-4 lg:px-5">
          <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
            <Image
              src="/brand/blejoe-logo.png"
              alt="Blejoe Logistics"
              width={160}
              height={54}
              priority
              className="h-10 w-auto drop-shadow-[0_1px_6px_rgba(0,0,0,0.25)]"
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

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-gray-200 bg-white lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/*
        Mobile slide-in panel + backdrop live OUTSIDE <header> deliberately.
        <header> has backdrop-blur-md, and backdrop-filter (like transform
        and filter) makes an element the containing block for its
        position:fixed descendants — so a fixed panel nested inside it
        would position against the header's small box, not the viewport,
        breaking full-screen overlay behavior.
      */}
      <div
        className={`fixed inset-0 z-40 bg-brand-navy-950/40 transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />
      <div
        className={`fixed top-0 right-0 z-50 h-full w-4/5 max-w-sm transform bg-white shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4">
          <Image
            src="/brand/blejoe-logo.png"
            alt="Blejoe Logistics"
            width={140}
            height={48}
            className="h-9 w-auto"
          />
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-gray-200"
          >
            <X size={18} />
          </button>
        </div>
        <nav className="flex flex-col gap-1 px-5 py-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-base font-medium text-brand-navy-900 transition-colors hover:bg-brand-sky-100"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4">
            <PillButton href="/contact" className="w-full justify-center">
              Get a Quote
            </PillButton>
          </div>
        </nav>
      </div>
    </>
  );
}
