import React from "react";
import "./Hero.css";
const Hero = (props) => {
  return (
    <>
      <div className="w-100 vh-100 d-flex justify-content-center align-items-center" style={{ "background-image":props.url, "background-size": "cover"}}>
        <div className="content">
          <h1>{props.title}</h1>
          <div>
            <p>{props.text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
