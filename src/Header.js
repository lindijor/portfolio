import React from "react";
import "./Header.css";

export default function Header() {
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
    </div>
  );
}
