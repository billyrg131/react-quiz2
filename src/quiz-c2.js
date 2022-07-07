import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import countryQuestions1 from './QuizData/data/generalQA/countries1';
import './quiz.css';

export default function CountryQuiz2() {
	const [currentQ, setCurrentQ] = useState(0);
	const [score, setScore] = useState(0);
	const [showResults, putResults] = useState(false);

	const putAnswer = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}
		if (currentQ + 1 < countryQuestions1.length) {
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
						Scored: {score}/ {countryQuestions1.length}
					</p>
					<p className="reviewp">
						Percentage: {Math.round((score / countryQuestions1.length) * 100)}%
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
					<div className="quizDiv">
						<div className="question">
							<div>
								<h1 style={{ textAlign: 'center' }}>
									Question {currentQ + 1} of {countryQuestions1.length}
								</h1>
							</div>
							<div>
								<p style={{ fontSize: '21px' }}>
									{countryQuestions1[currentQ].text}
								</p>
							</div>
						</div>
					</div>

					<div className="choiceDiv">
						{countryQuestions1[currentQ].options.map((option) => (
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
