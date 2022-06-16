import React, { useState, useEffect } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ API, onPurchase, balance }) {
  const [sushis, setSushis] = useState([]);
  const [sushiStart, setSushiStart] = useState(0);
  const [beltSushi, setBeltSushi] = useState([]);

  useEffect(() => {
    fetch(API)
      .then((r) => r.json())
      .then((sushis) => setSushis(sushis));
  }, [API]);

  useEffect(() => {
    setBeltSushi(sushis.slice(sushiStart, sushiStart + 4));
  }, [sushis, sushiStart]);

  const handleMoreSushi = () => {
    const maxShifts = sushis.length / 4;
    const maxStart = (maxShifts - 1) * 4;
    if (sushiStart < maxStart) {
      setSushiStart((prevStart) => prevStart + 4);
    }
  };
  return (
    <div className="belt">
      {beltSushi.map((sushi) => (
        <Sushi
          sushi={sushi}
          key={sushi.id}
          onPurchase={onPurchase}
          balance={balance}
        />
      ))}
      <MoreButton onMoreSushi={handleMoreSushi} />
    </div>
  );
}

export default SushiContainer;
