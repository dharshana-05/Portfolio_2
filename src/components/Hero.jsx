import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <img
          src="/profile.jpg"
          alt="Dharshana M"
          className="hero-image"
        />

        <p className="hero-tag">
          SOFTWARE DEVELOPER
        </p>

        <h1>Dharshana M</h1>

        <h3>
          Building Modern Web Applications
        </h3>

        <p className="hero-description">
          Passionate Software Developer focused on
          creating scalable, responsive and user-friendly
          applications using React.js, Next.js,
          Node.js, MongoDB and Java.
        </p>

        <div className="hero-buttons">

          <a
            href="/resume.pdf"
            download
            className="primary-btn"
          >
            Resume
          </a>

          <a
            href="https://github.com/dharshana-05"
            target="_blank"
            rel="noreferrer"
            className="secondary-btn"
          >
            GitHub
          </a>

          

        </div>

      </div>

    </section>
  );
}

export default Hero;