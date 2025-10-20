"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import ProjectCard from "@/components/projectcard";

interface Project {
  id: number;
  title: string;
  category: string;
  image_url: string;
}

const categories = [
  "All",
  "UI/UX",
  "Landing Page",
  "Portfolio Website",
  "Company Profile",
];

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    async function fetchProjects() {
      const { data, error } = await supabase.from("projects").select("*");
      if (error) console.error(error);
      else setProjects(data || []);
    }
    fetchProjects();
  }, []);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <main className="p-25 sm:p-35">
      <h2 className="text-2xl sm:text-4xl text-center font-semibold pb-5">
        My Projects
      </h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
        quia doloribus quam tenetur, sequi reprehenderit laboriosam quae
        voluptate quasi similique atque accusantium et libero necessitatibus
        debitis at, consectetur ipsam. Alias, dolorem quisquam? Distinctio
        maxime rerum praesentium! Reiciendis dolores ipsa, explicabo atque
        obcaecati earum odio natus hic, quis nisi officiis fugit!
      </p>

      {/* Filter Buttons */}
      <div className="pt-10 justify-center flex gap-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full border transition font-medium ${
              activeCategory === cat
                ? "bg-[#C93F53] text-white border-[#C93F53]"
                : "border-gray-300 hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div>
        {filtered.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </main>
  );
}
