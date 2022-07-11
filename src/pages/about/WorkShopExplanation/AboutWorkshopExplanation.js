import React, { Component } from 'react';
import AboutWorkShopText from './AboutWorkShopText';
import Flex from '../../../components/Flex/Flex';
import './../About.css';
import workshopPic from './../../../assets/about/workshop.jpg';

class AboutWorkshopExplanation extends Component {
	render() {
		return (
			<div className='white-background'>
				<Flex>
					<div className='oneSide'>
						<img
							src={workshopPic}
							className='borderImg'
							width='400px'
							height='400px'
							alt=''
						/>
					</div>
					<AboutWorkShopText style={{ backgroundColor: 'white' }} />
				</Flex>
			</div>
		);
	}
}

export default AboutWorkshopExplanation;
