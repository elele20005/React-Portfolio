import '/src/styles/Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Rafiu Lawal. All Rights Reserved.</p>
        <div className="social-links">
          <a href="https://github.com/elele20005" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/rafiu-lawal-9b5679121/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
