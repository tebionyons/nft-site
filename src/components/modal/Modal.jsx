import React from "react";
import "./modal.css";


const Modal = ({closeModal}) => {
  return (
    <div className="back__shadow">
       <div className="main__modal">
      <div className="main__modal-item">
        <h2 className="modal__title">Connect Wallet</h2>
        <button className="close__btn" onClick={()=>{
          closeModal(false)
        }}>x</button>
      </div>

      <p className="modal__description">Choose your preferred wallet</p>
      <div className="metamask">
        <img src="./images/mask.png" alt="mask" /> <h3>Metamask</h3>
        <img
          className="modal__forward"
          src="./images/forward.png"
          alt="forward"
        />
      </div>
      <div className="walletconnect">
        <img src="./images/mask2.png" alt="mask2" />
        <h3>WalletConnect</h3>
        <img
          className="modal__forward2"
          src="./images/forward.png"
          alt="forward"
        />
      </div>
    </div>
    </div>
   
  );
};

export default Modal;
