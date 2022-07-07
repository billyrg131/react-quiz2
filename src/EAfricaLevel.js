import React from 'react';
import { Link } from 'react-router-dom';
export default function EAfricaLevel() {
	return (
		<div className="countryLevel">
			<h1 style={{ textAlign: 'center' }}>East Africa</h1>
			<h1 style={{ textAlign: 'center' }}>Levels</h1>
			<div className="cLvlBtnDiv">
				<button className="cLvlBtn">
					<Link to="/flags/Africa/East-Africa/levels/1">Level 1</Link>
				</button>
				<button className="cLvlBtn">
					<Link to="/flags/Africa/East-Africa/levels/2">Level 2</Link>
				</button>
			</div>
		</div>
	);
}
