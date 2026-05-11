import { useState } from "react";

function PlantCard({ plant }) {
  // Local state for sold-out toggle (frontend only)
  const [isSoldOut, setIsSoldOut] = useState(false);

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>

      <button onClick={() => setIsSoldOut(!isSoldOut)}>
        {isSoldOut ? "Out of Stock" : "Available"}
      </button>
    </li>
  );
}

export default PlantCard;