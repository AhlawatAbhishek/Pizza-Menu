import React from "react";

export default function Pizza(props) {
  const { name, ingredients, photoName, price } = props;
  console.log(props);
  return (
    <li className="pizza">
      <img src={photoName} alt="Pizza Margherita" />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{price}</span>
      </div>
    </li>
  );
}
