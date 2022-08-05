import React from "react";
import "./work.css";
export default function Work() {
  return (
    <>
      <div className="work-inside-new mx-2 my-4">
        <div className="d-flex flex-column">
          <div className="d-flex flex-row justify-content-between">
            <span className="company-name">Kondari Hotel Hervey Bay</span>
            <span className="year-finished">2020-present</span>
          </div>
        </div>
        <div className="d-flex flex-column">
          <span className="position">Chef</span>
          <span className="description-position">
            <ul>
              <li>Management of Small team</li>
              <li>
                {" "}
                Collaboration with function managers to plan and execute events
              </li>
            </ul>
          </span>
          <div className="d-flex flex-row justify-content-between">
            <span className="company-name">Cafe Eleven</span>
            <span className="year-finished">2020-2022</span>
          </div>
          <div className="d-flex flex-column">
            <span className="position">Chef</span>
            <span className="description-position">
              <ul>
                <li> Back end management</li>
                <li> Stock ordering and rotation </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}