import { useEffect, useState } from "react"
import Header from "./components/Header"
import Search from "./components/Search"
import PlantList from "./components/PlantList"
import NewPlantForm from "./components/NewPlantForm"

function App() {
  // Stores all plants from backend
  const [plants, setPlants] = useState([])

  // Stores user search input
  const [search, setSearch] = useState("")

  // Fetch plants when page loads
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data))
  }, [])

  // Adds new plant into state
  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant])
  }

  // Filters plants using search input
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main>
      <Header />

      <NewPlantForm onAddPlant={handleAddPlant} />

      <Search search={search} setSearch={setSearch} />

      <PlantList plants={filteredPlants} />
    </main>
  )
}

export default App