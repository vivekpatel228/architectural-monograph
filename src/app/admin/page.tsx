import Image from "next/image";

const stats = [
  {
    label: "Monthly Lead Volume",
    value: "48",
    trend: "12%",
    trendIcon: "trending_up",
    trendColor: "text-primary",
    accent: "border-primary",
  },
  {
    label: "Total Page Views",
    value: "12.4k",
    trend: "0%",
    trendIcon: "remove",
    trendColor: "text-secondary",
    accent: "",
  },
  {
    label: "Active Projects",
    value: "14",
    trend: "Live",
    trendIcon: "arrow_forward",
    trendColor: "text-tertiary",
    accent: "",
  },
];

const contentItems = [
  {
    title: "The Brutalist Retreat",
    meta: "Case Study • Published 2d ago",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-q4rVVMTfVGXB5mm3-DHLWnLGEka286L-2bFGvY1E7_3fuPi5D3WqJwhQoy8yI9nXYaQoZM9OzSKzBOfqBr9RsnZvJJLoWZ5pzWNrZImGjS80cDFCwsaC1Dz9EmXbwGKgxY8_qYOYlHo_YEeEPbwK12T4L6J_E75UaiQ689YaCrJziWKhIfcn8lJ8D0PWTnGU6EH9JsnQ4wi3zXo7lLVKdOfitYtud81zzoNxMpv57KUhQiA40ZtrcPf9TGrDkabFcu9vOuy3oO9L",
  },
  {
    title: "Materials & Meaning",
    meta: "Blog Post • Draft",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4qU4DXMRUf2DJR3j5TYULF8f1tYvwT15HIXgFbU3JMLCJ_lpbQp1XuAnfCzpyfpiur7_MnXktaqKvTrmFGIWnBu8MaWVn7M1vjaBAr8veVhGVVhWK-TrSfKzVU33IMiSHVSK0cQJf-5HPrSH1CgxTtFNwRlPO3Vdqd1aRomPghDbRSvRr7W4rrCHOAnf9LXtOB-zuuIg-ioW3SkrYjX5iyuxMzeUYj58he2caGm_zS06qMzVNogENp_hJVvk4vOrLDmszJOfGYpuM",
  },
  {
    title: "Studio Manifesto",
    meta: "Page • Published 1y ago",
    src: null,
  },
];

const inquiries = [
  {
    name: "Evelyn Sterling",
    email: "e.sterling@design.co",
    interest: "Residential",
    badgeClass: "bg-secondary-container text-on-secondary-container",
    date: "Oct 24",
  },
  {
    name: "Marcus Thorne",
    email: "m.thorne@urban.uk",
    interest: "Consultation",
    badgeClass: "bg-primary-container text-on-primary-container",
    date: "Oct 22",
  },
  {
    name: "Sarah Jenkins",
    email: "sj@studio.com",
    interest: "Editorial",
    badgeClass: "bg-tertiary-container text-on-tertiary-container",
    date: "Oct 21",
  },
];

const logs = [
  {
    icon: "check",
    bg: "bg-primary",
    text: "bg-on-primary",
    time: "10:45 AM",
    desc: "System backup completed successfully. All monograph assets synchronized to the secondary storage vault.",
  },
  {
    icon: "edit",
    bg: "bg-secondary",
    text: "bg-on-secondary",
    time: "08:22 AM",
    desc: 'Julian Vane updated the typography scaling on the "Services" page to maintain high-contrast editorial balance.',
  },
];

export default function AdminDashboard() {
  return (
    <main className="flex-1 p-14 lg:p-20">
      {/* Header */}
      <header className="mb-16">
        <h2 className="text-4xl font-headline text-on-surface tracking-tight mb-2">
          Systems Overview
        </h2>
        <p className="text-secondary max-w-xl font-body leading-relaxed">
          A curated look at your agency&apos;s digital performance and inbound
          inquiries.
        </p>
      </header>

      {/* Stats Bento */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {stats.map((s) => (
          <div
            key={s.label}
            className={`bg-surface-container-low p-8 ${s.accent ? `border-l-4 ${s.accent}` : ""}`}
          >
            <span className="text-[0.65rem] uppercase tracking-[0.15em] font-label text-secondary mb-4 block">
              {s.label}
            </span>
            <div className="flex items-end gap-3">
              <span className="text-5xl font-headline text-on-surface">
                {s.value}
              </span>
              <span className={`${s.trendColor} text-sm font-bold pb-2 flex items-center`}>
                <span className="material-symbols-outlined text-[1rem]">
                  {s.trendIcon}
                </span>{" "}
                {s.trend}
              </span>
            </div>
          </div>
        ))}
      </section>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-20">
        {/* Content Management */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-headline text-on-surface">
              Content Management
            </h3>
            <button className="bg-primary text-on-primary px-6 py-2 font-label uppercase text-[0.7rem] tracking-widest transition-all duration-300 hover:bg-primary-dim">
              New Entry
            </button>
          </div>
          <div className="space-y-4">
            {contentItems.map((item) => (
              <div
                key={item.title}
                className="bg-surface-container-lowest p-6 flex items-center justify-between transition-all duration-300 hover:bg-surface-container-high group"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 overflow-hidden bg-surface-container-high flex items-center justify-center shrink-0">
                    {item.src ? (
                      <Image
                        src={item.src}
                        alt={item.title}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <span className="material-symbols-outlined text-secondary">
                        file_copy
                      </span>
                    )}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-on-surface">{item.title}</p>
                    <p className="text-[0.65rem] uppercase tracking-wider text-secondary">
                      {item.meta}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 text-secondary hover:text-primary transition-colors">
                    <span className="material-symbols-outlined text-[1.2rem]">edit</span>
                  </button>
                  <button className="p-2 text-secondary hover:text-error transition-colors">
                    <span className="material-symbols-outlined text-[1.2rem]">delete</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Inquiries */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-headline text-on-surface">
              Recent Inquiries
            </h3>
            <a
              href="#"
              className="text-[0.7rem] font-label uppercase tracking-widest text-primary hover:text-tertiary transition-colors"
            >
              View All Archive
            </a>
          </div>
          <div className="bg-surface-container-low overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-outline-variant/10">
                  <th className="px-6 py-4 text-[0.65rem] uppercase tracking-[0.2em] font-label text-secondary">
                    Sender
                  </th>
                  <th className="px-6 py-4 text-[0.65rem] uppercase tracking-[0.2em] font-label text-secondary">
                    Interest
                  </th>
                  <th className="px-6 py-4 text-[0.65rem] uppercase tracking-[0.2em] font-label text-secondary text-right">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/5">
                {inquiries.map((inq) => (
                  <tr
                    key={inq.email}
                    className="hover:bg-surface-container-highest transition-colors cursor-pointer group"
                  >
                    <td className="px-6 py-5">
                      <p className="text-sm font-bold text-on-surface group-hover:text-primary">
                        {inq.name}
                      </p>
                      <p className="text-[0.7rem] text-secondary">{inq.email}</p>
                    </td>
                    <td className="px-6 py-5">
                      <span
                        className={`text-[0.7rem] px-2 py-0.5 font-medium ${inq.badgeClass}`}
                      >
                        {inq.interest}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-right text-[0.75rem] text-secondary">
                      {inq.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {/* Activity Timeline */}
      <section className="mt-24 max-w-2xl">
        <h3 className="text-xl font-headline text-on-surface mb-8">
          System Logs
        </h3>
        <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-[11px] before:w-px before:bg-outline-variant/30">
          {logs.map((log) => (
            <div key={log.time} className="relative pl-10">
              <div
                className={`absolute left-0 top-1.5 w-[23px] h-[23px] ${log.bg} flex items-center justify-center`}
              >
                <span className="material-symbols-outlined text-on-primary text-[0.8rem]">
                  {log.icon}
                </span>
              </div>
              <p className="text-[0.75rem] text-secondary uppercase tracking-widest mb-1">
                {log.time}
              </p>
              <p className="text-sm text-on-surface leading-relaxed">{log.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Admin footer */}
      <footer className="mt-32 pt-8 border-t border-outline-variant/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[0.75rem] text-secondary">
            © 2024 Architectural Monograph. All rights reserved.
          </p>
          <p className="text-[0.75rem] text-secondary italic">
            Precision in digital architectural representation.
          </p>
        </div>
      </footer>
    </main>
  );
}
