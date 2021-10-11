import React from "react";
import "./OrderSummary.css";
import Pricing from "./Components/Pricing";
const heroURL =
  "https://raw.githubusercontent.com/frontendmentorio/order-summary-component/2de9d653930ee326bdf2fd453e021a0ea01f6aa3/images/illustration-hero.svg";

const OrderSummary = () => {
  return (
    <main className="order__summary__bg">

      <div className="order__summary">
        <div className="summary__hero">
          <img src={heroURL} alt="" />
        </div>
        <div className="summary__main">
          <h1 className="heading">Order Summary</h1>
          <p>
            You can listen to millions of songs,
            audiobooks and podcasts on any device
            anywhere you like!
          </p> 


            <Pricing />

          <button className="btn__payment">Proceed to Payment</button>
          <button className="btn__cancel">Cancel order</button>
        </div>
      </div>
    </main>
  );
};

export default OrderSummary;
