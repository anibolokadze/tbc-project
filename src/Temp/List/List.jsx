import React from "react";
import cardData from "../../data";
import Card from "../../Temp/Card/Card";
export default function List() {
  return (
    <div className="wrapper">
      {cardData.map((item) => {
        return (
          <Card
            name={item.name}
            description={item.description}
            price={item.price}
            currency={item.currency}
            imageURL={item.imageURL}
          />
        );
      })}
    </div>
  );
}
