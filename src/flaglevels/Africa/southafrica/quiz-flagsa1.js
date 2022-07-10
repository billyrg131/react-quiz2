import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SAfrQ from '../../../QuizData/data/africa/southafrica/flags-safr';

function FlagQuizSAfrica1() {
	const [currentQ, setCurrentQ] = useState(0);
	const [score, setScore] = useState(0);
	const [showResults, putResults] = useState(false);

	const putAnswer = (isCorrect) => {
		if (isCorrect) {
			console.log(isCorrect);
			setScore(score + 1);
		}
		if (currentQ + 1 < SAfrQ.length) {
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
						Scored: {score}/ {SAfrQ.length}
					</p>
					<p className="reviewp">
						Percentage: {Math.round((score / SAfrQ.length) * 100)}%
					</p>
					<button className="restart" onClick={() => Restart()}>
						Restart Game
					</button>
					<li className="nxtLvlBtn">
						<Link to="/flags/Africa/South-Africa/levels/2">Next Level</Link>
					</li>
				</div>
			) : (
				<div>
					<div className="flagDiv">
						<img
							src={SAfrQ[currentQ].flag}
							className="flagImg"
							alt="Flag Img"
						/>
					</div>
					<div className="quizDiv">
						<div className="question">
							<div>
								<h1 style={{ textAlign: 'center' }}>
									Question {currentQ + 1} of {SAfrQ.length}
								</h1>
							</div>
							<div>
								<p style={{ fontSize: '21px' }}>{SAfrQ[currentQ].text}</p>
							</div>
						</div>
					</div>

					<div className="choiceDiv">
						{SAfrQ &&
							SAfrQ[currentQ].options.map((option) => (
								<li
									onClick={() => putAnswer(option.isCorrect)}
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

export default FlagQuizSAfrica1;
