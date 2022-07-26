import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronRight } from '../icons/chevron';

export default function Accordion({ content }) {
	return (
		<AnimateSharedLayout>
			<motion.ul
				layout
				className='rounded-2xl border-[1px] border-primary lg:max-w-[70vw] bg-white'>
				{content.map((el, index) => (
					<Item
						key={index}
						question={el.question}
						answer={el.answer}
						first={index === 0}
						last={index === content.length - 1}
					/>
				))}
			</motion.ul>
		</AnimateSharedLayout>
	);
}

function Item({ first, last, question, answer }) {
	const [isOpen, setIsOpen] = useState();

	const toggleOpen = () => setIsOpen(!isOpen);
	return (
		<motion.li layout onClick={toggleOpen}>
			<motion.div
				layout
				className={`flex p-3 border-primary ${
					isOpen ? 'bg-primary-selected text-primary' : ''
				} ${first && 'rounded-t-2xl'} ${last ? '' : 'border-b-[1px]'}`}>
				<p className='mr-3'>{question}</p>
				<ChevronRight />
			</motion.div>
			<AnimatePresence>{isOpen && <Answer answer={answer} />}</AnimatePresence>
		</motion.li>
	);
}

function Answer({ answer }) {
	return (
		<motion.p
			layout
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className='p-3 border-b-[1px] border-primary'>
			{answer}
		</motion.p>
	);
}
