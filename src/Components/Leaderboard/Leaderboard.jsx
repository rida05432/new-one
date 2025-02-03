import React, { useState } from "react";
import "./Leaderboard.css";

const Leaderboard = () => {
  const [globalData, setGlobalData] = useState("l");
  const leaderboardData = [
    { ID: 1, icon: "A", name: "Knowlege Score", score: "10" },
    { ID: 1, icon: "A", name: "Knowlege Score", score: "10" },
    { ID: 1, icon: "A", name: "Knowlege Score", score: "10" },
    { ID: 1, icon: "A", name: "Knowlege Score", score: "10" },
    { ID: 1, icon: "A", name: "Knowlege Score", score: "10" },
    { ID: 1, icon: "A", name: "Knowlege Score", score: "10" },
  ];

  const global = [
    { ID: 1, icon: "B", name: "Knowlege Score", score: "50" },
    { ID: 1, icon: "B", name: "Knowlege Score", score: "50" },
    { ID: 1, icon: "B", name: "Knowlege Score", score: "50" },
    { ID: 1, icon: "B", name: "Knowlege Score", score: "50" },
    { ID: 1, icon: "B", name: "Knowlege Score", score: "50" },
    { ID: 1, icon: "B", name: "Knowlege Score", score: "50" },
  ];
  return (
    <div className="leader">
      <div className="leader-tabs">
        <h5
          className={globalData === "l" ? "active" : ""}
          onClick={() => setGlobalData("l")}
        >
          LeaderBoard
        </h5>
        <h5
          className={globalData === "g" ? "active" : ""}
          onClick={() => setGlobalData("g")}
        >
          Global LeaderBoard
        </h5>
      </div>
      <div className="leader-table">
        {(globalData === "l"
          ? leaderboardData
          : [...leaderboardData, ...global]
        ).map((item) => (
          <div key={item.ID} className="leader-row">
            <p>{item.ID}</p>
            <div className="leader-name">
              <div className="leader-icon">{item.icon}</div>
              <p>{item.name}</p>
            </div>
            <p>{item.score}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
