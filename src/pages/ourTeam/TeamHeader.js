import React, {Component} from "react";
import TeamHeaderText from "./TeamHeaderText";
import TeamImage from "./TeamImage.png"

class TeamHeader extends Component {
    render() {
        return(
            <div className="grid grid-cols-2 items-center">
                <TeamHeaderText className="pr-10"/>
                <img src={TeamImage} className="our-team-image" alt="team" />
            </div>
        );
    }
}

export default TeamHeader;