//import { computeHeadingLevel } from "@testing-library/react";
import React, { Component } from 'react';
import TeamHeaderText from './TeamHeaderText';
import TeamImage from '../../assets/team/TeamImage.png';

class TeamHeader extends Component {
	render() {
		return (
			<div className='grid grid-cols-2 items-center'>
				<TeamHeaderText className='pr-10' />
				<img src={TeamImage} className='our-team-image' alt='' />
			</div>
		);
	}
}

export default TeamHeader;
