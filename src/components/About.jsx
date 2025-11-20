// components/About.jsx
import { motion } from "framer-motion";

const SKILLS = [
  "React",
  "HTML",
  "Wordpress (basic)",
  "Webflow (basic)",
  "JavaScript (ES6+)",
  "TypeScript (basic)",
  "Node.js",
  "Express",
  "MySQL",
  "REST APIs",
  "Tailwind CSS",
  "Figma → UI",
  "Git & GitHub",
  "Responsive Design",
];

export default function About() {
  return (
    <motion.section
      id="about"
      className="section section-alt"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="section-heading">
          <p className="subtitle">ABOUT ME</p>
          <h2 className="title">
            Here you&apos;ll find more about who I am and what I do.
          </h2>
        </div>

        <div className="about-grid">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="about-subtitle">Get to know me!</h3>
            <p className="muted">
              I&apos;m a <strong>Full-Stack Developer</strong> focused on building
              reliable, production-ready web applications using{" "}
              <strong>React, Node.js, and MySQL</strong>.
            </p>
            <p className="muted">
              I&apos;ve built platforms like a{" "}
              <strong>Sports Academy management system</strong> (QR attendance,
              invoices, receipts, dashboards) and an{" "}
              <strong>Academic Advising platform</strong> with multi-role
              approvals and encrypted student data. I also built a{" "}
              <strong>Running Tracker app</strong> with GPS routes and
              AI-driven training plans.
            </p>
            <p className="muted">
              I enjoy working closely with teams, understanding real-world
              problems, and shipping features that actually reduce manual work
              and improve user experience.
            </p>
            <p className="muted">
              I&apos;m currently open to <strong>Full-Stack / React roles</strong> in
              the UAE where I can contribute, learn, and grow.
            </p>

            <a href="#contact" className="btn btn-primary about-cta">
              Contact Me
            </a>
          </motion.div>

          {/* Right: skills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="about-skills card"
          >
            <h3 className="about-subtitle">My Skills</h3>
            <div className="skills-grid">
              {SKILLS.map((s) => (
                <span key={s} className="skill-pill">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
