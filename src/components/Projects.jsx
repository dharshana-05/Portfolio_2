import "../styles/projects.css";

function Projects() {
  return (
    <section id="projects">

      <h2>Projects</h2>

      <div className="projects-container">

        {/* QuickMart */}

        <div className="project-card">

          <div className="project-image">
            <img src="/quickmart.png" alt="QuickMart" />
          </div>

          <div className="project-info">

            <span className="project-tag">
              Full Stack Application
            </span>

            <h3>QuickMart</h3>

            <p>
              Full Stack Grocery E-Commerce Platform
              with authentication, cart management,
              product search and secure checkout.
            </p>

            <div className="tech-stack">
              <span>React</span>
              <span>Redux</span>
              <span>Node.js</span>
              <span>MongoDB</span>
            </div>

            <div className="project-links">

              <a
                href="https://quickmart-psi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/dharshana-05/Quickmart"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

            </div>

          </div>

        </div>

        {/* InvoiceMate */}

        <div className="project-card reverse">

          <div className="project-image">
            <img src="/invoicemate.png" alt="InvoiceMate" />
          </div>

          <div className="project-info">

            <span className="project-tag">
              Full Stack Application
            </span>

            <h3>InvoiceMate</h3>

            <p>
              Smart Invoice Management System with
              PDF export, invoice history and
              automatic calculations.
            </p>

            <div className="tech-stack">
              <span>Next.js</span>
              <span>TypeScript</span>
              <span>HTML</span>
              <span>CSS</span>
            </div>

            <div className="project-links">

              <a
                href="https://github.com/dharshana-05/Invoice"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/dharshana-05/Invoice"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

            </div>

          </div>

        </div>

        {/* PoultrySense */}

        <div className="project-card">

          <div className="project-image">
            <img src="/poultrysense.png" alt="PoultrySense" />
          </div>

          <div className="project-info">

            <span className="project-tag">
              IoT Solution
            </span>

            <h3>PoultrySense</h3>

            <p>
              IoT-Based Poultry Farm Automation with
              sensor monitoring, automated feeding
              and climate control.
            </p>

            <div className="tech-stack">
              <span>IoT</span>
              <span>NodeMCU</span>
              <span>Arduino</span>
              <span>MQTT</span>
            </div>

            <div className="project-links">

              <a
                href="https://drive.google.com/drive/folders/18lJ6yDZOO9RLo-XJaQEy-OK5enS3sKDz"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>

              <a
                href="https://drive.google.com/drive/folders/18lJ6yDZOO9RLo-XJaQEy-OK5enS3sKDz"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;