import React from "react";
import "./projects.css";
export default function Projects() {
  return (
    <>
      <div className="d-flex flex-column">
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">Carbon Emission Tracker</span>
            <span className="university-degree">
              HTML, CSS, Javascript, GoogleFonts, APIs
            </span>
          </div>
          <div>
            <span className="year-finished">icons needed</span>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name"> Code Quiz</span>
            <span className="university-degree">HTML, CSS, Javascript</span>
          </div>
          <div>
            <span className="year-finished">icons needed</span>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name"> GamerHub</span>
            <span className="university-degree">
              HTML, CSS, Javascript, Handlebars, Node.js, Express.js, SASS{" "}
            </span>
          </div>
          <div>
            <span className="year-finished">icons needed</span>
          </div>
        </div>
      </div>
    </>
  );
}
