import { useState } from "react";

function PlantCard({ plant }) {
  const [soldOut, setSoldOut] = useState(false);

  return (
    <div className="plant-card">
      <h3>{plant.name}</h3>
      <img src={plant.image} alt={plant.name} />
      <p>${plant.price}</p>
      <button onClick={() => setSoldOut(!soldOut)}>
        {soldOut ? "Sold Out" : "Available"}
      </button>
    </div>
  );
}

export default PlantCard;
