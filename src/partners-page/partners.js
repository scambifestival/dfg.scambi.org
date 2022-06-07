import React, { Component } from "react";
import "./partners.css";

class Partners extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="sponsor-photo"></div>
        <div className="partners-main">
          <div className="partners-text">
            <div className="title">Our Relations</div>
            <div className="description">
              Alone we would not have been able to concretize the magic of
              Scambi. What makes our festival unique are the relationships and
              the bonds with local and non-local bodies, the public
              administration of Sanremo and many other special people.
            </div>
          </div>
          <div className="button-container">
            <div className="left-button">
              <div className="left-text">Partner with us</div>
            </div>
            <div className="right-button">
              <div className="right-text">Meet our partners</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Partners;
