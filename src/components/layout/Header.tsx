"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  // { label: "Services",     href: "/services" },
  // { label: "Portfolio",    href: "/portfolio" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 w-full flex justify-between items-center px-6 md:px-20 py-6 bg-[#fffcf7]/90 backdrop-blur-md z-50 transition-all duration-300">
      <Link
        href="/"
        className="text-xl font-headline font-bold tracking-tighter text-primary"
      >
        ARCHITECTURAL MONOGRAPH
      </Link>

      <nav className="hidden lg:flex items-center space-x-10">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`uppercase text-[0.75rem] tracking-[0.1em] font-label transition-colors duration-300 ${
              pathname === link.href
                ? "text-primary font-semibold"
                : "text-secondary hover:text-primary"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <Link
        href="/" // Navigate /booking
        className="bg-primary text-on-primary px-6 py-2.5 uppercase text-[0.7rem] tracking-[0.15em] font-bold font-label hover:bg-primary-dim transition-all duration-300 active:scale-95"
      >
        Book Consultation
      </Link>
    </header>
  );
}
