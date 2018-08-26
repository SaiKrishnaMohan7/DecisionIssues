import React from 'react';

const Action = (props) => {
	return (
		<div>
			<button
				className="big-button"
				disabled={!props.hasOptions}
				onClick={props.makeADecision}>
				What's to be Done?
			</button>
		</div>
	);
};

export default Action;