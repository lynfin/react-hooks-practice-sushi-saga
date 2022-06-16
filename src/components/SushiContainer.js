import React, { useState, useEffect } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer(props) {
  const [sushis, setSushis] = useState([]);
  const [sushiStart, setSushiStart] = useState(0);
  const [beltSushi, setBeltSushi] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/sushis")
      .then((r) => r.json())
      .then((sushis) => setSushis(sushis));
  }, []);

  useEffect(() => {
    setBeltSushi(sushis.slice(sushiStart, sushiStart + 4));
  }, [sushis, sushiStart]);

  return (
    <div className="belt">
      {beltSushi.map((sushi) => (
        <Sushi sushi={sushi} key={sushi.id} />
      ))}
      <MoreButton />
    </div>
  );
}

export default SushiContainer;
