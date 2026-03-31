"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full flex justify-between items-center px-6 md:px-20 py-6 bg-[#fffcf7]/90 backdrop-blur-md z-50 transition-all duration-300">
      <Link
        href="/"
        className="lg:text-xl text-base font-headline flex flex-col lg:flex-row gap-0.5 lg:gap-2 font-bold tracking-tighter text-primary"
      >
        <span>ARCHITECTURAL</span>
        <span>MONOGRAPH</span>
      </Link>

      <nav className="hidden lg:flex items-center space-x-10">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`uppercase text-[0.75rem] tracking-widest font-label transition-colors duration-300 ${
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
        className="hidden lg:inline-flex bg-primary text-on-primary px-6 py-2.5 uppercase text-[0.7rem] tracking-[0.15em] font-bold font-label hover:bg-primary-dim transition-all duration-300 active:scale-95"
      >
        Book Consultation
      </Link>

      <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <SheetTrigger
          type="button"
          className="lg:hidden inline-flex items-center justify-center rounded-full border border-primary/20 text-primary h-10 w-10 transition-colors hover:bg-primary/10"
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </SheetTrigger>

        <SheetContent
          side="right"
          className="px-6 pt-6 pb-8"
          showCloseButton={false}
        >
          <SheetHeader className="flex flex-row justify-between items-center p-0">
            <SheetTitle>
              <Link
                href="/"
                className="text-base font-headline flex flex-col font-bold tracking-tighter text-primary"
              >
                <span>ARCHITECTURAL</span>
                <span>MONOGRAPH</span>
              </Link>
            </SheetTitle>
            <SheetClose
              className="inline-flex items-center justify-center rounded-full border border-primary/20 text-primary h-9 w-9 transition-colors hover:bg-primary/10"
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
            >
              <X className="h-4 w-4" />
            </SheetClose>
          </SheetHeader>

          <nav className="mt-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`uppercase text-[0.85rem] tracking-[0.2em] font-label transition-colors duration-300 ${
                  pathname === link.href
                    ? "text-primary font-semibold underline underline-offset-10 decoration-primary/60"
                    : "text-secondary hover:text-primary hover:underline hover:underline-offset-10 hover:decoration-primary/40"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-10">
            <Link
              href="/" // Navigate /booking
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex w-full justify-center bg-primary text-on-primary px-6 py-3 uppercase text-[0.7rem] tracking-[0.18em] font-bold font-label hover:bg-primary-dim transition-all duration-300 active:scale-95"
            >
              Book Consultation
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
