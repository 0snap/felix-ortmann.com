import { StyledLink } from "./helpers"
import React from "react"

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="content">
        <ul style={{ "list-style": `none` }}>
          <li>
            <StyledLink activeStyle={{ textColor: `white` }} to="/imprint/">
              Impressum
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/privacy-policy/">Datenschutzerklärung</StyledLink>
          </li>
        </ul>
        <p className="has-text-centered">
          <StyledLink to="/">
            © {new Date().getFullYear()}, Felix Ortmann
          </StyledLink>
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
