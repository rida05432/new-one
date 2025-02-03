// Tracker.jsx
import React, { useState } from "react";
import "./Tracker.css";

const Tracker = () => {
  const [courses, setCourses] = useState([
    { id: 1, name: "Behavior Based Safety", status: "Completed" },
    {
      id: 2,
      name: "Using a VDU Effectively with Display Screen Equipment",
      status: "Completed",
    },
    {
      id: 3,
      name: "Recognizing Musculoskeletal Disorders (MSDs)",
      status: "Completed",
    },
  ]);

  return (
    <div className="container">
      <h2>Course Progress Tracker</h2>
      <div className="summary">
        <div>
          <strong>Courses in Progress:</strong> 5
        </div>
        <div>
          <strong>Completed Courses:</strong>{" "}
          {courses.filter((course) => course.status === "Completed").length}
        </div>
        <div>
          <strong>Training Time:</strong> 4m
        </div>
      </div>

      <h3>1. Compliance</h3>
      {courses.map((course) => (
        <div key={course.id} className="course">
          {course.name} <span className="completed">{course.status}</span>
        </div>
      ))}
    </div>
  );
};

export default Tracker;
