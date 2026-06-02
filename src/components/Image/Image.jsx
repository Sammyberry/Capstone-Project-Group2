import React from "react";
import "./image.css";

const planets = [
  { id: 1, alt: "planet 1" },
  { id: 2, alt: "planet 2" },
  { id: 3, alt: "planet 3" },
  { id: 4, alt: "planet 4" },
  { id: 5, alt: "planet 5" },
  { id: 6, alt: "planet 6" },
  { id: 7, alt: "planet 7" },
  { id: 8, alt: "planet 8" },
  { id: 9, alt: "planet 9" },
];

export default function ImageSection() {
  return (
    <section className="img-section">
      <div className="img-section__header">
        <h2 className="img-section__title">Visualizing the Differences Between Planets</h2>
        <p className="img-section__paragraph">
          Each planet in our solar system has unique physical characteristics.
          Visual comparisons help highlight how vastly different terrestrial
          planets are from gas giants and ice giants.
        </p>
      </div>

      <div className="img-section__grid">
        {planets.map(({ id, alt }) => (
          <div
            key={id}
            className={`img-section__grid-item${id === planets.length ? " img-section__grid-item--last" : ""}`}
          >
            <img src="/images/planet.webp" alt={alt} />
            <div className="img-section__grid-caption">
              <h3 className="img-section__planet-name">Planet Name</h3>
              <p className="img-section__grid-text">Distance from Sun</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}