"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const navItems = [
  {
    label: "Charter",
    href: "#",
    dropdown: [
      { label: "Plan Your Adventure", href: "/charter" },
      { label: "Itineraries", href: "/itineraries" },
      { label: "Booking & Rates", href: "/booking" },
      { label: "Rental Services", href: "/services" },
    ],
  },
  {
    label: "Fleet",
    href: "/fleet",
    dropdown: [
      { label: "All Vessels", href: "/fleet" },
      { label: "Sailboats", href: "/fleet?type=sail" },
      { label: "Powerboats", href: "/fleet?type=power" },
    ],
  },
  { label: "Destinations", href: "/destinations" },
  {
    label: "More",
    href: "#",
    dropdown: [
      { label: "Training & Certification", href: "/training" },
      { label: "Yacht Ownership", href: "/ownership" },
      { label: "Marine Services", href: "/marine-services" },
      { label: "Marine Store", href: "/store" },
    ],
  },
  {
    label: "About",
    href: "#",
    dropdown: [
      { label: "Our Story", href: "/about" },
      { label: "Comox Base", href: "/about#comox-base" },
      { label: "Environment", href: "/environment" },
    ],
  },
];

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "shadow-[0_2px_20px_rgba(0,0,0,0.3)]" : ""
      }`}
      style={{ backgroundColor: "var(--color-deep)" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold)] rounded-sm"
          aria-label="Desolation Sound Yacht Charters — Home"
        >
          <Image
            src="/images/dsyc-logo.png"
            alt="Desolation Sound Yacht Charters"
            width={40}
            height={68}
            className="h-10 w-auto"
            priority
          />
          <span
            className="hidden text-sm font-medium sm:block"
            style={{ color: "rgba(255,255,255,0.90)", fontFamily: "var(--font-body)", letterSpacing: "0.02em" }}
          >
            Desolation Sound Yacht Charters
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Primary navigation" className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.label} className="relative">
                <button
                  onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  onBlur={() => setTimeout(() => setOpenDropdown(null), 200)}
                  className="flex items-center gap-1 rounded-sm px-3 py-2 text-sm font-medium transition-colors hover:bg-white/10"
                  style={{ color: "rgba(255,255,255,0.85)" }}
                  aria-expanded={openDropdown === item.label}
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown
                    size={13}
                    aria-hidden="true"
                    className={`transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`}
                  />
                </button>
                {openDropdown === item.label && (
                  <div
                    className="absolute top-full left-0 mt-1 min-w-[210px] overflow-hidden rounded-md shadow-xl"
                    style={{
                      backgroundColor: "var(--color-white)",
                      border: "1px solid var(--color-border)",
                    }}
                    role="menu"
                  >
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        role="menuitem"
                        onClick={() => setOpenDropdown(null)}
                        className="block px-4 py-2.5 text-sm font-medium transition-colors hover:bg-[var(--color-mist)]"
                        style={{ color: "var(--color-ink)" }}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-sm px-3 py-2 text-sm font-medium transition-colors hover:bg-white/10"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+12503397222"
            className="flex items-center gap-1.5 text-sm transition-colors hover:text-white"
            style={{ color: "rgba(255,255,255,0.70)" }}
            aria-label="Call us at 250-339-7222"
          >
            <Phone size={13} aria-hidden="true" />
            <span>250-339-7222</span>
          </a>
          <Link
            href="/booking"
            className="rounded-sm px-4 py-2 text-sm font-semibold transition-all active:scale-95 hover:opacity-90"
            style={{ backgroundColor: "var(--color-gold)", color: "var(--color-deep)" }}
          >
            Enquire Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-sm p-2 transition-colors hover:bg-white/10 lg:hidden"
          style={{ color: "white" }}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="border-t lg:hidden"
          style={{ backgroundColor: "var(--color-deep)", borderColor: "var(--color-border-dark)" }}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col px-4 py-4 space-y-1">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.label}>
                  <p
                    className="px-3 pt-3 pb-1 text-xs font-semibold uppercase tracking-widest"
                    style={{ color: "rgba(255,255,255,0.40)" }}
                  >
                    {item.label}
                  </p>
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="block rounded-sm px-5 py-2.5 text-sm font-medium transition-colors hover:bg-white/10"
                      style={{ color: "rgba(255,255,255,0.82)" }}
                      onClick={() => setIsOpen(false)}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-sm px-3 py-2.5 text-base font-medium transition-colors hover:bg-white/10"
                  style={{ color: "rgba(255,255,255,0.90)" }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
            <div
              className="flex flex-col gap-3 border-t pt-4 mt-2"
              style={{ borderColor: "var(--color-border-dark)" }}
            >
              <a
                href="tel:+12503397222"
                className="flex items-center gap-2 px-3 text-sm"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                <Phone size={14} aria-hidden="true" />
                <span>250-339-7222</span>
              </a>
              <Link
                href="/booking"
                className="rounded-sm px-4 py-3 text-center text-sm font-semibold"
                style={{ backgroundColor: "var(--color-gold)", color: "var(--color-deep)" }}
                onClick={() => setIsOpen(false)}
              >
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
