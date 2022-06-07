import React, { Component } from "react";
import "./Values.css";

class Values extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="manifesto-label">Our Manifesto</div>
        <div className="manifesto-cards">
          <div className="workshop-card">
            <div className="workshop-text">
              <div className="workshop-title">Workshop</div>
              <div className="workshop-description">
                Collective experience based on creativity, dialogue and sharing,
                which blossoms once a year on the squares of La Pigna in order
                to explore together the various connotations of the current
                edition's theme.
              </div>
            </div>
          </div>
          <div className="paneuretic-card">
            <div className="paneuretic-text">
              <div className="paneuretic-title">Paneuretic</div>
              <div className="paneuretic-description">
                Neologism deriving from the Greek pan (all), eurisko (discover)
                and ethos (living), because we wish to combine diverse realities
                that would never meet in their original contexts, while
                celebrating and respecting our differences, discovering and
                developing inspiring ideas.
              </div>
            </div>
          </div>
          <div className="accessibility-card">
            <div className="accessibility-text">
              <div className="accessibility-title">Accessibility</div>
              <div className="accessibility-description">
                In a society that says “you must”, we say “just be”: we made
                every festival activity available and accessible to as many
                people as possible.
              </div>
            </div>
          </div>
          <div className="lapigna-card">
            <div className="lapigna-text">
              <div className="lapigna-title">La Pigna</div>
              <div className="lapigna-description">
                The iconic and vibrant historic center of Sanremo that welcomes
                us during the festival, and that we are committed to requalify
                through social values such as Community and Meeting.
              </div>
            </div>
          </div>
        </div>
        <div className="manifesto-button">
          <div className="button-container">
            <div className="button-label">Read the Manifesto</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Values;
