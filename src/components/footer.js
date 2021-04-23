import { Link } from "gatsby"
import React from "react"

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <ul style={{ listStyle: `none` }}>
        <li>
          <Link to="/imprint/" className="footer__link">
            Imprint
          </Link>
        </li>
        <li>
          <Link to="/privacy-policy/" className="footer__link">
            Privacy Policy
          </Link>
        </li>
      </ul>
      <p className="has-text-centered mt-5">
        <Link to="/" className="footer__link">
          © {new Date().getFullYear()} Felix Ortmann
        </Link>
      </p>
    </div>
  </footer>
)

export default Footer
