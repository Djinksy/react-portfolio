import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assests/socials.css";
import {
    faLinkedin,
    faTwitter,
    faGithub
  } from "@fortawesome/free-brands-svg-icons";
export default function Socials() {
  return (
    <div class="social-container">
      <a href="https://www.linkedin.com/in/damien-jinks/"
        className="linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://github.com/Djinksy"
        className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://twitter.com/Jinksyxox" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
    </div>
  );
}