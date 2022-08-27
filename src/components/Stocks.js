import React, { useState, useEffect } from "react";
import stocks from "../api/stocks";
import StocksLists from "./StocksLists";

import "./App.css";

const Stocks = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    stocks.get("/getData").then((result) => {
      setData(result.data);
    });
  }, []);

  if (!(data.length === 0)) {
    return (
      <ul style={{ color: "#808080" }}>
        <StocksLists data={data} />
      </ul>
    );
  }
};

export default Stocks;
