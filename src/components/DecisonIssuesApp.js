import React from 'react';

import AddOptions from './AddOptions';
import Options from './Options';
import Action from './Action';
import Header from './Header';

export default class DecisionIssues extends React.Component{

    state = {
        options: []
    };

	removeAll = () => {
		this.setState(() => ({options: []}));
	};

	makeADecision = () => {
		const randomNum = Math.floor(Math.random() * this.state.options.length);
    	const option = this.state.options[randomNum];
    	alert(option);
	};

	addOption = (option) => {
		if(!option){
			return 'Enter valid option';
		} else if(this.state.options.indexOf(option) > -1){
			return 'Item already present';
		}

		// concat instead of push to avoid mutating state directly
		this.setState((prevState) => ({options: prevState.options.concat(option)}));
	};

	removeItem = (item) => {
		this.setState((prevState) => {
			return {
				options: prevState.options.filter((option) => option !== item)
			};
		});
	};

    componentDidMount() {
		// To work around illegal data
		try {
			const json = localStorage.getItem('options');
			const options = JSON.parse(json);
	
			if(options)
				this.setState(() => ({options}));
		} catch (error) {
			
		}
	}

	componentDidUpdate(prevProps, prevState) {
		// Save to local storage only if diff exists
		if(prevState.options.length !== this.state.options.length){
			const json = JSON.stringify(this.state.options);
			// Persistence
			localStorage.setItem('options', json);
		}
	}

    render(){
        const subTitle = 'Mellenials! Let A computer decide for you';
        return (
            <div>
                <Header subTitle={subTitle}/>
				<Action 
					hasOptions={this.state.options.length > 0}
					makeADecision={this.makeADecision}
				/>
				<Options
					removeAll={this.removeAll}
					options={this.state.options}
					removeItem={this.removeItem}
				/>
                <AddOptions addOption={this.addOption}/>
            </div>
        );
    }
}