import React, { Component } from 'react';
import Helloworld from './components/Helloworld';
import SearchableList from './components/SearchableList';
import ListWithArchive from './components/withArchiveList';

class App extends Component {
	state = {
		lists: [
			{
				name: 'To do',
				id: 0
			},
			{
				name: 'Great',
				id: 1
			},
			{
				name: 'Done',
				id: 2
			},
			{
				name: 'Doing',
				id: 3
			}
		]
	}

	render () {
		return (
			<div className="App">
				<Helloworld />
				<ListWithArchive lists={ this.state.lists } />
				{/* <SearchableList  /> */}
			</div>
		);
	}
}

export default App;
