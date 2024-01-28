import React from "react";
import "./Main.css";
import lindis from "./lindis2.jpg";

export default function Main() {
  return (
    <div className="main" id="more">
      <div className="text-section">
        <h2>A little something about me</h2>
        <p>
          Hi! I'm Lindis Jørgensen, and i currently work as an SEO specialist in
          an Oslo-based agency. I've recently discovered a love for coding, and
          pursued to take a coding workshop at SheCodes, which I completed this
          January. I'm eager to keep learning and take on exciting
          coding-projects, whereas my goal is to be working as a front-end
          developer full time. Check out some of my work below!
        </p>
      </div>
      <div>
        <img src={lindis} alt="lindis" />
      </div>
    </div>
  );
}
