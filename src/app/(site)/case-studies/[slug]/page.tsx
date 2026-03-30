import Image from "next/image";
import Link from "next/link";

const results = [
  { val: "312%", label: "Inquiry Growth" },
  { val: "12:45", label: "Avg. Session Time" },
  { val: "45k+", label: "Monthly Visitors" },
  { val: "18.4%", label: "Conversion Rate" },
];

export default function CaseStudyDetailPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <header className="relative min-h-screen flex items-end pt-32 pb-24 px-6 md:px-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsLQzXmmuidT54DbqYJxWG9_vX0ViJixyjSj7BPQ-HV5e060GHJsDYhbbKzyxSIA6sht0EVn9TTmh3JEuGYxOsArWECW6G0_h4iOoGixY5IYCSXmhU6VbniwcHeJWaTOiV9xcHFFtxeMYy4OO7JhJuL9nxrpcURTIwABmkmIP8t-urj-25yJBtzrVSHxI7RCXM6Q72cIpXRNBiINmsfFpqNpsbvCLYABUfLYv1d4ugSjHk3O8I6MARS0Am6vMt-DoqnpCYZDrvCfdH"
            alt="Luxury interior"
            fill
            className="object-cover brightness-75 scale-105"
            priority
          />
        </div>
        <div className="relative z-10 w-full max-w-[1440px] mx-auto grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-8">
            <span className="inline-block uppercase text-[0.75rem] tracking-[0.2em] text-white/80 mb-6 font-medium font-label">
              Marketing Case Study № 042
            </span>
            <h1 className="text-white text-[4rem] md:text-[5.5rem] leading-[0.95] tracking-tight font-medium font-headline mb-12">
              A 312% Increase in <br />High-Value Inquiries.
            </h1>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:self-end">
            <div className="p-8 bg-surface/10 backdrop-blur-xl border-l border-white/20 text-white">
              <p className="text-lg font-light leading-relaxed mb-6 italic font-headline">
                &ldquo;The transformation of our digital presence wasn&apos;t just
                aesthetic; it fundamentally shifted the caliber of clientele we
                attract.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-8 bg-white/40" />
                <span className="uppercase text-[0.7rem] tracking-[0.1em] font-label">
                  Principal Architect, Studio V
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ── Client Profile & Challenge ────────────────────── */}
      <section className="py-32 px-6 md:px-20 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 lg:col-span-4">
            <h2 className="text-3xl font-headline font-medium mb-8">The Client Profile</h2>
            <p className="text-on-surface-variant leading-relaxed text-lg mb-8">
              Studio V is a bespoke architectural firm specializing in
              sustainable luxury estates. Despite their world-class
              craftsmanship, their digital footprint felt stagnant—failing to
              mirror the sophistication of their physical works.
            </p>
            <div className="grid grid-cols-2 gap-4 border-t border-outline-variant/30 pt-8">
              <div>
                <span className="block uppercase text-[0.65rem] tracking-widest font-label text-secondary mb-1">Industry</span>
                <span className="text-sm font-medium">Luxury Architecture</span>
              </div>
              <div>
                <span className="block uppercase text-[0.65rem] tracking-widest font-label text-secondary mb-1">Timeline</span>
                <span className="text-sm font-medium">6 Months</span>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6">
            <div>
              <span className="text-primary text-5xl font-headline italic block mb-4">01.</span>
              <h3 className="text-4xl font-headline mb-6">The Challenge: Breaking the Silence</h3>
              <p className="text-xl leading-relaxed text-on-surface-variant mb-6">
                The primary obstacle was visibility within the ultra-high-net-worth
                segment. Their portfolio was hidden behind a technical,
                non-indexed interface, and their narrative lacked the emotional
                resonance required for high-ticket service marketing.
              </p>
              <ul className="space-y-4">
                {[
                  "Low organic discoverability for primary service keywords.",
                  "Digital aesthetics disconnected from physical brand quality.",
                  "Friction-heavy inquiry process leading to high bounce rates.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-tertiary mt-1">close</span>
                    <span className="text-on-surface">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Strategy ──────────────────────────────────────── */}
      <section className="bg-surface-container-low py-32 px-6 md:px-20">
        <div className="max-w-[1440px] mx-auto grid grid-cols-12 gap-12 items-center">
          <div className="col-span-12 lg:col-span-6 order-2 lg:order-1">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0qGdHmL8FJlFo1vgDL4sOBAOMnysqdDVZlvyw1e8auZryUzWK8CK10ovNVA7gmCgwrfhxP7pBRujUiG8-eXmNT53xx4Tb2QZNPKaeA2mrKu0AT5kbmDILRLxiOaPzLdew46QIa1LF6RuarIgCqyj4dGs-lziUZrubLJKnACP4zo_uiOR6RiDhf0-QF6f1Y3mx_emwQyhhwlYszL_t0yKoMS2568O7vJYXsYZnbWE-2qyznClYbgYaWxi7uY1HNx-S8Cov5yMd1_oz"
              alt="Strategy planning"
              width={700}
              height={875}
              className="w-full aspect-[4/5] object-cover"
            />
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8 order-1 lg:order-2">
            <h2 className="text-5xl font-headline mb-10 leading-tight">
              The Strategy: <br />
              <span className="italic">The Digital Monograph</span>
            </h2>
            <div className="space-y-8">
              {[
                { phase: "Phase 01: Authority Building", desc: "We transitioned from 'marketing' to 'archiving.' By treating each project as a curated exhibit, we built authority through deep-dive storytelling and cinematic visuals." },
                { phase: "Phase 02: Narrative SEO",      desc: "Keywords were woven into architectural critiques and thought-leadership pieces, attracting an audience that values intellectual depth over standard sales pitches." },
                { phase: "Phase 03: Frictionless Intent", desc: "Implementation of a multi-tiered inquiry system that allowed prospects to engage at their own pace—from requesting a physical brochure to booking a direct consultation." },
              ].map((p) => (
                <div key={p.phase}>
                  <h4 className="uppercase text-[0.75rem] tracking-widest font-bold font-label text-primary mb-3">{p.phase}</h4>
                  <p className="text-on-surface-variant leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Execution Visuals ─────────────────────────────── */}
      <section className="py-32 px-6 md:px-20 max-w-[1440px] mx-auto">
        <div className="mb-20 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-headline mb-6">Execution & Visual Impact</h2>
          <p className="text-on-surface-variant">
            Every touchpoint was redesigned to feel like a page from a
            high-end journal. No clutter, only clarity.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-8">
            <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuAu6eG7IjBKjOdK7b8yhUvHfT2wLXQ6046AhUArdbQVYthc1u9EGpjZijwvgouNbpSYR61cV3kCa_iScYldOQ68YxpSbySkhBDoqzwpW9u1yIHGmMoSUr3fY1_9b3OJFq0GJHIJ5C35d8rmupkSsW7ljhAxq0KF-NGn0od3NIcew3JwEgj8fqKbq5tq1bMgwFkULXpHwRUnwHxkueSGBz3snYuXtdV5E6zjs9gviHdqKr-TQNKZ7M1DRxGBMKj6Mbst4wU-qdhH76KZ" alt="Before" width={500} height={300} className="w-full h-[300px] object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            <div className="p-6 bg-surface-container-high">
              <span className="text-xs uppercase tracking-widest font-label text-secondary font-bold mb-2 block">Before</span>
              <p className="text-sm italic">&ldquo;Traditional masonry layouts lacked the hierarchy needed to emphasize flagship projects.&rdquo;</p>
            </div>
          </div>
          <div className="md:mt-20 space-y-8">
            <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzKAjFB2L6R56b6as4cku1MkMbyWqUmCjUv7euobEkbaUbA3ajFP-gEMxsvFjYg8BCD57yzVGj-BfmlVX8Eul2aMoJ6S5GrbvkgUAuenoaKPK6HCNtx22ABJpIDAtPNykbYu7EmvO0f_Qd6WN6z7VWab3b4thI0YJN_m3YP5ikBjRF4K4nGNG8zp27sIutoL7sGhgl_dSwVAiodBmXCa0KwmO4_UN_F6VbPX3haOs-Q5jsNG28JdtQ0I0z3m7dFF6dPOENfKymZlWe" alt="After" width={500} height={500} className="w-full h-[500px] object-cover" />
            <div className="p-6 bg-primary-container/30">
              <span className="text-xs uppercase tracking-widest font-label text-primary font-bold mb-2 block">After Implementation</span>
              <p className="text-sm">&ldquo;The new narrative flow leads the visitor through the design philosophy before presenting the inquiry path.&rdquo;</p>
            </div>
          </div>
          <div className="space-y-8">
            <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBNUuYL_iI6Wq7llFwEnqNuqVN62ZH9tyheYbp5tsPJwafqp00JrGVWgmm6RNkBS6Ryn-poU5WP731sdKPBBxQpwsB3fbB0pQdJZo_zPFNWJeoXvEMyBzIBrf1ZPPn2NneXbeu_wFQ3ni6tyH6_D-ahrZG5OcaSt7dzjg5JF7XSQrHL8OQB2QSx-BxXxHUxMOAQ0XrxyJgLKRQVsK1YZavnwgAzsOb926Cf56wX35yoGasTmyesRDVTwHJQ1dQHGGV26ta1PtWHG_w" alt="Visual balance" width={500} height={300} className="w-full h-[300px] object-cover grayscale hover:grayscale-0 transition-all duration-500" />
            <div className="p-6 bg-surface-container-high">
              <span className="text-xs uppercase tracking-widest font-label text-secondary font-bold mb-2 block">Visual Balance</span>
              <p className="text-sm italic">&ldquo;Macro photography of materials reinforced the firm&apos;s focus on tactile craftsmanship.&rdquo;</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Results ───────────────────────────────────────── */}
      <section className="bg-primary text-on-primary py-32 px-6 md:px-20">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-5xl font-headline font-medium mb-8">Tangible Outcomes</h2>
            <p className="text-on-primary/70 text-lg leading-relaxed max-w-md">
              The metrics reflect a fundamental shift in user behavior. It
              wasn&apos;t just about traffic—it was about attracting the{" "}
              <em>right</em> kind of attention.
            </p>
          </div>
          <div className="space-y-12">
            {results.slice(0, 2).map((r) => (
              <div key={r.label} className="border-l border-on-primary/20 pl-8">
                <span className="block text-6xl font-headline mb-2">{r.val}</span>
                <span className="uppercase text-[0.65rem] tracking-[0.2em] font-medium font-label opacity-60">{r.label}</span>
              </div>
            ))}
          </div>
          <div className="space-y-12">
            {results.slice(2).map((r) => (
              <div key={r.label} className="border-l border-on-primary/20 pl-8">
                <span className="block text-6xl font-headline mb-2">{r.val}</span>
                <span className="uppercase text-[0.65rem] tracking-[0.2em] font-medium font-label opacity-60">{r.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="py-32 px-6 md:px-20 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="uppercase text-[0.75rem] tracking-[0.2em] font-label text-tertiary font-bold mb-6 block">
            The Next Monograph
          </span>
          <h2 className="text-[3.5rem] font-headline leading-tight mb-10 italic">
            Ready to redefine your digital narrative?
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <Link href="/booking" className="w-full md:w-auto bg-primary text-on-primary px-12 py-5 uppercase text-[0.85rem] tracking-widest font-bold font-label hover:bg-primary-dim transition-all duration-300 text-center">
              Get Results Like This
            </Link>
            <Link href="/services" className="w-full md:w-auto border border-outline-variant/30 px-12 py-5 uppercase text-[0.85rem] tracking-widest font-bold font-label hover:bg-surface-container-low transition-all duration-300 text-center">
              Our Process
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
