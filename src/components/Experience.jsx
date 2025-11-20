// components/Experience.jsx
import { motion } from "framer-motion";

const experience = [
  {
    role: "Full-Stack Web Developer",
    org: "Etihad Sports Academy",
    period: "Sep 2023 – Jul 2024 · Abu Dhabi",
    points: [
      "Built and maintained a full-stack web platform with multi-role dashboards.",
      "Implemented QR attendance, invoices, receipts, and class management.",
      "Collaborated with stakeholders on requirements, UX, and handover.",
    ],
  },
  {
    role: "Software Development Intern",
    org: "Adeptus Technologies",
    period: "May 2023 – Sep 2023 · Dubai",
    points: [
      "Developed responsive UI components in React and JavaScript.",
      "Used Postman to test and validate REST APIs.",
      "Worked in Agile sprints, contributing via Git and code reviews.",
    ],
  },
];

export default function Experience() {
  return (
    <motion.section
      id="experience"
      className="section section-alt"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="section-heading">
          <p className="subtitle">Background</p>
          <h2 className="title">Experience</h2>
        </div>

        <div className="experience-list">
          {experience.map((item, i) => (
            <motion.div
              key={item.role + item.org}
              className="card experience-card"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <div className="experience-header">
                <h3>
                  {item.role} · {item.org}
                </h3>
                <p className="muted small">{item.period}</p>
              </div>
              <ul className="list">
                {item.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
