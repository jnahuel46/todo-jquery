import Link from "next/link";
import React from "react";

interface Props {
  item: {
    href: string;
    label: string;
  };
  isActive: (href: string) => boolean;
}

export const LinkNav = ({ item, isActive }: Props) => {
  return (
    <Link
      href={item.href}
      className={`font-open-sans text-base font-bold  ${
        isActive(item.href)
          ? "text-[#639605] dark:text-customOrange"
          : "text-[#555555] dark:text-neutral100 hover:text-[#639605] dark:hover:text-customOrange"
      }`}
    >
      {item.label}
    </Link>
  );
};
