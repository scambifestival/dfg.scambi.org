import React, { Component } from "react";
import "./Imbalance.css";

class Imbalance extends Component {
  render() {
    return (
      <div className="imbalance-container">
        <div className="imbalancephoto-container"></div>
        <div className="imbalancecontent-container">
          <div className="imbalancetitle-container">
            2022 Edition: “Imbalance”
          </div>
          <div className="imbalanceintro-container">
            Scambi is the festival of paneuretic workshops, born from the
            necessity felt by a group of young people to fight the intolerance
            towards the different. For the 2022 edition, which will take place
            from 25th to 28th of August in the historic center of La Pigna
            (Sanremo), we chose imbalance as a theme.
          </div>
          <div className="imbalancefaq-container">
            Not sure where to start? Check out our
          </div>
          <div className="imbalancebutton-container">
            <div className="imbalancebuttonlabel-container">
              View the 2022 Program
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Imbalance;
