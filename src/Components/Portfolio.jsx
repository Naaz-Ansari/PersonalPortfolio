/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
// import image from "../images/design-desk.jpeg";

// const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Notes-Taking App: Speech to Text Converter.",
    description:
      "A secure and personalised notes-taking app with speech to text converter. Key features: Create notes with reccording voice, copy, add to favourites, and delete notes.",
    url: "https://dcq3cg-5173.csb.app/",
  },
  {
    title: "Secure Notes: OTP-Based Authentication",
    description:
      "A secure and user-friendly notes app with OTP-based registration, similar to Gmail authentication. Key features: Create, copy, and delete notes, ensure secure access with OTP verification, and sync notes across devices.",
    url: "https://notes-app-2-v10w.onrender.com/",
  },
  // {
  //   title: "Bus Management System",
  //   description:
  //     "This project includes four portals: Admin, Teachers, Students, and Drivers. Key features: Live location tracking, Face-recognition attendance, Bus route management, and Student/Driver database maintenance.",
  //   url: "https://github.com/Naaz-Ansari/Bus-management",
  // },
  {
    title: "E-Commerce Cart (React & Redux)",
    description:
      "This is a frontend project built with React and Redux, featuring a dynamic shopping cart. Users can add and remove products, adjust quantities, apply coupons for discounts, and view automatic price calculations.",
    url: "https://github.com/Naaz-Ansari/ECart",
  },
  {
    title: "Smart Weather App with Google Authentication",
    description:
      "This weather application provides real-time weather updates based on your location. Upon granting location access, it displays temperature, humidity, and other weather details. Users can securely sign in using Google authentication for a personalized experience.",
    url: "https://github.com/Naaz-Ansari/Weather-App",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Projects</h2>
      <div className="portfolio-content">
        {/* <div style={{ maxWidth: "70%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div> */}
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
