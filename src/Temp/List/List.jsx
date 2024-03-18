import React from "react";
import cardData from "../../data";
import Card from "../../Temp/Card/Card";
export default function List() {
  return (
    <div className="wrapper">
      {cardData.map((item, idx) => {
        return (
          <Card
            key={item.id}
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
