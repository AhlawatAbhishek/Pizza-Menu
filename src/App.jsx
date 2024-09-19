import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
export default function App() {
  //     const [pizzaData, setPizzaData] = React.useState([]);

  // React.useEffect(() => {
  //   fetch("./pizzaData.json")
  //     .then((response) => response.json())
  //     .then((data) => setPizzaData(data))
  //     .catch((error) => console.error("Error fetching pizza data:", error));
  // }, []);
  const [pizzaData, setPizzaData] = useState([]);
  useEffect(() => {
    fetch("/pizzaData.json")
      .then((response) => response.json())
      .then((data) => setPizzaData(data))
      .catch((error) => console.error("Error fetching pizza data:", error));
  }, []);
  console.log(pizzaData);
  return (
    <div className="container">
      <Header />
      <Menu pizzaData={pizzaData} />
      <Footer />
    </div>
  );
}
