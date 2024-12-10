/*import '/src/styles/Resume.css';

function Resume() {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <a href="/resume.pdf" download>Download Resume</a>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        
      </ul>
    </section>
  );
}

export default Resume;*/

////////////////////////////////////////////////////////////

import '/src/styles/Resume.css';

function Resume() {
  return (
    <section id="resume">
      <h2>Resume</h2>

      <div className="resume-download">
        <a href="/resume.pdf" download>
          Download Resume
        </a>
      </div>

      <div className="skills">
        <h3>Front-end Proficiencies</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>Responsive Design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ul>
        <h3>Back-end Proficiencies</h3>
        <ul>
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;

