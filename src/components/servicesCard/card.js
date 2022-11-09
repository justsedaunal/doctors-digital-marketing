import React from "react";
import "./card.css";
import { servicesData } from "../../data/servicesData";
import Svg from "../../svg/web-analysis-chart-svgrepo-com.svg";

const ServicesCard = () => {
  return (
    <div className="card-container" id="card">
      {servicesData.map((item) => {
        return (
          <div key={item.id} id={item.id} className="card">
            <img class="svg" src={Svg} alt={item.alt} />
            <h2 className="card-header"> {item.header} </h2>
            <p class="card-p"> {item.paragraph} </p>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesCard;
