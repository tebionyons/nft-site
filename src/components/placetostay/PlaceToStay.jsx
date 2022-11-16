import { Footer, Navbar } from "components";
import PlaceCard from "components/placecard/PlaceCard";
import React from "react";
import "./placetostay.css";
import PlaceData from "PlaceData";
import Modal from "components/modal/Modal";

const PlaceToStay = () => {
  const place = PlaceData.map((cards) => {
    return (
      <PlaceCard
        title={cards.title}
        img={cards.img}
        distance={cards.distance}
        time={cards.time}
        availability={cards.availability}
      />
    );
  });
  return (
    <>
      <div>
        <Navbar className="nav__s" />

        <div className="second__nav">
          
          <p>
            <a href="#home">Restaurant</a>
          </p>
          <p>
            <a href="#home">Cottage</a>
          </p>
          <p>
            <a href="#home">castle</a>
          </p>
          <p>
            <a href="#home">fantast city</a>
          </p>
          
            {" "}
            <p>
              <a href="#home">beach</a>
            </p>
            <p>
              <a href="#home">Carbins</a>
            </p>
            <p>
              <a href="#home">Off-grid</a>
            </p>
            <p>
              <a href="#home">Farm</a>
            </p>
          

          <img
            className="locaation__img"
            src="./images/location.png"
            alt="location"
          />
        </div>
        <div className="card__list">
          {place}
          <div className="footer__">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceToStay;
