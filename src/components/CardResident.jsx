import React from "react";
import useFetch from "../hooks/useFetch";

const CardResident = ({ url }) => {
  const resident = useFetch(url);
  console.log(resident);
  return (
    <article className="card">
      <header>
        <img src={resident?.image} alt={`image of ${resident?.name}`} />
      </header>
      <div className="card-info">
        <h3>{resident?.name}</h3>

        <div className="card-status">
          {
            resident?.status ==='Alive' ? <div className="circleA"></div> : <div className="circleD"></div>
          }
          <span>{resident?.status === 'Alive'? 'Alive':'Dead'}</span>
        </div>
        <ul>
          <li><strong>Species: </strong>{resident?.species}</li>
          <li><strong>Origin: </strong>{resident?.origin.name}</li>
          <li><strong>Eppisodes where appear: </strong>{resident?.episode.length}</li>
        </ul>
      </div>
    </article>
  );
};

export default CardResident;
