import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Upto20() {
	const [randomNumber1, setRandomNumber1] = useState(null);
	const [randomNumber2, setRandomNumber2] = useState(null);
	const [correctAnswer, setCorrectAnswer] = useState(null);
	const [userChoice, setUserChoice] = useState(null);
	const [isCorrect, setIsCorrect] = useState(false);
	const [score, setScore] = useState(0);
	const [showNextQuestionButton, setShowNextQuestionButton] = useState(false);

	useEffect(() => {
		generateRandomNumbers();
	}, []);

	useEffect(() => {
		if (userChoice !== null) {
			const timeout = setTimeout(() => {
				generateRandomNumbers();
				setUserChoice(null);
				setIsCorrect(false);
				setShowNextQuestionButton(false);
			}, 3000); // Auto transition after 3 seconds
			return () => clearTimeout(timeout);
		}
	}, [userChoice]);

	const generateRandomNumbers = () => {
		const possibleSums = [];
		for (let i = 1; i <= 20; i++) {
			possibleSums.push(i);
		}

		const newRandomNumber1 =
			possibleSums[Math.floor(Math.random() * possibleSums.length)];
		const newRandomNumber2 = Math.floor(
			Math.random() * (21 - newRandomNumber1)
		);
		setRandomNumber1(newRandomNumber1);
		setRandomNumber2(newRandomNumber2);
		setCorrectAnswer(newRandomNumber1 + newRandomNumber2);
	};

	const generateUniqueOptions = () => {
		const options = [];
		while (options.length < 2) {
			const newRandomOption = Math.floor(Math.random() * 21);
			if (
				options.indexOf(newRandomOption) === -1 &&
				newRandomOption !== correctAnswer
			) {
				options.push(newRandomOption);
			}
		}
		options.push(correctAnswer);
		return options.sort(() => Math.random() - 0.5);
	};

	const handleUserChoice = (choice) => {
		setUserChoice(choice);
		setIsCorrect(choice === correctAnswer);
		if (choice === correctAnswer) {
			setScore(score + 1);
		}
		setShowNextQuestionButton(true);
	};

	return (
		<main className="main-dzialy">
			<div className="dzialy-mobile">
				<div className="d-flex justify-content-center align-items-center">
					<ul className="text-center">
						<div>Dodawanie do</div>
						<div className="row">
							<div className="firstNumber col">
								{randomNumber1}
							</div>
							<div className="add col">+</div>
							<div className="secondNumber col">
								{randomNumber2}
							</div>
							<div className="equal col">=</div>
						</div>
						<div className="userchoose">
							{generateUniqueOptions().map((option) => (
								<button
									key={option}
									className={`option-button ${
										userChoice === option
											? isCorrect
												? "correct"
												: "incorrect"
											: ""
									}`}
									onClick={() => handleUserChoice(option)}
									disabled={userChoice !== null}
								>
									{option}
								</button>
							))}
						</div>
						{userChoice !== null && (
							<div
								className={`feedback ${
									isCorrect ? "correct" : "incorrect"
								}`}
							>
								{isCorrect
									? "Correct!"
									: "Incorrect. Correct answer: " +
									  correctAnswer}
							</div>
						)}
						<div className="score">Score: {score}</div>

						<Link to="/add">
							<li className="list">Wróć</li>
						</Link>
					</ul>
				</div>
			</div>
		</main>
	);
}

export default Upto20;