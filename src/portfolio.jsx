import config from "./config/data.js";
import "./portfolio.css";

export default function Page() {
  const { profile, links, about, teaching, testimonials } = config;

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="container d-flex justify-content-between w-100">
          <span
            className="fw-bold"
            style={{ cursor: "pointer" }}
            onClick={() => scrollTo("hero")}
          >
            {profile.name}
          </span>

          <div className="d-flex gap-4">
            <span className="nav-link" onClick={() => scrollTo("about")}>About</span>
            <span className="nav-link" onClick={() => scrollTo("teaching")}>Teaching</span>
            <span className="nav-link" onClick={() => scrollTo("testimonials")}>Testimonials</span>
            <a className="nav-link" href={links.github} target="_blank">GitHub</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero">
        <div className="hero-content">
          <h1>{profile.name}</h1>
          <h4>{profile.title}</h4>
          <p>
            I teach programming with a focus on fundamentals,
            real-world projects, and long-term career growth.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="about-content">
          <h2>About Me</h2>
          <p>{about.summary}</p>
        </div>
      </section>

      {/* TEACHING */}
      <section id="teaching">
        <h2>What I Teach</h2>
        <div className="teaching-grid">
          {teaching.subjects.map((s, i) => (
            <div key={i} className="teaching-item">{s}</div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials">
        <h2>Testimonials</h2>
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial">
            <p>“{t.message}”</p>
            <strong>{t.name}</strong><br />
            <span>{t.role}</span>
          </div>
        ))}
      </section>

      <footer>
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  );
}
