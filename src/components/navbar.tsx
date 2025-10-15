"use client";

import Link from "next/link";
import Image from "next/image";
import SidebarMenu from "@/components/sidebar";

export default function Navbar() {
  return (
    <div className="flex items-center justify-around text-center fixed top-0 left-0 right-0 shadow-lg shadow-[#DE758E]/10 bg-[#f5f5f5]/55">
      <a href="#">
        <Image
          src="/logo-porto.png"
          alt="logo"
          width={150}
          height={150}
          className="max-sm:w-30 max-sm:h-auto"
        />
      </a>
      {/* <Image
        src="/logo-dark.png"
        alt="logo"
        width={150}
        height={150}
        className="hidden dark:block"
      /> */}
      <div className="md:flex gap-5 items-center hidden">
        <Link href="#" className="hover:text-[#C93F53]">
          Home
        </Link>
        <Link href="#services" className="hover:text-[#C93F53]">
          Services
        </Link>
        <Link href="#projects" className="hover:text-[#C93F53]">
          Projects
        </Link>
        <Link href="#testimonials" className="hover:text-[#C93F53]">
          Testimonials
        </Link>
        <Link href="#contact" className="hover:text-[#C93F53]">
          Contact
        </Link>
        <Link
          href="/files/CV-porto.pdf"
          download="CV-porto.pdf"
          className="bg-[#C93F53] text-[#f5f5f5] px-4 py-2 rounded-md hover:bg-[#7B1E22] font-bold"
        >
          Download CV
        </Link>
      </div>
      <div className="md:hidden">
        <SidebarMenu />
      </div>
    </div>
  );
}
