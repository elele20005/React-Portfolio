import '/src/styles/AboutMe.css';
import avatar from '/images/avatar.jpg';

function AboutMe() {
  return (
    <section id="about-me" className="about-section">
      <h2>About Me</h2>

      <div className="avatar-container">
        <img src={avatar} alt="Rafiu's Avatar" className="avatar" />
      </div>

      <p>
        Hello! I'm Rafiu, a 39-year-old IT consultant and DevOps Engineer based in Minneapolis, MN. With over 6 years of experience in the industry, I'm passionate about leveraging technology to solve complex problems and improve business processes.
      </p>
    </section>
  );
}

export default AboutMe;
