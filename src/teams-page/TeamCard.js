import React, { Component } from "react";
import "./TeamCard.css";

class TeamCard extends Component {
  state = {
    team_datas_left: {
      title: "Jane Doe",
      subtitle: "Design Lead - Peacocks",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor lacinia diam, et volutpat dui porttitor eget. Curabitur ac pellentesque justo. In auctor sagittis nisi, ut dictum urna egestas rutrum. Vestibulum sodales sem felis, ultrices tempor enim ultricies et. ",
    },
    team_datas_right: {
      title: "Chameleons",
      subtitle: "Leaders",
      description:
        "Insert team logo above, 1-2 lines description about the team.",
    },
  };
  render() {
    return (
      <div className="teamcards-main">
        <div className="team-main-container">
          <div className="team-left-container">
            <div className="teamleft-card">
              <div className="teamleft-v3card">
                <div className="teamleft-blob">
                  <div className="teamleft-unsplash"></div>
                </div>
                <div className="teamleft-frame">
                  <div className="teamleft-frame-title">
                    {this.state.team_datas_left.title}
                  </div>
                  <div className="teamleft-frame-subtitle">
                    {this.state.team_datas_left.subtitle}
                  </div>
                  <div className="teamleft-frame-description">
                    {this.state.team_datas_left.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="team-right-container">
            <div className="teamright-image-container"></div>
            <div className="teamright-frame">
              <div className="chameleons">
                {this.state.team_datas_right.title}
              </div>
              <div className="leaders">
                {this.state.team_datas_right.subtitle}
              </div>
              <div className="team-lower-subtitle">
                {this.state.team_datas_right.description}
              </div>
              <div className="team-link-container">
                <div className="team-readmore">
                  <a>Meet the Chameleons &#10140;</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TeamCard;
