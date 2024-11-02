"use client";
import Image from "next/image";
import { MenuIcon } from "../atoms/MenuIcon";
import { SearchIcon } from "../atoms/SearchIcon";
import { UserIcon } from "../atoms/UserIcon";
import { CartICon } from "../atoms/CartICon";

export default function Header() {
  return (
    <header className="h-[62px] px-4 flex items-center justify-between bg-white border-b border-gray-200">
      <div className="flex items-center gap-4">
        <MenuIcon />
        <SearchIcon />
      </div>
      <div className="flex items-center gap-4">
        <Image
          aria-hidden
          src="/file.svg"
          alt="User icon"
          width={187}
          height={25}
        />
      </div>

      <div className="flex items-center gap-4">
        <UserIcon />
        <CartICon />
      </div>
    </header>
  );
}
