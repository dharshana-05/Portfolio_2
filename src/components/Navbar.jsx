import ThemeToggle from "./ThemeToggle";
import "./../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <h2>Dharshana M</h2>

      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="navbar-right">

        <a
          href="https://www.linkedin.com/in/dharshana-m-b37965291/"
          target="_blank"
          rel="noreferrer"
          className="nav-contact"
        >
          LinkedIn
        </a>

        <a
          href="mailto:dharshana.manthiriyappan@gmail.com"
          className="nav-contact"
        >
          Email
        </a>

        <ThemeToggle />

      </div>

    </nav>
  );
}

export default Navbar;