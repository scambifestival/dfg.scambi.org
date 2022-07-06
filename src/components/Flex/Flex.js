import React from 'react';
import './Flex.css';

const Flex = (props) => {
	return (
		<div className={`flex-container ${props.classes}`}>{props.children}</div>
	);
};

export default Flex;
