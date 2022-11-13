import React from "react";
import './header.css'

const Header = () => {
  return (
    <div className="header__content">
      <div className="header__content-txt">
        <h1 className="header__title">
          Rent a Place away from Home in the Metaverse
        </h1>
        <p className="header__description">
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </p>
        <div className="header__input">
        <input type="text" placeholder="search for location"/>
        <button type="button">search</button>
      </div>
      </div>
     
      <div className="header__img">
       <div className="img3"><img src="./images/image 3.png" alt="header img" /></div>
        <div className="img4"><img src="./images/image 4.png" alt="header img" /></div>
        <div className="img5"><img src="./images/image 5.png" alt="header img" /></div>
        <div className="img6"><img src="./images/image 6.png" alt="header img" /></div>
      </div>
     
    </div>
    
  );
};

export default Header;
