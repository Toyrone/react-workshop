import React from 'react';

function Search ({query, onChange, children}) {
	
	// handleSubmit(e) {
	// 	// this.props.onSearch(this.state.query);
	// 	console.log(this.state.query);
	// 	e.preventDefault();
	// }

	// onChange(e) {
	// 	this.setState({
	// 		query: e.target.value
	// 	});
	// }
	return (
		<div>
			<input value={query} onChange={onChange} type="text" />
			<button type="submit">Search</button>
		</div>
	);
}

export default Search;