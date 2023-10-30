import React from "react";
import { useState } from "react";
import "./bannerStyles.css";

const Banner = () => {
    const [banner, setBanner] = useState("false");

    const bannerFunction = () => {
      if (banner === "false") {
        setBanner("true");
      } else {
        setBanner("false");
      }
      alert("Banner");
    };

  return (
    <div>
      <div className="bannerSlides">
        <div className="bannerText">
          <h3>Envíos a todo el país</h3>
          <h5>Conocé nuestras opciones de envío</h5>
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdiW7_NGfnVtti6cxjHhmKN54IE5Z4e6EbDZuYXcuqjJl_hcGPsyEgbhkDB1fXJqE2zA&usqp=CAU"
          alt="BannerSlide"
        />
      </div>
    </div>
  );
};

export default Banner;
