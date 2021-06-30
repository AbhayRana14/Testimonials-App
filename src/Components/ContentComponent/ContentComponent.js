import React from "react";
import "./ContentComponent.css";

const ContentComponent = ({ currElem }) => {
  return (
    <div className="content">
      <div className="name">
        <h2>{currElem.name}</h2>
      </div>

      <div className="message1">
        <h3>{currElem.message}</h3>
      </div>

      <div className="message2">
        <p>{currElem.lorem}</p>
      </div>

      <div className="info">
        <p>
          <strong>{currElem.location}</strong> : {currElem.designation}{" "}
        </p>
        <p>
          <strong>Rating</strong> : {currElem.rating}{" "}
        </p>
        <p>READ FULL STORY</p>
      </div>
    </div>
  );
};

export default ContentComponent;
