import React, { useState, useEffect } from "react";
import MoreButton from "./MoreButton";

function SushiContainer(props) {
  const [sushis, setSushis] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/sushis")
      .then((r) => r.json())
      .then((sushis) => setSushis(sushis));
  }, []);
  console.log("Loaded sushi - ", sushis.length);
  return (
    <div className="belt">
      {/* Render Sushi components here! */}
      <MoreButton />
    </div>
  );
}

export default SushiContainer;
