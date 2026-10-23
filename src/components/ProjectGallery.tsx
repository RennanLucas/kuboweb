import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export default function ProjectGallery() {
  return (
    <div className="kw-project-grid">
      {projects.map((project) => (
        <Link
          key={project.id}
          to={`/portfolio/${project.slug}`}
          className={`kw-project kw-project-${project.id}`}
        >
          <div className="kw-project-image">
            <div className="kw-browser-bar" aria-hidden="true">
              <span />
              <span />
              <span />
              <small>{project.domain}</small>
            </div>
            <img
              src={`/projects/${project.id}-desktop.png`}
              alt={project.alt}
              width="1265"
              height="712"
              loading="lazy"
            />
            <div className="kw-project-mobile" aria-hidden="true">
              <img
                src={`/projects/${project.id}-mobile.png`}
                alt=""
                width="390"
                height="844"
                loading="lazy"
              />
            </div>
            <span className="kw-project-open">
              Explorar projeto <ArrowUpRight size={18} />
            </span>
          </div>
          <div className="kw-project-info">
            <div>
              <h3>{project.name}</h3>
              <p>{project.category}</p>
            </div>
            <ArrowUpRight size={27} />
          </div>
          <p className="kw-project-description">{project.description}</p>
          <div className="kw-project-disciplines">
            {project.disciplines.map((discipline) => (
              <span key={discipline}>{discipline}</span>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
}
