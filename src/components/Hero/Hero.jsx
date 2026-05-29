 import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">

      <div className="hero-text">
        <h1>
          Explore Our Solar <br />
          System Through Data
        </h1>

        <p>
          Understand the planets not just by name, but by measurable
          facts. From size and mass to gravity and density, this page
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
          src="21fbbe77-184a-4cce-8c3c-fd483dc76e0a 1.png"
          alt="Earth"
        />
      </div>

    </section>
  );
};

export default Hero;