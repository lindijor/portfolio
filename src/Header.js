import React from "react";
import "./Header.css";

export default function Header() {
  const scrollToNextSection = (event) => {
    event.preventDefault();
    const section = document.getElementById("more");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div className="header">
      <h1>
        Hi! I'm Lindis Jørgensen, a junior front-end deveolper based in Oslo
      </h1>
      <div className="header-btns">
        <a href="/" className="btn">
          My work
        </a>
        <a href="/" className="secondary-btn">
          Get in touch!
        </a>
      </div>
      <a href="#more" className="click-to-scroll" onClick={scrollToNextSection}>
        <span class="material-symbols-outlined">arrow_forward</span>
      </a>
    </div>
  );
}
