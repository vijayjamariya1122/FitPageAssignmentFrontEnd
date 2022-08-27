import React from "react";
import { Link } from "react-router-dom";

const StocksLists = ({ data }) => {
  if (data.length > 0) {
    return data.map((singleData, index) => {
      let stateData = {
        data: singleData,
        id: data[index]["id"],
      };
      return (
        <div className="MainSlug" key={singleData.id}>
          <li>
            <Link
              to={`:${singleData.id}`}
              style={{ color: singleData.color }}
              state={stateData}
            >
              <div style={{ color: "#ffffff" }}> {singleData.name} </div>
              {singleData.tag}
            </Link>
          </li>
        </div>
      );
    });
  }
};

export default StocksLists;
