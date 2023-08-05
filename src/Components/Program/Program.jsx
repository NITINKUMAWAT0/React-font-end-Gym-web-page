import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";

export const Program = () => {
  return (
    <div className="programs" id="programs">
      <div className="program-header">
        <span className="stroke-text">Explore Our</span>
        <span>Programs</span>
        <span className="stroke-text">To Shape You</span>
      </div>

      <div className="programs-categories">
        {programsData.map((Program) => (
          <div className="category">
            {Program.image}
            <span>{Program.heading}</span>
            <span>{Program.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <img src={RightArrow} alt=""/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Program;
