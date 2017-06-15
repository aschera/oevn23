import React from 'react';

function History(props) {
  const reverse = props.history.reverse();
	const list = reverse.map( (x, index) => <li key={index} id={x.type}>{x.type}</li> );
	return <div>
	<br />
	<h4 className="title">History</h4>
	 <ul>{list}</ul>
	 </div>;
}

export default History;
