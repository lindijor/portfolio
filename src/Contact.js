import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <h2>Let's get in touch!</h2>
      <div className="contact-section">
        <h3>Send me an e-mail</h3>
        <a href="mailto:jorgensenlindis@gmail.com">
          jorgensenlindis@gmail.com{" "}
          <span class="material-symbols-outlined">arrow_forward</span>
        </a>
      </div>
      <div className="contact-section">
        <h3>LinkedIn</h3>
        <a
          href="https://www.linkedin.com/in/lindis-jorgensen/"
          target="_blank"
          rel="noreferrer"
        >
          Get me on LinkedIn{" "}
          <span class="material-symbols-outlined">arrow_forward</span>
        </a>
      </div>
      <div className="contact-section">
        <h3>Learn more about me</h3>
        <a href="/">
          Download my resume{" "}
          <span class="material-symbols-outlined">arrow_forward</span>
        </a>
      </div>
    </div>
  );
}
