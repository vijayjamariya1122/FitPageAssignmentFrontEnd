import React from "react";
import { useLocation } from "react-router-dom";
import SingleStockById from "./SingleStockById";
//import SingleStockByIdCopy from "./SingleStockByIdCopy";

const StocksForm = () => {
  const location = useLocation();
  const { data, id } = location.state;
  return (
    <div className="ui cards customCard">
      <div className="ui blue fluid card">
        <div className="content">
          <div className="header">{data.name}</div>
          <div className="content" style={{ color: data.color }}>
            {data.tag}
          </div>
        </div>
      </div>
      <div className="ui fluid container">
        <ul style={{ listStyle: "none", paddingInlineStart: 15 }}>
          <SingleStockById data={data.criteria} id={id} />
        </ul>
      </div>
    </div>
  );
};

export default StocksForm;
