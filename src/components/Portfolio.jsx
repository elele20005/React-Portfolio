/*import '/src/styles/Portfolio.css';

function Portfolio() {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="project">
        <img src="/images/project1.png" alt="Project 1" />
        <h3>Project Title 1</h3>
        <a href="https://project1.com" target="_blank" rel="noopener noreferrer">View Deployed</a>
        <a href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
      </div>
      
    </section>
  );
}

export default Portfolio;*/

////////////////////////////////////////////////////


import '/src/styles/Portfolio.css';

function Portfolio() {
  const projects = [
    {
      title: "Vehicle Builder",
      image: "/images/project1.png",
      deployedLink: "https://drive.google.com/file/d/1KNy_KwLJuAmf0EfjWuViMYSOpJUm64Xh/view",
      repoLink: "https://github.com/elele20005/Vehicle-Builder",
    },
    {
      title: "SKY-Tracker Dashboard",
      image: "/images/project2.png",
      deployedLink: "https://skytrack-dashboard.onrender.com/",
      repoLink: "https://github.com/elele20005/SkyTrack-Dashboard",
    },
    {
      title: "Employee Tracker",
      image: "/images/project3.png",
      deployedLink: "https://drive.google.com/file/d/1zL8PeJW-upIadunbzBz9WHUpDiSzCQhE/view",
      repoLink: "https://github.com/elele20005/Employee_Tracker",
    },
    {
      title: "README Generator",
      image: "/images/project4.png",
      deployedLink: "https://project4.com",
      repoLink: "https://github.com/elele20005/README_Generator",
    },
  ];

  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <div className="project-links">
              <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
                View Deployed
              </a>
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
