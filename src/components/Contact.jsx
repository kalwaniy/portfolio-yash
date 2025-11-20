// components/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const FORM_ENDPOINT = "https://formspree.io/f/mvglvayr";

export default function Contact() {
  const [status, setStatus] = useState(null); // "success" | "error" | null
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(e.target);

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="section"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="section-heading">
          <p className="subtitle">Contact</p>
          <h2 className="title">Let&apos;s build something together</h2>
          <p className="muted">
            Feel free to reach out if you have a role, freelance project, or
            collaboration in mind.
          </p>
        </div>

        <motion.form
          className="card contact-form"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
        >
          <div className="grid-2">
            <label>
              <span className="muted small">Name</span>
              <input
                className="input"
                name="name"
                required
                placeholder="Your name"
              />
            </label>
            <label>
              <span className="muted small">Email</span>
              <input
                type="email"
                className="input"
                name="email"
                required
                placeholder="you@example.com"
              />
            </label>
          </div>

          <label>
            <span className="muted small">Message</span>
            <textarea
              rows="5"
              className="textarea"
              name="message"
              required
              placeholder="Tell me about your project, role, or idea..."
            />
          </label>

          <input type="hidden" name="_subject" value="New message from portfolio" />
          <input type="hidden" name="_replyto" />

          <button className="btn btn-primary" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p
              className="muted small"
              style={{ marginTop: "0.75rem", color: "limegreen" }}
            >
              ✅ Message sent! I&apos;ll get back to you soon.
            </p>
          )}

          {status === "error" && (
            <p
              className="muted small"
              style={{ marginTop: "0.75rem", color: "tomato" }}
            >
              ❌ Something went wrong. Please try again later or email me at{" "}
              <a href="mailto:yash.kalwani777@gmail.com">
                yash.kalwani777@gmail.com
              </a>
              .
            </p>
          )}
        </motion.form>
      </div>
    </motion.section>
  );
}
