import React from "react";
import { Link } from "react-router-dom";
import "./VideoStyle.css";
import videoBG from "../assets/Earth.mp4";

const Video = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={videoBG} type="video/mp4" />
      </video>
      <div className="content">
        <h1>Galaxy Adios</h1>
        <p>World's most lemao space travel</p>

        <div>
          <Link to="/training" className="btn">
            Training
          </Link>
          <Link to="/content" className="btn">
            Launch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Video;
