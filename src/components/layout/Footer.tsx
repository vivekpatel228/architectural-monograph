import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface-container-low py-20 px-6 md:px-20 border-t border-outline-variant/10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-[1440px] mx-auto">
        <div className="col-span-1">
          <div className="text-lg font-headline font-bold text-primary mb-6">
            ARCHITECTURAL MONOGRAPH
          </div>
          <p className="text-sm font-body text-secondary leading-relaxed max-w-xs mb-8">
            Elevating the digital presence of the world&apos;s most prestigious
            interior design firms through strategic artistry.
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-70 transition-opacity">
              public
            </span>
            <span className="material-symbols-outlined text-primary cursor-pointer hover:opacity-70 transition-opacity">
              mail
            </span>
          </div>
        </div>

        <div>
          <h5 className="uppercase text-[0.7rem] tracking-[0.2em] font-bold text-on-surface mb-6 font-label">
            Agency
          </h5>
          <ul className="space-y-4 text-sm text-secondary">
            <li>
              <Link
                href="/about"
                className="hover:text-tertiary transition-colors"
              >
                About
              </Link>
            </li>
            {/* <li><Link href="/services"      className="hover:text-tertiary transition-colors">Services</Link></li>
            <li><Link href="/portfolio"     className="hover:text-tertiary transition-colors underline decoration-tertiary">Portfolio</Link></li> */}
            <li>
              <Link
                href="/case-studies"
                className="hover:text-tertiary transition-colors"
              >
                Case Studies
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="uppercase text-[0.7rem] tracking-[0.2em] font-bold text-on-surface mb-6 font-label">
            Support
          </h5>
          <ul className="space-y-4 text-sm text-secondary">
            <li>
              <Link
                href="/contact"
                className="hover:text-tertiary transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="hover:text-tertiary transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-tertiary transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-tertiary transition-colors">
                Terms
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="uppercase text-[0.7rem] tracking-[0.2em] font-bold text-on-surface mb-6 font-label">
            Follow
          </h5>
          <ul className="space-y-4 text-sm text-secondary">
            <li>
              <a href="#" className="hover:text-tertiary transition-colors">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-tertiary transition-colors">
                Pinterest
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-tertiary transition-colors">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto mt-16 pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[0.75rem] text-outline font-body">
          © 2024 Architectural Monograph. All rights reserved.
        </p>
        <p className="text-[0.75rem] text-outline font-body">
          Designed for Excellence.
        </p>
      </div>
    </footer>
  );
}
