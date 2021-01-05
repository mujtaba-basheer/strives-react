import React, { useState } from "react";
import theme_img_1 from "../../assets/images/homepage/theme_1.png";
import theme_img_2 from "../../assets/images/homepage/theme_2.png";
import theme_img_3 from "../../assets/images/homepage/theme_3.png";
import theme_img_4 from "../../assets/images/homepage/theme_4.png";
import theme_img_5 from "../../assets/images/homepage/theme_5.png";
import theme_img_6 from "../../assets/images/homepage/theme_6.png";
import theme_img_7 from "../../assets/images/homepage/theme_7.png";
import theme_img_8 from "../../assets/images/homepage/theme_8.png";

const Themes = () => {
  const [current, setCurrent] = useState(0);
  const themes = [
    { url: theme_img_1, text: "Diwali" },
    { url: theme_img_2, text: "Employee Greeting" },
    { url: theme_img_3, text: "Women’s Day" },
    { url: theme_img_4, text: "New Year" },
    { url: theme_img_5, text: "Diwali" },
    { url: theme_img_6, text: "Employee Greeting" },
    { url: theme_img_7, text: "Women’s Day" },
    { url: theme_img_8, text: "New Year" },
  ];

  const slide = (type) => {
    switch (type) {
      case "next":
        setCurrent((current + 1) % 8);
        break;
      case "prev":
        if (current === 0) setCurrent(7);
        else setCurrent((current - 1) % 8);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <section className="theme">
        <div className="theme__title section-title">Theme &amp; Occasions</div>
        <div className="theme__section theme__mobile">
          <div className="theme__nav">
            <span>
              <i
                onClick={(e) => {
                  e.preventDefault();
                  slide("prev");
                }}
                className="theme__nav--icon fas fa-angle-left"
              ></i>
            </span>
            <span>
              <i
                onClick={(e) => {
                  e.preventDefault();
                  slide("next");
                }}
                className="theme__nav--icon fas fa-angle-right"
              ></i>
            </span>
          </div>
          <div className="theme__image">
            <img
              className="theme__image--img"
              alt="theme 1"
              src={themes[current]["url"]}
            />
          </div>
          <h3 className="theme__text">{themes[current]["text"]}</h3>
        </div>
        <div className="theme__section theme__desktop">
          {themes.map(({ url, text }, index) => (
            <div key={index}>
              <div className="theme__image">
                <img className="theme__image--img" alt="theme 1" src={url} />
              </div>
              <h3 className="theme__text">{text}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Themes;
