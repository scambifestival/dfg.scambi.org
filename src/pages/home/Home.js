import React from 'react';
import Header from './Header';
import NLSubscribe from './NLSubscribe';
import Purpose from './Purpose';
import Testimonials from './Testimonials';
import Map from '../../components/map';

const Home = () => {
	return (
		<div className='mainhome-container'>
			<Header />
			<Testimonials />	
			<Purpose />
			<NLSubscribe />
			<Map />
		</div>
	);
};

export default Home;