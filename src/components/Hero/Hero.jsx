import react from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-text">
            <h1>Explore Our Solar <br> </br>
            System Through Data
            </h1>
            
             <p> 
            Understand the planets not just by name, but by measurable<br></br>
            facts. From size and mass to gravity and density, this page<br></br>
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
          
            <div className="hero-image">
            <img src="" alt="Earth">
            </img>
            </div>
    </div>
  )
}
export default Hero;

        
    