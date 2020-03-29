import { Link } from "gatsby"
import React from "react"

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="content">
        <ul style={{ "list-style": `none` }}>
          <li>
            <Link to="/imprint/" className="footer__link">
              Impressum
            </Link>
          </li>
          <li>
            <Link to="/privacy-policy/" className="footer__link">
              Datenschutzerklärung
            </Link>
          </li>
        </ul>
        <p className="has-text-centered">
          <Link to="/" className="footer__link">
            © {new Date().getFullYear()} Felix Ortmann
          </Link>
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
