import "./Main.css";
import React, { useEffect, useRef, useState } from "react";
import Button from "../ButtonComponent/Button";
import ImageContainer from "../ImageComponent/ImageContainer";
import ContentComponent from "../ContentComponent/ContentComponent";

const Main = () => {
  const [users, setUsers] = useState([0]);
  const [displayUser, setDisplayUser] = useState([0]);
  let sIndex = useRef(1);
  //Fetching the data from provide API
  const getUsers = async () => {
    try {
      const response = await fetch("https://testimonialapi.toolcarton.com/api");
      setUsers(await response.json());
    } catch (error) {
      console.log("my error is : " + error);
    }
  };
  const getInfo = (id) => {
    //Adding animation to the info container
    const content = document.querySelector(".content");
    content.style.transform = "translateX(120%)";
    content.style.transition = ".5s";
    setTimeout(() => {
      content.style.transform = "translateX(0)";
    }, 500);
    // Fetching data to display in information container
    let data = users.filter((curr) => {
      return curr.id === id;
    });
    setDisplayUser(data);
  };

  //Functionality give to the button clicks -> next and previous buttons
  const nextSlide = () => {
    if (sIndex.current === users.length) {
      sIndex.current = 1;
    } else {
      sIndex.current = sIndex.current + 1;
    }
    getInfo(sIndex.current);
  };
  const prevSlide = () => {
    if (sIndex.current !== 1) {
      sIndex.current = sIndex.current - 1;
    } else if (sIndex.current === 1) {
      sIndex.current = users.length;
    }
    getInfo(sIndex.current);
  };
  //Setting up default information container content to object in which id = 1
  useEffect(() => {
    setDisplayUser(
      users.filter((curr) => {
        return curr.id === 1;
      })
    );
  }, [users]);

  //fetxhing the data on first render only
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="main-container">
      <div className="bubble-container">
        <div className="empty-container"></div>
        {displayUser.map((currElem, index) => {
          return (
            <div className="info-container" key={index}>
              <p><strong>TESTIMONIALS</strong></p>
              <ContentComponent currElem={currElem} />
              <div className="slide-container">
                <ImageContainer
                  users={users}
                  sIndex_current={sIndex}
                  getInfo={getInfo}
                />
                <Button nextSlide={nextSlide} prevSlide={prevSlide} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
