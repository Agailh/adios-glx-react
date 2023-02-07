import React from "react";
import "./TrainingStyle.css";
import { Link } from "react-router-dom";
import moon from "../assets/images (1).jpg";
import pod from "../assets/images.jpg";

const Training = () => {
  return (
    <div className="training">
      <div className="left">
        <h1>Training</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="image-stack top">
            <img src={moon} className="img" alt="" />
          </div>
          <div className="image-stack top">
            <img src={pod} className="img" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;
