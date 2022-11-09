import React from "react";
import "./text.css";
import svgOne from "../../svg/number-circle-one-duotone-svgrepo-com.svg";
import svgTwo from "../../svg/number-circle-two-duotone-svgrepo-com.svg";
import svgThree from "../../svg/number-circle-three-duotone-svgrepo-com.svg";

function text() {
  return (
    <div>
      {" "}
      <div className="text-p">
        <div className="header-container " id="flex-direction">
          <img src={svgOne} width="36" class="filter-green" />
          <h4 className="header-one"> Market Analysis</h4>
        </div>

        <p className="text-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum
        </p>
      </div>
      <div className="header-container " id="flex-direction">
        <img src={svgTwo} width="36" class="filter-green" />
        <h4 className="header-one"> Market Analysis</h4>
      </div>
      <p className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum
      </p>
      <div className="header-container " id="flex-direction">
        <img src={svgThree} width="36" class="filter-green" />
        <h4 className="header-one"> Market Analysis</h4>
      </div>
      <p className="text-p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum
      </p>
    </div>
  );
}

export default text;
