"use client";
import Image from "next/image";
import { MenuIcon } from "../atoms/icons/MenuIcon";
import { SearchIcon } from "../atoms/icons/SearchIcon";
import { UserIcon } from "../atoms/icons/UserIcon";
import { CartICon } from "../atoms/icons/CartICon";
import { useState, useRef } from "react";
import { SideBarMenu } from "./SideBarMenu";
import { Cart } from "./Cart";
import { ProfileModal } from "./ProfileModal";
import { SearchModal } from "./SearchModal";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const cartIconRef = useRef<HTMLDivElement>(null);
  const userIconRef = useRef<HTMLDivElement>(null);
  const searchIconRef = useRef<HTMLDivElement>(null);

  return (
    <header className="h-[62px] px-4 flex items-center justify-between bg-white border-b border-gray-200">
      <div className="flex items-center gap-4 relative">
        <MenuIcon handleOpen={() => setIsMenuOpen(!isMenuOpen)} />
        <div ref={searchIconRef}>
          <SearchIcon handleOpen={() => setIsSearchOpen(!isSearchOpen)} />
        </div>
        {isSearchOpen && (
          <SearchModal
            onClose={() => setIsSearchOpen(false)}
            iconRef={searchIconRef}
          />
        )}
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

      <div className="flex items-center gap-4 relative">
        <div ref={userIconRef}>
          <UserIcon handleOpen={() => setIsProfileOpen(!isProfileOpen)} />
        </div>
        {isProfileOpen && (
          <ProfileModal
            onClose={() => setIsProfileOpen(false)}
            iconRef={userIconRef}
          />
        )}

        <div ref={cartIconRef}>
          <CartICon handleOpen={() => setIsCartOpen(!isCartOpen)} />
        </div>
        {isCartOpen && (
          <Cart onClose={() => setIsCartOpen(false)} iconRef={cartIconRef} />
        )}
      </div>
      {isMenuOpen && <SideBarMenu onClose={() => setIsMenuOpen(false)} />}
    </header>
  );
}
