import {Link} from 'gatsby';
import * as React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <ul style={{listStyle: 'none'}}>
        <li>
          <Link to="/imprint/">
            Imprint
          </Link>
        </li>
        <li>
          <Link to="/privacy-policy/">
            Privacy Policy
          </Link>
        </li>
      </ul>
      <p className="has-text-centered mt-5">
        <Link to="/">
          © {new Date().getFullYear()} Felix Ortmann
        </Link>
      </p>
    </div>
  </footer>
);

export default Footer;
