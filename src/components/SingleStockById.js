import React from "react";

const SingleStockById = ({ data, id }) => {
  const loadData = (text, type, variable) => {
    if (type === "plain_text") {
      return <div style={{ color: "#ffffff" }}> {text} </div>;
    }

    return formatData(text, variable);
  };

  const formatData = (text, variable) => {
    let keys = Object.keys(variable);
    //  let selectedKey = [];
    for (let [i, v] of Object.values(variable).entries()) {
      if (v.type === "indicator") {
        text = text.replace(
          keys[i],
          `<a href="http://localhost:3000/singleData/:${id} (${v.default_value}) ${keys[i]}"style={{ color: "blue" }}>(${v.default_value})</a>`
        );
      } else {
        text = text.replace(
          keys[i],
          `<a href="http://localhost:3000/singleData/:${id} (${v["values"][0]}) ${keys[i]}"style={{ color: "blue" }}>(${v["values"][0]})</a>`
        );
      }
    }

    return <div dangerouslySetInnerHTML={{ __html: text }} />;
  };

  const Addand = (i) => {
    let LastIndex = Number(data.length) - 1;
    if (data.length > 1 && i !== LastIndex) {
      return <div className="optionPara"> and </div>;
    }
  };

  if (data.length > 0) {
    return data.map((singleData, index) => {
      return (
        <div className="MainSlug" key={index}>
          <li>
            {loadData(singleData.text, singleData.type, singleData.variable)}
          </li>
          {Addand(index)}
        </div>
      );
    });
  }
};

export default SingleStockById;
