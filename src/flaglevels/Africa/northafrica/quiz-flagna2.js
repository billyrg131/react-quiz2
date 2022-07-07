import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NAfrQ2 from '../../../QuizData/data/africa/northafrica/flags-nafr2';

function FlagQuizNAfrica2() {
	const [currentQ, setCurrentQ] = useState(0);
	const [score, setScore] = useState(0);
	const [showResults, putResults] = useState(false);

	const putAnswer = (isCorrect) => {
		if (isCorrect) {
			console.log(isCorrect);
			setScore(score + 1);
		}
		if (currentQ + 1 < NAfrQ2.length) {
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
						Scored: {score}/ {NAfrQ2.length}
					</p>
					<p className="reviewp">
						Percentage: {Math.round((score / NAfrQ2.length) * 100)}%
					</p>
					<button className="restart" onClick={() => Restart()}>
						Restart Game
					</button>
					<li className="nxtLvlBtn">
						<Link to="#">Next Level</Link>
					</li>
				</div>
			) : (
				<div>
					<div className="flagDiv">
						<img
							src={NAfrQ2[currentQ].flag}
							className="flagImg"
							alt="Flag Img"
						/>
					</div>
					<div className="quizDiv">
						<div className="question">
							<div>
								<h1 style={{ textAlign: 'center' }}>
									Question {currentQ + 1} of {NAfrQ2.length}
								</h1>
							</div>
							<div>
								<p style={{ fontSize: '21px' }}>{NAfrQ2[currentQ].text}</p>
							</div>
						</div>
					</div>

					<div className="choiceDiv">
						{NAfrQ2 &&
							NAfrQ2[currentQ].options.map((option) => (
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

export default FlagQuizNAfrica2;
