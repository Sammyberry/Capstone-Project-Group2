# Capstone Project: Planetary Science Web Application

## 🌐 Live Deployment & Repository
*   **Production Deployment Link:** *https://ts-group2-planetary-science.netlify.app/*
*   **GitHub Repository:** [Group 2 Capstone Repository](https://github.com/Sammyberry/Capstone-Project-Group2)

---

## 📝 Project Overview
This application is a collaborative React web application that explores our solar system through dynamic planetary data, interactive visuals, and responsive layouts. Built over the course of 3 months, this project showcases the integration of core frontend fundamentals (HTML5, CSS3, JavaScript ES6+), React component-based architecture, asynchronous Fetch APIs, and strict collaborative Git workflows.

---

## 👥 Team Members & Task Distribution

### 🛠️ Leadership & Core Operations
*   **Samuel Akinbolawa (Team Lead)** 
    *   **Role:** Project coordinator, repository manager, and workflow supervisor. Responsible for task delegation, setting ground rules, resolving global merge/CSS conflicts, and managing repository deployments.
    *   **Feature Built:** Styled and structured the comprehensive **Footer Section**.
*   **John Iyanuoluwa Owolabi** ([Jonnywondercodes](https://github.com/Jonnywondercodes))
    *   **Role:** Assistant Team Lead. Assisted in managing progress tracking, workflow continuity, and peer review.
    *   **Feature Built:** Structured and developed the **Planet Image Grid Section**.
*   **Akinade Fuwad Adebayo** ([DevKin1](https://github.com/DevKin1))
    *   **Role:** Quality Assurance (QA) Engineer. Oversaw code quality, bug testing, layout integrity, and code verification before staging.
    *   **Feature Built:** Managed the **Fetch API Integration** to dynamically retrieve and distribute planetary raw data across components.

### 💻 Component Developers
*   **Darasimi** ([K-coder85](https://github.com/K-coder85)) — Developed the **Hero Section** (Call-to-actions & layout matching).
*   **Ruth Effiom Effiong** ([makimprowess-jpg](https://github.com/makimprowess-jpg)) — Developed the global **Header**.
*   **Daniel Oloruntoba** ([dantoba](https://github.com/dantoba)) & **Damilola Kehinde Adeleke** ([A-kehinde](https://github.com/A-kehinde)) — Co-developed the **Video Section** (Custom standalone, muted, looping video layer).
*   **Nelson Ayoola Adeniran** ([Hunchog33](https://github.com/Hunchog33)) & **Malachy Okafor** ([malachyokafor7-cell](https://github.com/malachyokafor7-cell)) — Co-developed the **Planet Data Table Section**.
*   **Chiemela Ohabughiro** ([lilghost999](https://github.com/lilghost999)) & **Bamidele Elijah** ([skillaim](https://github.com/skillaim)) — Co-developed the **Contact Us Form Section** (Validation & endpoint submission handling).
*   **Onwuchekwa Ngozi Blessing Udo** ([Blessing-Udo-hub](https://github.com/Blessing-Udo-hub)) — Collaborated on the layout, structure, and link validation of the **Footer Section**.

---

## 🚀 Key Features & Functionality

### 1. Seamless Inter-Component Navigation
*   The **"Explore the Data"** CTA smoothly scrolls the user down to the dynamic planet imagery display.
*   The **"Contact Us"** CTA smoothly targets and focuses down to the input Form section.

### 2. Standalone Immersive Video
*   Implemented native HTML5 video layers completely independent of external iframes.
*   Configured parameters to ensure the media **autoplays**, remains **muted** on initialization, and **loops** infinitely.

### 3. Dynamic Fetch API Middleware
*   Integrates JavaScript Promises/Fetch API to pull dataset payloads directly from the target endpoint.
*   Dynamically maps data array collections into independent React elements showcasing:
    *   Planet Name
    *   Distance from the Sun
    *   Optimized High-Resolution Imagery (using semantic `<figure>` architectures).

### 4. Client-Side Form Processing
*   The user form captures input fields and enforces strict validation states before pushing payload submissions straight to the target server endpoint.
*   Triggers an interactive success UI message notification upon successful request returns.

### 5. Advanced Responsive Engine
*   Utilizes fluid grid layouts, flexible flexbox structures, and targeted media queries to handle complex visual transitions cleanly between Desktop, Tablet, and Mobile viewing viewports.

---

## 🔧 Git Workflow & Collaboration Rules
To replicate professional industry standards, Group 2 established rigid development guardrails:
1.  **Isolation:** No developer was permitted to push code directly to the `main` or `dev` branches. All individual components were built inside independent local feature branches.
2.  **Pull Requests:** Completed tasks were safely pushed upstream as Pull Requests (PRs) targeting the central `dev` branch.
3.  **Peer Review System:** A strict isolation rule was enforced where **the creator of a PR could not review or merge their own branch**. Code reviews were managed mutually across teammates to verify layout stability before merging.
4.  **Production Release:** Once the `dev` branch was verified stable, clean, and styled to match the required specifications, the absolute version was merged into `main` for deployment.

---


## 🎓 Footer Credits & Acknowledgments
Our application footer includes all required hyperlinks, connecting directly to our project anchors:
* Project Repository: Built by [Group 2](https://github.com/Sammyberry/Capstone-Project-Group2)
* Educational Curation: [TS Academy](https://tsacademyonline.com/)
* Project Attributions: [Amaka](https://amakandukwu.com/) & [Ifeoma](https://www.linkedin.com/in/ifeomaokocha)