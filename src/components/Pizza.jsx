import React from "react";
import PropTypes from "prop-types";
export default function Pizza(props) {
  const { name, ingredients, photoName, price, soldOut } = props;
  console.log(props);
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt="Pizza Margherita" />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        {soldOut ? <span>Sold out!</span> : <span>{price}</span>}
      </div>
    </li>
  );
}

Pizza.propTypes = {
  name: PropTypes.string.isRequired,
  ingredients: PropTypes.string.isRequired,
  photoName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  soldOut: PropTypes.bool,
};
