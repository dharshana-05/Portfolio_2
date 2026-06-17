import "../styles/achievement.css";

function Achievements() {
  return (
    <section id="achievements">

      <h2>Achievements</h2>

      <div className="achievements-grid">

        <div className="achievement-card">
          <h3>Technical Paper Presentation Winner</h3>
          <p>
            Won 1st Prize in Technical Paper Presentation at
            Hindusthan College of Engineering and Technology.
          </p>
          <span className="achievement-year">2025</span>
        </div>

        <div className="achievement-card">
          <h3>TCS CodeVita Global Rank 4779</h3>
          <p>
            Secured Global Rank 4,779 in TCS CodeVita Season 13,
            demonstrating strong problem-solving and competitive
            programming skills.
          </p>
          <span className="achievement-year">2025</span>
        </div>

        <div className="achievement-card">
          <h3>IEEE Research Publication</h3>
          <p>
            Published the research paper
            "Development and Implementation of a Smart Blind Stick Using IoT".
          </p>
          <span className="achievement-year">2025</span>
        </div>

        <div className="achievement-card">
          <h3>Project Expo Winner</h3>
          <p>
            Secured 1st Prize in the Project Expo conducted by
            Sri Eshwar College of Engineering.
          </p>
          <span className="achievement-year">2024</span>
        </div>

      </div>

    </section>
  );
}

export default Achievements;