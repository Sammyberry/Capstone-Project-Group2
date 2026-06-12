import "./Hero.css";
import earth from "./earth.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Explore Our Solar System Through Data</h1>

        <p>
          Understand the planets not just by name, but by measurable facts. From
          size and mass to gravity and density, this page breaks down the solar
          system in a clear, data-driven way.
        </p>

        <div className="buttons">
          <a href="#table-section" className="explore-btn">
            Explore the Data
          </a>

          <a href="#contact-section" className="contact-btn">
            Contact Us
          </a>
        </div>
      </div>

      <div className="hero-image-container">
        <img className="hero-image" src={earth} alt="Earth" />
      </div>
    </section>
  );
};

export default Hero;
