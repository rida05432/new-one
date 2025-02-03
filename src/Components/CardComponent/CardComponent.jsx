import React from "react";
import "./CardComponent.css";

const CardComponent = () => {
  const data = [
    { title: "Knowlege Score", score: "10" },
    { title: "Knowlege Score", score: "10" },
    { title: "Knowlege Score", score: "10" },
  ];
  return (
    <div className="score-container">
      {data.map((item) => (
        <div key={"index"} className="score-card">
          <p className="score-card-title">{item.title}</p>
          <p className="score-card-score">{item.score}</p>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
