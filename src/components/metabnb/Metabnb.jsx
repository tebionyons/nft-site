import "./metabnb.css";
import React from "react";

const Metabnb = () => {
  return (
    <div className="meta__content">
      <div>
        <h2 className="meta__title">Metabnb NFTs</h2>
        <p className="meta__description">
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </p>
        <div className="btn">
        <button type="button">Learn more</button>
        </div>
        
      </div>

      <div className="turned__images">
        <img className="turn1" src="./images/hero2-image.png" alt="turn one " />
     
      </div>
    </div>
  );
};

export default Metabnb;
