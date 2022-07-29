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
			className='overflow-hidden cursor-grab bg-white rounded-md px-10 py-10 md:w-full'>
			<motion.div
				drag='x'
				dragConstraints={{ right: 0, left: (width + 40) * -1 }}
				className='flex items-center justify-start space-x-5'>
				{slides.map((slide, index) => (
					<div key={index} className='block w-[800px] h-fit'>
						<Image
							src={slide}
							alt=''
							layout='fixed'
							// objectFit='cover'
							// objectPosition='center'
							className='rounded-2xl' />
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
