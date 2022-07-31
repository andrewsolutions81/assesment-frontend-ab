import React from "react";
import {Link} from 'react-router-dom'
import "./Menustyles.css";


function Menu() {
  return(
    <div className="menu">
      <div className="menu-container">
      <Link to='/home'>
        <button className="menu-button">Home</button>
      </Link>
      <Link to="/about">
        <button className="menu-button">About</button>
      </Link>
      </div>
    </div>
  )
}

export default Menu
