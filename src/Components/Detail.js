import React from "react";
import parse from "html-react-parser";
import './Detail.css'

const Detail = ({ data }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 className="detail-title">{data.title}</h1>
        <img src={data.url} className="detail-img" alt="Card pic cap" />
        <div className="data"
        >
          {parse(data.data)}
        </div>
    </div>
  );
};

export default Detail;
