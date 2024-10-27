import React, { useEffect, useRef } from "react";
import pdf from "../pdf/Resume-Harsh.pdf";
import hero from "./data/hero.json";
import Typed from "typed.js";
const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const opt = {
      strings: [
        "Hi, I'm Harsh Raj.",
        "I am passionate about competitive programming and thrive on applying mathematical concepts and problem-solving techniques to tackle real-world challenges.",
        "With a solid foundation in full-stack development, I am adept at creating comprehensive solutions from frontend to backend.",
        "My diverse skill set allows me to approach problems from various angles, making me a versatile and effective developer.",
      ],
      typeSpeed: 25,
      backSpeed: 20,
      loop: true,
    };

    const t = new Typed(typedRef.current, opt);

    return () => {
      t.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home">
        <div className="left">
          <h2 ref={typedRef}></h2>
          <a href={pdf} download="" className="btn btn-outline-success my-3">
            Download Resume
          </a>
        </div>
        <div className="right">
          <div className="img">
            <img src={`assets/${hero.imgSrc}`} alt=""></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
