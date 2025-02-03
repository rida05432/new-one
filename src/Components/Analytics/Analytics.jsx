import React, { useState } from "react";
import Avatar from "react-avatar"; // Import Avatar for the profile icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

import "./Analytics.css"; // Ensure that you have the necessary CSS for sidebar styling
import Sidebar from "../Sidebar/Sidebar.jsx";
import CardComponent from "../CardComponent/CardComponent.jsx";
import Leaderboard from "../Leaderboard/Leaderboard.jsx";

const Analytics = () => {
  return (
    <div className="analytics-container">
      {/* Header */}
      <div className="top-bar">
        <span className="header-text">Leaderboard</span>
        <div className="user-avatar">
          <FontAwesomeIcon icon={faBell} className="bell-icon" />
          <Avatar
            name="Alice"
            round={true}
            size="50"
            color="#0a6476"
            textColor="#333"
          />
        </div>
      </div>
      {/* Main Content */}
      {/* Combined Card for Backlog, Timeline, and Efficiency */}
      <div className="combined-header"></div>
      <div className="analytics">
        {/* card component */}
        <CardComponent />
        {/* leaderboard tabs */}
        <Leaderboard />
      </div>
    </div>
  );
};

export default Analytics;
