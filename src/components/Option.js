import React from 'react';

const Option = (props) => {
	return (
		<div>
			{props.optionText}
			<button
			className="button button--link"
			onClick= {
				() => {
				props.removeItem(props.optionText)
			}}>
				Remove
			</button>
		</div>
	);
}

export default Option;