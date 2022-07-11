import React from "react";
import "./Flex.css";

const Flex = ({children, classes = "", reverse = false}) => {
	return (
		<div className={`w-full h-fit flex flex-container md:space-x-4 md:space-y-0 ${reverse ? "flex-row-reverse" : "flex-row"} ${classes}`}>
			{children}
		</div>
	);
};

export default Flex;
