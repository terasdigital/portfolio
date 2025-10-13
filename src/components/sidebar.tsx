"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "react-feather";
import Link from "next/link";

export default function SidebarMenu() {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="flex">
      {/* button toggle */}
      <button onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>

      {/* sidebar */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full w-64 bg-[#f5f5f5] text-[#C93F53] p-6 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="space-y-4 text-end">
          <li>
            <Link href="#" className="hover:text-[#7B1E22]">
              Home
            </Link>
          </li>
          <li>
            <Link href="#services" className="hover:text-[#7B1E22]">
              Services
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-[#7B1E22]">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#testimonials" className="hover:text-[#7B1E22]">
              Testimonials
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-[#7B1E22]">
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/files/CV-porto.pdf"
              download="CV-adhitya.pdf"
              className="text-[#f5f5f5] bg-[#C93F53] hover:bg-[#7B1E22] px-4 py-2 rounded-md font-bold"
            >
              Download CV
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
