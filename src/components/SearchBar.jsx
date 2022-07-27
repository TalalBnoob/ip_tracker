import React from 'react';

const SearchBar = () => {
	return (
		<div className="addBar">
			<input className="bar" type="text" placeholder="Search for any IP address or domain" />
			<input className="btn" type="submit" value=">" />
		</div>
	);
};

export default SearchBar;
