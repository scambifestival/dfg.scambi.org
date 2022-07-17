import React, { Component } from "react";
import "./OurTeam.css";
import TeamMemberCard from "./TeamMemberCard"

const TeamMembers = (TeamMembers) => {
    return(
        <div className="grid md:grid-cols-3 px-20 py-10">
        {
            TeamMembers.TeamMembers.map((member, i) => 
                <TeamMemberCard memberInfo={member} key={member.id} />
            )
        }
        </div>
    );
}

export default TeamMembers