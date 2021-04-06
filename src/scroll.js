import React from 'react'
//import { robots } from './robots';

const Scroll = (props) => {
	return (
		<div style = {{overflowY: 'scroll', border: '1px solid back', height : '550px'}}>
			{props.children}
		</div>
	);
};

export default Scroll; 
