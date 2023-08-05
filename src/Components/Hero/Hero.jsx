import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/*starting of the best ad*/}
        <div className="the-best-ad">
          <div></div>
          <span>The best fitness club in town</span>
        </div>
        {/*ending of the best ad*/}

        {/*starting of the text heading*/}
        <div className="hero-text">
          <div>
            <span className="stroke-text"> Shape </span>
            <span> Your </span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
        </div>
        <div>
          <span className="xyz">
            In here we will help you to shape and build your ideal body and live
            up your life to fullest
          </span>
        </div>

        {/*end of the text heading*/}

        {/*Figures*/}
        <div className="figures">
          <div>
            <span>+15</span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span>+100</span>
            <span>Members</span>
          </div>
          <div>
            <span>+10</span>
            <span>Fitness Programs</span>
          </div>
        </div>
        {/* ending of Figures*/}

        {/* Buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
        {/* ending of Buttons */}
      </div>

      <div className="right-h">
        <button className="btn">Join Now</button>
        <div className="heart-rate">
          <img src={heart} alt="error" />
          <span>Heart Rate</span>
          <span>115 BPM</span>
        </div>
        {/*center images*/}
        <img src={hero_image} alt="error" className="hero_image" />
        <img src={hero_image_back} alt="error" className="hero_image_back" />

        <div className="calories">
          <img src={calories} alt="error " />
          <div>
            <span>Calories Burned</span>
            <span>240 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
