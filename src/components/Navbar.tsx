"use client";
import React, { useState } from "react";
import Link from "next/link";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utlis";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "fixed top-3 sm:top-6 md:top-10 inset-x-0 z-50 w-full max-w-5xl mx-auto px-4 sm:px-6",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
           
          />
        </Link>

        <MenuItem
          setActive={setActive}
          active={active}
          item="Our Courses"
          href="/courses"
        />

        <MenuItem
          setActive={setActive}
          active={active}
          item="Browse"
          href="/browse"
        >
          <div className="grid grid-cols-1 gap-3 text-xs sm:text-sm min-w-[180px]">
            <HoveredLink href="/courses" className="text-white flex items-center justify-between">
              <span>All Courses</span>
              <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded-full">
                View
              </span>
            </HoveredLink>
            <HoveredLink href="/courses/basic-music-theory" className="text-white">
              Basic Music Theory
            </HoveredLink>
            <HoveredLink href="/courses/advanced-composition" className="text-white">
              Advanced Composition
            </HoveredLink>
            <HoveredLink href="/courses/songwriting" className="text-white">
              Songwriting
            </HoveredLink>
            <HoveredLink href="/courses/music-production" className="text-white">
              Music Production
            </HoveredLink>
          </div>
        </MenuItem>

        <Link href={"/dashboard"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Dashboard"
           
          />
        </Link>

        <Link href={"/contact"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact Us"
           
          />
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;

