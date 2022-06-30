import "./Card.css";

const Card = ({ image, name, status, location, species }) => {

  function getStatusColor(status) {
    if (status === 'Alive') {
        return 'green';
    }
    if (status === 'Dead') {
        return 'red';
    }
    return 'black';
}

  return (
    <div className="card-container">
      <img src={image} alt={name} />
      <div className="card-content">
        <h2>{name}</h2>
        <div className="status">
          <div
            style={{
              width: "10px",
              height: "10px",
              backgroundColor: getStatusColor(status),  
              borderRadius: "50%",
              marginRight: "5px",
            }}
          ></div>
          {status} - {species}
        </div>
        <small>Last known location</small>
        <p>{location}</p>
      </div>
    </div>
  );
};

export default Card;
