import React from 'react';
import { Link } from 'react-router-dom';
import EAfrica from '../QuizData/flagPics/africa/East_Africa.png';
import WAfrica from '../QuizData/flagPics/africa/West_Africa.png';
import NAfrica from '../QuizData/flagPics/africa/North_Africa.svg';
import SAfrica from '../QuizData/flagPics/africa/Southern_Africa.png';
import CentralAfrica from '../QuizData/flagPics/africa/Central_Africa.svg';

export default function FlagAfrica() {
	return (
		<div className="regionDiv">
			<h1 className="regionh1">Africa</h1>
			<div className="showRegion">
				<figure>
					<img src={NAfrica} id="regionImg" alt="regionImg" />
					<figcaption id="regionCap">
						<Link to="/flags/Africa/North-Africa/levels">Northern Africa</Link>
					</figcaption>
				</figure>
				<figure>
					<img src={SAfrica} id="regionImg" alt="regionImg" />
					<figcaption id="regionCap">
						<Link to="/flags/Africa/South-Africa/levels">Southern Africa</Link>
					</figcaption>
				</figure>
				<figure>
					<img src={WAfrica} id="regionImg" alt="regionImg" />
					<figcaption id="regionCap">
						<Link to="/flags/Africa/West-Africa/levels">Western Africa</Link>
					</figcaption>
				</figure>
				<figure>
					<img src={EAfrica} id="regionImg" alt="regionImg" />
					<figcaption id="regionCap">
						<Link to="/flags/Africa/East-Africa/levels">Eastern Africa</Link>
					</figcaption>
				</figure>
				<figure>
					<img src={CentralAfrica} id="regionImg" alt="regionImg" />
					<figcaption id="regionCap">
						<Link to="/flags/Africa/Central-Africa/levels">Central Africa</Link>
					</figcaption>
				</figure>
			</div>
		</div>
	);
}
