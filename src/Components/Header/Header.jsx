import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import bar from "../../assets/bars.png";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setmenuOpened] = useState(false);
  return (
    <div className="header">
      <img src={Logo} alt="error" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.6rem",
            borderRadius: "5px",
          }}
          onClick={() => setmenuOpened(true)}
        >
          <img src={bar} alt="" style={{ width: "1.3rem", height: "1.2rem" }} />
        </div>
      ) : (
        <ul className="header-menu">
          <li onClick={() => setmenuOpened(false)}>Home</li>
          <li onClick={() => setmenuOpened(false)}>Programs</li>
          <li onClick={() => setmenuOpened(false)}>Why US</li>
          <li onClick={() => setmenuOpened(false)}>Plans</li>
          <li onClick={() => setmenuOpened(false)}>Testimonials</li>
        </ul>
      )}
    </div>
  );
};

export default Header;
