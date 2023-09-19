import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import { Link as ScrollLink } from "react-scroll";
import btnImg from "../../assets/hireme.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello</span>
        <span className="introText">
          I'm <span className="introName">SWAPNIL  KASARE</span>
          <br></br> Full Stack Developer
        </span>
        <p className="introPara">
          I am a skilled web designer with experience in creating <br></br> visually
          appealing and user-friendly websites.
        </p>
        <ScrollLink
          to="hire-me-section" // Replace with the ID of your "Hire Me" section
          smooth={true}
          duration={500}
        >
          <button className="btn">
            <img src={btnImg} alt="Hire" className='btnImg'/> Hire Me
          </button>
        </ScrollLink>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
