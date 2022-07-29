import './App.scss';
import InfoBar from './components/InfoBar';
import SearchBar from './components/SearchBar';

function App() {
	const onEnterPress = e => {
		if (e.key === 'Enter') {
			sendIp(e);
		}
	};

	const sendIp = e => {
		e.preventDefault();
		// TODO: Make a regex validation to ip or domine
		console.log(e);
	};

	return (
		<div className="App">
			<h1 className="title">IP Address Tracker</h1>
			<SearchBar sendIp={sendIp} onEnterPress={onEnterPress} />
			<InfoBar
				ip="192.212.174.101"
				timeZone="-05:00"
				location="Brooklyn, NY 10001"
				isp="SpaceX StarLink"
			/>
		</div>
	);
}

export default App;
