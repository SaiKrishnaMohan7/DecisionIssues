import React from 'react';

import Option from './Option';

const Options = (props) => {
	// key is a reserved, not passed in props hence optionText
	return (
		<div>
			<div className="widget-header">
				<h3 className="widget-header__title">Adulting Tasks:</h3>
				<button 
				className="button button--link"
				onClick={props.removeAll}
				>
					Remove All
				</button>
			</div>
			{
				props.options.length === 0 &&
				(<p className="widget__message">Add Items to get started</p>)
			}

			{
				props.options.map((option, index) => (
					<Option 
						key={option}
						optionText={option}
						count={index + 1}
						removeItem={props.removeItem}
					/>)
				)
			}
		</div>
	);
};

export default Options;