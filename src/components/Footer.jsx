import React from "react";
import Order from "./Order";
export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(` The restaurant is ${isOpen ? "open" : "closed"}`);
  // if (!isOpen) {
  //   return (
  //     <p>
  //       We are currently closed. We're happy to welcome you between {openHour}
  //       :00 and {closeHour}:00
  //     </p>
  //   );
  // }
  return (
    <footer>
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We are currently closed. We're happy to welcome you between {openHour}
          :00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}
