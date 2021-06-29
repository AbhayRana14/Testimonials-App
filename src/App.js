import './App.css';
import React, { useEffect, useRef, useState } from 'react'

const App = () => {
  const [users,setUsers] = useState([0]);
  const [displayUser,setDisplayUser] = useState([0]);
  let sIndex = useRef(1);
  const getUsers = async () => {
    try {
        const response = await fetch('https://testimonialapi.toolcarton.com/api');
        setUsers(await response.json());
    } catch (error) {
        console.log("my error is : " + error);
    }
  }
  const getInfo = (id) =>{
      let data = users.filter((curr)=>{
        return curr.id === id;
      });
      setDisplayUser(data);
  }; 

  const nextSlide = () => {
    if( sIndex.current === users.length ){
      sIndex.current = 1;
    }else
    {
      sIndex.current = sIndex.current + 1;
    }
    getInfo(sIndex.current);
  }
  const prevSlide = () => {
    if(sIndex.current !== 1)
    {
      sIndex.current = sIndex.current - 1;
    }
    else if( sIndex.current === 1 ){
      sIndex.current = users.length;
    };
    getInfo(sIndex.current);
  }

  useEffect(()=>{
      setDisplayUser(users.filter((curr)=>{
        return curr.id === 1;
      }));
    },[users]);

    useEffect(()=>{
      getUsers();
    },[]);

  return (
    <div className="main-container">
      <div className="bubble-container">
        <div className="empty-container"></div>
        {
        displayUser.map((currElem,index)=>{
          return(
          <div className="info-container" key={index}>
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
                <p><strong>{currElem.location}</strong> : {currElem.designation} </p>
                <p><strong>Rating</strong> : {currElem.rating} </p>
                <p>READ FULL STORY</p>
              </div>
            </div>
            <div className="slide-container">
              <div className="image-container">
              {
                users.map((currElem,index)=>{
                 return(
                      <img className={currElem.id === sIndex.current ? 'img-border' : null} key={index} src={currElem.avatar} alt={`Avatar${currElem.id}`} 
                      onClick={()=>{
                      sIndex.current = currElem.id  
                      getInfo(currElem.id)
                      }} />
                 );
              })
              }
              </div>
              <div className="button-container">
                <div className="prev-button btn" 
                onClick={()=>{
                prevSlide()
                }}
                ><i className='fas fa-arrow-circle-left'></i></div>
                <div className="next-putton btn" 
                onClick={()=>{
                nextSlide()
                }}
                ><i className='fas fa-arrow-circle-right'></i></div>
              </div>
        </div>
        </div>
          );
        })
        }
        </div>
    </div>
  )
}

export default App
