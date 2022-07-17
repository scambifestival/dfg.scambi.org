import React, { Component } from 'react';
import './NLSubscribe.css';
import SubscribeImage from '../../assets/subscribe/SubscribeImage.png';
import EmailValidation from './../../components/emailValidation/EmailValidation';

class NLSubscribe extends Component {
	render() {
		return (
			<div className='main-container px-10'>
				<div className='left-container hidden 2xl:block'>
					<img src={SubscribeImage} alt='' />
				</div>
				<div className='right-container rounded-3xl 2xl:rounded-none 2xl:rounded-r-3xl'>
					<div className='inner-container'>
						<div className='upper-subtitle'>
							exchanges of letters, our newsletter
						</div>
						<div className='title'>Scambi Epistolari</div>
						<div className='lower-subtitle'>
							Join the conversation - sign up now to receive updates on Scambi
							activities.
						</div>
						<div className='email-fields'>
							<EmailValidation fileName='NLSubscribe'>
								Subscribe
							</EmailValidation>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default NLSubscribe;
