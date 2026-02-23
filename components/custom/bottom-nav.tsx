"use client";

import { CalendarDays, House, MessageCircle, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const pageItems = [
  { icon: House, label: "Home", href: "/app/home" },
  { icon: CalendarDays, label: "Events", href: "/app/events" },
  { icon: ShoppingBag, label: "Marketplace", href: "/app/marketplace" },
  { icon: MessageCircle, label: "Forum", href: "/app/forum" },
];

const NavItem = ({
  icon: Icon,
  label,
  href,
  active,
}: {
  icon: React.ElementType;
  label: string;
  href: string;
  active: boolean;
}) => {
  return (
    <Link href={href}>
      <div className="flex flex-col items-center gap-1 px-4 py-1 rounded-2xl transition-all duration-200 active:scale-95">
        <Icon
          size={24}
          style={{ color: active ? "#3B82F6" : "rgba(255,255,255,0.85)" }}
          strokeWidth={active ? 2.2 : 1.8}
        />
        <p
          className="text-xs font-medium tracking-wide transition-colors duration-200"
          style={{ color: active ? "#3B82F6" : "rgba(255,255,255,0.7)" }}
        >
          {label}
        </p>
      </div>
    </Link>
  );
};

const BottomNav = () => {
  const pathname = usePathname();

  return (
    <div className="absolute bottom-9 left-1/2 -translate-x-1/2 w-[92%] max-w-md">
      <div
        className="relative flex items-center justify-around px-2 py-3 rounded-[2rem] overflow-hidden"
        style={{
          background: "rgba(30, 30, 40, 0.55)",
          backdropFilter: "blur(28px) saturate(160%)",
          WebkitBackdropFilter: "blur(28px) saturate(160%)",
          border: "1px solid rgba(255, 255, 255, 0.14)",
          boxShadow: `
            0 8px 32px rgba(0, 0, 0, 0.35),
            0 2px 8px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.18),
            inset 0 -1px 0 rgba(0, 0, 0, 0.1)
          `,
        }}
      >
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 5%, rgba(255,255,255,0.35) 50%, transparent 95%)",
          }}
        />

        {pageItems.map((page) => (
          <NavItem
            key={page.label}
            icon={page.icon}
            label={page.label}
            href={page.href}
            active={pathname === page.href}
          />
        ))}
      </div>
    </div>
  );
};

export default BottomNav;
