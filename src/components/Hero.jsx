// components/Hero.jsx
import { motion } from "framer-motion";
import yash from "../assets/yash.jpg";

export default function Hero() {
  return (
    <motion.section
      id="home"
      className="section hero-section"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container hero-grid">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="hero-text"
        >
          <p className="subtitle">Full-Stack Developer • React · Node · MySQL</p>
          <h1 className="hero-title">HEY, I&apos;M YASH KALVANI</h1>
          <p className="hero-subtitle">
            A result-oriented Full-Stack Developer building and managing web
            applications for real clients in the UAE. I focus on clean UX,
            scalable backends, and features that actually reduce manual work.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hero-photo-wrap"
        >
          <div className="card hero-photo-card">
            <img src={yash} alt="Yash Kalvani" className="hero-photo" />
            <p className="muted hero-photo-caption">Based in Dubai</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
