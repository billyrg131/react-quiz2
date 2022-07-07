import React from 'react';
import './quiz.css';
import CLevelPage from './countryLevelPage';
import FlagLevelPage from './menuComps/flagLevelPage';
import FlagAfrica from './menuComps/flagAfrica';
import FlagEurope from './menuComps/flagEurope';
import EAfricaLevel from './EAfricaLevel';
import WAfricaLevel from './WAfricaLevel';
import SAfricaLevel from './SAfricaLevel';
import NAfricaLevel from './NAfricaLevel';
import CAfricaLevel from './CAfricaLevel';
import CountryQuiz1 from './quiz-c1';
import CountryQuiz2 from './quiz-c2';
import FlagQuizCAfrica1 from './flaglevels/Africa/centralafica/quiz-flagca1';
import FlagQuizCAfrica2 from './flaglevels/Africa/centralafica/quiz-flagca2';
import FlagQuizNAfrica1 from './flaglevels/Africa/northafrica/quiz-flagna1';
import FlagQuizNAfrica2 from './flaglevels/Africa/northafrica/quiz-flagna2';
import FlagQuizEAfrica1 from './flaglevels/Africa/eastafrica/quiz-flagea1';
import FlagQuizEAfrica2 from './flaglevels/Africa/eastafrica/quiz-flagea2';
import FlagQuizWAfrica1 from './flaglevels/Africa/westafrica/quiz-flagwa1';
import FlagQuizWAfrica2 from './flaglevels/Africa/westafrica/quiz-flagwa2';
import FlagQuizSAfrica1 from './flaglevels/Africa/southafrica/quiz-flagsa1';
import FlagQuizSAfrica2 from './flaglevels/Africa/southafrica/quiz-flagsa2';
import Nav from './nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<div className="main">
			<BrowserRouter>
				<Nav />
				<Routes>
					<Route path="/countries" element={<CLevelPage />}></Route>
					<Route path="/countries/levels/1" element={<CountryQuiz1 />}></Route>
					<Route path="/countries/levels/2" element={<CountryQuiz2 />}></Route>
					<Route path="/flags" element={<FlagLevelPage />}></Route>
					<Route path="/flags/Africa" element={<FlagAfrica />}></Route>
					<Route path="/flags/Europe" element={<FlagEurope />}></Route>
					<Route
						path="/flags/Africa/Central-Africa/levels"
						element={<CAfricaLevel />}
					></Route>
					<Route
						path="/flags/Africa/Central-Africa/levels/1"
						element={<FlagQuizCAfrica1 />}
					></Route>
					<Route
						path="/flags/Africa/Central-Africa/levels/2"
						element={<FlagQuizCAfrica2 />}
					></Route>
					<Route
						path="/flags/Africa/East-Africa/levels"
						element={<EAfricaLevel />}
					></Route>
					<Route
						path="/flags/Africa/East-Africa/levels/1"
						element={<FlagQuizEAfrica1 />}
					></Route>
					<Route
						path="/flags/Africa/East-Africa/levels/2"
						element={<FlagQuizEAfrica2 />}
					></Route>
					<Route
						path="/flags/Africa/West-Africa/levels"
						element={<WAfricaLevel />}
					></Route>
					<Route
						path="/flags/Africa/West-Africa/levels/1"
						element={<FlagQuizWAfrica1 />}
					></Route>
					<Route
						path="/flags/Africa/West-Africa/levels/2"
						element={<FlagQuizWAfrica2 />}
					></Route>
					<Route
						path="/flags/Africa/North-Africa/levels"
						element={<NAfricaLevel />}
					></Route>
					<Route
						path="/flags/Africa/North-Africa/levels/1"
						element={<FlagQuizNAfrica1 />}
					></Route>
					<Route
						path="/flags/Africa/North-Africa/levels/2"
						element={<FlagQuizNAfrica2 />}
					></Route>
					<Route
						path="/flags/Africa/South-Africa/levels"
						element={<SAfricaLevel />}
					></Route>
					<Route
						path="/flags/Africa/South-Africa/levels/1"
						element={<FlagQuizSAfrica1 />}
					></Route>
					<Route
						path="/flags/Africa/South-Africa/levels/2"
						element={<FlagQuizSAfrica2 />}
					></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
