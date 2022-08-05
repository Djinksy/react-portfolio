import Education from "./Education";
import Programming from "./Progamming";
import Projects from "./Projects";
import Work from "./Work";
import "./styles.css";
import { useState } from "react";
import Contact from "./Contact";
export default function App() {
  const [education, seteducation] = useState(true);
  const [workhistory, setworkhistory] = useState(false);
  const [programmings, setprogrammings] = useState(false);
  const [projects, setprojects] = useState(false);
  const [opennav, setopennav] = useState(false);
  function SetAllFalse() {
    seteducation(false);
    setworkhistory(false);
    setprogrammings(false);
    setprojects(false);
  }

  function ChangeState(function1, state1) {
    SetAllFalse();
    function1(state1);
  }
  return (
    <div className="App">
      <div className="navbar-option-mobile bg-new">
        <div className="d-flex flex-row justify-content-between">
          <span className="brand-name d-flex aling-items-center justify-content-center">
            Damien Jinks
          </span>
          <div className="bars" onClick={() => setopennav(!opennav)}></div>
        </div>
      </div>
      <nav
        className={
          !opennav
            ? "d-flex bg-new px-9 navbar-new py-5 flex-rows transition-all"
            : "d-flex bg-new px-9 navbar-fixed-new py-5 flex-rows transition-all"
        }
      >
        <span className="brand-name">Damien Jinks</span>
        <div className="d-flex flex-rows">
          <a
            href="#home"
            className="mx-4 nav-items"
            onClick={() => setopennav(false)}
          >
            Home
          </a>
          <a
            href="#aboutme"
            className="mx-4 nav-items"
            onClick={() => setopennav(false)}
          >
            About me
          </a>
          <a
            href="#resume"
            className="mx-4 nav-items"
            onClick={() => setopennav(false)}
          >
            Resume
          </a>
          <a
            href="#contactme"
            className="mx-4 nav-items"
            onClick={() => setopennav(false)}
          >
            Contact me
          </a>
        </div>
      </nav>
      <div className="herosection px-10 py-2" id="home">
        <div className="herosection-2 row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex flex-column justify-content-center Im-text-section">
              <span className="Im-text">
                Hello, I'm <span className="name-Im-text">Damien Jinks</span>
              </span>
              <span className="Im-text-enthusiastic py-2">
                Full Stack Web Developer 🤠
              </span>
              <span className="Im-text-subheading">
                Passionate about building applications with front and back end
                technologies
              </span>
              <div className="d-flex flex-row justify-content-center mt-5">
                <a href="#contactme" className="btn-hire-me">
                  Hire me
                </a>
                <a
                  href="https://docs.google.com/document/d/1NrcyyyHgAOmPxN_k8kIjbdaVj6k4xY7TJJ1UEVkdHUs/edit"
                  className="btn-resume-me"
                  target="blank"
                >
                  Get Resume
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex justify-content-center custom-div-outer-img">
              <img
                className="img-fluid custom-img"
                alt="heroimage"
                src="https://res.cloudinary.com/diinnpjny/image/upload/v1659499777/profile-pic_nd3swr.png"
              />
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>

      <div className="about-me-section aboutme-inside my-5">
        <div className="d-flex flex-column">
          <span className="about-me-text" id="aboutme">
            About me
          </span>
          <div className="row justify-content-center shadow-lg my-5">
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex align-items-center justify-content-center">
              <lottie-player
                src="https://assets6.lottiefiles.com/packages/lf20_qoo3cyxi.json"
                background="transparent"
                speed="1"
                style={{ width: "500px", height: "500px" }}
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 py-5 d-flex flex-column">
              <span className="some-text-about-me">
                I am currently working as a Chef, however I have always wanted
                to follow my passion and work in the tech industry. Coding has
                been a skill I have wanted to learn for a long time, and I am
                finally doing it through University of Adelaide's Coding
                Bootcamp. I'm passionate about AFL, Web development and video
                games.
              </span>
              <span className="few-highlights">
                <span className="few-text">
                  Here are a few languages I know
                </span>
                <span className="few-list">
                  <ul>
                    <li>HTML5, CSS3, JQuery</li>
                    <li>Javascript ES6+, Bootstrap, SQL/NoSQL</li>
                    <li>Node.js, Express.js, React</li>
                    <li>JSX, MongoDB, APIs</li>
                  </ul>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="resume-outer-section d-flex flex-column" id="resume">
        <span className="about-me-text">Resume</span>

        <div
          className="resume-new-section row"
          style={{ width: "70%", marginInline: "auto ", height: "400px" }}
        >
          <div className="col-lg-4 col-md-4 col-sm-12 resume-left-section d-flex px-0 shadow-lg flex-row">
            <div className="d-flex flex-column bg-new text-white">
              <span class="icons-span">
                <i class="fas fa-user-graduate"></i>{" "}
              </span>
              <span class="icons-span">
                <i class="fas fa-user-graduate"></i>{" "}
              </span>
              <span class="icons-span">
                <i class="fas fa-user-graduate"></i>{" "}
              </span>
              <span class="icons-span">
                <i class="fas fa-user-graduate"></i>{" "}
              </span>
            </div>
            <div className="d-flex flex-column bg-white">
              <span
                className={
                  education === false
                    ? "resume-options-items"
                    : "selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(seteducation, true);
                }}
              >
                Education
              </span>
              <span
                className={
                  workhistory === false
                    ? "resume-options-items"
                    : " selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setworkhistory, true);
                }}
              >
                Employment History
              </span>
              <span
                className={
                  programmings === false
                    ? "resume-options-items"
                    : " selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setprogrammings, true);
                }}
              >
                Programming
              </span>
              <span
                className={
                  projects === false
                    ? "resume-options-items"
                    : " selected resume-options-items"
                }
                onClick={() => {
                  ChangeState(setprojects, true);
                }}
              >
                Projects
              </span>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 resume-right-section">
            {education === true && <Education />}
            {workhistory === true && <Work />}
            {programmings === true && <Programming />}
            {projects === true && <Projects />}
          </div>
        </div>
      </div>

      <div className="contact-me-part" id="contactme">
        <div className="relative-bg"></div>
        <div className="contact-inner-part d-flex flex-column">
          <span className="about-me-text">Contact Me</span>
          <Contact />
        </div>
      </div>
    </div>
  );
}
