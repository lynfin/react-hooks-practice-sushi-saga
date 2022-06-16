import React from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  // ┌ └ ─ ├ │
  // App [balance]
  //  ├ SushiContainer [sushi]
  //  │   ├ Sushi
  //  │   └ MoreButton
  //  └ Table
  return (
    <div className="app">
      <SushiContainer />
      <Table />
    </div>
  );
}

export default App;
