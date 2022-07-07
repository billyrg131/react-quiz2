import React from 'react';
import './quiz.css';
import { Link } from 'react-router-dom';

export default function CLevelPage() {
	return (
		<div className="countryLevel">
			<h1 style={{ textAlign: 'center' }}>Levels</h1>
			<div className="cLvlBtnDiv">
				<button className="cLvlBtn">
					<Link to="/countries/levels/1">Level 1</Link>
				</button>
				<button className="cLvlBtn">
					<Link to="/countries/levels/2">Level 2</Link>
				</button>
			</div>
		</div>
	);
}
