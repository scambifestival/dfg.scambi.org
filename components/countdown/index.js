import { useEffect, useState } from "react";
import { motion } from "framer-motion";
const calculateTimeLeft = () => {
	const now = new Date();
	const start = new Date("2022-08-25T09:30:00+02:00");
	const difference = +start - +now;
	let timeLeft = {};

	timeLeft = {
		days: Math.floor(difference / (1000 * 60 * 60 * 24)),
		hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
		minutes: Math.floor((difference / 1000 / 60) % 60),
		seconds: Math.floor((difference / 1000) % 60)
	};

	return timeLeft;
};

export default function CountDown() {
	const [timeLeft, setTimeLeft] = useState(null);

	useEffect(() => {
		setTimeLeft(calculateTimeLeft());
		setInterval(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);
	}, []);

	if (!timeLeft) return <div style={{ height: "300px" }}></div>;

	const config = {
		type: "spring",
		damping: 20,
		stiffness: 100
	};

	return (
		<motion.div className="text-center">
			{timeLeft.days >= 0 ? (
				<div className="flex  flex-col">
					<h2>Counting down to Festival</h2>
					<div className="flex items-center justify-center mb-12">
						<motion.div
							transition={config}
							initial={{ scale: 0, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ x: 0, opacity: 0 }}
							className="flex flex-col w-36 bg-white rounded-lg h-24 shadow-2xl mr-2">
							<h2>{timeLeft.days}</h2>
							<p> Days </p>
						</motion.div>
						<motion.div
							transition={config}
							initial={{ scale: 0, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ x: 0, opacity: 0 }}
							className="flex flex-col w-36 bg-white rounded-lg h-24 shadow-2xl mr-2">
							<h2>{timeLeft.hours}</h2>
							<p> Hours </p>
						</motion.div>
						<motion.div
							transition={config}
							initial={{ scale: 0, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ x: 0, opacity: 0 }}
							className="flex flex-col w-36 bg-white rounded-lg h-24 shadow-2xl mr-2">
							<h2>{timeLeft.minutes}</h2>
							<p> Minutes </p>
						</motion.div>
						<motion.div
							transition={config}
							initial={{ scale: 0, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ x: 0, opacity: 0 }}
							className="flex flex-col w-36 bg-white rounded-lg h-24 shadow-2xl mr-0">
							<h2>{timeLeft.seconds}</h2>
							<p> Seconds </p>
						</motion.div>
					</div>
					<div>
						<h3>Tickets Available August 20th!</h3>
					</div>
				</div>
			) : timeLeft.days < 0 && timeLeft.days >= -3 ? (
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

//https://blog.avneesh.tech/how-to-make-a-count-down-timer-in-react
//https://codesandbox.io/s/framer-motion-nextjs-page-transitions-d7fwk?file=/pages/index.js:303-450
