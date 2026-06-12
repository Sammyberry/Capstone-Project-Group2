import React from "react";
import "./image.css";

const planets = [
  {
    planet: "Mercury",
    distanceFromSun: 57.9,
    image: "https://anurella.github.io/images/planets/mercury.webp",
  },
  {
    planet: "Venus",
    distanceFromSun: 108.2,
    image: "https://anurella.github.io/images/planets/venus.webp",
  },
  {
    planet: "Earth",
    distanceFromSun: 149.6,
    image: "https://anurella.github.io/images/planets/earth.jpg",
  },
  {
    planet: "Mars",
    distanceFromSun: 227.9,
    image: "https://anurella.github.io/images/planets/mars.webp",
  },
  {
    planet: "Jupiter",
    distanceFromSun: 778.6,
    image: "https://anurella.github.io/images/planets/jupiter.webp",
  },
  {
    planet: "Saturn",
    distanceFromSun: 1433.5,
    image: "https://anurella.github.io/images/planets/saturn.webp",
  },
  {
    planet: "Uranus",
    distanceFromSun: 2872.5,
    image: "https://anurella.github.io/images/planets/uranus.webp",
  },
  {
    planet: "Neptune",
    distanceFromSun: 4495.1,
    image: "https://anurella.github.io/images/planets/neptune.webp",
  },
  {
    planet: "Pluto",
    distanceFromSun: 5906.4,
    image: "https://anurella.github.io/images/planets/pluto.webp",
  },
];

export default function ImageSection() {
  return (
    <section className="img-section">
      <div className="img-section__container">
        <div className="img-section__header">
          <h2 className="img-section__title">
            Visualizing the Differences Between Planets
          </h2>

          <p className="img-section__paragraph">
            Each planet in our solar system has unique physical characteristics.
            Visual comparisons help highlight how vastly different terrestrial
            planets are from gas giants and ice giants.
          </p>
        </div>

        <div className="img-section__grid">
          {planets.map((planet, index) => (
            <div
              key={planet.planet}
              className={`img-section__grid-item ${
                index === planets.length - 1
                  ? "img-section__grid-item--last"
                  : ""
              }`}
            >
              <div className="imageWrapper">
                <img src={planet.image} alt={planet.planet} loading="lazy" />
              </div>

              <div className="img-section__grid-caption">
                <h3 className="img-section__planet-name">{planet.planet}</h3>

                <p className="img-section__grid-text">
                  <span className="descriptionTag">Distance from Sun:</span>{" "}
                  {planet.distanceFromSun} million km
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}