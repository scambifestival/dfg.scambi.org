import React, { Component } from "react";
import Stroke from "../images/Stroke.png";
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
      <div className="main-container">
        <div className="left-container">
          <div className="image-container"></div>
          <div className="text-container">
            <div className="link-container">
              <div className="readmore">
                <a>Read more &#10140;</a>
              </div>
            </div>
            <div className="title">{this.state.lab_datas.title}</div>
            <div className="lower-subtitle">
              {this.state.lab_datas.description}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LabCard;
