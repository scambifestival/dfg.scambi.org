import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import { ChevronLeft, ChevronRight } from '../icons/chevron';

export default function Carousel({ slides }) {
	const [width, setWidth] = useState(0);
	const carousel = useRef();

	useEffect(() => {
		setWidth(carousel.current.scrollWidth - carousel.current.clientWidth);
	}, []);

	return (
		<motion.div
			ref={carousel}
			className='overflow-hidden cursor-grab bg-white rounded-md px-5 SurfaceDuo:px-10 py-10 md:w-full'>
			<motion.div
				drag='x'
				dragConstraints={{ right: 0, left: (width * -1.015)}}
				className={`grid justify-start items-center space-x-5`}
				style={{gridTemplateColumns: `repeat(${slides.length},1fr)`}}
				>
				{slides.map((slide, index) => (
					<div key={index} className='inline-block w-[200px] SurfaceDuo:w-[400px]'>
						<Image
							src={slide}
							alt=''
							layout='responsive'
							width={475}
							objectFit='cover'
							objectPosition='center'
							className='rounded-2xl'
						/>
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
