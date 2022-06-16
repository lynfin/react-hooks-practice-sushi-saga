import React from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  // ┌ └ ─ ├ │
  // App [balance]
  //  ├ SushiContainer [sushis, sushiStart, beltSushi]
  //  │   ├ Sushi
  //  │   └ MoreButton
  //  └ Table
  return (
    <div className="app">
      <SushiContainer API={API} />
      <Table />
    </div>
  );
}

export default App;
