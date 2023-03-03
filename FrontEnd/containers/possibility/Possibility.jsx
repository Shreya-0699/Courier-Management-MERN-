import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="cor__possibility section__padding" id="possibility">
    <div className="cor__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="cor__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">Trusted By Thousands of Online Sellers
An all-in-one eCommerce Solution for your shipping needs</h1>

<p>Our happy customer</p>
  <br/>

      <p>Rahul Kumar<br/>

<br/>

Shiprocket has made shipping easy for me. It is reliable and cost-effective shipping solution.</p>
      {/* <h4>Request Early Access to Get Started</h4> */}
    </div>
  </div>
);

export default Possibility;
