import React from "react";
import "./Reasons.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

const Reasons = () => {
  return (
    <div className="Reasons" id="Reasons">
      <div className="left-hand">
        <img src={image1} alt="error" />
        <img src={image2} alt="error" />
        <img src={image3} alt="error" />
        <img src={image4} alt="error" />
      </div>
      <div className="right-hand">
        <span>Some Reasons</span>
        <div>
          <span className="stroke-text">Why </span>
          <span>Choose us?</span>
        </div>
        <div className="details-r ">
          <div>
            <img src={tick} alt=""></img>
            <span>OVER 15+ EXPERT COACHES</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 FREE PROGRAM FOR NEW MEMBERS</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>RELIABLE PARTNERS </span>
          </div>
        </div>

        <span
          style={{
            color: "var(--grey)",
            fontWeight: "normal",
          }}
        >
          Our Partner
        </span>

        <div className="partners">
          <img src={nb} alt="" />
          <img src={adidas} alt="" />
          <img src={nike} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
