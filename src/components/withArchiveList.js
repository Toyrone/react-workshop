import React from 'react';
import List from './List';

function withArchive(Component) {
	class WithArchive extends React.Component {
		constructor(props) {
			super(props);
	
			this.state = {
				archivedLists: []
			}
	
			this.onArchive = this.onArchive.bind(this);
		}
	
		onArchive(id) {
			this.setState((state) => ({
				archivedLists: [...this.state.archivedLists, id]
			}));
		}
	
		render() {
			const { archivedLists } = this.state;
	
			const filteredLists  = this.props.lists.filter(byArchived(archivedLists));
	
			return (
				<ul>
					{ filteredLists.map(list => 
						<li key={list.id}>
							<span>{list.name}</span>
							<span>
								<button type="button"
									onClick={() => this.onArchive(list.id)}>
									Archive
								</button>
							</span>
						</li>
					)}
				</ul>
			);
		}
	}

	return WithArchive
}

function byArchived(archives) {
	return function(item) {
		return !archives.includes(item.id);
	}
}

const ListWithArchive = withArchive(List)

export default ListWithArchive;