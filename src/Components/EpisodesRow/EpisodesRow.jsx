import React from "react";
import "./EpisodesRow.scss"

const EpisodesRow = ({id, title, episode}) => {
  return (
    <tr className="row">
      <td>{id}</td>
      <td>{title}</td>
      <td>{episode}</td>
    </tr>
  );
};

export default EpisodesRow;
