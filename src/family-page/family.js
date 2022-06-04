import React, { Component } from "react";
import "./Family.css";

class Family extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="left-container">
          <div className="text-container">
            <div className="title">Scambi Family</div>
            <div className="content">
              We are a group of under 25s coming from every corner of Europe.
              After lots of videocalls, thousand doubts and just as many ideas,
              our team has become a family. We are proud of our diversity and
              passion, enthusiastic in sharing inspiration and in continuously
              proposing new perspectives. We will be waiting for you in Sanremo,
              to introduce ourselves properly. In the meanwhile, learn more
              about us following the link below
            </div>
          </div>
          <div className="button-container">
            <div className="left-button">
              <div className="left-label">Learn about our team</div>
            </div>
            <div className="right-button">
              <div className="right-label">Volunteer with us</div>
            </div>
          </div>
        </div>
        <div className="right-container"></div>
      </div>
    );
  }
}

export default Family;
