import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/* Countdown logic credited to Author Avneesh Agarwal
https://blog.avneesh.tech/how-to-make-a-count-down-timer-in-react
*/

/* Framer motion credited to Framer.com
https://www.framer.com/docs/transition/
*/

const calculateRemainingTime = () => {
	const now = new Date();
	const start = new Date("2022-08-25T12:00:00+02:00");
	const difference = +start - +now;
	let remainingTime = {};

	remainingTime = {
		days: Math.floor(difference / (1000 * 60 * 60 * 24)),
		hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
		minutes: Math.floor((difference / 1000 / 60) % 60),
		seconds: Math.floor((difference / 1000) % 60)
	};

	return remainingTime;
};

export default function CountDown() {
	const [remainingTime, setRemainingTime] = useState(null);

	useEffect(() => {
		setRemainingTime(calculateRemainingTime());
		setInterval(() => {
			setRemainingTime(calculateRemainingTime());
		}, 1000);
	}, []);

	if (!remainingTime) return <div style={{ height: "300px" }}></div>;

	return (
		<motion.div className="text-center mt-16 mb-2 px-2 iPhoneSE:px-5">
			{remainingTime.days >= 0 ? (
				<div className="flex  flex-col">
					<h2 className="leading-tight font-medium">Counting down to Festival</h2>
					<div className="flex items-center justify-center mb-12">
						<motion.div
								initial={{ y: 200 }}
								whileInView={{
									y: 20,
									transition: {
										type: "spring",
										bounce: 0.5,
										duration: 1.5
									}
								}}
								viewport={{ once: true }}
								className="flex flex-col w-36 bg-white rounded-lg h-24 shadow-2xl mr-2">
								<h2>{remainingTime.days}</h2>
								<p> Days </p>
							</motion.div>
						<motion.div
							initial={{ y: 200 }}
							whileInView={{
								y: 20,
								transition: {
									type: "spring",
									bounce: 0.5,
									duration: 1.5,
									delay: 0.1
								}
							}}
							viewport={{ once: true }}
							className="flex flex-col w-36 bg-white rounded-lg h-24 shadow-2xl mr-2">
							<h2>{remainingTime.hours}</h2>
							<p> Hours </p>
						</motion.div>
						<motion.div
							initial={{ y: 200 }}
							whileInView={{
								y: 20,
								transition: {
									type: "spring",
									bounce: 0.5,
									duration: 1.5,
									delay: 0.2
								}
							}}
							viewport={{ once: true }}
							className="flex flex-col w-36 bg-white rounded-lg h-24 shadow-2xl mr-2">
							<h2>{remainingTime.minutes}</h2>
							<p> Minutes </p>
						</motion.div>
						<motion.div
							initial={{ y: 200 }}
							whileInView={{
								y: 20,
								transition: {
									type: "spring",
									bounce: 0.5,
									duration: 1.5,
									delay: 0.3
								}
							}}
							viewport={{ once: true }}
							className="flex flex-col w-36 bg-white rounded-lg h-24 shadow-2xl mr-0">
							<h2>{remainingTime.seconds}</h2>
							<p> Seconds </p>
						</motion.div>
					</div>
					<div>
						<h3>Tickets Available August 20th!</h3>
					</div>
				</div>
			) : remainingTime.days < 0 && remainingTime.days >= -3 ? (
				<h3>Scambi Festival 2022 Edition is Open!</h3>
			) : (
				<div>
					<h3>Thank you for joining Scambi Festival 2022 Edition!</h3>
					<h3>See you on the Next Edition!</h3>
				</div>
			)}
		</motion.div>
	);
}
