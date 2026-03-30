import Image from "next/image";
import Link from "next/link";

const deliverables = [
  { icon: "search_check",  title: "Semantic Keyword Curation",  desc: "Identifying the precise vocabulary your ideal clients use to describe their dream homes.",           span: "" },
  { icon: "speed",         title: "Performance Sculpting",       desc: "Optimizing high-resolution image galleries to load instantly without losing a single pixel of detail.", span: "", featured: true },
  { icon: "description",   title: "Editorial Content Strategy",  desc: "Crafting journal entries that establish you as a thought leader in the interior design space.",        span: "" },
  { icon: "analytics",     title: "Transparency Reporting",      desc: "Monthly deep-dives into conversion metrics, visibility scores, and high-value lead tracking.",         span: "" },
  { icon: "link",          title: "Authority Link Building",     desc: "Securing mentions and backlinks from high-authority architectural journals and lifestyle publications to boost your site's domain prestige.", span: "md:col-span-2" },
];

const processSteps = [
  { num: "01", title: "Discovery",   desc: "A deep dive into your brand ethos, target aesthetic, and current digital footprint." },
  { num: "02", title: "Foundation",  desc: "Fixing the technical basement—site speed, schema markup, and crawlability." },
  { num: "03", title: "Creation",    desc: "Deploying curated content and on-page optimization that speaks to both humans and bots." },
  { num: "04", title: "Evolution",   desc: "Continuous refinement based on real-world data and shifting search landscape trends." },
];

const testimonials = [
  { quote: "They speak our language. They understand that for an interior designer, a pixel-perfect site is non-negotiable.", name: "Julian Thorne",  role: "Principal at Thorne Interiors" },
  { quote: "Our rankings improved within weeks, but more importantly, the quality of inquiries shifted to the luxury bracket we target.", name: "Elena Rossi",    role: "Founder, Rossi Studio" },
  { quote: "The reporting is so clear and professional. I finally feel like I have a handle on our digital growth.", name: "Marcus Chen",   role: "Design Director, Apex Home" },
];

export default function ServiceDetailPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="pt-32 px-6 md:px-20 mb-24 md:mb-40">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-8">
            <p className="uppercase text-[0.75rem] tracking-[0.2em] font-bold font-label text-tertiary mb-6">
              Specialized Digital Strategy
            </p>
            <h1 className="text-5xl md:text-8xl font-headline leading-[0.9] tracking-tight mb-8">
              Elevating Visibility for the Visionary Designer.
            </h1>
            <p className="text-xl md:text-2xl text-secondary max-w-2xl leading-relaxed italic font-headline">
              Strategic Search Engine Optimization tailored specifically for the
              nuance and aesthetic of high-end interior architecture.
            </p>
          </div>
          <div className="md:col-span-4">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDF18B-DAKaFBNHkFCe7FaJ-RtZKhWQi9XNlv4RuvO_FSBsUv4zu-vQ7qvjtQhwv0pS3H8GXaHzRMmnN3wfC2P-778s3MraKe3cm0M62tV5TVx1SEKVNslDhyVAREh3ghAxEajfWksatqH3Z4LfKA_vSuCaWybtI_45lj22ivoN9daOZSVbuy0z9QLEv9ZB_-opQxzrItJwQU17teZDTbFs3PHc1ORs8b_ctTn3leckjp4OSOH53_ACEF0V5GDnRAoOYgd6Xa20tThQ"
              alt="Luxury interior"
              width={500}
              height={667}
              className="w-full aspect-[3/4] object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ── Problem Statement ─────────────────────────────── */}
      <section className="bg-surface-container-low py-24 md:py-40 px-6 md:px-20">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
          <div>
            <h2 className="text-4xl md:text-6xl font-headline leading-tight">
              Masterpieces hidden in the shadows of the algorithm.
            </h2>
          </div>
          <div className="space-y-12">
            {[
              { num: "01", title: "The Invisible Portfolio",  desc: "Your stunning projects are online, but they aren't being discovered by the high-net-worth clients searching for 'boutique interior designers.'" },
              { num: "02", title: "Technical Fragility",       desc: "Most SEO agencies don't understand that image quality cannot be sacrificed for speed. We bridge the gap between aesthetics and performance." },
            ].map((item) => (
              <div key={item.num} className="border-b border-outline-variant/20 pb-8">
                <span className="text-tertiary font-headline italic text-2xl mb-4 block">{item.num}</span>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-wider text-primary">{item.title}</h3>
                <p className="text-secondary leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Solution ──────────────────────────────────────── */}
      <section className="py-24 md:py-40 px-6 md:px-20">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuChnpJvkrZJnW1K5PaQMZ7Cw_UNcG379NzEdOMru3tP6stKHRitPCvvvhSH21e88_N0yTwWL8Myz1wsETZrEHgYo5p5Zf_vr-NFop6pAmazooldcyvC1r8PHH-rClMh0nhTLBhiQAJQuy4Ku_rP2nL1wsnLg5Rh0yaCzFTYllJUtRQvkIcgR4t8kAdrqvxZW_OYvP6rXBtkZCQkeZRbjzbsxv-cqZoainimsUfo9PKdREtKed7UOyWhgxCqC6NeZCvhFbvGXX2xtNwL"
              alt="Design planning"
              width={600}
              height={600}
              className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="md:col-span-7 flex flex-col justify-center">
            <h2 className="text-4xl md:text-6xl font-headline mb-8">
              An Editorial Approach to Technical Growth.
            </h2>
            <div className="space-y-6 text-lg text-secondary leading-relaxed max-w-xl">
              <p>
                We don&apos;t just &ldquo;rank&rdquo; keywords; we curate your digital
                presence. Our methodology treats your website as a digital
                monograph—balancing the technical requirements of Google with
                the visual integrity of your brand.
              </p>
              <p>
                By targeting long-tail, intent-driven searches like &ldquo;mid-century
                modern renovation specialists,&rdquo; we ensure you don&apos;t just get
                more traffic—you get the <em>right</em> traffic.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Deliverables Bento ────────────────────────────── */}
      <section className="bg-surface-container-low py-24 md:py-40 px-6 md:px-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-20 text-center">
            <span className="uppercase text-[0.75rem] tracking-[0.2em] font-bold font-label text-tertiary">
              Core Deliverables
            </span>
            <h2 className="text-4xl md:text-6xl font-headline mt-4">
              Structural Integrity for your Site.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deliverables.map((d) => (
              <div
                key={d.title}
                className={`${d.span} ${
                  d.featured
                    ? "bg-primary text-on-primary"
                    : "bg-surface border border-outline-variant/10"
                } p-10 flex flex-col justify-between`}
              >
                <span className={`material-symbols-outlined text-4xl mb-12 ${d.featured ? "" : "text-primary"}`}>
                  {d.icon}
                </span>
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-tight mb-4">{d.title}</h3>
                  <p className={`leading-relaxed ${d.featured ? "opacity-80" : "text-secondary"}`}>
                    {d.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ───────────────────────────────────────── */}
      <section className="py-24 md:py-40 px-6 md:px-20">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-4xl md:text-6xl font-headline mb-24">
            The Roadmap to Resonance.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {processSteps.map((step) => (
              <div key={step.num}>
                <span className="block text-6xl font-headline text-outline-variant/30 mb-8">
                  {step.num}
                </span>
                <h3 className="text-lg font-bold uppercase mb-4 tracking-widest font-label">
                  {step.title}
                </h3>
                <p className="text-secondary leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Case Study Callout ────────────────────────────── */}
      <section className="px-6 md:px-20 mb-24">
        <div className="max-w-[1440px] mx-auto bg-surface-container overflow-hidden grid grid-cols-1 md:grid-cols-2">
          <div className="p-12 md:p-20 flex flex-col justify-center">
            <span className="uppercase text-[0.7rem] tracking-[0.2em] font-bold font-label text-tertiary mb-6">
              Success Story
            </span>
            <h2 className="text-4xl md:text-5xl font-headline mb-8">
              The Kensington Loft Project
            </h2>
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-3xl font-headline text-primary">240%</p>
                <p className="text-xs uppercase tracking-widest font-bold font-label text-secondary">Organic Growth</p>
              </div>
              <div>
                <p className="text-3xl font-headline text-primary">12</p>
                <p className="text-xs uppercase tracking-widest font-bold font-label text-secondary">New High-Value Leads / mo</p>
              </div>
            </div>
            <p className="text-secondary italic leading-relaxed mb-8">
              &ldquo;Before Architectural Monograph, we were reliant on word of
              mouth. Now, our digital presence does the talking before we even
              step into the room.&rdquo;
            </p>
            <Link
              href="/case-studies/kensington-loft"
              className="text-primary font-bold uppercase text-xs tracking-[0.2em] font-label inline-flex items-center gap-2 group"
            >
              View Full Case Study{" "}
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>
          <div className="h-80 md:h-auto">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtWh3-vGOrJHSVhdXKbLN0UG6FQ7_0HKfZpq_kzIBDUQnfFqdlk3ETo8Zc5EhUdwsgjxd2IkbvCkVeOpqUy3LKdSG0wDP77FYMVXLA6kZ18VU9EdiGPv5oZivAQ88LMpZRQAJLFpMHDCTq9nzb0OSFc0g_hNTm5w9Rc_ZftG48FERIAZ3AdZcbTwx4QnqxjxyEIQNzkmu6VUlpOpsbJ8DO4Xw-u-G36s5QGM6xFqJe4yQluyPngIfOX7HvT0Aeoc-dVcjEBwc3Zx3M"
              alt="Kensington Loft"
              width={700}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────── */}
      <section className="py-24 md:py-40 px-6 md:px-20">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          {testimonials.map((t) => (
            <div key={t.name} className="space-y-6">
              <div className="flex gap-1 text-tertiary">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                ))}
              </div>
              <p className="text-xl font-headline italic leading-relaxed text-on-surface">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="font-bold uppercase text-[0.7rem] tracking-widest font-label">{t.name}</p>
                <p className="text-secondary text-sm">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="px-6 md:px-20 mb-20">
        <div className="max-w-[1440px] mx-auto bg-primary text-on-primary p-12 md:p-32 text-center">
          <h2 className="text-4xl md:text-7xl font-headline mb-10 max-w-4xl mx-auto">
            Ready to step out of the shadows and into the spotlight?
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Link
              href="/contact"
              className="bg-surface text-primary px-12 py-4 uppercase text-[0.75rem] tracking-[0.2em] font-bold font-label hover:bg-surface-dim transition-all duration-300"
            >
              Get Free SEO Audit
            </Link>
            <Link
              href="/booking"
              className="border border-on-primary/30 text-on-primary px-12 py-4 uppercase text-[0.75rem] tracking-[0.2em] font-bold font-label hover:bg-on-primary/10 transition-all duration-300"
            >
              Book A Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
