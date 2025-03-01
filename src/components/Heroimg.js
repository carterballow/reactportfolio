import "./HeroimgStyles.css";
import React from 'react';
import backgroundImg from "../assets/background.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="background-img" src={backgroundImg} alt="background" />
      </div>
      <div className="content">
        <p>HI, I'M A FREELANCER</p>
        <h1>hello.</h1>
        <div>
          <Link to="/projects" className="btn">Projects</Link>
          <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  );
}

export default HeroImg;
