import React from "react";
import "./Contact.css";
import CV from "./Lindis CV.pdf";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <h2>Let's get in touch!</h2>
      <div className="contact-section">
        <h3>Send me an e-mail</h3>
        <a href="mailto:jorgensenlindis@gmail.com">
          jorgensenlindis@gmail.com
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
      <div className="contact-section">
        <h3>LinkedIn</h3>
        <a
          href="https://www.linkedin.com/in/lindis-jorgensen/"
          target="_blank"
          rel="noreferrer"
        >
          Get me on LinkedIn
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
      <div className="contact-section">
        <h3>Learn more about me</h3>
        <a href={CV} target="_blank" rel="noreferrer">
          Download my resume
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
    </div>
  );
}
