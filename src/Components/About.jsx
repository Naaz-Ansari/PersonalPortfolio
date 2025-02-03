/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/bg-pastel.avif";

const imageAltText = "purple and blue abstract background";
import reactIcon from "../images/react-icon.png";
import reduxIcon from "../images/redux-logo.jpg";
import tailwindIcon from "../images/Tailwind_CSS_Logo.png";
import bootstapIcon from "../images/bootstrap-logo.png";
import expressIcon from "../images/expressjs.png";
import nodeIcon from "../images/node-js-logo.png";
import htmlIcon from "../images/html-logo.png";
import cssIcon from "../images/css-logo.png";
import mongoIcon from "../images/Mongodb-logo.png";
import jsIcon from "../images/javascript-icon.jpg";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a passionate Full-Stack Web Developer with a strong ability to solve complex problems and bring creative ideas to life through code. I grasp new technologies quickly. Whether it's crafting seamless user experiences on the front end or building reliable backend systems, I I enjoy building efficient and scalable solutions.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */

const skillsList = [
  {
    name: "React",
    iconImg: reactIcon,
  },
  {
    name: "Redux",
    iconImg: reduxIcon,
  },
  {
    name: "Tailwind CSS",
    iconImg: tailwindIcon,
  },
  {
    name: "Bootstrap",
    iconImg: bootstapIcon,
  },
  {
    name: "NodeJS",
    iconImg: nodeIcon,
  },
  {
    name: "ExpressJS",
    iconImg: expressIcon,
  },
  {
    name: "MongoDB",
    iconImg: mongoIcon,
  },
  {
    name: "JavaScript",
    iconImg: jsIcon,
  },
  {
    name: "HTML",
    iconImg: htmlIcon,
  },
  {
    name: "CSS",
    iconImg: cssIcon,
  },
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "With a blend of creativity, problem-solving skills, and technical expertise, I am dedicated to developing applications that are both functional and visually appealing. I'm always eager to explore new possibilities and push the boundaries of what’s possible with web development.";

const About = () => {
  return (
    <section className="" id="about">
      <img className="background" src={image} style={{ opacity: "0.4" }} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.689)",
          width: "70%",
          padding: "4rem",
          margin: "0rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <p className="skill-heading">Skills</p>
        <div className="skillset-box">
          {skillsList.map((skill, index) => {
            return (
              <div key={index} className="skill-name-box">
                <img src={skill.iconImg} alt="" height="30px" width="30px" />
                <span>{skill.name}</span>
              </div>
            );
          })}
          {/* <div className="skill-name-box">
            <img src={reactIcon} alt="" height="30px" width="30px"/>
            <span>React</span>
          </div>
          <div className="skill-name-box">
            <img src={reactIcon} alt="" height="30px" width="30px"/>
            <span>React</span>
          </div>
          <div className="skill-name-box">
            <img src={reactIcon} alt="" height="30px" width="30px"/>
            <span>React</span>
          </div>
          <div className="skill-name-box">
            <img src={reactIcon} alt="" height="30px" width="30px"/>
            <span>React</span>
          </div>
          <div className="skill-name-box">
            <img src={reactIcon} alt="" height="30px" width="30px"/>
            <span>React</span>
          </div>
          <div className="skill-name-box">
            <img src={reactIcon} alt="" height="30px" width="30px"/>
            <span>React</span>
          </div>
          <div className="skill-name-box">
            <img src={reactIcon} alt="" height="30px" width="30px"/>
            <span>React</span>
          </div>
          <div className="skill-name-box">
            <img src={reactIcon} alt="" height="30px" width="30px"/>
            <span>React</span>
          </div>
          <div className="skill-name-box">
            <img src={reactIcon} alt="" height="30px" width="30px"/>
            <span>React</span>
          </div> */}
        </div>
        {/* <ul className="skillset-box">
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>        
          ))}
        </ul> */}
        <hr />
        <p style={{ padding: "1rem 1rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
