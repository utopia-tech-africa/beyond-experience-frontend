"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import SideMenu from "./side-menu";


const NavBar = ({
  title = "TEST",
  component,
}: {
  title: string;
  component?: React.ReactNode;
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between">
        <button
          onClick={() => setMenuOpen(true)}
          className="rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500/60 transition-transform active:scale-95"
        >
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </button>

        <p className="text-[#F8F9FA] nav-title">{title}</p>
        <div>{component}</div>
      </div>

      {menuOpen && <SideMenu onClose={() => setMenuOpen(false)} />}
    </>
  );
};

export default NavBar;
