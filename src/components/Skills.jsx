import "../styles/skills.css";
function Skills() {

  const skills = [
    "Java",
    "SQL",
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MySQL",
    "Git",
    "GitHub",
    "Postman",
    "REST APIs",
    "DSA"
  ];

  return (
    <section id="skills" className="container">

      <h2>Skills</h2>
<div className="skills-container">
  {skills.map(skill => (
    <span className="skill-pill">{skill}</span>
  ))}
</div>

    </section>
  );
}

export default Skills;