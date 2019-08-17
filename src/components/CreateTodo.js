import React from 'react';

class CreateTodo extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: ''
		}

		this.createTodo = this.createTodo.bind(this);
		this.handleChange = this.handleChange.bind(this);

	}

	createTodo(e) {
		this.props.onAddTodo(this.state.value);
		this.setState({
			value: ''
		});
		e.preventDefault();
	}

	handleChange(e) {
		this.setState({
			value: e.target.value
		});
	}

	render() {
		return (
			<div>
				<form onSubmit={this.createTodo}>
					<input placeholder="Add todo..." type="text" value={this.state.value} onChange={this.handleChange} />
					<button type="submit">Create To do</button>
				</form>
			</div>
		)
	}
}

export default CreateTodo;