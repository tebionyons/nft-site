import React from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "components/modal/Modal";
import { click } from "@testing-library/user-event/dist/click";

const Navbar = ({ clicked, isClicked }) => {
  const [openModal, setOpenModal] = useState(false);
  const [menu, setMenu] = useState(false)

  const handleClicked = () => {
    setMenu(!menu);
    
  };
  return (
    <div className="nft__navbar">
      <div className="nft__navbar-links">
        <div className="nft__navbar-links-logo">
          <img src="./images/bnb.png" alt="#logo" />
          <img src="./images/logo.png" alt="#textlogo" />
        </div>
        <div className={`${!menu ? 'display nft__navbar-links-container': "nft__navbar-links-container"}`}>
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/placetostay">Place to stay</Link>
          </p>
          <p>
            <a href="#home">NFTs</a>
          </p>
          <p>
            <a href="#home">Community</a>
          </p>
        </div>

        <div className="connect">
          <button
            type="button"
            className="openModalBtn"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            connect wallet
          </button>
          {openModal && <Modal closeModal={setOpenModal} />}
        </div>
        {!menu ? (
          <RiMenu3Line onClick={()=>handleClicked()} className="icon" />
        ): (
          <RiCloseLine onClick={()=>handleClicked()} className="icon"/>
        )}
      </div>
    </div>
  );
};

export default Navbar;
