import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>Reciplease</h3>
      <p>A recipe tracking app:</p>
      <div className="technologies">
        {technologies.map((technology)=>(
          <span key={technology}>{technology}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;
