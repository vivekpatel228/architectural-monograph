import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="pt-32 px-6 md:px-20 pb-24 md:pb-32 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8">
            <span className="uppercase text-[0.75rem] tracking-[0.2em] font-label text-secondary mb-6 block">
              Inquiry
            </span>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] text-primary">
              Let&apos;s grow <br />your brand.
            </h1>
          </div>
          <div className="md:col-span-4 md:pb-4">
            <p className="font-body text-lg md:text-xl text-secondary leading-relaxed italic border-l border-outline-variant/30 pl-8">
              Every great structure begins with a single conversation. Tell us
              about your vision, and let&apos;s craft something permanent together.
            </p>
          </div>
        </div>
      </section>

      {/* ── Form & Info ───────────────────────────────────── */}
      <section className="bg-surface-container-low py-24 md:py-32">
        <div className="px-6 md:px-20 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20 md:gap-32">
          {/* Contact Form */}
          <div className="lg:col-span-7 bg-surface p-10 md:p-16 shadow-[0_20px_60px_-15px_rgba(56,56,49,0.05)]">
            <form action="#" className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <label className="uppercase text-[0.65rem] tracking-widest font-label text-secondary block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Johnathan Doe"
                    className="w-full bg-transparent border-0 border-b border-outline-variant/40 py-3 focus:ring-0 focus:border-primary focus:outline-none transition-all duration-300 text-on-surface placeholder:text-outline-variant/60 font-body"
                  />
                </div>
                <div>
                  <label className="uppercase text-[0.65rem] tracking-widest font-label text-secondary block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="email@studio.com"
                    className="w-full bg-transparent border-0 border-b border-outline-variant/40 py-3 focus:ring-0 focus:border-primary focus:outline-none transition-all duration-300 text-on-surface placeholder:text-outline-variant/60 font-body"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <label className="uppercase text-[0.65rem] tracking-widest font-label text-secondary block mb-2">
                    Website
                  </label>
                  <input
                    type="url"
                    placeholder="https://"
                    className="w-full bg-transparent border-0 border-b border-outline-variant/40 py-3 focus:ring-0 focus:border-primary focus:outline-none transition-all duration-300 text-on-surface placeholder:text-outline-variant/60 font-body"
                  />
                </div>
                <div>
                  <label className="uppercase text-[0.65rem] tracking-widest font-label text-secondary block mb-2">
                    Budget Range
                  </label>
                  <select className="w-full bg-transparent border-0 border-b border-outline-variant/40 py-3 focus:ring-0 focus:border-primary focus:outline-none transition-all duration-300 text-on-surface font-body appearance-none cursor-pointer">
                    <option>Select a range</option>
                    <option>$10k – $25k</option>
                    <option>$25k – $50k</option>
                    <option>$50k+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="uppercase text-[0.65rem] tracking-widest font-label text-secondary block mb-2">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  placeholder="Briefly describe your goals and timeline..."
                  className="w-full bg-transparent border-0 border-b border-outline-variant/40 py-3 focus:ring-0 focus:border-primary focus:outline-none transition-all duration-300 text-on-surface placeholder:text-outline-variant/60 font-body resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto bg-primary text-on-primary px-12 py-5 uppercase text-[0.75rem] tracking-[0.2em] font-label font-bold hover:bg-primary-dim transition-all duration-500 group flex items-center justify-center gap-4"
              >
                Send Inquiry
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-20 self-center">
            <div>
              <h3 className="font-headline text-3xl text-primary mb-8">Studio Contact</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-6">
                  <span className="material-symbols-outlined text-tertiary">location_on</span>
                  <p className="font-body text-secondary leading-relaxed">
                    14 Savile Row, Mayfair<br />
                    London, W1S 3JN<br />
                    United Kingdom
                  </p>
                </div>
                <div className="flex items-center gap-6">
                  <span className="material-symbols-outlined text-tertiary">mail</span>
                  <a
                    href="mailto:hello@monograph.com"
                    className="font-body text-secondary hover:text-primary transition-colors"
                  >
                    hello@monograph.com
                  </a>
                </div>
                <div className="flex items-center gap-6">
                  <span className="material-symbols-outlined text-tertiary">call</span>
                  <a
                    href="tel:+442079460123"
                    className="font-body text-secondary hover:text-primary transition-colors"
                  >
                    +44 20 7946 0123
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-headline text-2xl text-primary mb-6">Digital Presence</h3>
              <div className="flex gap-8">
                {["Instagram", "Pinterest", "LinkedIn"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="uppercase text-[0.7rem] tracking-widest font-label text-secondary hover:text-tertiary transition-colors"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>

            {/* CTA mini-block */}
            <div className="bg-primary/5 p-10 border-l-4 border-tertiary">
              <p className="font-headline text-xl text-primary mb-4 italic">
                Need a more focused discussion?
              </p>
              <p className="font-body text-sm text-secondary mb-6 leading-relaxed">
                Skip the inbox and book a direct 30-minute discovery call with
                our principal architect.
              </p>
              <Link
                href="/booking"
                className="inline-flex items-center gap-2 uppercase text-[0.7rem] tracking-widest font-label font-bold text-tertiary hover:underline decoration-tertiary transition-all"
              >
                Book discovery call
                <span className="material-symbols-outlined text-sm">calendar_today</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery Strip ─────────────────────────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-0 h-[400px]">
        {[
          {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCASt_j2MQ_BAdWBrwhlTmNI5Opjh8IZL_lyVl6Cx45c--t7E7lDFlRDdu1IZxRT3mJ8xEn8LksPXchTqfknF_Ng66mmYvlI8RIdwNoQjjiQW0ZZwH9wKm9B614AYwovSN24_Oe__tx1E_fVvJmdu5Wum2agLWVe52K9cPzi7t3ZkdctzZq4R33T_ISN_G4j1de0iVNUws8LhmhGJ7Sot9M_PgRxR3IwwlSNzRWPRcYtFkzkx31-xCQf39N5TFupp7f-zimzokYl_Cu",
            alt: "Architectural glass facade",
          },
          {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlFnnWylY2HY6b1N21bBr9-EZUPks0JRJ22k-LLMO43WcO9TJ1WrOS4uEsyxMZYV1Ru9i02iRjVpWhMuWiFhaev9rFx0Qu1zqVqLCMUjEwKwg_eWejbOG3mDxcHp7tQkksNATYElNlkkqU9t-MaZQMolPiL0qXE_pp00tfkM6I6kJKDfTzYGjrG_0TnWCaVP4RrEiDoKRMh4wBQZ6yGFcEADr2ABcAGt2KfWZL6Nts-gjvZvywypxNVI85axf1IpmuB-NXnt9sOcNR",
            alt: "Minimalist interior office",
          },
          {
            src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqDNQGMlby_X4zVUfPGOMLcGAaBSr679qAZsLKAAWQq1zRrJesxk2UESmvYOvVmIAy1eKLhaTXttm9UI3mdlg1-dbgLijYiOumBFk_M4iAJxX7Ih4OyPNynYx_tQoLhIeyMFYreHLrsZqEVFCwhYYwrEX4PHDX6bJRGjk8I2c9_zPczu6p_LvREVpyyZmbCtcOQkkkqVI_8IgBzn_OI11UlvF-hHJD1Doe70PwSAfCKPfOZBaruiUqacYHFErPGHqWL3RcJubEcMXm",
            alt: "Spiral concrete staircase",
          },
        ].map((img) => (
          <div key={img.alt} className="overflow-hidden group relative">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
            />
          </div>
        ))}
      </section>
    </>
  );
}
