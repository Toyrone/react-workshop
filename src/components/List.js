import React from 'react';

function List ({ lists, onArchive }) {
	
	return (
		<ul>
			{ lists.map(list => 
				<li key={list.id}>
					<span>{list.name}</span>
					<span>
						<button type="button"
							onClick={() => onArchive(list.id)}>
							Archive
						</button>
					</span>
				</li>
			)}
		</ul>
	);
}

export default List;