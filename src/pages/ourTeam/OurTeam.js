import React, {Component} from "react";
import OurTeamHeader from "./OurTeamHeader";
import Teams from "./Teams";
import "./OurTeam.css";

class OurTeam extends Component {
    render() {
        return(
            <>
                <OurTeamHeader />
                <Teams />
            </>
        );
    }
}

export default OurTeam;