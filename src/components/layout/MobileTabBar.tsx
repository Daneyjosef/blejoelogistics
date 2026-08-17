"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Package, FolderKanban, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const TABS: { href: string; label: string; icon: LucideIcon }[] = [
  { href: "/", label: "Home", icon: Home },
  { href: "/services", label: "Services", icon: Package },
  { href: "/projects", label: "Projects", icon: FolderKanban },
  { href: "/contact", label: "Contact", icon: Phone },
];

/**
 * Native-app-style bottom tab bar, mobile/tablet only (hidden at lg
 * alongside the hamburger nav, where the desktop pill nav takes over).
 * Sits fixed with safe-area padding so it clears the home indicator on
 * notched phones. Complements — doesn't replace — the top Nav, the way
 * many app-like mobile sites pair a brand header with a bottom tab bar.
 */
export function MobileTabBar() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-brand-gray-200 bg-white/95 backdrop-blur-md lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-auto flex max-w-md items-stretch justify-between px-1">
        {TABS.map((tab) => {
          const isActive =
            tab.href === "/" ? pathname === "/" : pathname.startsWith(tab.href);
          const Icon = tab.icon;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className="flex flex-1 flex-col items-center justify-center gap-0.5 py-1.5 transition-transform duration-150 active:scale-90"
            >
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-full transition-colors duration-200 ${
                  isActive ? "bg-brand-sky-100 text-brand-blue-600" : "text-brand-navy-700/60"
                }`}
              >
                <Icon size={16} strokeWidth={isActive ? 2.4 : 2} />
              </span>
              <span
                className={`text-[9px] font-medium transition-colors duration-200 ${
                  isActive ? "text-brand-blue-600" : "text-brand-navy-700/60"
                }`}
              >
                {tab.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
