import React from "react";
import "../assests/projects.css";
export default function Projects() {
  return (
    <>
      <div className="d-flex flex-column">
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <a href="https://github.com/FryGit87/Emissions-Tracker" className="university-name">Carbon Emission Tracker</a>
            <span className="university-degree">
              HTML, CSS, Javascript, GoogleFonts, APIs
            </span>
          </div>
          <div>
            <span className="year-finished">2022</span>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <a href="https://aqueous-headland-34654.herokuapp.com/" className="university-name"> Note Taker </a>
            <span className="university-degree">HTML, CSS, Javascript, Node.js</span>
          </div>
          <div>
            <span className="year-finished">2022</span>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <a href="https://gamer-hub-group1.herokuapp.com/" className="university-name"> GamerHub</a>
            <span className="university-degree">
              HTML, CSS, Javascript, Handlebars, Node.js, Express.js, SASS{" "}
            </span>
          </div>
          <div>
            <span className="year-finished">2022</span>
          </div>
        </div>
      </div>
    </>
  );
}
