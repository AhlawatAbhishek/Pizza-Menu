import React from "react";
import Pizza from "./Pizza";

export default function Menu(params) {
  //just for checking renamed props to params
  const { pizzaData: pizzas } = params;
  // const pizzas = [];
  const pizzaData = pizzas;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza
              key={pizza.name}
              name={pizza.name}
              ingredients={pizza.ingredients}
              photoName={pizza.photoName}
              price={pizza.price}
            ></Pizza>
          ))}
        </ul>
      ) : (
        <p>We are still working on our menu. Please come back later :)</p>
      )}
    </main>
  );
}
