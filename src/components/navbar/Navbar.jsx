import React from 'react'
import './navbar.css'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'


const Navbar = () => {
  return (
    <div className='nft__navbar'>
<div className='nft__navbar-links'>
    <div className='nft__navbar-links-logo'>
        <img src='./images/bnb.png' alt='#logo'/>
        <img src='./images/logo.png' alt='#textlogo'/>
    </div>
    <div className='nft__navbar-links-container'>
        <p><a href='#home'>Home</a></p>
        <p><a href='#home'>Place to stay</a></p>
        <p><a href='#home'>NFTs</a></p>
        <p><a href='#home'>Community</a></p>
    </div>
    <div className='connect'>
        <button type='button'>connect wallet</button>
    </div>
</div>
        
    </div>
  )
}

export default Navbar