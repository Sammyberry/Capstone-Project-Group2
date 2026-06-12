import React from "react";
import "./Footer.css";

const Footer = () => {
  const contributors = [
    { name: "Sammy", username: "Sammyberry" },
    { name: "John", username: "Jonnywondercodes" },
    { name: "Akinade", username: "DevKin1" },
    { name: "Darasimi", username: "K-coder85" },
    { name: "Ruth", username: "makimprowess-jpg" },
    { name: "Nelson", username: "Hunchog33" },
    { name: "Damilola", username: "A-kehinde" },
    { name: "Daniel", username: "dantoba" },
    { name: "Ngozi", username: "Blessing-Udo-hub" },
    { name: "Chiemela", username: "lilghost999" },
    { name: "Malachy", username: "malachyokafor7-cell" },
    { name: "Bamidele", username: "skillaim" },
  ];

  return (
    <footer>
      <h3>About</h3>
      <p>This project is a collaborative React web application that explores our solar system through planetary data, interactive visuals, and dynamic content fetched from external APIs.</p>
      <p className="team">Meet the team members:</p>

      <div className="contributors-list">
        {contributors.map((member) => (
          <a
            key={member.username}
            href={`https://github.com/${member.username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="contributor-card"
          >
            <img
              src={`https://github.com/${member.username}.png`}
              alt={member.name}
            />
            <p>{member.name}</p>
          </a>
        ))}
      </div>

      <hr />

      <div className="footer-info">
        <div className="footer-left">
          <p>&copy; 2026 Design by Amaka & Ifeoma A.</p>
          <p>
            Built by{" "}
            <a
              href="https://github.com/Sammyberry/Capstone-Project-Group2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Group 2
            </a>
            . All rights reserved.
          </p>
        </div>
        <p className="footer-right">TS Academy</p>
      </div>
    </footer>
  );
};

export default Footer;
