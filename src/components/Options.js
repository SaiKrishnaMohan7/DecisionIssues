import React from 'react';

import Option from './Option';

const Options = (props) => {
	// key is a reserved, not passed in props hence optionText
	return (
		<div>
			<button 
			className="button button--link"
			onClick={props.removeAll}
			>
				Remove All
			</button>
			{props.options.length === 0 && (<p>Add Items to get started</p>)}
			{
				props.options.map((option) => (
					<Option 
						key={option}
						optionText={option}
						removeItem={props.removeItem}
					/>)
				)
			}
		</div>
	);
};

export default Options;