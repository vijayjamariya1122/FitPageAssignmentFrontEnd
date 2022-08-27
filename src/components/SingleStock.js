import React, { useState, useEffect } from "react";
import stocks from "../api/stocks";
import { useParams } from "react-router-dom";

const SingleStock = () => {
  const [data, setData] = useState([]);
  let FinalOutput = { data: [], name: "", defaultValue: "", type: "" };
  let { id } = useParams();

  id = id.replace(/[:()]/g, "");

  let idarray = id.split(" ");
  useEffect(() => {
    stocks.get("/getData").then((result) => {
      setData(result.data);
    });
  }, []);

  if (data.length > 0) {
    data.forEach((singleData) => {
      if (singleData.id === Number(idarray[0])) {
        singleData.criteria.forEach((result) => {
          for (let [i, v] of Object.values(result.variable).entries()) {
            if (
              v.type === "value" &&
              v.values.includes(Number(idarray[1])) &&
              result["text"].includes(idarray[2])
            ) {
              FinalOutput = { ...FinalOutput, data: v.values, type: "value" };
            } else if (
              v.type === "indicator" &&
              v.default_value === Number(idarray[1])
            ) {
              FinalOutput = {
                ...FinalOutput,
                type: "indicator",
                name: v.study_type.toUpperCase(),
                defaultValue: v.default_value,
              };
            }
          }
        });
      }
    });
    if (FinalOutput.type === "value") {
      return FinalOutput.data.map((value) => {
        return (
          <ul style={{ listStyle: "none" }} key={value}>
            <div className="MainSlug">
              <li> {value} </li>
            </div>
          </ul>
        );
      });
    } else if (FinalOutput.type === "indicator") {
      return (
        <div className="MainSlug">
          <h3> {FinalOutput.name} </h3>
          <h4> Set Parameters </h4>
          <div className="ui fluid card">
            <div className="content">
              <span className="innheader">Period</span>
              <span className="innercontent">
                <div className="ui input">
                  <input
                    type="text"
                    defaultValue={FinalOutput.defaultValue}
                    onChange={(e) => {}}
                  />
                </div>
              </span>
            </div>
          </div>
        </div>
      );
    }
  }
};

export default SingleStock;
