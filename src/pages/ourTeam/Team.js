import React from "react";
import { useLocation } from "react-router";
import TeamHeader from "./TeamHeader";
import TeamMembers from "./TeamMembers";
import teamInfo from "./teamInfo.json"

const Team = (props) => {
    const location = useLocation();
    const teamLink = location.state;
    console.log(teamLink);
    return(
        <>
        <TeamHeader />
        <TeamMembers TeamMembers={teamInfo.teamMembers}/>
        </>
    );
}

export default Team;