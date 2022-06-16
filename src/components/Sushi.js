import React from "react";

function Sushi({ sushi, onPurchase, balance, onUpdate }) {
  const { name, img_url, price, isEaten } = sushi;

  const canBePurchased = !isEaten && price <= balance;

  const handleClick = () => {
    onPurchase(price);
    onUpdate({ ...sushi, isEaten: true });
  };
  return (
    <div className="sushi">
      <div className="plate" onClick={canBePurchased ? handleClick : null}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : <img src={img_url} alt={name} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
