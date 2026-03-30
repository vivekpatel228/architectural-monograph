"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const filters = ["All Disciplines", "SEO Strategy", "Paid Acquisition", "Visual Identity", "Web Experience"];

const caseStudies = [
  {
    type: "feature",
    client: "Luminary Tech",
    title: "Redefining the digital workspace for a Silicon Valley giant.",
    desc: "Implementing a cohesive design system and SEO framework that scaled organic visibility by 300% within six months.",
    metrics: [{ val: "300%", label: "ROI Growth" }, { val: "1.2M", label: "New Leads" }],
    slug: "luminary-tech",
    category: "SEO Strategy",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmAD1G9sC8_RzsLGOUaDBQm2NCONM6IFpdT4n4YiMQNu1LtqDiiHcMdSCQluscsdZTZW7p1GvglyYyPbBD6uC1ajzl0iB-Z3BDQnCGlwcXAsAenrX8iRj2QwmsQx5yNMxWuKyirXzPE_toKxD5TpoAyt151_cV0vWNt0Ggk7fielPY4Ck7GX7uDFB7z6kVeyfOiTj2RTEIftKutMABkAara6wP-V9caKdr104aybJH1M_jnx1gmmDINb4LvIc6Xty56JtjmIE6uUqt",
  },
  {
    type: "secondary",
    client: "Sterling Heights",
    title: "The Sterling Heights Campaign",
    desc: "Precision-targeted advertising for luxury real estate, achieving a 45% reduction in cost-per-acquisition.",
    metric: "-45%", metricLabel: "CPA reduction",
    category: "Paid Acquisition",
    slug: "sterling-heights",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIl4bU_XAMxo4LNfV3EwpID85IREO44kgiTEzbRnLPAFzdsefjW1mfa0z3-SDzmNejdA1tYtz4rawirT9SWSVKQYhA1-bqGsA-PTaNBJW2G9mH7kbqoYAc6MRSeDpAltzmIKBmJETkPNhFZNdyZyt4llcB9fLLx6UPyQZ5tMg7Iy_6xhjQBDMdX3eRbhn_VUF_Ahm7hqyIaTXVJV6veEKIaZFWqWxWJzXNLEPI3L1-IPd9bcroYpxmqXNYRrNm9GprGxSpd2cgSlHZ",
  },
  {
    type: "secondary",
    client: "Aura Hospitality",
    title: "Aura Hospitality Rebrand",
    desc: "Developing a sensory brand language for a boutique hotel chain across European capitals.",
    metric: "82%", metricLabel: "Brand Recall",
    category: "Visual Identity",
    slug: "aura-hospitality",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAtXnbibxzlnQtMAL4Rg0BJZ3c_pFZp4lGOWcYVfLLFPhsjtmi8WTL3Wz88kY6HJiV7l6KhdfbwGRVtVfF3grzp2icuRy8WLmkp6EYI-DhVqiz7yFvSDjrKLcbP7COtsRXshE8p9UNngs0ERo8jTCiMmUtYN0mxk2dy7RzXUNPvWWIXiF9MtJgv_4S0GG42YN309mwg1OxYsn0NHxVJxlzUzeAZe36C-Bk_X8c_7FrBMtt7LUlmOtNcnMva4lB1uBdpe-Wk9NYyXmpQ",
  },
  {
    type: "feature-reverse",
    client: "Meridian Estates",
    title: "Global SEO for Luxury Property Listings.",
    desc: "Capturing high-intent organic search volume across 12 markets, resulting in record-breaking quarterly sales.",
    metrics: [{ val: "2.4x", label: "Search Visibility" }, { val: "$42M", label: "Attributed Sales" }],
    slug: "meridian-estates",
    category: "SEO Strategy",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbKT3U46u7ahPULWKfwxuGlsMEvKYkSGNvdsFuk_RCdOP8_032XVe2oUO5HNHUYjahIZFda7_Lb6585xeNpg0jBHx8EvJuVtSfGMMQ6kyYUoFI6mfvKZIuY5DYZSUCqpAxznT9_cx4arm9uM5zbAMQnX_GXZcZAHqNhwzfBmrqd8Ycwkyv67209p0dvFyGbsKYlSDnwqGc5_0jTd2AM6iOwUjrFiQPkPD1Hzo1NDPbxFKjRua4RE27nFV4Md0RXjNBKyWv2ZzURk3T",
  },
];

export default function CaseStudiesPage() {
  const [active, setActive] = useState("All Disciplines");

  const filtered = caseStudies.filter(
    (cs) => active === "All Disciplines" || cs.category === active
  );

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="pt-32 px-6 md:px-20 mb-24">
        <div className="max-w-4xl">
          <span className="block uppercase text-[0.75rem] tracking-[0.2em] font-semibold font-label text-tertiary mb-6">
            Proven Transformations
          </span>
          <h1 className="font-headline text-5xl md:text-7xl leading-[1.1] tracking-tight text-on-surface mb-8">
            Results that speak louder <br /> than words.
          </h1>
          <p className="text-lg md:text-xl text-secondary max-w-2xl leading-relaxed">
            A curated exhibition of strategic interventions. Explore how we
            balance commercial performance with architectural precision to
            elevate global brands.
          </p>
        </div>
      </section>

      {/* ── Filters ───────────────────────────────────────── */}
      <section className="px-6 md:px-20 mb-16">
        <div className="flex flex-wrap items-center gap-4 md:gap-8 border-b border-outline-variant/20 pb-8">
          <span className="uppercase text-[0.75rem] tracking-widest font-bold font-label text-on-surface">
            Filter By:
          </span>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`text-[0.75rem] uppercase tracking-widest font-label transition-colors ${
                active === f
                  ? "text-primary font-semibold border-b-2 border-primary"
                  : "text-secondary hover:text-primary"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* ── Case Study Grid ───────────────────────────────── */}
      <section className="px-6 md:px-20 mb-32">
        <div className="grid grid-cols-12 gap-6 lg:gap-10">
          {filtered.map((cs) => {
            if (cs.type === "feature" || cs.type === "feature-reverse") {
              const isReverse = cs.type === "feature-reverse";
              return (
                <div key={cs.slug} className="col-span-12 md:col-span-8 mb-12">
                  <div className="relative group overflow-hidden bg-surface-container-low">
                    <Image
                      src={cs.src}
                      alt={cs.title}
                      width={900}
                      height={500}
                      className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className={`mt-8 flex flex-col md:flex-row${isReverse ? "-reverse" : ""} justify-between items-start gap-6`}>
                    <div className={`max-w-xl ${isReverse ? "text-left md:text-right" : ""}`}>
                      <span className="uppercase text-[0.7rem] tracking-widest font-bold font-label text-tertiary">
                        Client: {cs.client}
                      </span>
                      <h3 className="font-headline text-3xl mt-2 mb-4">{cs.title}</h3>
                      <p className="text-secondary leading-relaxed">{cs.desc}</p>
                    </div>
                    {cs.metrics && (
                      <div className="grid grid-cols-2 gap-8 bg-surface-container-low p-8 min-w-[260px]">
                        {cs.metrics.map((m) => (
                          <div key={m.label}>
                            <div className="text-2xl font-headline text-primary">{m.val}</div>
                            <div className="uppercase text-[0.65rem] tracking-widest font-label text-secondary mt-1">{m.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            }
            return (
              <div key={cs.slug} className="col-span-12 md:col-span-4 mb-12">
                <div className="bg-surface-container-low p-1 group">
                  <div className="overflow-hidden">
                    <Image
                      src={cs.src}
                      alt={cs.title}
                      width={500}
                      height={400}
                      className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="py-8 px-4">
                    <span className="uppercase text-[0.7rem] tracking-widest font-bold font-label text-tertiary">
                      {cs.category}
                    </span>
                    <h3 className="font-headline text-2xl mt-2 mb-4">{cs.title}</h3>
                    <p className="text-secondary text-sm mb-6 leading-relaxed">{cs.desc}</p>
                    <div className="pt-6 border-t border-outline-variant/20">
                      <span className="text-xl font-headline text-primary">{cs.metric}</span>
                      <span className="uppercase text-[0.65rem] tracking-widest font-label text-secondary ml-2">
                        {cs.metricLabel}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="mb-32">
        <div className="bg-primary-container px-6 md:px-20 py-24 md:py-32 flex flex-col items-center text-center">
          <span className="uppercase text-[0.75rem] tracking-widest font-bold font-label text-primary mb-8">
            Start Your Journey
          </span>
          <h2 className="font-headline text-4xl md:text-6xl text-on-primary-container mb-12 max-w-3xl leading-tight">
            Ready to build your own success story?
          </h2>
          <div className="flex flex-col md:flex-row gap-6">
            <Link
              href="/booking"
              className="bg-primary text-on-primary px-10 py-5 text-[0.85rem] uppercase tracking-widest font-bold font-label hover:bg-primary-dim transition-all duration-300"
            >
              Book Your Success Story
            </Link>
            <Link
              href="/services"
              className="border border-primary text-primary px-10 py-5 text-[0.85rem] uppercase tracking-widest font-bold font-label hover:bg-primary/5 transition-all duration-300"
            >
              View Methodology
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
