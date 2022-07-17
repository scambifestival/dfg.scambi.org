import React from "react";
import "./Flex.css";

const Flex = ({ children, classes, reverse = false }) => {
	return (
		<div
			className={`${classes} flex-container w-full h-fit px-16 py-10 space-y-10 flex flex-col md:w-10/12 ${
				reverse ? "md:flex-row-reverse" : "md:flex-row"
			} justify-center items-center`}>
			{children}
		</div>
	);
};

export default Flex;
