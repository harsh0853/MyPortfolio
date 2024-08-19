import React from "react";

const Navbar = () => {
  return (
    <div className="container nav_bar">
      <div className="left nav_items">
        <b className="bol">H</b>
        arsh
      </div>
      <div className="right">
        <a className="nav_items" href="#home">
          Home
        </a>
        <a className="nav_items" href="#skills">
          Skills
        </a>
        <a className="nav_items" href="#projects">
          Projects
        </a>
        <a className="nav_items" href="#contact">
          Contact
        </a>
      </div>
    </div>
  );
};

export default Navbar;
