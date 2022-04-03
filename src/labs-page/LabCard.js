import React, { Component } from "react";
import ReadMoreReact from "read-more-react";
import labcard from "../images/labcard.png";
import "./LabCard.css";

class LabCard extends Component {
  state = {
    lab_datas: {
      title: "Human Thread Lab",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    },
    readmore: <text className="read-more-link">Read more &#10140;</text>,
  };
  render() {
    return (
      <div className="main-container">
        <div className="left-container">
          <div className="title">{this.state.lab_datas.title}</div>
          <div className="image-container">
            <img src={labcard} alt="lab1" />
          </div>
          <div className="lower-subtitle">
            <ReadMoreReact
              text={this.state.lab_datas.description}
              min={100}
              ideal={200}
              max={1000}
              readMoreText={this.state.readmore}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LabCard;
