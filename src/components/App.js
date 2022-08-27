import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Stocks from "./Stocks";
import StocksForm from "./StocksForm";
import SingleStock from "./SingleStock";

import "./App.css";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Stocks />} />
          <Route path="/:id" exact element={<StocksForm />} />
          <Route path="/singleData/:id" exact element={<SingleStock />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
