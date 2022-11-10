import React from "react";
import "./imageText.css";
import IMG from "../../img/benefits-of-digital-marketing.jpg";

function ImageText() {
  return (
    <div>
      {" "}
      <div className="slider-container image-text" id="#know-how">
        <>
          <div className="slider-text align-text">
            <div className="header-container">
              <h2 className="header-one"> Expert Solution</h2>
            </div>

            <p className="slider-paragraph">
              Using our expertise in the field of health, we are working to make
              your business more efficient by creating solutions for Web design,
              Seo, Social media management and all your digital needs.
            </p>
          </div>
        </>

        <>
          <div className="img-container">
            <img className="slide-img" src={IMG} alt="" />
            <div className="circle-one"></div>
            <div className="circle-two"></div>
          </div>
        </>
      </div>
    </div>
  );
}

export default ImageText;
