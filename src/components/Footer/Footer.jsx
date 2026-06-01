import React from "react";


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
  ];

  return (
    <footer>
      <h3>About</h3>
      <p>Group members who worked on this project:</p>

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
      <p>TS Academy</p>
    </footer>
  );
};

export default Footer;