import React from 'react'

function List(props) {
	const { listItem, showDetails, type } = props
	return (
		<>
			<li key={listItem.id} data-id={listItem.id} onClick={() => showDetails(listItem.id, type)}>
				{listItem.name ? listItem.name : listItem.title}
			</li>
		</>
	)
}


export default List