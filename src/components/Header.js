import React from 'react';
import { Link } from "react-router-dom";
import logo from '../images/logo_mesogheo.jpg';
import './Header.css';

function Header() {

  return (
    <header className="App-Header">
      <nav className="flex-nav">
        <div>
          <a href="/">
            <img src={logo} alt="logo Mesogheo"></img>
          </a>
        </div>
        <div>
          <ul className="nav-items">
            <li className="nav-link"><Link to="rooms"> ROOMS </Link></li>
            <li className="nav-link"><Link to="about"> ABOUT </Link></li>
            <li className="nav-link"><Link to="book"> BOOK </Link></li>
          </ul>
        </div>
      
      </nav>
    </header>
  );
}
export default Header;