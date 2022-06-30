import "./App.css";
import Card from "./Components/Card/Card";
import Header from "./Components/Header/Header";
import { useState, useEffect, useRef } from "react";
import ErrorComponent from "./Components/ErrorComponent/ErrorComponent";
import Footer from "./Components/Footer/Footer";

function App() {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [info, setInfo] = useState({});
  const inputRef = useRef(null);

  console.log(inputRef);

  console.log(characters);

  useEffect(() => {
    inputRef.current.focus();
    fetch(`https://rickandmortyapi.com/api/character/?name=${search}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      });
  }, [search]);

  console.log(query);

  const handleChange = (e) => {
    setQuery(e.target.value);
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(query);
    inputRef.current.value = "";
  };


  return (
    <div className="App">
      <Header />
      <div className="input-wrapper">
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            ref={inputRef}
            type="text"
            placeholder="Search..."
          />
          <input className="search-btn" type="submit" value="Search" />
        </form>

        {/* <button onClick={handleClick}>Search</button> */}
      </div>
      <div className="cards-container">
        {characters === undefined && <ErrorComponent />}
        {/* optional chanining operator */}
        {characters?.map((character) => {
          return (
            <Card
              image={character.image}
              name={character.name}
              status={character.status}
              location={character.location.name}
              species={character.species}
              key={character.id}
            />
          );
        })}
      </div>
      <Footer count={info.count} pages={info.pages} />
    </div>
  );
}

export default App;
