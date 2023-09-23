import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown, faFaceSmile } from "@fortawesome/free-regular-svg-icons";

function SubtractionUpTo5() {
	const [number1, setNumber1] = useState(null);
	const [number2, setNumber2] = useState(null);
	const [correctAnswer, setCorrectAnswer] = useState(null);
	const [userChoice, setUserChoice] = useState(null);
	const [isCorrect, setIsCorrect] = useState(false);
	const [points, setPoints] = useState(0);
	const [showNextQuestion, setShowNextQuestion] = useState(false);
	const [previousDifference, setPreviousDifference] = useState(null);
	const [timeRemaining, setTimeRemaining] = useState(10);

	useEffect(() => {
		generateRandomNumbers();
	}, []);

	useEffect(() => {
		let timer;

		if (isCorrect) {
			timer = setInterval(() => {
				setTimeRemaining((prevTime) => prevTime - 1);
			}, 1000);
		} else {
			clearInterval(timer);
		}

		if (timeRemaining === 0) {
			clearInterval(timer);
			setIsCorrect(false);
			setUserChoice(null);

			setTimeout(() => {
				setCorrectAnswer(null);
				generateRandomNumbers();
				setTimeRemaining(10);
				setShowNextQuestion(false);
			}, 2000);
		}

		return () => {
			clearInterval(timer);
		};
	}, [timeRemaining, isCorrect]);

	const generateRandomNumbers = () => {
		const possibleNumbers = [0, 1, 2, 3, 4, 5];
		const newRandomNumber1 =
			possibleNumbers[Math.floor(Math.random() * possibleNumbers.length)];

		let newRandomNumber2;
		do {
			newRandomNumber2 = Math.floor(
				Math.random() * (newRandomNumber1 + 1)
			);
		} while (
			(previousDifference === 4 &&
				(newRandomNumber1 === 0 || newRandomNumber2 === 0)) ||
			(newRandomNumber1 === number1 && newRandomNumber2 === number2)
		);

		setNumber1(newRandomNumber1);
		setNumber2(newRandomNumber2);
		setCorrectAnswer(newRandomNumber1 - newRandomNumber2);
		setPreviousDifference(newRandomNumber1 - newRandomNumber2);
		setShowNextQuestion(true);
	};

	const generateUniqueOptions = () => {
		const options = [];
		while (options.length < 2) {
			const newRandomOption = Math.floor(Math.random() * 6);
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

	const startTimer = () => {
		setShowNextQuestion(true);
	};

	const handleUserChoice = (choice) => {
		setUserChoice(choice);
		setIsCorrect(choice === correctAnswer);
		if (choice === correctAnswer) {
			setPoints(points + 1);
		}
	};

	return (
		<main className="main-dzialy">
			<div className="dzialy-mobile">
				<div className="d-flex justify-content-center align-items-center">
					<ul className="text-center">
						<div>Odejmowanie do 5</div>
						<div className="result">
							{isCorrect ? (
								<FontAwesomeIcon icon={faFaceSmile} />
							) : (
								<FontAwesomeIcon icon={faFaceFrown} />
							)}
						</div>
						<div className="row">
							<div className="firstNumber col">{number1}</div>
							<div className="subtract col">-</div>
							<div className="secondNumber col">{number2}</div>
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
						<div>Czas: {timeRemaining} s</div>
						<div>Punkty: {points}</div>

						<Link style={{ textDecoration: "none" }} to="/sub">
							<li className="list-mobile">Wybierz inny poziom</li>
						</Link>
						<Link style={{ textDecoration: "none" }} to="/">
							<li className="list-mobile">Powrót do menu</li>
						</Link>
					</ul>
				</div>
			</div>
		</main>
	);
}

export default SubtractionUpTo5;
