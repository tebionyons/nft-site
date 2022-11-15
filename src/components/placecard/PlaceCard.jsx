import React from "react";
import "./placecard.css";



const PlaceCard = (props) => {
  return (
    <div className="card__frame__border" >
    <div className="card__frame-main">
      <img src={`./images/${props.img}`} alt="frame one" />
      <div className="frame__">
        <div className="title__distance">
          <p>{props.title}</p>
          <p>{props.distance}</p>
          <div className="star__ratings">
          <img src="./images/stt.png" alt="star rating" />
          <img src="./images/stt.png" alt="star rating" />
          <img src="./images/stt.png" alt="star rating" />
          <img src="./images/stt.png" alt="star rating" />
          <img src="./images/stt.png" alt="star rating" />
          </div>
        
        </div>
        <div className="time__night">
          <p className="pernight">{props.time}</p>
          <p>{props.availability}</p>
        </div>
      </div>
    </div>
     </div>
        
    
  );
};

export default PlaceCard;
