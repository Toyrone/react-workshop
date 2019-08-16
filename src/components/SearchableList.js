import React from 'react';
import Search from './Search';
import List from './List';

class SearchableList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			query: ''
		}
		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		this.setState({
			query: e.target.value
		});
	}
	
	render() {
		const { list } = this.props;
		const { query } = this.state;

		const filteredList = list.filter(byQuery(query));

		return (
			<div>
				<Search 
					query={query}
					onChange={this.onChange}>Search List:</Search>
				<List lists={filteredList} />
			</div>
		);
	}
}

function byQuery(query) {
	return function(item) {
		return !query || 
			item.name.toLowerCase().includes(query.toLowerCase());
	}
}

export default SearchableList;