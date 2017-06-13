import React from 'react';

function History(props) {

	const list = props.history.map( (x, index) => <li key={index} id={x.type}>{x.type}</li> );
	return <div>
	<h4>History</h4>
	 <ul>{list}</ul>
	 </div>;
}

export default History;
