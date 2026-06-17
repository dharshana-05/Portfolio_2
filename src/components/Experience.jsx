import "../styles/experience.css";

function Experience() {
  return (
    <section id="experience">

      <h2>Experience</h2>

      <div className="experience-timeline">

        <div className="experience-item">

          <div className="experience-content">

            <h3>MERN Stack Intern</h3>

            <p className="company">
              Better Tomorrow
            </p>

            <p className="duration">
              Internship
            </p>

            <p>
              Worked with MongoDB, Express.js,
              React.js and Node.js.
              Developed REST APIs and gained
              experience in full-stack application
              development.
            </p>

          </div>

        </div>

        <div className="experience-item">

          <div className="experience-content">

            <h3>Modern Full Stack Intern</h3>

            <p className="company">
              AlgoTutor
            </p>

            <p className="duration">
              Internship
            </p>

            <p>
              Developed Smart Invoice Manager
              using React.js, Next.js and TypeScript.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Experience;