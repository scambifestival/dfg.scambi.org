import React from 'react';
import Header from './Header';
import NLSubscribe from './NLSubscribe';
import Testimonials from './Testimonials';
// import Map from '../../components/map';

const Home = () => {
	return (
		<div className='mainhome-container'>
			<Header />
		
			<Testimonials />
			<div className='flex justify-center px-14 py-10 font-normal bg-white sm:px-20 lg:px-24 xl:px-42 2xl:px-60'>
				<p className='text-3xl sm:leading-relaxed sm:text-4xl xl:text-5xl xl:leading-relaxed 2xl:leading-loose'>
					“Our purpose is to recover the value
					of <span className="font-bold text-3xl sm:text-4xl xl:text-5xl">communication</span> and <span className="font-bold text-3xl sm:text-4xl xl:text-5xl">meeting</span>,
					often forgotten or hidden behind a two-dimentional screen. Scambi is a multi-dimensional universe,
					where distant “planets” have the possibility to interact with each other.”
				</p>
			</div>
			<NLSubscribe />
			{/* <Map /> */}
		</div>
	);
};

export default Home;