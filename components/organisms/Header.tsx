"use client";
import Image from "next/image";
import { MenuIcon } from "../atoms/icons/MenuIcon";
import { SearchIcon } from "../atoms/icons/SearchIcon";
import { UserIcon } from "../atoms/icons/UserIcon";
import { CartICon } from "../atoms/icons/CartICon";
import { useState } from "react";
import { SideBarMenu } from "./SideBarMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="h-[62px] px-4 flex items-center justify-between bg-white border-b border-gray-200">
      <div className="flex items-center gap-4">
        {/* Toggle para mostrar/ocultar el menú */}

        <MenuIcon handleOpen={() => setIsMenuOpen(!isMenuOpen)} />

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
      {/* Menu Sidebar */}
      {isMenuOpen && <SideBarMenu onClose={() => setIsMenuOpen(false)} />}
    </header>
  );
}
