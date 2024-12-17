import React from 'react';

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h2>My Projects</h2>
      <div className="card-section">
        <div className="project-card">
          <img src="%PUBLIC_URL%/images/project-1.jpg" alt="Project 1" />
          <h3>Project One</h3>
          <p>Description of the project.</p>
        </div>
        <div className="project-card">
          <img src="%PUBLIC_URL%/images/project-2.jpg" alt="Project 2" />
          <h3>Project Two</h3>
          <p>Description of the project.</p>
        </div>
        <div className="project-card">
        <img src="%PUBLIC_URL%/images/project-3.jpg" alt="Project 3" />
          <h3>Project Three</h3>
          <p>Description of the project.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
