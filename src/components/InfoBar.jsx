import React from 'react';

const InfoBar = ({ ip, location, timeZone, isp }) => {
	return (
		<div className="infoBox">
			<div>
				<div>
					<h4>IP ADDRESS</h4>
					<h1>{ip}</h1>
				</div>
				<hr />
				<div>
					<h4>LOCATION</h4>
					<h1>{location}</h1>
				</div>
				<hr />

				<div>
					<h4>TIMEZONE</h4>
					<h1>UTC {timeZone}</h1>
				</div>
				<hr />
				<div>
					<h4>ISP</h4>
					<h1>{isp}</h1>
				</div>
			</div>
		</div>
	);
};

export default InfoBar;
