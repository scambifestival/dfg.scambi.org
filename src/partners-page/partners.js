import React, { Component } from "react";
import "./partners.css";

class Partners extends Component {
  render() {
    return (
      <div className="partners-container">
        <div className="sponsor-photo"></div>
        <div className="partners-main">
          <div className="partners-text">
            <div className="partners-title">Our Relations</div>
            <div className="partners-description">
              Alone we would not have been able to concretize the magic of
              Scambi. What makes our festival unique are the relationships and
              the bonds with local and non-local bodies, the public
              administration of Sanremo and many other special people.
            </div>
          </div>
          <div className="partnerbutton-container">
            <div className="partnerleft-button">
              <div className="left-text">Partner with us</div>
            </div>
            <div className="partnerright-button">
              <div className="right-text">Meet our partners</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Partners;
