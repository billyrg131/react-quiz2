import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
	return (
		<div>
			<h3 id="h1">Quiz App</h3>
			<nav className="nav">
				<ul>
					<li>
						<Link to="/countries">General</Link>
					</li>
					<li>
						<Link to="/flags">Flags</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}
