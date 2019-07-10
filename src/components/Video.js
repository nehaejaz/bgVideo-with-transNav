import React, { Component } from "react";
import "./video.css";
import natureVideo from "./nature.mp4";
import { Navbar, NavItem, M, SideNav } from "react-materialize";

class Video extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="video-component">
        <div className="section">
          <div className="content">
            {/* <h1>Welcome To Paradise</h1> */}
            {/* sidenavbar starts here */}
            <ul id="slide-out" class="right sidenav">
              <div className="right-align">
                <li>
                  <a href="">First Link</a>
                </li>
                <li>
                  <a href="#!">First Link With Icon</a>
                </li>
                <li>
                  <a href="#!">Second Link</a>
                </li>
                <li>
                  <div class="divider"></div>
                </li>
                <li>
                  <a class="subheader">Subheader</a>
                </li>
                <li>
                  <a href="#!">Third Link With Waves</a>
                </li>
              </div>
            </ul>
            {/* sidenavbar ends here */}
            {/* container for logo and menu icon starts here */}
            <div className="container">
              <a href="#" class="iconStyling left brand-logo">
                Logo
              </a>
              <a
                href="#"
                data-target="slide-out"
                class="iconStyling right sidenav-trigger"
              >
                <i class="material-icons">menu</i>
              </a>
            </div>
            {/*  container for logo and menu icon ends here  */}
          </div>
          <div className="video-container">
            {/* <div class="color-overlay"></div> */}
            <video className="videoStyling" autoPlay loop muted>
              <source src={natureVideo} type="video/mp4"></source>
            </video>
          </div>
        </div>
        <div>
          <p>sdflksdjflkjsdfkjsdhfkjdsh kjsdhfkdsbf dskjfhkjdshfds sdhfkjdsh</p>
        </div>
      </div>
    );
  }
}

export default Video;
