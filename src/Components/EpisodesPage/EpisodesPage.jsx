import React from "react";

import useFetch from "../../Hooks/useFetch";
import EpisodesRow from "../EpisodesRow/EpisodesRow";
import "./EpisodesPage.scss"


const EpisodesPage = () => {


  const episodes = useFetch(`https://rickandmortyapi.com/api/`,`episode`) 

  console.log(episodes)

  return (
    <div className="table-wrapper">
      <table className="table">
        <thead className="table-head">
          <tr className="table-row">
            <th>ID</th>
            <th>NAME</th>
            <th>EPISODE</th>
          </tr>
        </thead>
        <tbody>
            {episodes?.results?.map((episode) => (
              <EpisodesRow key={episode.id} id={episode.id} title={episode.name} episode={episode.episode}/>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default EpisodesPage;

