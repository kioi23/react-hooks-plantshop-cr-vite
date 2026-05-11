import { useState, useEffect } from "react";
import PlantList from "./PlantList";
import NewPlantForm from "./NewPlantForm";
import Search from "./Search";
import Header from "./Header";

function App() {
  // State for all plants fetched from backend
  const [plants, setPlants] = useState([]);

  // State for search input
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch plants when component loads (runs once)
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  // Add new plant to state after POST request
  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  // Filter plants using includes()
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <Header />
      <Search
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      <NewPlantForm onAddPlant={handleAddPlant} />
      <PlantList plants={filteredPlants} />
    </div>
  );
}

export default App;