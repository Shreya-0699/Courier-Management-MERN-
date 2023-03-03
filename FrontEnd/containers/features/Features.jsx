import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: '1. Choose your shipment',
    text: 'Import all your orders with automated channel sync and select the shipment.',
  },
  {
    title: '2. Select courier ',
    text: 'Based on your requirement select a courier',
  },
  {
    title: '3. Pack and ship',
    text: 'Pack your orders and do the shipment',
  },
  {
    title: '4. Track',
    text: 'Track the order and keep your customers informed via SMS and email notifications',
  },
];

const Features = () => (
  <div className="crc__features section__padding" id="features">
    <div className="crc__features-heading">
      <h1 className="gradient__text">How it Works?
       The ASP Courier Service platform is hassle free and simple to use!</h1>
      <p>WE PROVIDE THE SERVICE</p>
    </div>
    <div className="crc__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
