import React, { Component } from "react";
import "./LabCard.css";

class LabCard extends Component {
  state = {
    lab_datas: {
      title: "Human Thread Lab",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },
  };
  render() {
    return (
      <div className="lab-main-container">
        <div className="lab-left-container">
          <div className="lab-image-container"></div>
          <div className="lab-text-container">
            <div className="lab-link-container">
              <div className="lab-readmore">
                <a>Read more &#10140;</a>
              </div>
            </div>
            <div className="lab-title">{this.state.lab_datas.title}</div>
            <div className="lab-lower-subtitle">
              {this.state.lab_datas.description}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LabCard;
