import React from "react";
import {Link} from 'react-router-dom'
import "./styles.css"

function Menu() {
  return(
    <div className="menu">
      <div className="menu-container">
      <Link to="//src/pages/Home.jsx">
        <button className="menu-button">Home</button>
      </Link>
      <Link to="//src/pages/About.jsx">
        <button className="menu-button">About</button>
      </Link>
      <Link to="//src/pages/About.jsx">
        <button className="menu-button">Product Detail</button>
      </Link>
      </div>
    </div>
  )
}

export default Menu
