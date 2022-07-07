import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import WAfrQ from '../../../QuizData/data/africa/westafrica/flags-wafr1';

function FlagQuizWAfrica1() {
	const [currentQ, setCurrentQ] = useState(0);
	const [score, setScore] = useState(0);
	const [showResults, putResults] = useState(false);

	const putAnswer = (isCorrect) => {
		if (isCorrect) {
			console.log(isCorrect);
			setScore(score + 1);
		}
		if (currentQ + 1 < WAfrQ.length) {
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
						Scored: {score}/ {WAfrQ.length}
					</p>
					<p className="reviewp">
						Percentage: {Math.round((score / WAfrQ.length) * 100)}%
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
							src={WAfrQ[currentQ].flag}
							className="flagImg"
							alt="Flag Img"
						/>
					</div>
					<div className="quizDiv">
						<div className="question">
							<div>
								<h1 style={{ textAlign: 'center' }}>
									Question {currentQ + 1} of {WAfrQ.length}
								</h1>
							</div>
							<div>
								<p style={{ fontSize: '21px' }}>{WAfrQ[currentQ].text}</p>
							</div>
						</div>
					</div>

					<div className="choiceDiv">
						{WAfrQ &&
							WAfrQ[currentQ].options.map((option) => (
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

export default FlagQuizWAfrica1;
