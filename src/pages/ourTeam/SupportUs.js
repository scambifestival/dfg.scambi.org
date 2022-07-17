import React from "react";
import Card from "../../components/card";
import "./OurTeam.css";
import VolunteerImage from "./Elechand icon.png"
import JoinUsIcon from "./Alien meeting icon.png"
import DonateIcon from "./Hearty icon 1.png"

const volunteer = () => {
    return(
        <>
            <h2 className="card-subtitle">Volunter with us</h2>
            <p className="card-text">Join us in the festivities and help from the inside!</p>
            <img src={VolunteerImage} className="volunteer-image" alt="volunteer icon" />
            <button className="joinTeamButton button-center">Volunteer</button>
        </>
    );
}

const getTickets = () => {
    return(
        <>
            <h2 className="card-subtitle">Join us Aug 25 - 28, 2022</h2>
            <p className="card-text">Celebrate with us this year, tickets are free of charge.</p>
            <img src={JoinUsIcon} className="get-tickets-image" alt="Join Us icon" />
            <button className="joinTeamButton button-center">Get Tickets</button>    
        </>
    );
}

const donate = () => {
    return(
        <>
            <h2 className="card-subtitle">Donate Securely</h2>
            <p className="card-text">Make a one-time or monthly donation to help run Scambi Festival.</p>
            <img src={DonateIcon} className="donate-image" alt="donate icon" />
            <button className="joinTeamButton button-center">Donate</button>
        </> 
    );
}

const SupportUs = (props) => {
    return(
        <div className="team-row support-us">
            <Card children={volunteer()} classes={"team-card volunteer-card"} />
            <Card children={getTickets()} classes={"team-card"} />
            <Card children={donate()} classes={"team-card"} />
        </div>
    );
}

export default SupportUs;