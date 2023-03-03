import React from 'react';

import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="crc__header section__padding" id="home">
    <div className="crc__header-content">
      <h1 className="gradient__text">eCommerce Shipping made easy&apos;</h1>
      <p>India’s #1 eCommerce shipping solution, trusted by over 100k+ brands and entrepreneurs
for lowest shipping rates, widest reach and best customer service.</p>

      <div className="crc__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

    </div>

    <div className="crc__header-image">
      <img src={ai}  />
    </div>
  </div>
);

export default Header;
