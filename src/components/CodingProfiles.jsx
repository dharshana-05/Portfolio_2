import "../styles/codingprofiles.css";

function CodingProfiles() {
  return (
    <section id="coding">

      <h2>Coding Profiles</h2>

      <div className="coding-grid">

        <div className="coding-card">
          <h3>LeetCode</h3>
          <p>200+ Problems Solved</p>

          <a
            href="https://leetcode.com/u/Dharshana_M/"
            target="_blank"
            rel="noreferrer"
            className="profile-link"
          >
            View Profile →
          </a>
        </div>

        <div className="coding-card">
          <h3>SkillRack</h3>
          <p>350+ Problems Solved</p>

          <a
            href="https://www.skillrack.com/faces/resume.xhtml?id=484027&key=f1bf6aa65b88eb9032f3c3a89e90be5e54f1dd89"
            target="_blank"
            rel="noreferrer"
            className="profile-link"
          >
            View Profile →
          </a>
        </div>

        <div className="coding-card">
          <h3>CodeChef</h3>
          <p>Projects & Source Code</p>

          <a
            href="https://www.codechef.com/users/dharshana_05"
            target="_blank"
            rel="noreferrer"
            className="profile-link"
          >
            View Profile →
          </a>
        </div>

        

      </div>

    </section>
  );
}

export default CodingProfiles;