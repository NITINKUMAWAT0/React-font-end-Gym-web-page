import React from "react";
import "./Plans.css";
import whiteTick from "../../assets/whiteTick.png";
import { plansData } from "../../data/plansData";

const Plans = () => {
  return (
    <div className="plans-containers">
      <div className="blur plans-blur1"></div>
      <div className="blur plans-blur2"></div>
      <div className="program-header" style={{ gap: "3rem" }}>
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITH US</span>
      </div>
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>${plan.price}</span>

            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <span>See More Benefits</span>
            </div>
            <button className="btn">Join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
