import Image from "next/image";
import Link from "next/link";

const services = [
  {
    icon: "architecture",
    title: "Website Design",
    slug: "website-design",
    desc: "Bespoke digital showrooms designed with an editorial eye. We focus on visual storytelling and seamless user journeys for luxury audiences.",
  },
  {
    icon: "travel_explore",
    title: "SEO Strategy",
    slug: "seo",
    desc: "Ensuring your brand is discovered by high-net-worth clients searching for bespoke interior solutions and high-end craftsmanship.",
  },
  {
    icon: "gallery_thumbnail",
    title: "Social Media",
    slug: "social-media",
    desc: "Curated visual presence across Instagram and Pinterest. We manage your aesthetic narrative to build an aspirational community.",
  },
  {
    icon: "ads_click",
    title: "Paid Ads",
    slug: "paid-ads",
    desc: "Precision-targeted campaigns across Meta and Google, optimized for lead generation and brand awareness within the interior sector.",
  },
  {
    icon: "edit_note",
    title: "Content Marketing",
    slug: "content-marketing",
    desc: "Thought leadership through editorial blog posts, white papers, and brand stories that establish your agency as a market authority.",
  },
  {
    icon: "potted_plant",
    title: "Consulting",
    slug: "consulting",
    desc: "One-on-one strategic direction for established firms looking to modernize their brand identity and operational marketing flow.",
  },
];

const processSteps = [
  {
    num: "01",
    phase: "Phase One",
    title: "Discovery & Audit",
    desc: "We begin by immersing ourselves in your brand's heritage. We audit your current digital footprint and analyze the competitive landscape of the luxury interior market.",
  },
  {
    num: "02",
    phase: "Phase Two",
    title: "Strategic Blueprint",
    desc: "Developing a custom roadmap tailored to your specific goals—whether it is increasing high-value project inquiries or launching a new product collection.",
  },
  {
    num: "03",
    phase: "Phase Three",
    title: "Execution & Refinement",
    desc: "Bringing the strategy to life through meticulous design and precision marketing. We operate with the same attention to detail as a master carpenter.",
  },
  {
    num: "04",
    phase: "Phase Four",
    title: "Results & Scaling",
    desc: "Analysis of performance metrics against our initial KPIs, followed by ongoing optimization to ensure sustainable, long-term growth.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="pt-32 px-6 md:px-20 mb-24 md:mb-32">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <span className="uppercase text-[0.75rem] tracking-[0.2em] font-label text-secondary mb-6 block">
              Agency Expertise
            </span>
            <h1 className="font-headline text-5xl md:text-8xl leading-[1.1] tracking-tight text-on-surface">
              Services that grow <br />
              <span className="italic text-primary">interior brands</span>
            </h1>
          </div>
          <div className="md:col-span-4 pb-4">
            <p className="text-on-surface-variant text-lg leading-relaxed">
              We combine architectural precision with digital marketing mastery
              to elevate high-end interior designers and luxury furniture brands.
            </p>
          </div>
        </div>
        <div className="mt-16 h-[500px] overflow-hidden">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyABAX4onkOrCH8mMZ9-hWoxmYsW-oORxMUUCtuWmiHv2GFEGdEskWlh8VtIdr_UmbC2XDBufaVHaMFM2OciCkA5sVi6gS5uGjhXF2p7no6Ud9cLtHLQ9GhU8mrluBkha30HfsRUy8G0azLM5FDiUdJnU2oVps9jXKgdsSOylhQJDGRnf2yQnjd-Rpp_BTkW_AOgxNccp1Stn3c0LimwVIyW_jBbMvPOTNqxpvfYvS5kr0ORhJjZUKtSbk4h6nxZttUpERsoNhxaGV"
            alt="Minimalist luxury interior"
            width={1440}
            height={500}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            priority
          />
        </div>
      </section>

      {/* ── Services Grid ─────────────────────────────────── */}
      <section className="px-6 md:px-20 py-24 bg-surface-container-low">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-16">
            <h2 className="font-headline text-3xl md:text-4xl text-on-surface mb-4">
              Core Competencies
            </h2>
            <div className="w-24 h-px bg-primary/30" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 gap-x-12">
            {services.map((s) => (
              <div key={s.slug} className="group flex flex-col justify-between h-full border-b border-outline-variant/20 pb-10">
                <div>
                  <div className="mb-8 text-primary">
                    <span className="material-symbols-outlined text-4xl">{s.icon}</span>
                  </div>
                  <h3 className="font-headline text-2xl mb-4 group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-on-surface-variant leading-relaxed mb-8">{s.desc}</p>
                </div>
                <Link
                  href={`/services/${s.slug}`}
                  className="inline-flex items-center uppercase text-[0.7rem] tracking-[0.15em] font-bold font-label text-secondary hover:text-tertiary transition-colors group/link"
                >
                  Learn More{" "}
                  <span className="material-symbols-outlined ml-2 text-sm group-hover/link:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ───────────────────────────────────────── */}
      <section className="px-6 md:px-20 py-32 bg-surface">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row gap-20">
            <div className="md:w-1/3">
              <h2 className="font-headline text-4xl md:text-5xl text-on-surface sticky top-32 leading-tight">
                A methodical <br />approach to <br />
                <span className="italic">brand evolution.</span>
              </h2>
            </div>
            <div className="md:w-2/3 space-y-24">
              {processSteps.map((step) => (
                <div key={step.num} className="flex gap-8 group">
                  <span className="font-headline text-3xl text-outline-variant/50 group-hover:text-primary transition-colors flex-shrink-0">
                    {step.num}
                  </span>
                  <div>
                    <h4 className="uppercase text-[0.75rem] tracking-[0.15em] font-bold font-label text-secondary mb-3">
                      {step.phase}
                    </h4>
                    <h3 className="font-headline text-3xl mb-6">{step.title}</h3>
                    <p className="text-on-surface-variant text-lg max-w-xl leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="px-6 md:px-20 py-32 bg-primary">
        <div className="max-w-[1440px] mx-auto text-center">
          <h2 className="font-headline text-4xl md:text-6xl text-on-primary mb-12 max-w-3xl mx-auto leading-tight">
            Ready to elevate your{" "}
            <span className="italic">interior brand?</span>
          </h2>
          <Link
            href="/booking"
            className="inline-block bg-surface text-primary px-12 py-5 uppercase text-[0.875rem] tracking-[0.2em] font-bold font-label hover:bg-surface-container-high transition-all duration-300"
          >
            Book Your Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
