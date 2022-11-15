import React from 'react';
import './footer.css'

const Footer = () => {
  return (
    <div className='main__footer'>
          <div className='footer__main-item'>
     <img src='./images/logofoo.png' alt='logo' />
     <img src='./images/textfooter.png' alt='logo'/>
     <div className='socials'>
      <img src='./images/facebook.png' alt='socials'/>
      <img src='./images/real.png' alt='socials'/>
      <img src='./images/twitter.png' alt='socials'/>
     </div>
     
     <footer>&copy;   2022 Metabnb</footer>
     
     
     </div>
     <div className='footer__main-item'>
        <h2 className='footer__title'>Community</h2>
        <p><a href='#home'>NFT</a></p>
        <p><a href='#home'>Tokens</a></p>
        <p><a href='#home'>Landlords</a></p>
        <p><a href='#home'>Discord</a></p>
     </div>
     <div className='footer__main-item'>
        <h2 className='footer__title'>Places</h2>
        <p><a href='#home'>Castle</a></p>
        <p><a href='#home'>Farms</a></p>
        <p><a href='#home'>Beach</a></p>
        <p><a href='#home'>Learn more</a></p>
     </div>
     <div className='footer__main-item'>
        <h2 className='footer__title'>About us</h2>
        <p><a href='#home'>Road map</a></p>
        <p><a href='#home'>Creators</a></p>
        <p><a href='#home'>Career</a></p>
        <p><a href='#home'>Contact us</a></p>
     </div>
    </div>
  )
}

export default Footer