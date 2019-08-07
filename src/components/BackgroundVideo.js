import React from "react";
import "./video.css";
import SideNav from "./SideNav";
import { BrowserRouter as Router, Link } from "react-router-dom";

const BackgroundVideo = props => {
  const { videoUrl, navLinks, logo } = props;

  return (
    <div className="video-component">
      <div className="section">
        <div className="content">
          {/* <h1>Welcome To Paradise</h1> */}
          {/* sidenavbar starts here */}
          <ul id="slide-out" className="sidenav">
            <SideNav navLinks={navLinks} />
          </ul>

          {/* container for logo and menu icon starts here */}
          <div className="container">
            <a href="#!" className="iconStyling left brand-logo">
              {logo}
            </a>
            <a
              href="#!"
              data-target="slide-out"
              className="iconStyling right sidenav-trigger"
            >
              <i className="material-icons">menu</i>
            </a>
          </div>
          {/*  container for logo and menu icon ends here  */}
        </div>
        <div className="video-container">
          {/* <div class="color-overlay"></div> */}
          <video src={videoUrl} className="videoStyling" autoPlay loop muted>
            <source type="video/mp4"></source>
          </video>
        </div>
      </div>
      <div>
        <p>All content here</p>
      </div>
    </div>
  );
};

export default BackgroundVideo;
