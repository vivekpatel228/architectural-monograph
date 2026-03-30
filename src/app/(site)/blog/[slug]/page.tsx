import Image from "next/image";
import Link from "next/link";

const recentPosts = [
  { cat: "Philosophy", title: "The Ethics of Urban Restoration",   excerpt: "How we preserve the soul of historic districts without sacrificing modern utility.", slug: "ethics-urban-restoration" },
  { cat: "Process",    title: "Timber: The New Steel",              excerpt: "Exploring the structural possibilities of cross-laminated timber in high-rise design.", slug: "timber-new-steel" },
  { cat: "Interiors",  title: "Light as a Primary Material",        excerpt: "Manipulating daylight to define spatial hierarchy within open-plan residences.", slug: "light-primary-material" },
];

const categories = [
  { name: "Residential Projects",  count: "12" },
  { name: "Urban Interventions",   count: "08" },
  { name: "Material Research",     count: "15" },
  { name: "Studio Journal",        count: "24" },
];

export default function BlogDetailPage() {
  return (
    <main className="pt-32 pb-24">
      {/* ── Hero ──────────────────────────────────────────── */}
      <header className="px-6 md:px-20 mb-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
            <div className="max-w-4xl">
              <span className="uppercase text-[0.75rem] tracking-[0.2em] font-label text-tertiary mb-4 block">
                Architecture & Empathy
              </span>
              <h1 className="text-5xl md:text-7xl font-headline font-light leading-[1.1] tracking-tight text-on-surface">
                The Silent Geometry of <br />Modern Brutalism
              </h1>
            </div>
            <div className="flex flex-col items-start md:items-end text-left md:text-right">
              <p className="text-sm text-secondary mb-1">Published 14 October 2023</p>
              <p className="text-sm text-secondary">By Julianne Vane</p>
            </div>
          </div>
          <div className="w-full aspect-[21/9] overflow-hidden group">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWbeXHTF_SesZmALBnHN4-AheZ3bK2H0qGrOtcL94edBNxK1jN2oDwIfIT1xShqx6YcxhauhvnDluS_mJjOsjYA_YwVu-A2x0q95Op6x3cegG21GEPYcgw2QWgVktpCRcQuQlDuYYFmXfNS8Di9fIVq-j9cHeBtXvqOGGEXdmo3GScPESH9Keyo7LQTjHb1dEZ8YAC7WUJj7tnFGfFQ1C-knpJoThxgz-UtLk-5-X7xh5HYnSNRUVgSuCv33ekpt3N9tNWZhFWdWM3"
              alt="Monolithic concrete architecture"
              width={1440}
              height={617}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              priority
            />
          </div>
        </div>
      </header>

      {/* ── Content + Sidebar ─────────────────────────────── */}
      <div className="px-6 md:px-20 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Main Content */}
          <article className="lg:col-span-8">
            <div className="space-y-10">
              <p className="text-xl md:text-2xl font-light leading-relaxed text-on-surface-variant italic font-headline">
                There is a particular kind of silence found only within the
                concrete walls of a well-conceived structure. It is not the
                absence of sound, but the presence of weight.
              </p>
              <div className="space-y-8 text-on-surface-variant leading-[1.8]">
                <p>
                  For decades, Brutalism was a maligned word—a synonym for the
                  cold, the impersonal, and the institutional. Yet, as we move
                  further into an era of digital fleetingness, the permanence of
                  raw concrete and honest structural expression has found a new
                  resonance.
                </p>
                <h2 className="text-3xl font-headline mt-16 mb-6 text-on-surface">
                  The Weight of Presence
                </h2>
                <p>
                  When we speak of &ldquo;Silent Geometry,&rdquo; we refer to the way
                  light interacts with unadorned surfaces. Without the
                  distraction of ornament, the eye is forced to reckon with the
                  fundamental relationship between shadow and mass.
                </p>
                <blockquote className="border-l-2 border-primary-dim pl-8 py-4 my-12 bg-surface-container-low">
                  <p className="text-2xl font-headline italic text-primary leading-snug">
                    &ldquo;Architecture is the learned game, correct and magnificent,
                    of forms assembled in the light.&rdquo;
                  </p>
                  <footer className="mt-4 text-[0.75rem] uppercase tracking-widest text-secondary font-label">
                    — Le Corbusier
                  </footer>
                </blockquote>
                <p>
                  The contemporary revival of these forms often incorporates a
                  softening element: the integration of wild, uncurated greenery.
                  The juxtaposition of the rigid, gray permanence of concrete
                  against the fluid, changing greens of nature creates a
                  &ldquo;living monograph.&rdquo;
                </p>
                <div className="grid grid-cols-2 gap-8 my-16">
                  <div className="aspect-[4/5] overflow-hidden">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCarqi2d_whc6frCkvicJI9Bs8JAXxQuUKbDG-h7UWVpQ6Ou89sGSvw1JFM1viXc4P2s9RknN0MnuQzLbOi2-tjw6M3rZZW5dzhXP7raS_QjCJbC0yaCIzeodJ2RdqEG3eTjGIzU6W_5jgeehfUCrZl4jOfvOOT5pK1zAotb_NQsY61qjwHQ0yASEuT9VlUWuydfPbBZI4aFFjVq9RJbMRTYt0P5P5gl1Q0dFTXpZ0m7Tp-jmVbcvshbcL4N0vTIlDn0QiLKzNR7JM4"
                      alt="Minimalist staircase"
                      width={400}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[4/5] overflow-hidden flex flex-col justify-end p-8 bg-surface-container-low">
                    <h3 className="text-2xl font-headline mb-4">Material Honesty</h3>
                    <p className="text-sm text-secondary leading-relaxed">
                      Selecting materials that age with grace is the core of our
                      philosophy. Concrete, when poured with precision, records
                      the history of its making.
                    </p>
                  </div>
                </div>
                <p>
                  In our recent work at the Cotswolds Retreat, we explored these
                  themes by burying the primary living quarters into the hillside.
                  The result was a structure that felt more like excavated ruins
                  than new construction—a quiet intervention that respects the
                  ancient silence of the landscape.
                </p>
              </div>
            </div>
            {/* Tags */}
            <div className="mt-20 pt-10 border-t border-outline-variant/20 flex flex-wrap gap-4">
              {["Brutalism", "Materiality", "Landscape"].map((tag) => (
                <span key={tag} className="px-4 py-1 text-[0.65rem] uppercase tracking-widest border border-outline-variant/30 text-secondary font-label">
                  {tag}
                </span>
              ))}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-20">
            <section>
              <h4 className="uppercase text-[0.75rem] tracking-[0.2em] font-label text-tertiary mb-8">
                Recent Monographs
              </h4>
              <div className="space-y-10">
                {recentPosts.map((post) => (
                  <Link href={`/blog/${post.slug}`} key={post.slug} className="group block">
                    <p className="text-[0.75rem] uppercase tracking-widest font-label text-secondary mb-2">{post.cat}</p>
                    <h5 className="text-xl font-headline group-hover:text-primary transition-colors">{post.title}</h5>
                    <p className="mt-2 text-sm text-secondary leading-relaxed line-clamp-2">{post.excerpt}</p>
                  </Link>
                ))}
              </div>
            </section>

            <section className="bg-surface-container-low p-8">
              <h4 className="uppercase text-[0.75rem] tracking-[0.2em] font-label text-tertiary mb-6">
                Archive Categories
              </h4>
              <ul className="space-y-4">
                {categories.map((cat) => (
                  <li key={cat.name}>
                    <a href="#" className="flex justify-between items-center text-sm hover:text-primary transition-colors">
                      <span>{cat.name}</span>
                      <span className="text-[10px] text-outline opacity-60">{cat.count}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            <section className="border border-outline-variant/30 p-8">
              <h4 className="uppercase text-[0.75rem] tracking-[0.2em] font-label text-tertiary mb-4">
                The Quarterly
              </h4>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                Receive our curated digital exhibition on architectural theory
                directly in your inbox.
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  className="w-full bg-transparent border-0 border-b border-outline-variant/40 py-3 text-[0.75rem] uppercase tracking-widest focus:ring-0 focus:border-primary focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="w-full bg-secondary text-on-secondary px-6 py-3 text-[0.75rem] uppercase tracking-widest font-label hover:bg-secondary-dim transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </section>
          </aside>
        </div>
      </div>

      {/* ── CTA Banner ────────────────────────────────────── */}
      <section className="mt-32 px-6 md:px-20 max-w-[1440px] mx-auto">
        <div className="relative bg-primary-dim p-12 md:p-24 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDsROHpN8mw0aV-XZeUa8L6kHof15_JNxw4yvp9zL6rSo49kXsx82GOcpYdW8V4ZEY5aKM5DtRgQl2CJ942tcEoTB2m04q8-FxYexzw_Onw3I-lxTMsY3atLeW_a-FyP1pRIGH3YYuV5UILbl5ClO-ptax9iIAa0VSQR0GMCrPEJ7r3j32quqIms3JY9vzv3_cE7HKgW-K8myQgJjUL8DwixYpB7N039Xw5-3HhkyTaBkV2nw8MHxlgic2RjYqGURnIP_SCiOGN-2e"
              alt="Pattern background" fill className="object-cover"
            />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-headline text-on-primary mb-6">
              Transforming Concepts into Living Permanence
            </h2>
            <p className="text-on-primary/80 leading-relaxed max-w-lg">
              Our studio is currently accepting commissions for the 2024–2025
              calendar. Let us discuss the geometry of your next project.
            </p>
          </div>
          <div className="relative z-10">
            <Link
              href="/booking"
              className="block bg-surface text-primary px-10 py-5 text-[0.875rem] uppercase tracking-[0.2em] font-bold font-label hover:bg-primary-fixed transition-all duration-300"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
