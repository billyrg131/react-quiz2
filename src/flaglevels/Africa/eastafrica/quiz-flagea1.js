import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import flagEAQ1 from '../../../QuizData/data/africa/eastafrica/flags-eafr1';

export default function FlagQuizEAfrica1() {
	const [currentQ, setCurrentQ] = useState(0);
	const [score, setScore] = useState(0);
	const [showResults, putResults] = useState(false);

	const putAnswer = (checkStatus) => {
		if (checkStatus) {
			console.log(checkStatus);
			setScore(score + 1);
		}
		if (currentQ + 1 < flagEAQ1.length) {
			setCurrentQ(currentQ + 1);
		} else {
			putResults(true);
		}
	};
	const Restart = () => {
		setScore(0);
		setCurrentQ(0);
		putResults(false);
	};

	return (
		<div>
			{showResults ? (
				<div className="review">
					<h1 className="reviewh1">Final Results</h1>
					<p className="reviewp">
						Scored: {score}/ {flagEAQ1.length}
					</p>
					<p className="reviewp">
						Percentage: {Math.round((score / flagEAQ1.length) * 100)}%
					</p>
					<button className="restart" onClick={() => Restart()}>
						Restart Game
					</button>
					<li className="nxtLvlBtn">
						<Link to="/flags/Africa/East-Africa/levels/2">Next Level</Link>
					</li>
				</div>
			) : (
				<div>
					<div className="flagDiv">
						<img
							src={flagEAQ1[currentQ].flag}
							className="flagImg"
							alt="Flag Img"
						/>
					</div>
					<div className="quizDiv">
						<div className="question">
							<div>
								<h1 style={{ textAlign: 'center' }}>
									Question {currentQ + 1} of {flagEAQ1.length}
								</h1>
							</div>
							<div>
								<p style={{ fontSize: '21px' }}>{flagEAQ1[currentQ].text}</p>
							</div>
						</div>
					</div>

					<div className="choiceDiv">
						{flagEAQ1[currentQ].options.map((option) => (
							<li
								onClick={() => putAnswer(option.checkStatus)}
								className="choiceBtn"
								key={option.id}
							>
								{option.choice}
							</li>
						))}
					</div>
				</div>
			)}
		</div>
	);
}
