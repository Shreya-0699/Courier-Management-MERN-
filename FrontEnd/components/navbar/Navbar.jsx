import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
// import logo from '../../logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="crc__navbar">
      <div className="crc__navbar-links">
        <div className="crc__navbar-links_logo">
          {/* <img src={logo} /> */}
        </div>
        <div className="crc__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#services">Services</a></p>
          <p><a href="#possibility"></a></p>
          <p><a href="#work">How it works?</a></p>
          <p><a href="#pricing">Pricing</a></p>
          <p><a href="#tracking">Tracking</a></p>
          <p><a href="# feature">Features</a></p>
        </div>
      </div>
      <div className="crc__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="crc__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="crc__navbar-menu_container scale-up-center">
          <div className="crc__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#courirmanage">services</a></p>
            <p><a href="#possibility">Feature</a></p>
            <p><a href="#features">Tracking</a></p>
            <p><a href="#blog">Pricing</a></p>
          </div>
          <div className="crc__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
