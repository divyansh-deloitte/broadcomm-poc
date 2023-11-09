import React from "react";
import "./styles.css";

const Header = ({ handleCloseSidebar }) => {
  return (
    <div className="header">
      <div className="header-text">James Smith - Activity</div>
      <img
        src={require("../../images/drawer-close.png")}
        onClick={() => {
          handleCloseSidebar();
        }}
        alt=""
        srcset=""
      />
    </div>
  );
};

export default Header;
