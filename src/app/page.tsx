"use client";

import Image from "next/image";
import { use, useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import ProjectCard from "@/components/projectcard";
import Link from "next/link";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";

import {
  Linkedin,
  GitHub,
  Figma,
  Globe,
  Settings,
  Link as LinkIcon,
  Copy,
  Mail,
} from "react-feather";

interface Project {
  id: number;
  title: string;
  category: string;
  image_url: string;
}

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      const { data, error } = await supabase.from("projects").select("*");
      if (error) console.error(error);
      else setProjects(data || []);
    }
    fetchProjects();
  }, []);

  return (
    <div className="font-sans grid grid-rows-[1fr_auto] min-h-screen w-full overflow-x-hidden">
      <main className="px-8 md:px-16 pb-14 pt-24 gap-16 max-w-screen-lg mx-auto sm:px-10">
        <div className="max-md:text-center max-md:mx-auto flex justify-around items-center w-full flex-wrap-reverse">
          <div>
            <h1 className="sm:text-lg">Hi, I am </h1>
            <p className="hidden md:block md:text-xl sm:mb-4 font-semibold text-[#C93F53]">
              Adhitya Ramadhan Putra
            </p>
            <p className="whitespace-pre text-3xl sm:text-5xl md:text-7xl font-bold">
              {"Frontend\n\tDeveloper"}
            </p>
            <p className="m-2 sm:text-md md:text-lg text-sm">
              passionate about building modern web apps <br />
              with Next.js & TypeScript.
            </p>
            <p className="mt-4">
              <a
                href="https://wa.me/6282298935964"
                className="bg-[#C93F53] text-[#f5f5f5] px-4 py-2 rounded-md hover:bg-[#7B1E22] font-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hire Me
              </a>
            </p>
          </div>
          <div className="text-center hidden md:block">
            <Image
              src="/photo-porto-4.png"
              alt="Profile Picture"
              width={300}
              height={300}
              className="w-full max-w-[300px] h-auto mx-auto"
            />
            <a
              href="https://linkedin.com/in/adhitya-ramadhan-putra-b60a66b2"
              className="hover:text-[#C93F53]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="inline m-2" />
            </a>
            <a
              href="https://github.com/terasdigital"
              className="hover:text-[#C93F53]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub className="inline m-2" />
            </a>
            <a
              href="mailto:adhityarp.app@gmail.com"
              className="hover:text-[#C93F53]"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="inline m-2" />
            </a>
          </div>
        </div>
        <div id="services">
          <h1 className="font-bold text-center text-2xl sm:text-4xl pt-20 sm:pt-25 pb-5">
            Services
          </h1>
          <p className="text-center">
            Every websites has a story - and my goal is to turn that story into
            a beautiful and intuitive digital experience. I design and build
            modern, responsive web interface using <b>React</b> and{" "}
            <b>Next.js</b>, focusing on clean design, smooth interactions, and
            enjoyable user experiences across all devices.
          </p>
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-6 pt-10">
            <div className="bg-[#D1EEF2] p-4 text-center rounded-3xl text-[#C93F53]">
              <Figma className="inline mb-2" />
              <h1 className="font-semibold my-2">UI/UX Design</h1>
              <p>
                I design clean and intuitive interfaces focused on usability,
                consistency, and user satisfaction
              </p>
            </div>
            <div className="bg-[#D1EEF2] p-4 text-center rounded-3xl text-[#C93F53]">
              <Globe className="inline mb-2" />
              <h1 className="font-semibold my-2">Web Development</h1>
              <p>
                I build responsive and high-performance website using{" "}
                <b>React</b>,<b>Next.js</b>, and <b>Tailwind CSS</b>
              </p>
            </div>
            <div className="bg-[#D1EEF2] p-4 text-center rounded-3xl text-[#C93F53]">
              <LinkIcon className="inline mb-2" />
              <h1 className="font-semibold my-2">Frontend Integration</h1>
              <p>
                I connect APIs and backend systems to create dynamic,
                data-driven, and interactive web experience
              </p>
            </div>
            <div className="bg-[#D1EEF2] p-4 text-center rounded-3xl text-[#C93F53]">
              <Settings className="inline mb-2" />
              <h1 className="font-semibold my-2">Website Optimization</h1>
              <p>
                I optimize loading speed, SEO, and accessibility for better
                performance and smoother user experience
              </p>
            </div>
            <div className="bg-[#D1EEF2] p-4 text-center rounded-3xl text-[#C93F53]">
              <Copy className="inline mb-2" />
              <h1 className="font-semibold my-2">Component Base Development</h1>
              <p>
                I create reusable, scalable UI components for efficient and
                maintainable web applications
              </p>
            </div>
          </div>
        </div>
        <div id="projects">
          <h1 className="font-bold text-center text-2xl sm:text-4xl pt-20 sm:pt-25 pb-5">
            My Projects
          </h1>
          <p className="text-center">
            Here are some of my projects that showcase my skills in UI/UX
          </p>
          <div>
            {projects.length > 0 ? (
              projects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))
            ) : (
              <p>Loading projects...</p>
            )}
            <p className="text-center">
              <Link
                href="/projects"
                className="hover:text-[#C93F53] font-semibold"
              >
                {" "}
                See more
              </Link>
            </p>
          </div>
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </main>
      <footer className="flex flex-wrap justify-center sm:justify-between gap-3 sm:gap-15 items-center bg-gray-100 px-5 text-[12px] pb-3 ">
        <Image
          aria-hidden
          src="/logo-porto.png"
          alt=""
          width={150}
          height={150}
          className="max-sm:w-20 max-sm:h-auto"
        />
        <p className="max-sm:order-3">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold">Adhitya Ramadhan Putra</span>
        </p>
        <div>
          <a
            href="https://linkedin.com/in/adhitya-ramadhan-putra-b60a66b2"
            className="hover:text-[#C93F53]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="inline m-2 max-sm:w-5 max-sm:h-auto" />
          </a>
          <a
            href="https://github.com/terasdigital"
            className="hover:text-[#C93F53]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub className="inline m-2 max-sm:w-5 max-sm:h-auto" />
          </a>
          <a
            href="mailto:adhityarp.app@gmail.com"
            className="hover:text-[#C93F53]"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="inline m-2" />
          </a>
        </div>
      </footer>
    </div>
  );
}
