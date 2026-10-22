import { useState } from "react";
import "./App.css";

const experiences = [
  {
    role: "Registrar Staff",
    company: "Surigao State University — Mainit Campus",
    period: "Jan 2026 – Mar 2026",
    type: "Administrative",
    description:
      "Assisted with student records, document organization, data entry, and registrar office responsibilities.",
    skills: ["Data Entry", "Records Management", "Documentation"],
  },
  {
    role: "Front-End Developer",
    company: "Remote",
    period: "Oct 2025 – Dec 2025",
    type: "Development",
    description:
      "Worked on website structure, styling, responsive layouts, interface improvements, and website testing.",
    skills: ["HTML", "CSS", "JavaScript", "UI/UX"],
  },
  {
    role: "Office Staff",
    company: "A8 Wood Sawmilling",
    period: "Jul 2025 – Sep 2025",
    type: "Administrative",
    description:
      "Supported office operations, maintained records, organized documents, and assisted with inventory and invoicing.",
    skills: ["Office Support", "Inventory", "Invoicing"],
  },
];

const skillGroups = [
  {
    title: "Web Development",
    description: "Building and improving web interfaces.",
    skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
  },
  {
    title: "Programming",
    description: "Programming fundamentals and problem-solving.",
    skills: ["Python", "JavaScript"],
  },
  {
    title: "Administrative Support",
    description: "Organizing information and supporting daily operations.",
    skills: [
      "Data Entry",
      "Records Management",
      "Document Preparation",
      "Inventory",
      "Invoicing",
    ],
  },
  {
    title: "Professional Skills",
    description: "Reliable, organized, and detail-oriented work.",
    skills: [
      "Attention to Detail",
      "Organization",
      "Adaptability",
      "Problem-Solving",
      "Website Testing",
      "UI/UX",
    ],
  },
];

const education = [
  {
    degree: "Teacher Certificate Program",
    school: "Caraga Institute of Technology",
    period: "2025 – 2026",
  },
  {
    degree: "Bachelor of Science in Information Technology",
    school: "Northeastern Mindanao Colleges",
    period: "2021 – 2025",
  },
  {
    degree: "Associate of Computer Technology",
    school: "Northeastern Mindanao Colleges",
    period: "2021 – 2023",
  },
];

const training = [
  "Computer Operation & Keyboarding Level 1",
  "Python Programming Essentials — DICT",
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function App() {
  const [experienceFilter, setExperienceFilter] = useState("All");
  const [records, setRecords] = useState([
    {
      id: 1,
      name: "Sample document",
      category: "Document",
      status: "Complete",
    },
    {
      id: 2,
      name: "Sample student record",
      category: "Student Record",
      status: "Pending",
    },
  ]);
  const [recordName, setRecordName] = useState("");
  const [recordCategory, setRecordCategory] = useState("Document");
  const [recordMessage, setRecordMessage] = useState("");

  const filteredExperiences =
    experienceFilter === "All"
      ? experiences
      : experiences.filter((item) => item.type === experienceFilter);

  const completedRecords = records.filter(
    (record) => record.status === "Complete"
  ).length;

  function addRecord(event) {
    event.preventDefault();
    const name = recordName.trim();

    if (!name) {
      setRecordMessage("Please enter a record name.");
      return;
    }

    setRecords((current) => [
      ...current,
      {
        id: Date.now(),
        name,
        category: recordCategory,
        status: "Pending",
      },
    ]);
    setRecordName("");
    setRecordMessage("Record added successfully.");
  }

  function toggleRecordStatus(id) {
    setRecords((current) =>
      current.map((record) =>
        record.id === id
          ? {
              ...record,
              status:
                record.status === "Complete" ? "Pending" : "Complete",
            }
          : record
      )
    );
  }

  function deleteRecord(id) {
    setRecords((current) => current.filter((record) => record.id !== id));
  }

  return (
    <div className="portfolio">
      <header className="site-header">
        <nav className="nav container" aria-label="Main navigation">
          <a className="logo" href="#home">
            EP<span>.</span>
          </a>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>

          <a
            className="nav-github"
            href="https://github.com/ellamaepacundo07-ctrl"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </nav>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot" />
              Open to opportunities
            </div>

            <p className="hero-intro">Hello, I'm</p>
            <h1>
              Ellamae Cantilado
              <span>Pacundo.</span>
            </h1>

            <h2 className="hero-role">
              Front-End Developer · Administrative Professional
            </h2>

            <p className="hero-description">
              I bring together technical skills and administrative experience
              to create organized, user-friendly digital experiences and
              reliable work processes.
            </p>

            <p className="hero-location">
              ⌖ Kitcharao, Caraga, Philippines
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore My Work ↗
              </a>
              <a className="button button-secondary" href="#contact">
                Get in Touch
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="profile-frame">
              <img
                src="/images/profile.jpg"
                alt="Portrait of Ellamae Cantilado Pacundo"
                className="profile-image"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
              <div className="profile-placeholder">EP.</div>
            </div>
            <div className="profile-caption">
              <strong>Curious by nature.</strong>
              <p>Committed to continuous growth.</p>
            </div>
          </div>
        </section>

        <section className="stats container">
          <div className="stat-item">
            <strong>3</strong>
            <span>Work Experiences</span>
          </div>
          <div className="stat-item">
            <strong>5+</strong>
            <span>Programming Technologies</span>
          </div>
          <div className="stat-item">
            <strong>2</strong>
            <span>Training Programs</span>
          </div>
          <div className="stat-item">
            <strong>IT</strong>
            <span>Educational Background</span>
          </div>
        </section>

        <section className="section container" id="about">
          <SectionHeading
            eyebrow="01 — ABOUT ME"
            title="A little about who I am."
            description="A combination of technical knowledge, organization, and a willingness to learn."
          />

          <div className="about-grid">
            <div className="about-copy">
              <p>
                I'm a detail-oriented professional with experience in data
                entry, administrative support, records management, and
                front-end development. My Information Technology background
                helps me approach tasks with a technical and practical mindset.
              </p>
              <p>
                I value clear communication, accuracy, and continuous
                improvement. Whether organizing records or building a web
                interface, I aim to make work reliable, efficient, and easy to
                use.
              </p>
              <a className="text-link" href="#contact">
                Let's connect ↗
              </a>
            </div>

            <div className="about-details">
              <div className="detail-row">
                <span className="detail-label">Full name</span>
                <span>Ellamae Cantilado Pacundo</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Location</span>
                <span>Kitcharao, Caraga, Philippines</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Focus</span>
                <span>Front-End Development & Administration</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Approach</span>
                <span>Detail-oriented, adaptable, and organized</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-muted" id="skills">
          <div className="container">
            <SectionHeading
              eyebrow="02 — SKILLS"
              title="Tools I work with."
              description="Technical capabilities and practical skills developed through education and work experience."
            />

            <div className="skills-grid">
              {skillGroups.map((group) => (
                <article className="skill-card" key={group.title}>
                  <span className="skill-symbol">&lt;/&gt;</span>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                  <div className="skill-tags">
                    {group.skills.map((skill) => (
                      <span className="skill-tag" key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section container" id="experience">
          <SectionHeading
            eyebrow="03 — EXPERIENCE"
            title="Where I've contributed."
            description="Experience across administrative operations and front-end development."
          />

          <div className="filter-controls">
            {["All", "Administrative", "Development"].map((filter) => (
              <button
                type="button"
                key={filter}
                className={`filter-button ${
                  experienceFilter === filter ? "active" : ""
                }`}
                onClick={() => setExperienceFilter(filter)}
                aria-pressed={experienceFilter === filter}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="experience-list">
            {filteredExperiences.map((job, index) => (
              <article className="experience-card" key={job.role}>
                <div className="experience-marker">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="experience-main">
                  <div className="experience-heading">
                    <div>
                      <h3>{job.role}</h3>
                      <p className="experience-company">{job.company}</p>
                    </div>
                    <span className="experience-period">{job.period}</span>
                  </div>
                  <p className="experience-description">{job.description}</p>
                  <div className="skill-tags">
                    {job.skills.map((skill) => (
                      <span className="skill-tag" key={skill}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-muted" id="projects">
          <div className="container">
            <SectionHeading
              eyebrow="04 — FEATURED PROJECT"
              title="A practical records tracker."
              description="An interactive demonstration of a simple records management workflow."
            />

            <article className="project-card">
              <div className="project-info">
                <span className="project-number">FEATURED / 01</span>
                <h3>Records Tracker</h3>
                <p>
                  Add records, track completion, and keep a list organized.
                  This project demonstrates React state management and basic
                  record-creation, update, and deletion actions.
                </p>
                <div className="skill-tags">
                  {["React", "JavaScript", "State Management", "UI Design"].map(
                    (skill) => (
                      <span className="skill-tag" key={skill}>
                        {skill}
                      </span>
                    )
                  )}
                </div>
                <p className="project-note">
                  Records are kept in the current page session and are not
                  saved to a database.
                </p>
              </div>

              <div className="tracker-demo">
                <div className="tracker-header">
                  <div>
                    <span className="tracker-label">WORKSPACE</span>
                    <h4>Records overview</h4>
                  </div>
                  <span className="tracker-count">
                    {records.length} records
                  </span>
                </div>

                <div className="tracker-stats">
                  <div>
                    <span>Total records</span>
                    <strong>{records.length}</strong>
                  </div>
                  <div>
                    <span>Completed</span>
                    <strong>{completedRecords}</strong>
                  </div>
                  <div>
                    <span>Pending</span>
                    <strong>{records.length - completedRecords}</strong>
                  </div>
                </div>

                <form className="tracker-form" onSubmit={addRecord}>
                  <label htmlFor="record-name">Add a record</label>
                  <input
                    id="record-name"
                    value={recordName}
                    onChange={(event) => setRecordName(event.target.value)}
                    placeholder="Enter record name..."
                    maxLength={100}
                  />

                  <label htmlFor="record-category">Category</label>
                  <select
                    id="record-category"
                    value={recordCategory}
                    onChange={(event) => setRecordCategory(event.target.value)}
                  >
                    <option>Document</option>
                    <option>Student Record</option>
                    <option>Office Task</option>
                    <option>Other</option>
                  </select>

                  <button className="button button-primary tracker-add">
                    Add Record +
                  </button>

                  {recordMessage && (
                    <p className="tracker-message" role="status">
                      {recordMessage}
                    </p>
                  )}
                </form>

                <div className="record-list">
                  {records.length === 0 ? (
                    <p className="empty-records">
                      No records yet. Add one above to get started.
                    </p>
                  ) : (
                    records.map((record) => (
                      <div className="record-item" key={record.id}>
                        <div className="record-item-content">
                          <strong>{record.name}</strong>
                          <span>{record.category}</span>
                        </div>
                        <div className="record-item-actions">
                          <button
                            type="button"
                            className={`record-status ${
                              record.status === "Complete" ? "complete" : ""
                            }`}
                            onClick={() => toggleRecordStatus(record.id)}
                          >
                            {record.status}
                          </button>
                          <button
                            type="button"
                            className="record-delete"
                            onClick={() => deleteRecord(record.id)}
                            aria-label={`Delete ${record.name}`}
                          >
                            ×
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </article>
          </div>
        </section>

        <section className="section container" id="education">
          <SectionHeading
            eyebrow="05 — EDUCATION & TRAINING"
            title="Learning that builds the foundation."
            description="My academic background and additional technical training."
          />

          <div className="education-grid">
            <div>
              <h3 className="subsection-title">Education</h3>
              <div className="timeline">
                {education.map((item) => (
                  <article className="timeline-item" key={item.degree}>
                    <span className="timeline-dot" />
                    <div>
                      <span className="timeline-period">{item.period}</span>
                      <h4>{item.degree}</h4>
                      <p>{item.school}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div>
              <h3 className="subsection-title">Training & Certificates</h3>
              <div className="training-list">
                {training.map((item, index) => (
                  <article className="training-card" key={item}>
                    <span className="training-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h4>{item}</h4>
                      <p>Professional development</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container">
            <SectionHeading
              eyebrow="06 — CONTACT"
              title="Let's work together."
              description="Have an opportunity or project in mind? Feel free to reach out."
            />

            <div className="contact-grid">
              <a
                className="contact-card"
                href="mailto:ellamae.pacundo.it@gmail.com"
              >
                <span className="contact-icon">@</span>
                <span className="contact-label">Email me</span>
                <strong>ellamae.pacundo.it@gmail.com</strong>
                <span className="contact-arrow">↗</span>
              </a>

              <a className="contact-card" href="tel:09461048881">
                <span className="contact-icon">☎</span>
                <span className="contact-label">Call me</span>
                <strong>09461048881</strong>
                <span className="contact-arrow">↗</span>
              </a>

              <a
                className="contact-card"
                href="https://github.com/ellamaepacundo07-ctrl"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-icon">&lt;/&gt;</span>
                <span className="contact-label">Find me on</span>
                <strong>GitHub</strong>
                <span className="contact-arrow">↗</span>
              </a>
            </div>

            <p className="contact-location">
              Based in Kitcharao, Caraga, Philippines
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="footer-logo" href="#home">
            EP<span>.</span>
          </a>
          <p>
            © {new Date().getFullYear()} Ellamae Cantilado Pacundo. Built with
            care.
          </p>
          <a className="back-to-top" href="#home">
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;