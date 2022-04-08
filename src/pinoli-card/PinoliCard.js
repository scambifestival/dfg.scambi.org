import React, { Component } from "react";
import "./PinoliCard.css";

class PinoliCard extends Component {
  state = {
    pinoli_datas: {
      event_name: "Event name",
      organization_name: "Organization",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut diam lorem nec amet sit morbi tortor ullamcorper quis",
    },
  };
  render() {
    return (
      <div className="pinoli-main-container">
        <div className="pinoli-left-container">
          <div className="pinoli-link-container">
            <div className="pinoli-readmore">
              <a>Read more &#10140;</a>
            </div>
          </div>
          <div className="pinoli-frame22">
            <div className="pinoli-frame12">
              <div className="pinoli-frame11">
                <div className="pinoli-description">
                  {this.state.pinoli_datas.description}
                </div>
                <div className="pinoli-organization">
                  {this.state.pinoli_datas.organization_name}
                </div>
                <div className="pinoli-event">
                  {this.state.pinoli_datas.event_name}
                </div>
              </div>
            </div>
            <div className="pinoli-rectangle"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default PinoliCard;
