"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const filters = ["All Insights", "SEO", "Branding", "Lead Gen", "Strategy", "Case Studies"];

const posts = [
  {
    featured: true,
    cat: "Branding", date: "OCT 12, 2024",
    title: "The Architecture of Brand Identity: Beyond the Visual Mark",
    excerpt: "How structural thinking transforms generic aesthetics into lasting brand equity for high-growth enterprises.",
    slug: "architecture-of-brand-identity",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOgiBm97C72SfoW6H-gllM8ulokNL6iFEc9ne-U4MLL_yqqWYV7v7XnLlZj12elmzZEDNMxneHmFUr-aTNByQv5HqP7PThqVJ_gohXAYw3U0myJB8TWim1kTYZBTrDy3CDo9XP4YFp5jKtR3qZUxJvG-TRvLHA9sUPibF2-TTvaRhbXHvyhrWMj2QTF2RxMM8rDr2XlzCJGSOQ_nIgWStNGYfSL22dhzvGVPOO0-2BlMvtTL9FWHETnl1AEb1FyPklvfA_Gf38U4Kh",
  },
  {
    cat: "Lead Gen",     date: "OCT 08, 2024",
    title: "Precision Targeting in Luxury Real Estate",
    excerpt: "Navigating the nuances of high-net-worth lead generation through silent luxury marketing.",
    slug: "precision-targeting-luxury",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8ukrPdfem82ZHr0it8Ol0ApjeDgloek-ZTlzB1QE8i10YcPxlw3Mr6O_A8QxG7vGil3_Tg5VhjYeglO_buDelEGxVDz2ab1NbF2KNE6RlxpYFqUUXDKNeH1OohOv3HAAeL3bhFNZEubSZTpvjj0KNgsCCeBs68K1hLoO6eBjk7YA-4YqsBPOV2i_xL6oFI09bWLoY_IVjs_NUX3hSreZZYnVrpZKshViWMhNQZTZ_7ecbaKnqG1X8eLenPVW47XSOEJHoroGBFGXl",
  },
  {
    cat: "SEO",          date: "SEP 29, 2024",
    title: "Semantic Structure & Search Intent",
    excerpt: "Why the hierarchy of your content matters more than the keywords you include.",
    slug: "semantic-structure-search-intent",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbkH3U69DdC7t6PgEed8R92WMshuOc8hUkPmHFMCoihBQR9FUowjx0hd0FP_pHVHZMw8HIOodX89RMMzMDBMymBrQMGjIDv_LzOSINRFBVtZ7z2VBLTSua-MU1UtYrepwzZvixwLjolXG5_neAiCInWKfaIHolwOTDqjlCcQdNdzTaAX5brUNNtpzguHFBy8zdmkKG2rdn-s0kyzRKlyC-k_GQMGVVWLlY7xsGpPsjjrCjKoAqwgQaxyatkR5W98mXogqIvui434Iy",
  },
  {
    cat: "Strategy",     date: "SEP 24, 2024",
    title: "The Quiet Impact of Minimalist UI",
    excerpt: "How reducing visual noise directly correlates to higher conversion rates in boutique service sectors.",
    slug: "quiet-impact-minimalist-ui",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHCvWlL_MgSq10MCm9cybX7ArdngXkhfzsA0iMJL-L_3XVBZakg5JbbNN9qwC-Y49Syb63nYzDH73BF4KUtsrannSvb0MjE4blQtIkUoEJLxFKleHyfvDwDguUT7SD1Byn9OeFPbGJczqLPhh6qdFs1VpSyM_6Cxu-YX_wa5-RaXj80TPDFH6Tu-693SYyL7thUE2UW0a8JACN3YQrmczngoR8X7wdwlK6NuV7vPueNN4pG4fOM2cLBl82qUZsNnWUInYmQUKRQGoU",
  },
  {
    cat: "Case Studies", date: "SEP 18, 2024",
    title: "Reimagining Heritage Brands",
    excerpt: "A deep dive into the digital transformation of a 100-year-old London interior design house.",
    slug: "reimagining-heritage-brands",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_L-vC9hotXr14oJq__t7pMTPHop9MP4ZAfyTaDycRzx376TDXh1gSt8bMzmAN_5HaG8S0lnmk8KlwVwI4DIe3Vm2_h7zC10qPmPYmqC5fiLxXiAUtPEib-vZsnOs9YabVAy5Hdla_DDmmDW-Tr0-P8W3mhNB2G_whI1m8lnyUzXG9L6_TpnilUKGjD9Y-Yr9ur752YSJvKZ9q2xWukpqHm4NhIjiKgGsQUrK4nIdWfRIozGRaRc5LKX_3Uvp0C9sQAWWlXASf-KBj",
  },
];

export default function BlogPage() {
  const [active, setActive] = useState("All Insights");
  const filtered = posts.filter(
    (p) => active === "All Insights" || p.cat === active
  );
  const featured = filtered.find((p) => p.featured);
  const secondary = filtered.filter((p) => !p.featured);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <header className="pt-32 px-6 md:px-20 mb-24 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <span className="uppercase text-[0.75rem] tracking-[0.2em] font-label text-tertiary mb-6 block">
              Our Perspective
            </span>
            <h1 className="font-headline text-5xl md:text-7xl leading-[1.1] text-on-surface tracking-tight font-bold">
              Foundations for <br /> Digital Growth.
            </h1>
          </div>
          <div className="md:col-span-4 md:text-right">
            <p className="text-secondary leading-relaxed text-lg max-w-sm ml-auto">
              In-depth analysis and strategic insights into the intersection of
              high-end design and performance marketing.
            </p>
          </div>
        </div>
      </header>

      {/* ── Filters ───────────────────────────────────────── */}
      <section className="px-6 md:px-20 mb-16 max-w-[1440px] mx-auto">
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 py-6 border-y border-outline-variant/20">
          <span className="uppercase text-[0.7rem] font-bold tracking-[0.1em] font-label text-on-surface">
            Filter By:
          </span>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`text-[0.875rem] font-medium font-body pb-1 transition-colors ${
                active === f
                  ? "text-primary border-b border-primary"
                  : "text-secondary hover:text-primary"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* ── Blog Grid ─────────────────────────────────────── */}
      <section className="px-6 md:px-20 max-w-[1440px] mx-auto mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-20">
          {featured && (
            <article className="md:col-span-2 group cursor-pointer">
              <div className="overflow-hidden mb-8 bg-surface-container-low aspect-video">
                <Image
                  src={featured.src}
                  alt={featured.title}
                  width={800}
                  height={450}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-1">
                  <span className="uppercase text-[0.7rem] font-bold tracking-[0.2em] font-label text-tertiary">{featured.cat}</span>
                  <p className="text-[0.75rem] text-outline mt-2 font-medium">{featured.date}</p>
                </div>
                <div className="md:col-span-3">
                  <Link href={`/blog/${featured.slug}`}>
                    <h2 className="font-headline text-3xl font-bold text-on-surface group-hover:text-primary transition-colors mb-4">
                      {featured.title}
                    </h2>
                  </Link>
                  <p className="text-secondary leading-relaxed mb-6">{featured.excerpt}</p>
                  <span className="inline-flex items-center text-[0.75rem] font-bold uppercase tracking-widest font-label text-on-surface group-hover:translate-x-2 transition-transform duration-300">
                    Read Story{" "}
                    <span className="material-symbols-outlined ml-2 text-sm">arrow_right_alt</span>
                  </span>
                </div>
              </div>
            </article>
          )}

          {secondary.slice(0, featured ? 1 : 2).map((post) => (
            <article key={post.slug} className="group cursor-pointer">
              <div className="overflow-hidden mb-6 bg-surface-container-low aspect-[4/5]">
                <Image
                  src={post.src}
                  alt={post.title}
                  width={400}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <span className="uppercase text-[0.7rem] font-bold tracking-[0.2em] font-label text-tertiary">{post.cat}</span>
              <p className="text-[0.75rem] text-outline mt-1 mb-4 font-medium">{post.date}</p>
              <Link href={`/blog/${post.slug}`}>
                <h2 className="font-headline text-2xl font-bold text-on-surface group-hover:text-primary transition-colors mb-3">
                  {post.title}
                </h2>
              </Link>
              <p className="text-secondary text-sm leading-relaxed">{post.excerpt}</p>
            </article>
          ))}

          {secondary.slice(featured ? 1 : 2).map((post) => (
            <article key={post.slug} className="group cursor-pointer">
              <div className="overflow-hidden mb-6 bg-surface-container-low aspect-square">
                <Image
                  src={post.src}
                  alt={post.title}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <span className="uppercase text-[0.7rem] font-bold tracking-[0.2em] font-label text-tertiary">{post.cat}</span>
              <p className="text-[0.75rem] text-outline mt-1 mb-4 font-medium">{post.date}</p>
              <Link href={`/blog/${post.slug}`}>
                <h2 className="font-headline text-2xl font-bold text-on-surface group-hover:text-primary transition-colors mb-3">
                  {post.title}
                </h2>
              </Link>
              <p className="text-secondary text-sm leading-relaxed">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Newsletter CTA ────────────────────────────────── */}
      <section className="bg-surface-container-low py-32 px-6 md:px-20">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-headline text-4xl md:text-5xl font-bold mb-6 text-on-surface leading-tight">
              Weekly Monograph.
            </h2>
            <p className="text-secondary text-lg leading-relaxed max-w-md">
              Curation of our most recent findings, strategic shifts, and design
              inspirations delivered every Tuesday morning.
            </p>
          </div>
          <div>
            <form className="flex flex-col space-y-6">
              <div>
                <label className="uppercase text-[0.65rem] font-bold tracking-[0.15em] font-label text-tertiary mb-2 block">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="arch@monograph.com"
                  className="w-full bg-transparent border-b border-outline-variant/40 py-4 focus:outline-none focus:border-primary transition-colors text-on-surface"
                />
              </div>
              <button
                type="submit"
                className="bg-primary text-on-primary py-4 px-10 uppercase text-[0.75rem] font-bold tracking-[0.2em] font-label hover:bg-primary-dim transition-all self-start"
              >
                Join the Monograph
              </button>
            </form>
            <p className="text-[0.7rem] text-outline mt-6 italic">
              No spam. Just intentional insights for professional growth.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
