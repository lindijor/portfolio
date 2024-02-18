import React from "react";
import "./Header.css";

export default function Header() {
  function scrollToAbout(event) {
    event.preventDefault();
    const more = document.getElementById("more");
    if (more) {
      more.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function scrollToContact(event) {
    event.preventDefault();
    const contact = document.getElementById("contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function scrollToWork(event) {
    event.preventDefault();
    const work = document.getElementById("work");
    if (work) {
      work.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="#more" onClick={scrollToAbout}>
              About
            </a>
          </li>
          <li>
            <a href="#work" onClick={scrollToWork}>
              Work
            </a>
          </li>
          <li>
            <a href="#contact" onClick={scrollToContact}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="header">
        <h1>
          Hi! I'm Lindis Jørgensen, a junior front-end developer based in Oslo
        </h1>
        <div className="header-btns">
          <a href="#work" className="btn" onClick={scrollToWork}>
            Some of my work
          </a>
          <a
            href="#contact"
            className="secondary-btn"
            onClick={scrollToContact}
          >
            Get in touch!
          </a>
        </div>
        <a href="#more" className="click-to-scroll" onClick={scrollToAbout}>
          <i class="fa-solid fa-angles-down"></i>
        </a>
      </div>
    </div>
  );
}
