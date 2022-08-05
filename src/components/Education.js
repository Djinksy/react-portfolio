import React from "react";
import "../assests/education.css";
export default function Education() {
  return (
    <>
      <div className="d-flex flex-column">
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name">University of Adelaide</span>
            <span className="university-degree">
              Full Stack Web Development | Coding Bootcamp
            </span>
          </div>
          <div>
            <span className="year-finished">2022</span>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name"> Hervey Bay High School</span>
            <span className="university-degree">
              Obtained Queensland Certificate Of Education (QCE)
            </span>
          </div>
          <div>
            <span className="year-finished">2009-2012</span>
          </div>
        </div>
        <div className="education-one my-4 justify-content-between d-flex flex-row">
          <div className="d-flex flex-column new-one">
            <span className="university-name"> Tafe Queensland</span>
            <span className="university-degree">
              Cert III Commerical Cookery{" "}
            </span>
          </div>
          <div>
            <span className="year-finished">2016-2019</span>
          </div>
        </div>
      </div>
    </>
  );
}
