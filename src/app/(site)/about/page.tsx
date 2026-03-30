import Image from "next/image";
import Link from "next/link";

const values = [
  { icon: "auto_awesome",  title: "Curated Identity",     desc: "Developing visual languages that resonate with high-net-worth clientele through nuance and restraint." },
  { icon: "architecture",  title: "Strategic Clarity",    desc: "Every pixel serves a purpose. We strip away the noise to let your architectural mastery take center stage." },
  { icon: "history_edu",   title: "Legacy Building",      desc: "We design for permanence. Your digital home should feel as relevant in a decade as it does today." },
  { icon: "group_work",    title: "Seamless Partnership", desc: "An intimate, boutique approach where our team becomes an extension of your own studio." },
];

const team = [
  {
    role: "Founding Director",
    name: "Eleanor Vane",
    bio: "A former gallery curator with a decade of experience in luxury brand positioning for global interior houses.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAiiFJ6UGw9TKOk4i7Vo4MycpqVmurACWChZ1_ZTDXBBAnaU4K9hNhO6H0YsCv1BJhjJwT6xU1co86r1zEmDrzj1-hNSP2BMkKbV5hR8d-uuv6xBXhQ1eblLSwhsomIFiJDKQBtoeNsHIrNe6QyUrFBsOEWuxEK_8c2dJbKZ_0nRANvFpF-le-Hm-D9BeQfA8n7Z61dizxPAMlo8b95ma45nfp3acrnHqqEDglNXERAENXESfdi_BAwze5ALFVpa1TPwXkwSG8rf67X",
  },
  {
    role: "Creative Strategy",
    name: "Julian Thorne",
    bio: "Specializes in digital narrative and visual systems that bridge the gap between physical space and digital experience.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5IiOA9GXlsRPDjiiJoGAGqM6oUkolBONN9_8XgyQ9lh3gYBb-RRXUN08Oa9SB4fGtUydP1w5U9Fihsd4SmjzsvNd8TmlIxUCDTJ9RmOj-AAAp-puLWsUgOmtnuXP26_jCBpa9xgr1EjuwbbVYI7aZ3fQedfEnQHH4zRO_ILXSgFkh8NNIkiJrzH2K8Mr7N2yr2YAAEa9cjRXzWgG9nTnGFc9vNixsPsY_iZwM27OxjbzN9UfYDE60wRcygHa81ljL0esyZPYJufK5",
  },
  {
    role: "Brand Relations",
    name: "Sofia Mercer",
    bio: "Ensures every client engagement is handled with the discretion and precision expected in the high-end design world.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsJZ3w_lc-vL2qVrcq3q5VQ5GCMxYrHi5QBw8CA8sv7-3wQ4lpbsftltvinO8LR3inzidua4exu2Bzd4UEPm9EZLVnLLXg5ZKPgQKlWp20iFYJMJcQn1Jhq70ImbNX42dZ965YovUE5OG-0UordjKDzXbpiq77_hMWBPwaHfbUtNPOwo0Xr8rVsRPI-AIfMpsd3WHC1HAvT2wiTQfmeroSKJBU29Q7aLFZNvIT00xVNFP1d6xoMpyC3YrIHFFlHMOsl6Ypdi9HnQcE",
  },
];

const differentiators = [
  { num: "01", title: "Industry Specifity",   desc: "We only work with architects and interior designers. We speak your language." },
  { num: "02", title: "Visual Excellence",    desc: "Our design team consists of specialists in editorial layout and high-end typography." },
  { num: "03", title: "Data-Driven Nuance",   desc: "We target the HNWI demographic with precision, using strategies refined over years." },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="pt-32 px-6 md:px-20 mb-32">
        <div className="grid grid-cols-12 gap-10 items-end">
          <div className="col-span-12 lg:col-span-7">
            <span className="font-label uppercase text-[0.75rem] tracking-[0.1em] text-tertiary mb-6 block">
              Our Narrative
            </span>
            <h1 className="font-headline text-[3.5rem] leading-[1.1] tracking-tight mb-10 text-on-surface">
              Crafting Digital{" "}
              <span className="italic font-light">Elegance</span> for the
              World&apos;s Most Refined Interiors.
            </h1>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:col-start-9 pb-4">
            <p className="leading-[1.8] text-on-surface-variant font-light text-lg">
              Architectural Monograph was born from a singular obsession: that
              the digital presence of an interior designer should be as tactile,
              thoughtful, and timeless as the spaces they create.
            </p>
          </div>
        </div>
        <div className="mt-20 w-full h-[600px] relative overflow-hidden">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxWyYEbEQpDtP-IAZqU4hNBPGIrYL_xysA-Qy_h6CBeArXZLFoT70EIX5wMnvtvdJJbtmVD9DLhxxBEvbZJ5zQsR3q5y2u3DGTlGD0LzZCIFrJkGXBzmDCRmQhn3UEmT9SJz-9tMYTG5cDU8dr8PD4opKsT8DMew0AYUXaNNfhQpBD5bVu6HfeXe2XVyR5uF-qRv6UHjQ94MxIc_TjK_gf63lbUmGGmdyPH65pehGMIrIqzAH0lvi6rsLF3B0sDkTH6oMUYrpzSzpj"
            alt="Luxury interior"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* ── Mission & Values ──────────────────────────────── */}
      <section className="bg-surface-container-low px-6 md:px-20 py-32">
        <div className="max-w-[1440px] mx-auto grid grid-cols-12 gap-12">
          <div className="col-span-12 lg:col-span-4">
            <h2 className="font-headline text-[2.5rem] leading-tight text-primary mb-8">
              Guided by Precision, Inspired by Artistry.
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-12">
              We don&apos;t believe in &ldquo;marketing&rdquo; in the traditional sense. We
              believe in curated storytelling—elevating brands from service
              providers to cultural icons.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-7 lg:col-start-6 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {values.map((v) => (
              <div key={v.title}>
                <div className="w-12 h-12 flex items-center justify-center bg-primary-container mb-6">
                  <span className="material-symbols-outlined text-primary">{v.icon}</span>
                </div>
                <h4 className="font-headline text-xl mb-4 text-on-surface">{v.title}</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ──────────────────────────────────────────── */}
      <section className="px-6 md:px-20 py-32">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-8">
          <h2 className="font-headline text-[2.5rem] tracking-tight text-on-surface">
            The Curators.
          </h2>
          <div className="max-w-md">
            <p className="text-on-surface-variant italic">
              &ldquo;Architecture is the learned game, correct and magnificent, of
              forms assembled in the light.&rdquo; — Our philosophy is rooted in
              this architectural truth.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((member) => (
            <div key={member.name} className="group">
              <div className="aspect-[4/5] bg-surface-container-high overflow-hidden mb-6">
                <Image
                  src={member.src}
                  alt={member.name}
                  width={500}
                  height={625}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <span className="font-label uppercase text-[0.65rem] tracking-[0.2em] text-tertiary mb-2 block">
                {member.role}
              </span>
              <h3 className="font-headline text-2xl mb-4 text-on-surface">{member.name}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why Choose Us ─────────────────────────────────── */}
      <section className="px-6 md:px-20 py-32 border-t border-outline-variant/10">
        <div className="grid grid-cols-12 gap-12">
          <div className="col-span-12 lg:col-span-5 relative">
            <div className="lg:sticky top-32">
              <h2 className="font-headline text-[3rem] leading-tight text-on-surface mb-8">
                Why the Monograph approach?
              </h2>
              <p className="text-on-surface-variant mb-12 max-w-sm">
                We provide the strategic depth of a global agency with the
                bespoke touch of a private concierge.
              </p>
              <div className="space-y-8">
                {differentiators.map((d) => (
                  <div key={d.num} className="flex items-start gap-6">
                    <span className="text-tertiary font-headline text-2xl flex-shrink-0">{d.num}</span>
                    <div>
                      <h5 className="font-bold text-on-surface mb-1">{d.title}</h5>
                      <p className="text-sm text-on-surface-variant">{d.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-7 grid grid-cols-2 gap-6">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBiCcTrORodqQPOzljGx74_aHkGJ3_NSGz3WqR7qvswcJF-vqxryUGl-kCnSUdfwsVnbHcl3F5C4_zfRRzUFyDPPqGihNM8F96Ajb6AJ8o727WjYwHCU9EyY6M0ECorAu6g6Gi_FOSxu3NGbxlqTH1nYmiJmXPjr_4_mT_GufvAWUx_qCblspqi_0IKw-Ob5pAg7Z8ced4zws5rtqr9Gciw_ILAm66nHiwp-Fy5C8UxSPw-_OPLDzBnmYcPjlhMs7ToLC_mC7AII5-c"
              alt="Studio detail" width={400} height={400}
              className="w-full aspect-square object-cover mb-6"
            />
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXI0JUW8RT3NwMqdjA4B6cMr-teRB-xTe51W_DHlIRbJehh96Abr-ss9UkS9lmTf6ulJkt3wlMNo1-8MzR7sZMBke5gtT4N-SjJqGWY8vYpDYkUpt4bTnoUDszfqaeZtJlvut2isIFoaJWUAqhX5c1c3D1JEYEqZPSIsDZnuUj-TCqYjJRgI1HA8ZGpeR90k5nGg3iwszj4BJzQt-yI0LqXsAGF2NAgA0HpDR5er0wT9tzUPcUmXXW1vmma99Y22k-vuoN2fRxhrTr"
              alt="Modern staircase" width={400} height={500}
              className="w-full aspect-[4/5] object-cover mt-12"
            />
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKByug08C8s8vEchCk_cUr4tuUhO7gdC1xE4s9ZHzMC1FKcWw6_2x7JaNFKTILSdKrTN8b0RR1Om734QcSBy2CQwew72V5miPtwKIN5CWhZbLplEwgKpKILFllVmwnK81Wg0ixhsUw1Kj5xqDtcITp8vGn1hUczWVWDEX1r4QiB-F-HFQJLjHbNu_usMCWdvX5sEqSNO1HGOE4TSKxbpXNpsJHyfHHW2zpsXV5P-WpWXlO2-82fjSDCwX1vmQXgjqS2jwFVREGfKFO"
              alt="Design library" width={400} height={533}
              className="w-full aspect-[3/4] object-cover -mt-20"
            />
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD05LAMwyldAu-bHLqphjfVVjM6A0z5xNILEuzeaeV3HL_jcd_JOHiRqbfCFSGO470kpdHbHddLj2eWAtv9ZdPDP6fDuK0idl0LZmsstYQfONZy9a06-K7y-4WEMo832JPMSBSY0ARUmTtniPoqBc1GPn2SsYsF4hdVZR9eJ8rZz9jqn-1pkSHg-d69eGcTOnahpmPU0yjwmPw1lphHAP8WLZuenBiQZihJ9sIf2JWDscyuWGYsvtg8c9ZpR93ZwntvJOjS4qtyu9ho"
              alt="Meeting room" width={400} height={400}
              className="w-full aspect-square object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="px-6 md:px-20 py-24">
        <div className="bg-primary text-on-primary p-16 md:p-20 flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAn9BY_XdwgPkAyeZgC0Jm3IW69RM7bMRZrqFDu8ewa97mzy7mQ1utdwBkP2kYAvBza9FPaS7lcoEyf5PgXJNvBWiqSLgCMwEuyRZOiijClLu4EM5fFnLfVSfr92-H_myDGvuOAFDudPAOUYWE7Y5N3EeCHLmOK5rf6523vzPurv-2s90Rn9SXtZIRuj-v6RDcsBrWeeRmYqQy1VTdQ2QOqzq446MqIAUqn6hTbSQ2GbGEawYJPQSX4cjiEcO1xxU09zm2erVaUflTM"
              alt="Texture" fill className="object-cover"
            />
          </div>
          <div className="relative z-10 max-w-3xl">
            <span className="font-label uppercase text-[0.75rem] tracking-[0.2em] mb-6 block text-primary-fixed">
              Your Next Chapter
            </span>
            <h2 className="font-headline text-[3rem] leading-tight mb-8">
              Join Our Growing List of Clients
            </h2>
            <p className="text-primary-fixed text-lg mb-12 opacity-80">
              We accept a limited number of new partners each quarter to ensure
              the highest standard of focus and quality.
            </p>
            <Link
              href="/booking"
              className="inline-block bg-surface text-primary px-12 py-5 font-label uppercase text-[0.85rem] tracking-[0.1em] hover:bg-surface-bright transition-all duration-300"
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
