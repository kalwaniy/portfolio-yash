// components/Footer.jsx
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="muted small">
          © {new Date().getFullYear()} Yash Kalvani. All rights reserved.
        </p>
        <div className="footer-links">
          <a href="https://linkedin.com/in/yash-kalvani-574212228" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/kalwaniy" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="/Yash-Kalvani-CV.pdf" target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
