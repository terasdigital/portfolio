import React from "react";

interface ProjectCardProps {
  title: string;
  category: string;
  image_url: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  category,
  image_url,
}) => {
  return (
    <div>
      <img
        src={image_url}
        alt={title}
        className="rounded-lg w-full h-60 object-cover mb-4"
      />
      <p>{category}</p>
      <h3>{title}</h3>
    </div>
  );
};

export default ProjectCard;
