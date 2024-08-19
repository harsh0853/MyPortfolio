import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container">
        <h1>Contact</h1>
        <div className="con-ic">
          <div className="items">
            <a href="https://github.com/harsh0853">
              <FaGithub className="icons" />
            </a>
          </div>
          <div className="items">
            <a href="https://www.linkedin.com/in/harsh-raj-63b438262/">
              <FaLinkedinIn className="icons" />
            </a>
          </div>
          <div className="items">
            <a href="mailto:harshitraj6591@gmail.com">
              <SiGmail className="icons" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
