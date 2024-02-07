import React from "react";
import "./Work.css";
import dictionary from "./dictionary.png";
import weather from "./weather-app.png";
import poem from "./poem.png";

export default function Work() {
  return (
    <div className="work" id="work">
      <h2>Some of my work</h2>
      <div className="work-section">
        <div>
          <h3>Weather app</h3>
          <p>
            World weather application built using HTML, two active APIs,
            advanced CSS, and React.
          </p>
          <a
            href="https://your-daily-weather-app.netlify.app/"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            Check it out! <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
        <div className="image">
          <img src={weather} alt="weather app" />
        </div>
      </div>
      <div className="work-section">
        <div>
          <h3>Dictionary</h3>
          <p>
            Dictionary built using HTML, an active API, advanced CSS, and React.
          </p>
          <a
            href="https://everyday-dictionary.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Check it out! <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
        <div className="image">
          <img src={dictionary} alt="dictionary" />
        </div>
      </div>
      <div className="work-section">
        <div>
          <h3>AI poem generator</h3>
          <p>
            An AI poem generator built using HTML, an active API, advanced CSS,
            and React.
          </p>
          <a
            href="https://your-ai-poem-generator.netlify.app/"
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            Check it out! <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
        <div className="image">
          <img src={poem} alt="poem generator" />
        </div>
      </div>
    </div>
  );
}
