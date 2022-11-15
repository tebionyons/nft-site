import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className="nft__navbar-menu-links">
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
  )
}

export default Menu