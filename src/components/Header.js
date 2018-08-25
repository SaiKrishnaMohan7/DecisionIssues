import React from 'react';

// <Header></Header> is fine too!
// If a component doesn't really involve itslef with its state, fucntional Components

const Header = (props) => {
	// Props are passed as 1st arg into funvtional components, they are faster since there's no Class data

	return (
		<div>
            <h1>{props.title}</h1>
            {props.subTitle && (<h2>{props.subTitle}</h2>)}
        </div>
	);
};

Header.defaultProps = {
	title: 'Decision Issues'
};

export default Header;