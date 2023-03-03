import React from 'react';
import Feature from '../../components/feature/Feature';
import './couriermanage.css';

const Couriermanage = () => (
  <div className="cor__manage section__margin" id="ccr">
    <div className="cor__manage-feature">
      <Feature title="Why choose us" text="Reduce Shipping Cost & Increase Reach and Lower return costs as compared to forward charges" />
    </div>
    <div className="cor__manage-heading">
      <h1 className="gradient__text">Who is it for?</h1>
      
    </div>
    <div className="cor__manage-container">
      <Feature title=" For Social Sellers" text="Mobile app, no monthly fee, discounted shipping rates, COD facility, user-friendly platform, pickup from origin and tracking for customers" />
      <Feature title=" For Own Shop/ Marketplace seller" text="notifications for buyers via SMS & Emails, CORE, multiple pickup locations and widest reach." />
      <Feature title=" For High volume shipper" text="NDR/Exception order management tool, Reduced RTO rates, advanced analytics and reporting, CORE – ML based self learning solution and unified support." />
    </div>
  </div>
);

export default Couriermanage;
