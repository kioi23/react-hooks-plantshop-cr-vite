import React from "react";
import PlantCard from "./PlantCard";

function PlantList() {
  <PlantList plants={plants} /> 
  return (
    <ul className="cards">{<PlantList plants={plants} />}</ul>
  );
}

export default PlantList;
