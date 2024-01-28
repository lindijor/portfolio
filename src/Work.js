import React from "react";
import "./Work.css";
import dictionary from "./dictionary.png";
import weather from "./weather-app.png";

export default function Work() {
  return (
    <div className="work" id="work">
      <h2>Some of my work</h2>
      <div className="work-section">
        <div>
          <h3>Weather app</h3>
          <p>
            Lorem ipsum dolor sit amet in quis, consectetur eros adipiscing et
            elit. Suspendisse varius enim in eros elementum tristique. Duis
            cursus, quis viverra ornare, eros dolor et interdum nulla, ut
            commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus
            id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare.
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
            Lorem ipsum dolor sit amet in quis, consectetur eros adipiscing et
            elit. Suspendisse varius enim in eros elementum tristique. Duis
            cursus, quis viverra ornare, eros dolor et interdum nulla, ut
            commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus
            id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare.
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
    </div>
  );
}
