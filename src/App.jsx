import { useState } from 'react';
import './App.scss';
import './components/SearchBar';
import SearchBar from './components/SearchBar';

function App() {
	return (
		<div className="App">
			<h1 className="title">IP Address Tracker</h1>
			<SearchBar />
		</div>
	);
}

export default App;
