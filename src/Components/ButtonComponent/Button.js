import React from "react";
import "./Button.css";

const Button = ({ prevSlide, nextSlide }) => {
  return (
    <div className="button-container">
      <div
        className="prev-button btn"
        onClick={() => {
          prevSlide();
        }}
      >
        <i className="fas fa-arrow-circle-left"></i>
      </div>
      <div
        className="next-putton btn"
        onClick={() => {
          nextSlide();
        }}
      >
        <i className="fas fa-arrow-circle-right"></i>
      </div>
    </div>
  );
};

export default Button;
