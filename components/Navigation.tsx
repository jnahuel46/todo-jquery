"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { id: "details", label: "Mis datos", href: "/details" },
  { id: "tasks", label: "Mis Tareas", href: "/tasks" },
  { id: "devoluciones", label: "Mis devoluciones", href: "/refunds" },
  { id: "comunications", label: "Mis comunicaciones", href: "/comunications" },
  { id: "friends", label: "Mis mejores amigos", href: "/friends" },
];

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <nav className="h-[50px] px-6 bg-white z-40 border-b border-gray-200">
      <div className="flex items-center h-full gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`flex items-center h-full px-4 border-b-2 transition-colors ${
              isActive(item.href) ? "border-[#639605]" : "border-transparent"
            }`}
          >
            <Link
              href={item.href}
              className={`font-open-sans text-base font-bold transition-colors ${
                isActive(item.href)
                  ? "text-[#639605]"
                  : "text-[#555555] hover:text-[#639605]"
              }`}
            >
              {item.label}
            </Link>
          </div>
        ))}
      </div>
    </nav>
  );
}
