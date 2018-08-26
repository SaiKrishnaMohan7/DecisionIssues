import React from 'react';

// This kinda export fine with class definitions but not with variables or class expressions
export default class AddOptions extends React.Component{

	// We make use of transform-class-properties babel plugin to define properties without a constructor
	// in .babelrc file, the spec option to the above plugin defaults to false so the Class properties are compiled using
	// Object.setProperty()

	// child components own state
	state =  {
		error: undefined
	};

	// We still use this method to do some prep for the addOption that is on the parent component
	addOption = (e) => {
		e.preventDefault();
		const option = e.target.elements.option.value.trim();
		const error = this.props.addOption(option);

		// error handling
		this.setState(() => ({error}));

		if(!error){
			e.target.elements.option.value = '';
		}
	};

    render(){
        return (
			<div>
				{this.state.error && (<p className="add-option-error">{this.state.error}</p>)}
				<form className="add-option" onSubmit={this.addOption}>
					<input className="add-option__input" type='text' name='option'></input>
					<button className="button">Add Option</button>
				</form>
            </div>
        );
    }
}