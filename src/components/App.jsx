import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import { useState, useEffect } from "react";


function App() {
  const [plants, setPlants] = useState([])
  
  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}
function handleAddPlant(newPlant) {
  setPlants([...plants, newPlant])
}
<NewPlantForm onAddPlant={handleAddPlant} />

export default App;
