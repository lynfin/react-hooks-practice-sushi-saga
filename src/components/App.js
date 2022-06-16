import React, { useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  // ┌ └ ─ ├ │
  // App [balance, emptyPlates]
  //  ├ SushiContainer [sushis, sushiStart, beltSushi]
  //  │   ├ Sushi
  //  │   └ MoreButton
  //  └ Table
  const [balance, setBalance] = useState(100);
  const [emptyPlates, setEmptyPlates] = useState([]);

  const handlePurchase = (amount) => {
    setBalance((prevBalance) => prevBalance - amount);
    setEmptyPlates([...emptyPlates, amount]);
  };

  return (
    <div className="app">
      <SushiContainer API={API} onPurchase={handlePurchase} balance={balance} />
      <Table plates={emptyPlates} balance={balance} />
    </div>
  );
}

export default App;
