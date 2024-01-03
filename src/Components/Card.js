import React from "react";
import { Link } from 'react-router-dom'
import './Card.css'
const Card = ({ card ,name}) => {
  return (
    <div className=" col col-md-4 col-sm-6"  >
      <Link to={'/'+name+'/'+card._id}>
      <img
        className="card-img-top "
        id="cardImage"
        src={card.url}
        alt="Card Pic cap"
      />
      </Link>
        <Link to={'/'+name+'/'+card._id}>
          <h5 className="card-title "
          id="cardTitle">{card.title}</h5>
          </Link>
      
    </div>
  );
};

export default Card;
