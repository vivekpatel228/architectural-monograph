import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative h-screen flex items-center px-6 md:px-20 pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="Luxury minimalist living room"
            width={900}
            height={900}
            className="w-full h-full object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 max-w-4xl">
          <p className="uppercase text-[0.65rem] lg:text-[0.75rem] tracking-[0.3em] font-semibold font-label text-on-primary/80 mb-6">
            Elevating Interior Excellence
          </p>
          <h1 className="text-4xl md:text-[4.0rem] font-headline font-bold leading-[0.95] tracking-tight text-on-primary mb-10">
            Marketing for the <br />
            <span className="italic font-normal">Architectural Soul.</span>
          </h1>
          <p className="text-sm md:text-lg text-on-primary/80 max-w-xl leading-relaxed mb-12">
            We bridge the gap between high-end interior craft and digital
            visibility. Strategic growth for design firms who demand precision.
          </p>
          <div className="hidden lg:flex flex-col sm:flex-row gap-6">
            <Link
              href="/booking"
              className="bg-primary-dim text-on-primary lg:px-10 py-4 text-xs lg:text-sm font-bold uppercase tracking-widest font-label hover:bg-primary transition-all text-center"
            >
              Book Consultation
            </Link>
            <Link
              href="/portfolio"
              className="border border-on-primary text-on-primary lg:px-10 py-4 text-xs lg:text-sm font-bold uppercase tracking-widest font-label backdrop-blur-sm hover:bg-surface/50 transition-all hover:text-on-surface text-center"
            >
              View Portfolio
            </Link>
          </div>
          <div className="flex lg:hidden flex-col sm:flex-row gap-6">
            <Link
              href="/booking"
              className=" text-on-primary flex items-center text-xs font-bold uppercase underline tracking-widest font-label hover:text-primary transition-all self-start"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-4 h-4 inline-block ml-1" />
            </Link>
            <Link
              href="/portfolio"
              className="text-on-primary flex items-center text-xs font-bold uppercase underline tracking-widest font-label hover:text-primary transition-all self-start"
            >
              <span>View Portfolio</span>
              <ArrowRight className="w-4 h-4 inline-block ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Trusted By ──────────────────────────────────────── */}
      <section className="py-16 bg-surface-container-low px-6 md:px-20 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          <p className="uppercase text-[0.65rem] tracking-[0.2em] font-bold font-label text-secondary-dim whitespace-nowrap">
            Partnered with industry leaders
          </p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-20">
            {[
              "LUXE.STUDIO",
              "VERANDA",
              "ESTATE & CO",
              "NORDIC ARCH",
              "BELGRAVIA",
            ].map((brand) => (
              <span
                key={brand}
                className="font-headline text-2xl font-bold tracking-tighter text-on-surface"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Overview ──────────────────────────────── */}
      <section className="py-32 px-6 md:px-20 bg-surface">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24 items-end">
          <div className="md:col-span-8">
            <span className="uppercase text-[0.75rem] tracking-[0.2em] font-bold font-label text-tertiary mb-4 block">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-6xl font-headline font-bold tracking-tight text-on-surface">
              Digital tools for <br />
              physical spaces.
            </h2>
          </div>
          <div className="md:col-span-4">
            <p className="text-secondary leading-relaxed">
              From initial search to final contract, we map the digital journey
              of your future high-net-worth clients.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline-variant/20 border border-outline-variant/20">
          {[
            {
              icon: "web",
              title: "Website Design",
              desc: "Bespoke digital showrooms that capture the texture, scale, and luxury of your interior projects.",
            },
            {
              icon: "trending_up",
              title: "SEO",
              desc: "Dominating search results for high-value architectural keywords and local luxury design intent.",
            },
            {
              icon: "share",
              title: "Social Media",
              desc: "Curation-first management for Instagram, Pinterest, and LinkedIn to build social proof and desire.",
            },
            {
              icon: "ads_click",
              title: "Paid Ads",
              desc: "Precision targeting for ultra-high-net-worth individuals actively looking to renovate or design.",
            },
            {
              icon: "edit_note",
              title: "Content Marketing",
              desc: "Editorial-grade storytelling that positions your firm as the leading authority in your design niche.",
            },
            {
              icon: "architecture",
              title: "Consulting",
              desc: "Fractional CMO services to align your brand identity with your long-term business growth goals.",
            },
          ].map((service) => (
            <div
              key={service.title}
              className="bg-surface-container-lowest p-12 hover:bg-surface-container-low transition-colors duration-500 group"
            >
              <span className="material-symbols-outlined text-4xl text-primary mb-8 block">
                {service.icon}
              </span>
              <h3 className="text-2xl font-headline font-bold mb-4">
                {service.title}
              </h3>
              <p className="text-secondary-dim leading-relaxed mb-8">
                {service.desc}
              </p>
              <Link
                href="/services"
                className="inline-flex items-center text-xs font-bold uppercase tracking-widest font-label text-primary group-hover:translate-x-2 transition-transform"
              >
                Explore Service{" "}
                <span className="material-symbols-outlined ml-2 text-sm">
                  arrow_forward
                </span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── Case Study Highlight ───────────────────────────── */}
      <section className="py-32 px-6 md:px-20 bg-surface-container-low">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row gap-20 items-center">
            <div className="w-full md:w-1/2 relative group">
              <div className="overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2fKup4aC_AtQXHbcJr14WsPMmDZ3_V62w1SbXthT_2gGi5JQJi3wt1s8AgpG30V1CVxjER3E13vzC3eQvxrpwpo4m74Y1Zeq-A2KPC7TxJcqdYGil5z8gBkuxEVvZ0Uqr0Qq4FkE6U5lzzMO02KOfcIjFm0R6Vv0-KMDF2VIYj4rNhVQgzBjp-icpexvQSDO9vJmZtTVh0HOr0pQRp9j2XPd8HRHEUwk__TUwCUUXB1cXqj-ZWRDqh9B2yUf__reN7900kGL4aYUK"
                  alt="Luxury interior case study"
                  width={800}
                  height={1000}
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-primary text-on-primary p-12 hidden md:block">
                <span className="text-5xl font-headline font-bold block mb-2">
                  +340%
                </span>
                <span className="uppercase text-[0.65rem] tracking-[0.2em] font-bold font-label opacity-80">
                  Conversion Growth
                </span>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <span className="uppercase text-[0.75rem] tracking-[0.2em] font-bold font-label text-tertiary mb-6 block">
                Case Study: The Loft Collective
              </span>
              <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight text-on-surface mb-8">
                From boutique firm to industry authority.
              </h2>
              <p className="text-lg text-secondary leading-relaxed mb-10">
                The Loft Collective struggled with a dated online presence that
                didn&apos;t reflect their $10M+ project capabilities. We rebuilt
                their digital ecosystem from the ground up.
              </p>
              <div className="grid grid-cols-2 gap-12 mb-12">
                <div>
                  <h4 className="text-2xl font-headline font-bold text-primary mb-1">
                    12 Weeks
                  </h4>
                  <p className="text-xs uppercase tracking-widest font-bold font-label text-outline">
                    Implementation
                  </p>
                </div>
                <div>
                  <h4 className="text-2xl font-headline font-bold text-primary mb-1">
                    $2.4M
                  </h4>
                  <p className="text-xs uppercase tracking-widest font-bold font-label text-outline">
                    New Pipeline Value
                  </p>
                </div>
              </div>
              <Link
                href="/case-studies/loft-collective"
                className="text-sm font-bold uppercase tracking-widest font-label text-on-surface border-b-2 border-primary pb-2 hover:text-primary transition-colors"
              >
                Read Full Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Portfolio Preview ─────────────────────────────── */}
      <section className="py-32 px-6 md:px-20 bg-surface">
        <div className="flex justify-between items-end mb-20">
          <h2 className="text-4xl md:text-6xl font-headline font-bold tracking-tight">
            Recent Commissions.
          </h2>
          <Link
            href="/portfolio"
            className="hidden md:block text-xs font-bold uppercase tracking-widest font-label border border-outline-variant/30 px-8 py-4 hover:bg-on-surface hover:text-surface transition-all"
          >
            View All Work
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {[
            {
              span: "md:col-span-8",
              aspect: "aspect-video",
              title: "The Obsidian Kitchen",
              sub: "Web Design / Content Strategy",
              src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0762qJzyxcFHDel2u_f3GLpzPZUsJM8k4ncQAablsze6BDpK6JE8ZB2Ln5ysDSnVOwQwxe3-Jpk6JY1ponS5mshviBOyLCFlliwbQjtXjy8ltl19ycC7eWotoIEm5RaxSGDqaD5xGNXIvZCpYAfMT6T0SVZsoKQqJWbB7I6xWFropdzgFBoRLqisnCI-Dxt2KZdVQYn1onxPaJPsSm7d7vMDVu6DTqQ6-pzZqPE64Cbt5nTeRUXXo-bDC4efZCH7mXocoU7Ktw5ET",
            },
            {
              span: "md:col-span-4",
              aspect: "aspect-[3/4]",
              title: "Mayfair Residency",
              sub: "SEO / Paid Ads",
              src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkGlCYBRPhnbCLmgjLMEz0nQZ-UuNAEfO7p3jGZ0j2GdoviwBNf_DRQjHG-NCsISieEgH8ZU452OBCk4JEChGuzdgRdwRaknOsofVrlCcaaQFROsT83AqgzMH9lmOxfGXRiwcMkowPntB15lOana-dnffh78BiRn-j5Kz9ZXIFHqZpbnJBhcCYbb7MwpFJ4ryEPaRi-Sp7Hxka6SVg-H7BNIAfLaTDqnIq1KZ2L33kSwDTrB4SGm7mxHJ6SZGPO8n_tKxRzxGlU7WY",
            },
            {
              span: "md:col-span-4",
              aspect: "aspect-[3/4]",
              title: "Sanctuary En-Suite",
              sub: "Social Curation",
              src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiMcj3gjVEeR7CSHfhnHWbyYF_xP5SI5zRnWv2xHjM1dm7vpjQr4TaTfkKWXmmn5D0rW0QFEwQaFqazc8A3Q4byltlOqrNvKScZvrKqWkjoCEvicn-Dnpfd5RB4QuEOluD46OJUzRHo4kqFJBwzJQivBwTjH2cJkDhVn4SPPE_Os__3DZKQMOtnSsIsLww5a1gWJpT1rZd9ho2IFCwDTzbwKuOeYICxY8b-SbiXJFN5RkurCGY2bvW9Uv55FAo8A2_C-tr9NNfKGGB",
            },
            {
              span: "md:col-span-8",
              aspect: "aspect-video",
              title: "The Belvedere Loft",
              sub: "Full Brand Ecosystem",
              src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjmeq0rnd8jVECo5mXmlZ81skO-vNDiPzvZcdLJGbAs4dcpi6-padVAwbktbzzHE7CXldxF_7oHcg9AjnWeXGGQQjOQqPJ2ImMGCnpMb-spT2yne4i4Xboj_jWvb-CX3eZ82NPgIw_-YtdsOWVQYbmjCm__GbbNUPGuCJevftmLPlrhv2pbgBpkLBL7czqv7xU_Cr6EnmMGpNYqYRtVr72Jh3ubZUvf1Oa1Hve1d8y8D_MpfTf6UR51O4rfmPPIXa9mo1abpbKjD2m",
            },
          ].map((item) => (
            <div
              key={item.title}
              className={`${item.span} group cursor-pointer`}
            >
              <div className="overflow-hidden mb-6">
                <Image
                  src={item.src}
                  alt={item.title}
                  width={800}
                  height={600}
                  className={`w-full ${item.aspect} object-cover transition-transform duration-700 group-hover:scale-105`}
                />
              </div>
              <h4 className="text-xl font-headline font-bold">{item.title}</h4>
              <p className="text-sm text-secondary uppercase tracking-widest font-label mt-2">
                {item.sub}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────── */}
      <section className="py-32 px-6 md:px-20 bg-surface-container-high">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="uppercase text-[0.75rem] tracking-[0.2em] font-bold font-label text-tertiary mb-6 block">
            Client Voices
          </span>
          <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight">
            Trusted by the creators of space.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              quote:
                "They understand the nuance of architectural language. Most agencies want 'loud' marketing, but Architectural Monograph understands that for our clients, luxury is a whisper, not a shout.",
              name: "Elena Rossi",
              title: "Founder, Rossi Interiors",
              src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAnH-ZpwsxCWhsHP8szYrrEzGvBk25UPeIUYbo0-HxMYV_Py_S751M2JapMRl8e5bGHgjTaL3TPDrgWJWPqXOAj8_2tTH254og7CmYty9YE7WtXVr9eYZ14BVmQ-u9vRRZ6Nm0baAdkhiiZ6PdYcf_LkY5VmTvW_th1taODlki0WhaM5fFLa58I2-ifWWUabVn1ormcfCEZUgXgXT7K5H9EUcFQtgCyyX1zCmajPRtQceHsDDdNA1S4BoMRX7Mqo13BeRKoA-DZcHFM",
            },
            {
              quote:
                "The results were transformative. Our lead quality shifted from 'shoppers' to 'investors' within four months. Their SEO strategy is sophisticated and remarkably effective.",
              name: "Marcus Thorne",
              title: "Principal Architect, Thorne & Co",
              src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDad8uBuwBzQqu3lt6SHM_YoBTTLcWW2CQihssxFELd9oeoQEHiP1vABDThnQOtX2M2hAOTcn8zRWgWXiNOzJ6HkI6kGhowzpiFrJu6bVr_QWEj1pWCFnaUGwWx4yOi1qEa8KoOm9gEVNLlPHaqXy2oxEQmi1M8ha2iteOH150Yn5RA2eTZaIMwFaAl_QH247qcN39kfGwxJxdi8hyYb8qZU-HrpBzypoWeEozgexla1XywIHGxbOscUfOpyVFlX8yri9gEX49oc8H0",
            },
          ].map((t) => (
            <div key={t.name} className="bg-surface p-12 relative">
              <span className="material-symbols-outlined text-primary/20 text-7xl absolute top-8 right-8">
                format_quote
              </span>
              <p className="text-xl italic font-headline leading-relaxed text-on-surface mb-10">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={t.src}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h5 className="font-bold text-sm uppercase tracking-widest font-label">
                    {t.name}
                  </h5>
                  <p className="text-xs text-secondary">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── About Preview ─────────────────────────────────── */}
      <section className="py-32 px-6 md:px-20 bg-surface">
        <div className="flex flex-col md:flex-row gap-24 items-center">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTOclpB0EemBSIdVpcs8rO67Mx3usUU3S4OQVoVcbyiKeGVR7dC_-2SbvqQ_4hbGkaT8kSMstlLaETcbSz80mWc-qqo0ct_U8MO_MlRu4b7xMijWF_G3RO1sKj5dyGXmNlh3L0cJYeEQn_82udYxwMKAnrkVycCFGzsCqBBVCeoJn6u548QRE8iPm9HHqYk78_-b1rHWw4xyRE5KGIlGRFVg6QiBBDQmq_bSA3Ri_C1zg8DQ2S9cwXMqyaFQwwYWtLp7Ow-RxI5Zm7"
              alt="Design team collaborating"
              width={800}
              height={450}
              className="w-full aspect-[16/9] object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tight mb-8">
              Strategists who speak the language of design.
            </h2>
            <p className="text-lg text-secondary leading-relaxed mb-8">
              Founded by a former architectural journalist and a digital growth
              expert, we don&apos;t just &lsquo;do marketing.&rsquo; We
              translate your physical vision into digital influence. Our team
              lives at the intersection of aesthetic rigor and data-driven
              performance.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center text-sm font-bold uppercase tracking-widest font-label text-primary hover:text-primary-dim transition-colors"
            >
              Meet the Collective{" "}
              <span className="material-symbols-outlined ml-2 text-sm">
                east
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-20 bg-primary text-on-primary">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-headline font-bold mb-4">
              Ready to refine your reach?
            </h2>
            <p className="text-lg text-primary-fixed opacity-90">
              Request a bespoke audit of your current digital presence.
            </p>
          </div>
          <Link
            href="/contact"
            className="bg-on-primary text-primary px-12 py-6 font-bold uppercase tracking-[0.2em] text-sm font-label hover:bg-primary-container transition-all shadow-xl whitespace-nowrap"
          >
            Get Free Marketing Audit
          </Link>
        </div>
      </section>

      {/* ── Blog Preview ──────────────────────────────────── */}
      <section className="py-32 px-6 md:px-20 bg-surface">
        <div className="flex justify-between items-center mb-20">
          <h2 className="text-3xl md:text-5xl font-headline font-bold tracking-tight">
            The Monograph Journal.
          </h2>
          <Link
            href="/blog"
            className="text-xs font-bold uppercase tracking-widest font-label text-on-surface-variant hover:text-primary transition-colors"
          >
            Read All Insights
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              cat: "Strategy",
              title: "The Psychology of Luxury Leads.",
              excerpt:
                "Understanding the mental models of HNWIs when they search for interior partners.",
              src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2f19nEnLwIcxI0mHY6k35Kc2q0ARvk57vjQzouue8W4l45iVx1pTLVyPMYWdH4RN52Uj_OigLK7jUTEFHd20fXyqFPNDYUtYUIUL_8UyJZ1FPlNqFvWlJUydatQvJ_vVrOJs3hJlK9Rb5Ty7epvEpvpJ_zKREebIT9IFQHgLZ8MbP3ZDe8EvVm2NmnWK7p0F2p1Y1LOsz5YoxB-JNF9fl69NM_37xcnfy7vcaGbDDBhrICj-KyF9Ud_datfZaMALWro97fjXajrlw",
            },
            {
              cat: "Design",
              title: "Texture in the Digital Space.",
              excerpt: "How to convey tactile quality through a mobile screen.",
              src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQDxjXpBzT-4fUh0fbUcdFE_a6KD5yeS8q7YQhvAGr8FyCRbCEt10ZZfvuEaL7D2ly78veCNn6Cux2901pzQpXA6P-BfRudWtNiqpSe9FgN3hNhGZpvIeaWxBL6fzCRfkEQfYgXPRYM9sWPghQloCRJ-S3afWcf5bSk99_R5SfJJ8xnAcMIb6dGayvgYLQ06StP7qVXb7gXUEU2X2ZSpUBLG5CO-8p_RP6Ts3SaJEfDHJZjMSGusPxe4gxWdmrjVG-WLme8OD_ElPY",
            },
            {
              cat: "Analysis",
              title: "2024 Design SEO Trends.",
              excerpt:
                "The shift towards visual search and aesthetic-led discovery.",
              src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBP02L1eCww0PtYjMGvhI1iEYtd4WBq3zC0hzh5SYTQL9DNqS5eJ7alzxUBo386bDGZh7x85RNFb1z2wO1qsfJqAYDmOLTgfyqYz0idxmk3eeDN1OP9MFb_3Dbh3m-pHOMbRs3EI1dyn_pZpfDmU11izK6AVZ8pYFmoXvk1_pPtSGUohuCPRpSDXBQY6FxYbtFif_4TKCt1fRnGy4vcmvQuVbLy5hwmPyEJ6ep6rSpU9QftGfBXkbIJYo3NnLvUSI7O44eTIPvCqCV6",
            },
          ].map((post) => (
            <article key={post.title} className="group cursor-pointer">
              <div className="overflow-hidden mb-6 aspect-[4/3]">
                <Image
                  src={post.src}
                  alt={post.title}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <span className="text-[0.65rem] uppercase tracking-[0.2em] font-bold font-label text-tertiary">
                {post.cat}
              </span>
              <h3 className="text-2xl font-headline font-bold mt-3 mb-4 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-secondary text-sm leading-relaxed">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
