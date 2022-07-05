import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./CardDetails.scss";

const CardDetails = () => {
  const [character, setCharacter] = useState({});
  const { charId } = useParams();
  const navigate = useNavigate();

  console.log(character);

  console.log(charId);
  useEffect(() => {
    try {
      fetch(`https://rickandmortyapi.com/api/character/${charId}`).then(
        (response) => response.json().then((data) => setCharacter(data))
      );
    } catch (error) {
      console.log(error);
    }
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="card-details">
      <div className="card-details-content">
        <img className="char-img" src={character?.image} alt="img" />
        <h2 className="char-name">{character?.name}</h2>
        <p>Gender: {character?.gender}</p>
        <p>Origin: {character?.origin?.name}</p>

        {character?.episode?.length === 1 ? (
          <p>
            {" "}
            {character?.name} appears in {character?.episode?.length} episode
          </p>
        ) : (
          <p>
            {character?.name} appears in {character?.episode?.length} episodes
          </p>
        )}

        <button className="back-btn" onClick={goBack}>
          Go back
        </button>
      </div>
    </div>
  );
};

export default CardDetails;
