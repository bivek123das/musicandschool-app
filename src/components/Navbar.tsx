"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utlis";

// Icons
import { FiSearch } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "fixed top-3 sm:top-6 md:top-10 inset-x-0 z-50 w-full max-w-5xl mx-auto px-4 sm:px-6",
        "whitespace-nowrap overflow-x-auto no-scrollbar",
        
      )}
    >
      <Menu setActive={setActive} className="flex gap-4 whitespace-nowrap">

        {/* HOME */}
        <Link href={"/"}>
          <MenuItem setActive={setActive} active={active} item="Home" />
        </Link>

        {/* OUR COURSES */}
        <MenuItem
          setActive={setActive}
          active={active}
          item="Our Courses"
          href="/courses"
        />

        {/* BROWSE — icon on small screens */}
        <MenuItem
          setActive={setActive}
          active={active}
          item={
            <>
              <span className="hidden sm:inline">Browse</span>
              <FiSearch className="text-xl sm:hidden" />
            </>
          }
          href="/browse"
        />

        {/* DASHBOARD — icon on small screens */}
        <Link href={"/dashboard"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item={
              <>
                <span className="hidden sm:inline">Dashboard</span>
                <MdDashboard className="text-xl sm:hidden" />
              </>
            }
          />
        </Link>

        {/* CONTACT US — icon on small screens */}
        <Link href={"/contact"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item={
              <>
                <span className="hidden sm:inline">Contact Us</span>
                <FiPhoneCall className="text-xl sm:hidden" />
              </>
            }
          />
        </Link>

      </Menu>
    </div>
  );
}

export default Navbar;



