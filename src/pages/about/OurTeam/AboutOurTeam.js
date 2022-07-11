import React, { Component } from 'react';
import './../About.css';
import ourTeampic from './../../../assets/about/ourTeam.png';
import Flex from './../../../components/Flex/Flex';
import AboutTeamText from './AboutTeamText';

class AboutOurTeam extends Component {
	render() {
		return (
			<Flex>
				<AboutTeamText />
				<div>
					<img src={ourTeampic} width='600px' height='200px' alt='' />
				</div>
			</Flex>
		);
	}
}

export default AboutOurTeam;
