// components/Projects.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import etihadImg from "../assets/et.png";
import etihadImg2 from "../assets/et2.png";
import etihadImg3 from "../assets/et3.png";
import etihadImg4 from "../assets/et4.png";
import etihadImg5 from "../assets/et5.png";
import runningImg from "../assets/1.jpg";
import runningImg2 from "../assets/2.jpg";
import runningImg3 from "../assets/3.jpg";
import runningImg4 from "../assets/4.jpg";
import runningImg5 from "../assets/6.jpg";
import advisingImg from "../assets/ad.png";
import advisingImg2 from "../assets/ad1.png";


import covidImg from "../assets/image.png";

const projects = [
  {
    title: "Etihad Sports Academy Platform",
    year: "2023–2024",
    tech: "React · Node.js · MySQL · Tailwind · JWT",
    image: etihadImg,
    images: [etihadImg, etihadImg2, etihadImg3, etihadImg4, etihadImg5],
    description:
      "Full-stack platform for a UAE sports academy with role-based dashboards for students, parents, coaches, and admins.",
    bullets: [
      "QR-based attendance with real-time tracking.",
      "Invoices & receipts module with payment status.",
      "Class scheduling, student details, and performance reports.",
    ],
    repo: "https://github.com/kalwaniy",
    live: "#",
    device: "laptop",
  },
  {
    title: "Running Tracker Mobile App",
    year: "2025",
    tech: "React Native · Node.js · MySQL · Google Maps",
    image: runningImg,
    images: [runningImg, runningImg2, runningImg3, runningImg4, runningImg5],
    description:
      "Cross-platform mobile app to track runs with GPS, live stats, and AI-driven training plans.",
    bullets: [
      "Route mapping with polylines and start/end markers.",
      "Cloud-synced run history with pace & distance stats.",
      "Community features for sharing runs and finding partners.",
    ],
    repo: "https://github.com/kalwaniy",
    live: "#",
    device: "phone",
  },
  {
    title: "Academic Advising Platform",
    year: "2024–2025",
    tech: "React · Node.js · MySQL · Tailwind",
    image: advisingImg,
    images: [advisingImg, advisingImg2, advisingImg, advisingImg, advisingImg],
    description:
      "Web platform to manage course approvals, overloads, and prerequisite waivers with multi-role workflows.",
    bullets: [
      "Encrypted student data and JWT-based auth.",
      "Dashboards for students, advisors, department chairs, and faculty.",
      "End-to-end status tracking for each request.",
    ],
    repo: "https://github.com/kalwaniy/academic-advising-system",
    live: "#",
    device: "laptop",
  },
  // 🔹 New website project (single image + View Website button, no gallery)
  {
    title: "COVID-19 Awareness Website",
    year: "2023",
    tech: "HTML · CSS · JavaScript",
    image: covidImg,
    images: [covidImg], // only one image
    description:
      "Informational website built for an ISTE course, focused on COVID-19 facts, safety measures, and resources.",
    bullets: [
      "Multi-page static site with structured content on symptoms, prevention, and FAQs.",
      "Custom responsive layout using semantic HTML and CSS.",
      "Deployed on RIT servers using the standard course hosting workflow.",
    ],
    repo: "",
    live:
      "https://people.rit.edu/yk1956/ISTE240/project-covid/Project/Project/index.html",
    device: "laptop",
    liveLabel: "View Website",
    disableGallery: true, // 👉 no lightbox for this project
  },
];

export default function Projects() {
  const [gallery, setGallery] = useState({
    open: false,
    images: [],
    index: 0,
    title: "",
    device: "laptop",
  });

  const openGallery = (project) => {
    // 👉 Don’t open gallery for projects that disable it
    if (project.disableGallery) return;

    setGallery({
      open: true,
      images: project.images || [project.image],
      index: 0,
      title: project.title,
      device: project.device || "laptop",
    });
  };

  const closeGallery = () =>
    setGallery((g) => ({
      ...g,
      open: false,
    }));

  const nextImage = (e) => {
    e.stopPropagation();
    setGallery((g) => ({
      ...g,
      index: (g.index + 1) % g.images.length,
    }));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setGallery((g) => ({
      ...g,
      index: (g.index - 1 + g.images.length) % g.images.length,
    }));
  };

  const goToImage = (idx, e) => {
    e.stopPropagation();
    setGallery((g) => ({
      ...g,
      index: idx,
    }));
  };

  return (
    <motion.section
      id="projects"
      className="section"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="section-heading">
          <p className="subtitle">Projects</p>
          <h2 className="title">
            Some of the real-world products and side projects I&apos;ve built.
          </h2>
        </div>

        <div className="projects-list">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              className="project-row"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              {/* ---------- media side ---------- */}
              <div
                className="project-media"
                onClick={() => openGallery(p)}
                role="button"
              >
                {p.device === "phone" ? (
                  <>
                    <div className="phone-preview">
                      <div className="phone-frame">
                        <div className="phone-notch" />
                        <img
                          src={(p.images && p.images[0]) || p.image}
                          alt={p.title}
                          className="phone-screen"
                        />
                      </div>
                    </div>
                    <p className="muted small project-media-hint">
                      Tap to view gallery
                    </p>
                  </>
                ) : (
                  <>
                    <div className="laptop-frame">
                      <img
                        src={(p.images && p.images[0]) || p.image}
                        alt={p.title}
                      />
                    </div>
                    {/* Hide hint if gallery is disabled */}
                    {!p.disableGallery && (
                      <p className="muted small project-media-hint">
                        Click to view gallery
                      </p>
                    )}
                  </>
                )}
              </div>

              {/* ---------- info side ---------- */}
              <div className="project-info">
                <h3>{p.title}</h3>
                <p className="muted small">
                  {p.year} • {p.tech}
                </p>
                <p className="project-desc">{p.description}</p>
                <ul className="list">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                <div className="project-links">
                  {p.live && p.live !== "#" && (
                    <a
                      href={p.live}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {/* 👉 Custom label for website project */}
                      {p.liveLabel || "Live Demo"}
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* ---------- Lightbox Gallery ---------- */}
      {gallery.open && (
        <div className="lightbox-overlay" onClick={closeGallery}>
          <motion.div
            className="lightbox-inner card"
            initial={{ opacity: 0, scale: 0.94, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 10 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="lightbox-header">
              <h3>{gallery.title}</h3>
              <button
                aria-label="Close"
                className="lightbox-close"
                onClick={closeGallery}
              >
                ✕
              </button>
            </div>

            <div className="lightbox-image-wrap">
              {gallery.device === "phone" ? (
                <div className="phone-frame phone-frame-lg">
                  <div className="phone-notch" />
                  <img
                    src={gallery.images[gallery.index]}
                    alt={`${gallery.title} screenshot ${gallery.index + 1}`}
                    className="phone-screen"
                  />
                </div>
              ) : (
                <img
                  src={gallery.images[gallery.index]}
                  alt={`${gallery.title} screenshot ${gallery.index + 1}`}
                  className="lightbox-image"
                />
              )}

              {/* 👉 Only show nav arrows if there is more than one image */}
              {gallery.images.length > 1 && (
                <>
                  <button
                    className="lightbox-nav left"
                    onClick={prevImage}
                    aria-label="Previous image"
                  >
                    ‹
                  </button>
                  <button
                    className="lightbox-nav right"
                    onClick={nextImage}
                    aria-label="Next image"
                  >
                    ›
                  </button>
                </>
              )}
            </div>

            {/* 👉 Only show dots if multiple images */}
            {gallery.images.length > 1 && (
              <div className="lightbox-dots">
                {gallery.images.map((_, i) => (
                  <button
                    key={i}
                    className={`lightbox-dot ${
                      i === gallery.index ? "active" : ""
                    }`}
                    onClick={(e) => goToImage(i, e)}
                    aria-label={`Go to image ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </motion.section>
  );
}
