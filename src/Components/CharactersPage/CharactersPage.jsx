import React, { useEffect, useState, useRef } from "react"
import useFetch from "../../Hooks/useFetch"
import Card from "../Card/Card"
import ErrorComponent from "../ErrorComponent/ErrorComponent"
import Footer from "../Footer/Footer"
import Search from "../Search/Search"
import "./CharactersPage.scss"


const CharactersPage = () => {
  const [query, setQuery] = useState("")
  const [search, setSearch] = useState("")
  const inputRef = useRef(null)
  const characters = useFetch(
    "https://rickandmortyapi.com/api/character/",
    `?name=${search}`
  )

  useEffect(() => {
    inputRef.current.focus()
  }, [search])
  const handleChange = (e) => {
    setQuery(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setSearch(query)
    setQuery("")
  }
  return (
    <>
      <Search
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        inputRef={inputRef}
        query={query}
      />
      <div className="cards-container">
        {characters?.results === undefined && <ErrorComponent />}
        {characters?.results?.map((character) => {
          return (
            <Card
              image={character.image}
              name={character.name}
              status={character.status}
              location={character.location.name}
              species={character.species}
              key={character.id}
              charId={character.id}
            />
          )
        })}
      </div>
      {characters?.info === undefined ? (
        ""
      ) : (
        <Footer
          totalCharacters={characters?.info?.count}
          totalPages={characters?.info?.pages}
        />
      )}
    </>
  )
}
export default CharactersPage