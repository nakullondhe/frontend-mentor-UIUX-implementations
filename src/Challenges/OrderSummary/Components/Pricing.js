import React from "react";
import "./Pricing.css";
import { FaMusic } from "react-icons/fa";

function Pricing() {
  return (
    <div className="pricing">
      <section>
        <div className="avatar">
          <FaMusic color="gray" />
        </div>
        <div className="pricing_rate">
          <h3>Annual Plan</h3>
          <h4>$59.99/year</h4>
        </div>
      </section>

      <button className="pricing_change">Change</button>
    </div>
  );
}

export default Pricing;
