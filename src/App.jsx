import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import CardResident from "./components/CardResident";
import LocationInfo from "./components/LocationInfo";

function App() {
  const [location, setLocation] = useState();
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    let numberLocation;
    if (searchInput === "") {
      numberLocation = Math.floor(Math.random() * (126 - 1) + 1);
    } else {
      numberLocation = searchInput;
    }
    const URL = `https://rickandmortyapi.com/api/location/${numberLocation}`;
    axios
      .get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err));
  }, [searchInput]);

  //busqueda por input
  const handleSubmit = (e) => {
    e.preventDefault();

    setSearchInput(e.target.search.value);
  };

  return (
    <div className="App">
        <h1>Rick and Morty</h1>
        <div>
        </div>
        <form onSubmit={handleSubmit} action="">
          <input className="header-input" id="search" type="text" placeholder="Type a location" />
          <button><strong>Serch</strong></button>
        </form>
      <LocationInfo location={location} />
      <h2 className="residents">Residents</h2>
      <div className="main">
        {location?.residents.map((url) => (
          <CardResident key={url} url={url} />
        ))}
      </div>
    </div>
  );
}

export default App;
