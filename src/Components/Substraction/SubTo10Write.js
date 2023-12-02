import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown, faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import { faHeart, faHeartCrack } from "@fortawesome/free-solid-svg-icons";

function SubtractionUpTo10Write() {
	const [timer, setTimer] = useState(10);
	const [number1, setNumber1] = useState(null);
	const [number2, setNumber2] = useState(null);
	const [userInput, setUserInput] = useState("");
	const [correctAnswer, setCorrectAnswer] = useState(null);
	const [points, setPoints] = useState(0);
	const [showSmile, setShowSmile] = useState(false);
	const [showFrown, setShowFrown] = useState(false);
	const [canAnswer, setCanAnswer] = useState(true);
	const [lives, setLives] = useState(3);
	const [incorrectAnswers, setIncorrectAnswers] = useState(0);
	const [gameOver, setGameOver] = useState(false);
	const [isCheckingAnswer, setIsCheckingAnswer] = useState(false); // New state

	useEffect(() => {
		generateRandomNumbers();
	}, []);

	useEffect(() => {
		const intervalId = setInterval(() => {
			if (timer > 0 && canAnswer) {
				setTimer(timer - 1);
			} else if (timer === 0 && canAnswer) {
				clearInterval(intervalId);
				setShowFrown(true);
				if (lives > 0) {
					setLives(lives - 1);
					setIncorrectAnswers(incorrectAnswers + 1); // Increment incorrect answers
				} else {
					setGameOver(true);
				}
				setTimeout(() => {
					setShowFrown(false);
					generateRandomNumbers();
				}, 2000);
			}
		}, 1000);

		return () => {
			clearInterval(intervalId);
		};
	}, [timer, canAnswer, lives, incorrectAnswers]);

	const generateRandomNumbers = () => {
		setCanAnswer(true);
		const min = 0;
		const max = 10;

		let newNumber1 = Math.floor(Math.random() * (max - min + 1)) + min;
		let newNumber2 = Math.floor(Math.random() * (max - min + 1)) + min;

		while (newNumber2 > newNumber1) {
			newNumber2 = Math.floor(Math.random() * (max - min + 1)) + min;
		}

		const correct = newNumber1 - newNumber2;

		setNumber1(newNumber1);
		setNumber2(newNumber2);

		setCorrectAnswer(correct);
		setShowSmile(false);
		setTimer(10);
	};

	const handleUserInput = (event) => {
		setUserInput(event.target.value);
	};

	const checkAnswer = () => {
		if (isCheckingAnswer) {
			return; // Return early if already checking answer
		}

		setIsCheckingAnswer(true); // Set to true while checking the answer

		if (userInput === correctAnswer.toString()) {
			setPoints(points + 1);
			setShowSmile(true);
		} else {
			setIncorrectAnswers(incorrectAnswers + 1);
			if (lives > 0) {
				setLives(lives - 1);
			}
			setShowFrown(true);

			if (incorrectAnswers + 1 >= 3) {
				setGameOver(true);
			}
		}

		setCanAnswer(false); // Disable answering while showing icons

		setTimeout(() => {
			setShowSmile(false);
			setShowFrown(false);
			generateRandomNumbers();
			setUserInput(""); // Clear the userInput field
			setCanAnswer(true); // Enable answering for the new question
			setIsCheckingAnswer(false); // Set to false when answer check is completed

			// Check for game over after an incorrect answer
			if (
				incorrectAnswers + 1 >= 3 &&
				userInput !== correctAnswer.toString()
			) {
				setGameOver(true);
			}
		}, 2000);
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
			<div className="dzialy-desktop">
				<div className="container d-flex justify-content-center align-items-center">
					<div className="col-8 ">
						<ul className="text-center">
							<div className="list-title-desktop">
								ODEJMOWANIE DO 10
							</div>
							{gameOver && (
								<div className="gameOver">
									<div className="list-desktop">
										KONIEC GRY
									</div>
									<div className="list-desktop">
										Punkty: {points}
									</div>
									<div className="list-desktop">
										Gratulacje
									</div>
									<div className="list-desktop board-desktop align-items-center justify-content-center">
										<button
											onClick={startNewGame}
											className="btn-desktop"
										>
											Zagraj jeszcze raz
										</button>
									</div>
								</div>
							)}
							{!gameOver && (
								<div className="gameOver">
									<div className="icons-desktop">
										{showSmile && (
											<FontAwesomeIcon
												icon={faFaceSmile}
												className="smile-icon-desktop"
											/>
										)}
										{showFrown && (
											<FontAwesomeIcon
												icon={faFaceFrown}
												className="frown-icon-desktop"
											/>
										)}
									</div>
									<div>
										<div className="container">
											<div className="row d-flex justify-content-center">
												<div className="col-2 equations-desktop">
													{number1}
												</div>
												<div className="col-2 equations-desktop">
													-
												</div>
												<div className="col-2 equations-desktop">
													{number2}
												</div>
											</div>
										</div>
										<div className="container">
											<div className="row d-flex justify-content-center">
												<input
													className=" answer-box-desktop d-flex align-items-center justify-content-center input-mobile input-bck-mobile"
													type="number"
													value={userInput}
													onChange={handleUserInput}
													max="10"
													disabled={isCheckingAnswer} // Disable input while checking answer
												/>
												<button
													className=" answer-box-desktop d-flex align-items-center justify-content-center input-mobile input-bck-mobile"
													onClick={() => {
														checkAnswer();
													}}
													disabled={
														!canAnswer ||
														isCheckingAnswer
													} // Disable button when answering is disabled or answer is being checked
												>
													Sprawdź
												</button>
											</div>
										</div>
										<div className="information-desktop">
											Czas: {timer}
										</div>
										<div className="information-desktop">
											Punkty: {points}
										</div>
										<div className="container">
											<div className="row">
												<div className="col">
													{generateHeartIcons()}
												</div>
											</div>
										</div>
									</div>
								</div>
							)}
							<Link style={{ textDecoration: "none" }} to="/sub">
								<li className="list-desktop board-desktop align-items-center justify-content-center">
									Wybierz inny poziom
								</li>
							</Link>
							<Link style={{ textDecoration: "none" }} to="/">
								<li className="list-desktop board-desktop align-items-center justify-content-center">
									Powrót do menu
								</li>
							</Link>
						</ul>
					</div>
				</div>
			</div>
			<div className="dzialy-mobile margin-mob">
				<div className="d-flex justify-content-center align-items-center">
					<ul className="text-center">
						{gameOver && (
							<div className="gameOver">
								<div className="list-mobile">KONIEC GRY</div>
								<div className="list-mobile">
									Punkty: {points}
								</div>
								<div className="list-mobile">Gratulacje</div>
								<div className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
									<button
										onClick={startNewGame}
										className="btn-mobile"
									>
										Zagraj jeszcze raz
									</button>
								</div>{" "}
							</div>
						)}
						{!gameOver && (
							<div className="gameOver">
								<div className="list-title-mobile">
									Wybierz odpowiedni wynik
								</div>
								<div className="icons-mobile">
									{showSmile && (
										<FontAwesomeIcon
											icon={faFaceSmile}
											className="smile-icon"
										/>
									)}
									{showFrown && (
										<FontAwesomeIcon
											icon={faFaceFrown}
											className="frown-icon"
										/>
									)}
								</div>
								<div>
									<div className="container">
										<div className="row d-flex justify-content-center">
											<div className="col-2 equations-mobile">
												{number1}
											</div>
											<div className="col-2 equations-mobile">
												-
											</div>
											<div className="col-2 equations-mobile">
												{number2}
											</div>
											<div className="col-2 equations-mobile">
												=
											</div>
										</div>
									</div>
									<div className="container">
										<div className="row d-flex justify-content-center">
											<input
												className=" answer-box-mobile d-flex align-items-center justify-content-center input-mobile input-bck-mobile"
												type="number"
												value={userInput}
												onChange={handleUserInput}
												max="10"
												disabled={isCheckingAnswer} // Disable input while checking answer
											/>
											<button
												className=" answer-box-mobile d-flex align-items-center justify-content-center input-mobile"
												onClick={() => {
													checkAnswer();
												}}
												disabled={
													!canAnswer ||
													isCheckingAnswer
												} // Disable button when answering is disabled or answer is being checked
											>
												Sprawdź
											</button>
										</div>
									</div>
									<div className="information-mobile">
										Czas: {timer}
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
								</div>
							</div>
						)}
						<Link style={{ textDecoration: "none" }} to="/sub">
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
				</div>
			</div>
		</main>
	);
}
export default SubtractionUpTo10Write;
