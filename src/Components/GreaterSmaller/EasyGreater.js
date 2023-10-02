import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown, faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import { faHeart, faHeartCrack } from "@fortawesome/free-solid-svg-icons";

function EasySmaller() {
	const [number1, setNumber1] = useState(0);
	const [number2, setNumber2] = useState(0);
	const [result, setResult] = useState(null);
	const [points, setPoints] = useState(0);
	const [isComparing, setIsComparing] = useState(false);
	const [timeRemaining, setTimeRemaining] = useState(10);
	const [lives, setLives] = useState(3);
	const [gameOver, setGameOver] = useState(false);
	const [incorrectAnswers, setIncorrectAnswers] = useState(0);

	useEffect(() => {
		generateRandomNumbers();
	}, []);

	useEffect(() => {
		let timer;

		if (isComparing) {
			timer = setInterval(() => {
				setTimeRemaining((prevTime) => prevTime - 1);
			}, 1000);
		} else {
			clearInterval(timer);
		}

		if (timeRemaining === 0) {
			clearInterval(timer);
			setResult("incorrect");
			setLives((prevLives) => prevLives - 1);
			setIsComparing(false);
			setIncorrectAnswers((prevIncorrect) => prevIncorrect + 1);
		}

		if (result === "incorrect") {
			setTimeout(() => {
				setResult(null);
				generateRandomNumbers();
				startTimer();
			}, 2000);
		}

		if (incorrectAnswers >= 3) {
			setGameOver(true);
		}

		return () => {
			clearInterval(timer);
		};
	}, [timeRemaining, isComparing, result, incorrectAnswers]);

	const generateRandomNumbers = () => {
		setTimeRemaining(10);
		const randomNum1 = Math.floor(Math.random() * 11);
		let randomNum2 = randomNum1;

		while (randomNum2 === randomNum1) {
			randomNum2 = Math.floor(Math.random() * 11);
		}

		setNumber1(randomNum1);
		setNumber2(randomNum2);
		setResult(null);
		startTimer();
	};

	const startTimer = () => {
		setIsComparing(true);
	};

	const handleComparison = (selectedNumber) => {
		if (isComparing) {
			setIsComparing(false);

			let isCorrect = false;

			if (
				(selectedNumber === "number1" && number1 > number2) ||
				(selectedNumber === "number2" && number2 > number1)
			) {
				setResult("correct");
				isCorrect = true;
			} else {
				setResult("incorrect");
				setLives((prevLives) => prevLives - 1);
				setIncorrectAnswers((prevIncorrect) => prevIncorrect + 1);
			}

			setTimeout(() => {
				setResult(null);
				generateRandomNumbers();
			}, 2000);

			if (isCorrect) {
				setPoints(points + 1);
			}
		}
	};

	const generateHeartIcons = () => {
		const heartIcons = [];
		for (let i = 0; i < 3 - lives; i++) {
			heartIcons.push(
				<FontAwesomeIcon
					icon={faHeartCrack}
					className="heart-icon"
					key={`cracked-heart-${i}`}
				/>
			);
		}
		for (let i = 0; i < lives; i++) {
			heartIcons.push(
				<FontAwesomeIcon
					icon={faHeart}
					className="heart-icon"
					key={`heart-${i}`}
				/>
			);
		}
		return heartIcons;
	};

	const startNewGame = () => {
		setGameOver(false);
		setPoints(0);
		setLives(3);
		setIncorrectAnswers(0);
		generateRandomNumbers();
	};

	return (
		<main className="main-dzialy">
			<ul className="text-center">
				<div className="list-title-mobile">
					Która liczba jest mniejsza?
				</div>
				{gameOver ? (
					<div className="gameOver">
						<div className="list-mobile">KONIEC GRY</div>
						<div className="list-mobile">Punkty: {points}</div>
						<div className="list-mobile">Gratulacje</div>
						<div className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
							<button
								onClick={startNewGame}
								className="btn-mobile"
							>
								Zagraj jeszcze raz
							</button>
						</div>
					</div>
				) : (
					<>
						<div className="result">
							{result === "correct" ? (
								<FontAwesomeIcon icon={faFaceSmile} />
							) : result === "incorrect" ? (
								<>
									<FontAwesomeIcon icon={faFaceFrown} />
								</>
							) : null}
						</div>
						<div className="container">
							<div className="row d-flex justify-content-center">
								<div className="col-3 answer-box-mobile d-flex align-items-center justify-content-center equations-mobile">
									<button
										className="equations-mobile"
										onClick={() =>
											handleComparison("number1")
										}
										disabled={!isComparing}
									>
										{number1}
									</button>
								</div>
								<div className="col-3 answer-box-mobile d-flex align-items-center justify-content-center equations-mobile">
									<button
										className="equations-mobile"
										onClick={() =>
											handleComparison("number2")
										}
										disabled={!isComparing}
									>
										{number2}
									</button>
								</div>
							</div>
						</div>
						<div className="information-mobile">
							Czas: {timeRemaining}
						</div>
						<div className="information-mobile">
							Punkty: {points}
						</div>
						<div className="container">
							<div className="row">
								<div className="col">
									{generateHeartIcons()}
								</div>
							</div>
						</div>
					</>
				)}
				<Link style={{ textDecoration: "none" }} to="/comp">
					<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
						Wybierz inny poziom
					</li>
				</Link>
				<Link style={{ textDecoration: "none" }} to="/">
					<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
						Powrót do menu
					</li>
				</Link>
			</ul>
		</main>
	);
}

export default EasySmaller;
