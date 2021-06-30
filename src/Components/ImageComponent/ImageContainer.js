import React from "react";
import "./ImageContainer.css";
import "../MainComponent/Main.css";

const ImageContainer = ({ users, sIndex_current, getInfo }) => {
  return (
    <div className="image-container">
      {users.map((currElem, index) => {
        return (
          <img
            className={
              currElem.id === sIndex_current.current ? "img-border" : null
            }
            key={index}
            src={currElem.avatar}
            alt={`Avatar${currElem.id}`}
            onClick={() => {
              sIndex_current.current = currElem.id;
              getInfo(currElem.id);
            }}
          />
        );
      })}
    </div>
  );
};

export default ImageContainer;
