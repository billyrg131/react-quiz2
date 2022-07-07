import React from 'react';
import EEurope from '../QuizData/flagPics/East_Europe.jpeg';
import WEurope from '../QuizData/flagPics/western-europe-countries.webp';
import NEurope from '../QuizData/flagPics/North_Europe.webp';
import SEurope from '../QuizData/flagPics/South_Europe.webp';

export default function FlagEurope() {
	return (
		<div className="regionDiv">
			<h1 className="regionh1">Europe</h1>
			<div className="showRegion">
				<figure>
					<img src={NEurope} id="regionImg" alt="regionImg" />
					<figcaption id="regionCap">Northern Europe</figcaption>
				</figure>
				<figure>
					<img src={SEurope} id="regionImg" alt="regionImg" />
					<figcaption id="regionCap">Southern Europe</figcaption>
				</figure>
				<figure>
					<img src={WEurope} id="regionImg" alt="regionImg" />
					<figcaption id="regionCap">Western Europe</figcaption>
				</figure>
				<figure>
					<img src={EEurope} id="regionImg" alt="regionImg" />
					<figcaption id="regionCap">Eastern Europe</figcaption>
				</figure>
			</div>
		</div>
	);
}
