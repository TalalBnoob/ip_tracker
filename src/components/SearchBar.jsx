import React from 'react';

const SearchBar = ({ sendIp, onEnterPress }) => {
	return (
		<div className="addBar">
			<form>
				<input
					className="bar"
					type="text"
					placeholder="Search for any IP address or domain"
					onKeyPress={e => onEnterPress(e)}
				/>
				<button className="btn" onClick={e => sendIp(e)}>
					{'>'}
				</button>
			</form>
		</div>
	);
};

export default SearchBar;
