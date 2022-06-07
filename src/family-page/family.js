import React, { Component } from "react";
import "./Family.css";

class Family extends Component {
  render() {
    return (
      <div className="family-container">
        <div className="familyleft-container">
          <div className="text-container">
            <div className="family-title">Scambi Family</div>
            <div className="family-content">
              We are a group of under 25s coming from every corner of Europe.
              After lots of videocalls, thousand doubts and just as many ideas,
              our team has become a family. We are proud of our diversity and
              passion, enthusiastic in sharing inspiration and in continuously
              proposing new perspectives. We will be waiting for you in Sanremo,
              to introduce ourselves properly. In the meanwhile, learn more
              about us following the link below
            </div>
          </div>
          <div className="familybutton-container">
            <div className="left-button">
              <div className="left-label">Volunteer with Us</div>
            </div>
          </div>
        </div>
        <div className="familyright-container"></div>
      </div>
    );
  }
}

export default Family;
