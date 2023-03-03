import React from 'react';
// import footer_image from './assets/footer_image.png';
import './footer.css';

const Footer = () => (
  <div className="crc__footer section__padding">
   
    <div className="crc__footer-links">
      <div className="crc__footer-links_logo">
        {/* <img src={footer_image} alt="footer" /> */}
        <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
      </div>
      <div className="crc__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="crc__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="crc__footer-links_div">
        <h4>Get in touch</h4>
        <p>Crechterwoord K12 182 DK Alknjkcb</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className="crc__footer-copyright">
      <p>@2023 ASP Couriers. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
