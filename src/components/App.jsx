import { useState, useEffect } from "react";
import PlantCard from "./PlantCard";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";

function App() {
  const [plants, setPlants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // ✅ Fetch plants on page load
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(res => res.json())
      .then(data => setPlants(data));
  }, []);

  // ✅ Filter plants by search input
  const filteredPlants = plants.filter(plant =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // ✅ Add new plant to state after POST
  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  return (
    <div>
      <h1>🌱 Plant Shop</h1>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <NewPlantForm onAddPlant={handleAddPlant} />
      <div className="plant-list">
        {filteredPlants.map(plant => (
          <PlantCard key={plant.id} plant={plant} />
        ))}
      </div>
    </div>
  );
}

export default App;
