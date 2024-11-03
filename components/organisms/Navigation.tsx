"use client";

import { usePathname } from "next/navigation";
import { LinkNav } from "../atoms/LinkNav";

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
    <nav className="h-[50px] px-6 bg-white z-40 border-b border-gray-200 dark:bg-gray-800 dark:border-neutral100">
      <div
        className="flex items-center h-full gap-4 overflow-x-auto whitespace-nowrap"
        style={{
          scrollbarWidth: "none", 
          msOverflowStyle: "none",
        }}
      >
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`flex items-center h-full px-4 border-b-2 ${
              isActive(item.href)
                ? "border-[#639605] dark:border-customOrange"
                : "border-transparent"
            }`}
          >
            <LinkNav item={item} isActive={isActive} />
          </div>
        ))}
      </div>
    </nav>
  );
}
