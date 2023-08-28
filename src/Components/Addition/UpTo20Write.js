import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown, faFaceSmile } from "@fortawesome/free-regular-svg-icons";

function Upto20Write() {
	const [randomNumber1, setRandomNumber1] = useState(null);
	const [randomNumber2, setRandomNumber2] = useState(null);
	const [correctAnswer, setCorrectAnswer] = useState(null);
	const [userInput, setUserInput] = useState("");
	const [isCorrect, setIsCorrect] = useState(false);
	const [score, setScore] = useState(0);
	const [showNextQuestionButton, setShowNextQuestionButton] = useState(false);

	useEffect(() => {
		generateRandomNumbers();
	}, []);

	useEffect(() => {
		if (userInput !== "") {
			setShowNextQuestionButton(true);
		} else {
			setShowNextQuestionButton(false);
		}
	}, [userInput]);

	const generateRandomNumbers = () => {
		const possibleNumbers = [];
		for (let i = 1; i <= 20; i++) {
			possibleNumbers.push(i);
		}

		const newRandomNumber1 =
			possibleNumbers[Math.floor(Math.random() * possibleNumbers.length)];
		const maxRandomNumber2 = 20 - newRandomNumber1;
		const newRandomNumber2 = Math.floor(
			Math.random() * (maxRandomNumber2 + 1)
		);
		setRandomNumber1(newRandomNumber1);
		setRandomNumber2(newRandomNumber2);
		setCorrectAnswer(newRandomNumber1 + newRandomNumber2);
	};

	const handleUserInput = (event) => {
		setUserInput(event.target.value);
	};

	const checkAnswer = () => {
		if (userInput === correctAnswer.toString()) {
			setIsCorrect(true);
			setScore(score + 1);
		} else {
			setIsCorrect(false);
		}
	};

	const nextQuestion = () => {
		generateRandomNumbers();
		setUserInput("");
		setIsCorrect(false);
		setShowNextQuestionButton(false);
	};

	return (
		<main className="main-dzialy">
			<div className="dzialy-mobile">
				<div className="d-flex justify-content-center align-items-center">
					<ul className="text-center">
						<div>Dodawanie do</div>
						<div className="result">
							{isCorrect === true ? (
								<FontAwesomeIcon icon={faFaceSmile} />
							) : isCorrect === false ? (
								<FontAwesomeIcon icon={faFaceFrown} />
							) : null}
						</div>
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
						<div className="userinput">
							<input
								type="number"
								value={userInput}
								onChange={handleUserInput}
								max="20"
							/>
							<button
								onClick={() => {
									checkAnswer();
									setShowNextQuestionButton(true);
								}}
								disabled={!showNextQuestionButton}
							>
								Sprawdź
							</button>
						</div>
						{showNextQuestionButton && (
							<div>
								<button onClick={nextQuestion}>
									Następne pytanie
								</button>
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

export default Upto20Write;
