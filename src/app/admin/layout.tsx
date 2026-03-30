import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | Architectural Monograph",
  description: "Management portal",
};

const navItems = [
  { icon: "dashboard", label: "Dashboard", href: "/admin", active: true },
  { icon: "description", label: "Pages", href: "/admin/pages" },
  { icon: "article", label: "Blogs", href: "/admin/blogs" },
  { icon: "architecture", label: "Case Studies", href: "/admin/case-studies" },
  { icon: "inbox", label: "Leads", href: "/admin/leads", badge: "12" },
  { icon: "settings", label: "Settings", href: "/admin/settings" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-surface">
      {/* Sidebar */}
      <aside className="w-72 bg-surface-container-low border-r border-outline-variant/20 flex flex-col fixed inset-y-0 z-50">
        <div className="px-8 py-10">
          <h1 className="text-xl font-headline tracking-tighter text-primary font-bold">
            ARCHITECTURAL MONOGRAPH
          </h1>
          <p className="text-[0.65rem] uppercase tracking-[0.2em] font-label text-secondary mt-1">
            Management Portal
          </p>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center gap-4 px-4 py-3 transition-colors duration-300 ${
                item.active
                  ? "bg-primary-container text-on-primary-container font-semibold"
                  : "text-secondary hover:text-primary"
              }`}
            >
              <span
                className="material-symbols-outlined"
                style={
                  item.active
                    ? { fontVariationSettings: "'FILL' 1" }
                    : undefined
                }
              >
                {item.icon}
              </span>
              <span className="text-[0.875rem] font-label uppercase tracking-wider flex-1">
                {item.label}
              </span>
              {item.badge && (
                <span className="bg-tertiary text-on-tertiary text-[0.6rem] px-1.5 py-0.5 font-bold">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* User profile */}
        <div className="p-8 border-t border-outline-variant/10">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 overflow-hidden shrink-0">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuARqappIfgHIdaQhKqPCigfTNU9MzzwsgUWvKPHJSGWMyFvnZvtYvBlpyLRWmSUyaIXVDUCEAJodPO1H4Noiw1yXLRtWsrc59xawJRUF7oNo-2ooOmmhwK-yuHTNX_pPtG--1bNq9dAgxz3POxmTU-gupI0hxLVjsLrTSOjcGurBKr-lzuBdTEiYzSG-3YPEa-DBykqo54U5PHPgsWWuUrjsgWnmPTd_d_eIdPFcVvyWnNVdthy34xbm2jwIL9lPg5z02529l7Nps7j"
                alt="Julian Vane"
                width={40}
                height={40}
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <div>
              <p className="text-[0.75rem] font-bold text-on-surface">Julian Vane</p>
              <p className="text-[0.65rem] text-secondary">Creative Director</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Page content */}
      <div className="flex-1 ml-72 flex flex-col min-h-screen">
        {children}
      </div>
    </div>
  );
}
