import React from "react";
import "./OurTeam.css";
import TeamInfo from "./teamInfo.json"; 

const TeamHeaderText = (props) => {
    return(
        <div className="our-team-header-text">
            <h1 className="scambi-text">{TeamInfo.teamName}</h1>
            <p className="text-left">{TeamInfo.teamDescription}</p>
            <button className="joinTeamButton mt-10">Join Our Team</button>
        </div>
    );
}

export default TeamHeaderText;