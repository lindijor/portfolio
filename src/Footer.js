import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-section">
        <div>
          <h3>Contents</h3>
          <ul>
            <li>
              <a href="/">About me</a>
            </li>
            <li>
              <a href="/">Some of my work</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Contact and socials</h3>
          <div className="socials-icons">
            <a
              href="https://www.linkedin.com/in/lindis-jorgensen/"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/lindijor"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-brands fa-github"></i>
            </a>
            <a
              href="mailto:jorgensenlindis@gmai.com"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>

      <p>
        This portfolio was coded by Lindis Jørgensen. It is{" "}
        <a
          href="https://github.com/lindijor/portfolio"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and hosted on Netlify.
      </p>
    </div>
  );
}
