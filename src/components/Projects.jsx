import React from "react";
import project from "./data/projects.json";

const Projects = () => {
  const cardStyle = {
    width: "18rem",
    border: "3px solid rgb(3, 151, 151)",
    backgroundColor: "rgb(26, 26, 28)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    boxShadow: "",
  };

  const cardHoverStyle = {
    transform: "translateY(-10px)",
    boxShadow: "1px 1px 1px 1px rgb(3, 151, 151)",
  };

  return (
    <div className="container projects my-5">
      <h1>Projects</h1>
      <div className="row d-flex justify-content-center align-items-center">
        {project.map((proj) => (
          <div
            className="my-3 col-md-4 d-flex justify-content-center align-items-center"
            key={proj.id}
          >
            <div
              className="card text-light mx-3"
              style={cardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = cardHoverStyle.transform;
                e.currentTarget.style.boxShadow = cardHoverStyle.boxShadow;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              <img src={proj.imageSrc} className="card-img-top" />

              <div className="card-body">
                <h5 className="card-title text-center">{proj.title}</h5>
                <p className="card-text">{proj.description}</p>
                <a
                  href={proj.github}
                  className="btn btn-success text-align-center"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
