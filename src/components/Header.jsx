import { Link } from 'react-router-dom';
import '/src/styles/Header.css';

function Header() {
  return (
    <header className="site-header">
      <div className="site-title">
        <h1>Rafiu Lawal</h1>
      </div>
      <nav className="main-nav">
        <ul>
          <li><Link to="/" className="nav-link">About Me</Link></li>
          <li><Link to="/portfolio" className="nav-link">Portfolio</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
          <li><Link to="/resume" className="nav-link">Resume</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
