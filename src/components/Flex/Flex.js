import React from "react";
import "./Flex.css";

const Flex = ({children, classes, reverse = false}) => {
	return (
		<div className={`${classes} flex-container w-full md:w-10/12 h-fit px-16 py-10 space-y-10 flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} justify-center items-center`}>
			{children}
		</div>
	);
};

export default Flex;
