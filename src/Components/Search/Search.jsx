import React from 'react'
import "./Search.scss"

const Search = ({handleSubmit, handleChange, inputRef}) => {
  return (
    <div className="input-wrapper">
    <form onSubmit={handleSubmit}>
      <div className="input-group">
      <input
        className="input"
        onChange={handleChange}
        ref={inputRef}
        type="text"
        id="name"
        required
      />
      <label htmlFor="name" className="input-label">Type</label>
      </div>
      <input className="search-btn" type="submit" value="Search" />
    </form>
  </div>
  )
}

export default Search