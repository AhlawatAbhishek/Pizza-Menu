import React from "react";
export default function Order(props) {
  const { closeHour } = props;
  return (
    <div className="order">
      <p>We're open until {closeHour}:00. Come visit us or order online</p>
      <button className="btn">Order</button>
    </div>
  );
}
