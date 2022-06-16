import React from "react";

function Sushi({ sushi, onPurchase }) {
  const { name, img_url, price } = sushi;

  const handleClick = () => {
    onPurchase(price);
  };
  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {/* Tell me if this sushi has been eaten! */}
        {false ? null : <img src={img_url} alt={name} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
