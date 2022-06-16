import React from "react";

function MoreButton({ onMoreSushi }) {
  const handleClick = () => {
    onMoreSushi();
  };
  return <button onClick={handleClick}>More sushi!</button>;
}

export default MoreButton;
