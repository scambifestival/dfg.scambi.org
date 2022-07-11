import React, { Component } from 'react';
import './About.css';
import pic2 from './../../assets/lab/gallery/rec1.png';
import pic3 from './../../assets/lab/gallery/rec10.png';

class AboutExampleWorkshop extends Component {
	render() {
		return (
			<div className='aboutExampleWorkshop-container'>
				<div className='aboutExampleWorkshop-text'>
					<h2>Workshops we held in Scambi 2021, "Meeting"</h2>
					<i class='fa fa-angle-right' aria-hidden='true'></i>
				</div>
				<div className='exmapleImages'>
					<div className='example1'>
						{' '}
						<img src='#' alt='' />
						<p>Street Art</p>
					</div>
					<div className='example2'>
						{' '}
						<img src={pic2} width='200px' height='100px' alt='' />
						<p>Rifugiato per un giorno</p>
					</div>
					<div className='example3'>
						{' '}
						<img src={pic3} width='200px' height='200px' alt='' />
						<p>Scambi Sounds Lab</p>
					</div>
				</div>
			</div>
		);
	}
}

export default AboutExampleWorkshop;
