import "./Video.css";

function VideoSection() {
  return (
    <div className="videoWrapper">
      <div className="videoContainer">
        <video width="640" height="360" autoPlay loop muted controls>
          <source
            src="https://www.pexels.com/download/video/4980049.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="article-container">
        <h3>How Planetary Data Helps Us Understand Space</h3>
        <p>
          Planetary science goes beyond images. Comparing{" "}
          <span className="highlight">mass</span>,{" "}
          <span className="highlight">diameter</span>,{" "}
          <span className="highlight">gravity</span>, and{" "}
          <span className="highlight">density</span>, we gain insight into how
          planets form, behave, and interact within the solar system.
        </p>
      </div>
    </div>
  );
}

export default VideoSection;