"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const filters = ["All Works", "Branding", "Digital Design", "Editorial", "Content Strategy"];

const projects = [
  { cat: "Residential Branding", title: "The Concrete Atrium",   filter: "Branding",          src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD3bCy6dG73-z0XYg1Qc3SUVfL1_oh8YSo_4lcsdrumCmyOVWtTGOy6iXZSLJ25LPXuye1Pg7IV8zel0BnVNAEPlZpEWDHdkIToArejmZ9Ob2ZF-wDaVAdEgNCsgcH8ci-CuePI5Tx3r7WWfZu0RBQ3i9fCcB7re3P9tM_RtrzMTwYBiTGSXYCUvvmRppksCkYjEzObHxs7K_CMBuddsDOOef2kPUJA6XhTCxLZoNtCqYXxri5RKO4aEjliRxe33jb0k1GlVea8KWqw" },
  { cat: "Editorial Design",     title: "Quiet Living Quarterly", filter: "Editorial",         src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCIG1I7FQQ4QHf1K8pEU3xczUfMGtKtiPRHtKs9YqvpK853EcToaEbnY-8S1k7U5Gb04irRMZX-qLxQDy6M5BSumj69DAGpx4uKcDW1Pblgwe_rqnbcgcug7wEXmawwwk-iiDr9v34DY5o4NEDsYH3r-rL3TmWo-nXHWDO0NoUYczDckiUVDpTK93q8yiHmNpB7lSPxroRs5xXaSDMDHPYWdozaoOY-YOaB_N6o8g4RsC3l1DWdYl0n0p5amEzrO2xxn4snBGDAmilA" },
  { cat: "Digital Strategy",     title: "Monolith Partners",      filter: "Digital Design",    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJOhExkLjk156y4KGTDN1bLaDmkiuIR1JYsUcFtODjfjy0vt3iw_6SURtEJLAPqKd66GFT3XoAjOaso1HLr0n6tiQF8g0xggTSf02E_Y9tIBf3LHPs3h40GuFyLZR9Ej69DbKvqXMUKmLm-lagcyFQpEnVlSqQhwrzxPFw1x0BP5vJWFWfRAlu2bAsWZefOvszW5pnwsoXjicXU-7t81t7EoXIhPC_ifO0Bzykc352S__c9-F0CXH0Ik9g6OQqj-4t7EjJE5kHmIEk" },
  { cat: "Brand Identity",       title: "The Weaver's Guild",     filter: "Branding",          src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC2eR7boLMiSx6nc5ZljCuxF_FxrXVHb4ul5_zavMlk0wkr4Y46TNA9nxjOjYgbiJ-lR70YA1U2uA-t2nrSdyaTkF_tDZZvWBrsb-EPeZ_T4L30aBGREEIAlTXp7ZvypUIWUFvDGVel7iKpQOE5kdqAubelQ-6wJwb9L8KkRAbzaiht_u4Y3LZsGbTKQcgoc7AoOlvratk6rlh27N_W53gJf_6gMp2Jjl98R5q4W_xLk5oQvvU-9lX-rOpLY4_fCvVQAopk62JWAXaZ" },
  { cat: "Web Design",           title: "Vantage Perspective",    filter: "Digital Design",    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRjR6aDvkWu_k4a37oj_SxKmFKSpx3yWOXcjNyZFN4ZYk8iTQhfGrpw4Sbt4yzXv50_mLfhmuWk2dklfUWnFhLRGVLjx4FU5IH1HzSjGSLglzYOK4N2-svyP_Cs5qgkaB-zwUgjCkps0rnnynFwb8tgFRTydKfz7PdtnNpQiYT7lr_mpgpdK6JevYe1wskEwqRhns0gXuQRRXyTEtiyYhDnRVjDN99HrOqphIdIZsWwn3JeSqiQR_Mqzcu8bdmf5PuJzulT-nhAzS7" },
  { cat: "Creative Direction",   title: "Luminary Studies",       filter: "Content Strategy",  src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCDy2S_gWsPOC6CoJlRMRjxrj7q4ueSQJO2XAaEDlcM_2avibbT2EcMxnPMZE-krB1k9DqGVkNlIo-7kHZPnQVIPnToaNA3JX6Yjucedljpz-rKTfX6uU2bw04_P86wqajPWqacM3A9mSXTV-36dk7hE0mRVl5vg5FK0idMtsq7My-lpWfy6eYYMterse_gn_bAHXL7paP9XlVug90mKEzD2ZsljN7kseKP-r1coGWrElMqT6BJnxMfuWTNCXB7_2QzK-gPwPtG8sLy" },
];

export default function PortfolioPage() {
  const [active, setActive] = useState("All Works");
  const filtered = projects.filter(
    (p) => active === "All Works" || p.filter === active
  );

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="pt-32 px-6 md:px-20 mb-24 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <span className="uppercase text-[0.75rem] tracking-[0.2em] font-label text-tertiary mb-6 block">
              Our Creative Anthology
            </span>
            <h1 className="font-headline text-[3rem] md:text-[4.5rem] leading-[1.1] tracking-tight text-on-surface">
              Designing the{" "}
              <span className="italic text-primary">permanent</span> in a
              digital world.
            </h1>
          </div>
          <div className="lg:col-span-4 lg:pl-12 pb-4">
            <p className="text-on-surface-variant leading-relaxed text-lg">
              We treat marketing as architecture—building structures of brand
              identity that endure far beyond the next trend cycle.
            </p>
          </div>
        </div>
      </section>

      {/* ── Filters ───────────────────────────────────────── */}
      <section className="px-6 md:px-20 mb-16 max-w-[1440px] mx-auto overflow-x-auto no-scrollbar">
        <div className="flex space-x-12 border-b border-outline-variant/20 pb-4 min-w-max">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`uppercase text-[0.75rem] tracking-[0.15em] font-label pb-4 transition-colors ${
                active === f
                  ? "font-bold text-on-surface border-b-2 border-tertiary -mb-[18px]"
                  : "font-medium text-on-surface-variant hover:text-primary"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* ── Masonry Grid ──────────────────────────────────── */}
      <section className="px-6 md:px-20 max-w-[1440px] mx-auto">
        <div
          style={{
            columnCount: 1,
            columnGap: "1.5rem",
          }}
          className="[column-count:1] md:[column-count:2] lg:[column-count:3] [column-gap:1.5rem]"
        >
          {filtered.map((project) => (
            <div
              key={project.title}
              className="group cursor-pointer mb-10 break-inside-avoid"
            >
              <div className="relative overflow-hidden bg-surface-container-low mb-4">
                <Image
                  src={project.src}
                  alt={project.title}
                  width={500}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px] flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-4xl">
                    add
                  </span>
                </div>
              </div>
              <span className="uppercase text-[0.65rem] tracking-[0.2em] font-label text-secondary block mb-2">
                {project.cat}
              </span>
              <h3 className="font-headline text-2xl text-on-surface">
                {project.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="mt-24 bg-surface-container-low py-32 px-6 md:px-20 text-center">
        <h2 className="font-headline text-4xl md:text-5xl mb-8 text-on-surface">
          Interested in a signature approach?
        </h2>
        <p className="text-lg text-secondary mb-12 max-w-2xl mx-auto">
          We collaborate with forward-thinking developers and designers to craft
          visual legacies.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-primary text-on-primary px-12 py-4 uppercase text-[0.875rem] tracking-[0.2em] font-bold font-label hover:bg-primary-dim transition-all duration-300"
        >
          Start a Conversation
        </Link>
      </section>
    </>
  );
}
