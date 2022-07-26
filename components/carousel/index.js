import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import { ChevronLeft, ChevronRight } from '../icons/chevron';

export default function Carousel({ slides }) {
	const [width, setWidth] = useState(0);
	const carousel = useRef();

	useEffect(() => {
		setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
	}, []);

	return (
		<motion.div
			ref={carousel}
			className='overflow-hidden cursor-grab bg-white rounded-md pt-10'>
			<motion.div
				drag='x'
				dragConstraints={{ right: width, left: -width }}
				className='flex items-center justify-center space-x-5 px-10'>
				{slides.map((slide, index) => (
					<div key={index} className='block w-[800px] h-[350px]'>
						<Image src={slide} alt='' layout='fixed' className='rounded-2xl' />
					</div>
				))}
			</motion.div>
		</motion.div>
	);
	{
		/*<div className='z-0 flex overflow-hidden flex-none items-center justify-center relative bg-white rounded-2xl py-10'>
			<div>
				<Image src={slides[current]} alt='' />
			</div>
			<div
				className='absolute top-1/2 left-8 z-10 rounded-full p-2 bg-primary text-white cursor-pointer'
				onClick={prevSlide}>
				<ChevronLeft />
			</div>
			<div
				className='absolute top-1/2 right-8 z-10 rounded-full p-2 bg-primary text-white cursor-pointer'
				onClick={nextSlide}>
				<ChevronRight />
			</div>
	</div>*/
	}
}
