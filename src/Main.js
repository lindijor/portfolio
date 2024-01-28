import React from "react";
import "./Main.css";
import lindis from "./lindis2.jpg";

export default function Main() {
  return (
    <div className="main" id="more">
      <div className="text-section">
        <h2>A little something about me</h2>
        <p>
          Lorem ipsum dolor sit amet in quis, consectetur eros adipiscing et
          elit. Suspendisse varius enim in eros elementum tristique. Duis
          cursus, quis viverra ornare, eros dolor et interdum nulla, ut commodo
          diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
          lorem imperdiet. Nunc ut sem vitae risus tristique posuere varius enim
          in eros elementum tristique. Duis cursus, mi quis viverra ornare.
        </p>
      </div>
      <div>
        <img src={lindis} alt="lindis" />
      </div>
    </div>
  );
}
