import "./Hero.css";
 import earth from "./earth.png";

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-text">
        <h1>
          Explore Our Solar <br />
          System Through Data
        </h1>

        <p>
          Understand the planets not just by name, but by measurable<br/>
          facts. From size and mass to gravity and density, this page<br/>
          breaks down the solar system in a clear, data-driven way.
        </p>

        <div className="buttons">
          <button className="explore-btn">
            Explore the Data
          </button>

          <button className="contact-btn">
            Contact Us
          </button>
        </div>
      </div>

      <div className="hero-image-container">
        <img
          className="hero-image"
          src={earth}
          alt="Earth"
        />
      </div>

    </section>
  );
};

export default Hero;
