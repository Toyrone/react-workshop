import React from 'react';
import CounterPresenter from './CounterPresenter'

class Counter extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			counter: 0
		}

		this.onDecrement = this.onDecrement.bind(this);
		this.onIncrement = this.onIncrement.bind(this);
	}

	onIncrement() {
		this.setState((state) => ({
			counter: state.counter + 1
		}));
	}

	onDecrement() {
		this.setState((state) => ({
			counter: state.counter - 1
		}));
	}

	render() {
		return (
			<CounterPresenter 
				counter={this.state.counter}
				onIncrement={this.onIncrement}
				onDecrement={this.onDecrement}/>
		);
	}
}

export default Counter