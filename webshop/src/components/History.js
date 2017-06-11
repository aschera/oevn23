import React from 'react';

function History(props) {

	const list = props.history.map( (x, index) => <li key={index}>{x.type}</li> );
	return <div>History: <ul>{list}</ul></div>;
}

export default History;
