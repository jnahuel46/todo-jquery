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
          ? "text-[#639605]"
          : "text-[#555555] hover:text-[#639605]"
      }`}
    >
      {item.label}
    </Link>
  );
};
