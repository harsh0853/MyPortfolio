import React, { useEffect } from "react";
import skills from "./data/skills.json";

const Skills = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".skills .items .item");

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;

      items.forEach((item, index) => {
        const itemTop = item.getBoundingClientRect().top;

        if (itemTop < windowHeight) {
          if (index % 2 === 0) {
            item.classList.add("from-left");
            item.classList.remove("hide");
          } else {
            item.classList.add("from-right");
            item.classList.remove("hide");
          }
        } else {
          item.classList.remove("from-left", "from-right");
          item.classList.add("hide");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="container skills my-5">
        <h1>Skills</h1>
        <div className="items my-2">
          {skills.map((data) => (
            <div className="item hide" key={data.id}>
              <img src={`/assets/${data.imageSrc}`} alt={data.title} />
              <h3>{data.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
