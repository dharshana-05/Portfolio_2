import "../styles/education.css";

function Education() {
  return (
    <section id="education">

      <h2>Education</h2>

      <div className="education-timeline">

        <div className="education-item">

          <div className="education-content">

            <h3>Sri Eshwar College of Engineering</h3>

            <p className="degree">
              B.E Computer & Communication Engineering
            </p>

            <p className="year">
              2023 - 2027
            </p>

            <p className="cgpa">
              CGPA: 8.12
            </p>

          </div>

        </div>

        <div className="education-item">

          <div className="education-content">

            <h3>
              Rajalakshmi Genguswamy Higher Secondary School
            </h3>

            <p className="degree">
              Higher Secondary Education
            </p>

            <p className="cgpa">
              HSC: 75.3%
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Education;