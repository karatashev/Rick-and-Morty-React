import React, {useState, useEffect, useRef} from "react";
import Card from "../Card/Card";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import Footer from "../Footer/Footer";

const CharactersPage = () => {

  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const [info, setInfo] = useState({});
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    fetch(`https://rickandmortyapi.com/api/character/?name=${search}`)
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      });
  }, [search]);

  const handleChange = (e) => {
    setQuery(e.target.value);
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(query);
    inputRef.current.value = "";
  };


  return (
    <div>
      <div className="input-wrapper">
        <form onSubmit={handleSubmit}>
          <input
            className="type-input"
            onChange={handleChange}
            ref={inputRef}
            type="text"
            placeholder="Search..."
          />
          <input className="search-btn" type="submit" value="Search" />
        </form>
      </div>

      {/* Cards container */}
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

      {info === undefined ? "" : <Footer  count={info?.count} pages={info?.pages} />}
    </div>
  );
};

export default CharactersPage;
