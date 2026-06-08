"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/", label: "Executive Overview", ready: true },
  { href: "/marketing", label: "Marketing Performance", ready: false },
  { href: "/ecommerce", label: "E-commerce Performance", ready: false },
  { href: "/customers", label: "Customer & Retention", ready: false },
  { href: "/ai-summary", label: "Executive AI Summary", ready: false },
];

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="hidden w-64 shrink-0 flex-col bg-shell px-4 py-6 md:flex">
      <div className="mb-8 px-2">
        <div className="text-lg font-semibold text-white">Growth OS</div>
        <div className="text-xs text-slate-400">Demo · Sample data</div>
      </div>
      <nav className="flex flex-col gap-1">
        {NAV.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.ready ? item.href : "#"}
              aria-disabled={!item.ready}
              className={[
                "flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-colors",
                active
                  ? "bg-sage/15 text-sage"
                  : item.ready
                  ? "text-slate-300 hover:bg-white/5 hover:text-white"
                  : "cursor-not-allowed text-slate-500",
              ].join(" ")}
              onClick={(e) => {
                if (!item.ready) e.preventDefault();
              }}
            >
              <span>{item.label}</span>
              {!item.ready && <span className="text-[10px] uppercase text-slate-600">soon</span>}
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto px-2 pt-8 text-[11px] leading-relaxed text-slate-500">
        Proof-of-work demo for
        <br />
        <span className="text-slate-400">Mohamed Yehia</span>
        <br />
        Growth · E-commerce · AI
      </div>
    </aside>
  );
}
