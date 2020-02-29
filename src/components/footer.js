import { StyledLink } from "./helpers"
import React from "react"
import TextContent from "./textContent"

const Footer = () => (
  <footer
    style={{
      background: `royalblue`,
      color: `white`,
    }}
  >
    <TextContent>
    <div style={{padding: `3rem 0`}}>
      <ul style={{ "list-style": `none`, margin: 0, padding: 0 }}>
        <li>
          <StyledLink activeStyle={{ textColor: `white` }} to="/imprint/">
            Impressum
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/privacy-policy/">Datenschutzerklärung</StyledLink>
        </li>
      </ul>
      <p>© {new Date().getFullYear()}, Felix Ortmann</p>
    </div>
    </TextContent>
  </footer>
)

export default Footer
