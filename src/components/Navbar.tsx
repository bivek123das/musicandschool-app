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
        "fixed top-4 sm:top-6 md:top-10 inset-x-0 max-w-full sm:max-w-2xl mx-auto z-50 px-2 sm:px-4 md:px-0",
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
         
        >
          <div className="flex flex-col space-y-2 sm:space-y-4 text-xs sm:text-sm">
            <HoveredLink href="/courses" className="text-white">
              All Courses
            </HoveredLink>
            <HoveredLink
              href="/courses/basic-music-theory"
              className="text-white"
            >
              Basic Music Theory
            </HoveredLink>
            <HoveredLink
              href="/courses/advanced-composition"
              className="text-white"
            >
              Advanced Composition
            </HoveredLink>
            <HoveredLink href="/courses/songwriting" className="text-white">
              Songwriting
            </HoveredLink>
            <HoveredLink
              href="/courses/music-production"
              className="text-white"
            >
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

