import { useEffect, useState } from "react";
import "./Projects.css";
import { Link } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  console.log(projects);

  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data.projects));
  }, []);

  return (
    <div className="projectsSection p-5 md:p-40">
      <h2 className="text-5xl text-center text-white mb-10">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20 justify-items-center">
        {projects.map((project) => (
          <div
            key={project.id}
            className="card card-compact w-96 bg-base-100 shadow-xl"
          >
            <figure>
              <img src={project?.photos} alt={project.name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.name}</h2>
              <p>{project.descriptions[0]}</p>
              <div className="card-actions justify-end">
                <Link to={`/details/${project.id}`} project={project}>
                  <button className="btn btn-outline bg-gray-900 text-white border-gray-800">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
