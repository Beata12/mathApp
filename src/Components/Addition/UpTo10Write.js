import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import answer from "../../audio/answer.mp3";
import level from "../../audio/poziom.mp3";
import menu from "../../audio/menu.mp3";
import zagraj from "../../audio/zagraj.mp3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown, faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import {
	faHeart,
	faHeartCrack,
	faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";

function UpTo10Write() {
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
	const [isCheckingAnswer, setIsCheckingAnswer] = useState(false);
	const [isButtonDisabled, setButtonDisabled] = useState(false);
	const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
	const [correctAnswerInfo, setCorrectAnswerInfo] = useState(null);

	function play(audioFile) {
		if (!isButtonDisabled) {
			const audio = new Audio(audioFile);
			audio.play();
			setButtonDisabled(true);
		}
	}

	useEffect(() => {
		generateRandomNumbers();
	}, []);

	useEffect(() => {
		const intervalId = setInterval(() => {
			if (timer > 0 && canAnswer) {
				setTimer(timer - 1);
			} else if (timer === 0 && canAnswer) {
				clearInterval(intervalId);
				setCanAnswer(false);
				setCorrectAnswerInfo(correctAnswer);
				setShowFrown(true);
				if (lives > 0) {
					setLives(lives - 1);
					setIncorrectAnswers(incorrectAnswers + 1);
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

		let newNumber1, newNumber2, correct;
		do {
			newNumber1 = Math.floor(Math.random() * (max - min + 1)) + min;
			newNumber2 = Math.floor(Math.random() * (max - min + 1)) + min;
			correct = newNumber1 + newNumber2;
		} while (correct > 10);

		setNumber1(newNumber1);
		setNumber2(newNumber2);

		setCorrectAnswer(correct);
		setShowSmile(false);
		setTimer(10);
		setUserInput("");
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
			setCorrectAnswerInfo(correctAnswer);

			// Check if this is the second incorrect answer and timer has reached 0 twice
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
			// We remove the game over flag if the user provided a correct answer
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

	const renderCorrectAnswerInfo = () => {
		if (correctAnswerInfo !== null) {
			setTimeout(() => {
				setCorrectAnswerInfo(null);
			}, 2000);

			return (
				<div className="container">
					<div className="row correct-answer-info d-flex justify-content-center align-items-center">
						<div className="col-7">Poprawna odpowiedź:</div>
						<div className="correct-ans col-2">
							{correctAnswerInfo}
						</div>
					</div>
				</div>
			);
		}
		return null;
	};

	const startNewGame = () => {
		setGameOver(false);
		setPoints(0);
		setLives(3);
		setIncorrectAnswers(0);
		generateRandomNumbers();
		setCorrectAnswerInfo(null);
	};

	return (
		<main className="main-dzialy">
			<div className="dzialy-desktop">
				<div className="container d-flex justify-content-center align-items-center">
					<div className="col-12">
						<ul className="text-center">
							<div className="list-title-desktop">
								DODAWANIE DO 10 - WPISYWANIE
							</div>
							{gameOver && (
								<div className="gameOver">
									<div className="container board-desktop">
										<div className="list-desktop">
											KONIEC GRY
										</div>
										<div className="list-desktop">
											Punkty: {points}
										</div>
										<div className="list-desktop">
											Gratulacje
										</div>
									</div>
									<div className="container list-desktop board-desktop">
										<div className="row d-flex align-items-center">
											<div className="col-9">
												<button
													className="btn-desktop hover-menu"
													onClick={startNewGame}
												>
													Zagraj jeszcze raz
												</button>
											</div>
											<div className="col-3">
												<button
													className="btn-desktop"
													onClick={() => play(zagraj)}
													disabled={isButtonDisabled}
												>
													<FontAwesomeIcon
														icon={faVolumeUp}
														className="volume-icon"
													/>
												</button>
											</div>
										</div>
									</div>
								</div>
							)}
							{!gameOver && (
								<div className="gameOver">
									<div className="container board-desktop">
										<div className="row d-flex align-items-center justify-content-center margin-main">
											<div className="col-11 main-title">
												Wpisz poprawną odpowiedź
											</div>
											<div className="icons-desktop container">
												<div className="row d-flex align-items-center justify-content-center margin-main">
													<div>
														{renderCorrectAnswerInfo()}
													</div>
													<div>
														{showSmile && (
															<FontAwesomeIcon
																icon={
																	faFaceSmile
																}
																className="smile-icon-desktop"
															/>
														)}
														{showFrown && (
															<FontAwesomeIcon
																icon={
																	faFaceFrown
																}
																className="frown-icon-desktop"
															/>
														)}
													</div>
												</div>
											</div>
										</div>
										<div>
											<div className="container">
												<div className="row d-flex justify-content-center">
													<div className="col-2 equations-desktop">
														{number1}
													</div>
													<div className="col-2 equations-desktop">
														+
													</div>
													<div className="col-2 equations-desktop">
														{number2}
													</div>
												</div>
											</div>
											<div className="container">
												<div className="row d-flex justify-content-center">
													<input
														className="answer-box-desktop d-flex align-items-center justify-content-center input-mobile input-bck-mobile"
														type="text"
														pattern="[0-9]*"
														value={userInput}
														onChange={
															handleUserInput
														}
														disabled={
															isCheckingAnswer
														}
														style={{
															textAlign: "center",
															width: "100%",
														}}
													/>
													<button
														className="answer-box-desktop d-flex align-items-center justify-content-center input-mobile"
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
								</div>
							)}
							<div className="container list-desktop board-desktop">
								<div className="row d-flex align-items-center">
									<div className="col-9">
										<Link
											style={{ textDecoration: "none" }}
											to="/add"
										>
											<button className="btn-desktop hover-menu">
												Wybierz inny poziom
											</button>
										</Link>
									</div>
									<div className="col-3">
										<button
											className="btn-desktop"
											onClick={() => play(level)}
											disabled={isButtonDisabled}
										>
											<FontAwesomeIcon
												icon={faVolumeUp}
												className="volume-icon"
											/>
										</button>
									</div>
								</div>
							</div>
							<div className="container list-desktop board-desktop">
								<div className="row d-flex align-items-center">
									<div className="col-9">
										<Link
											style={{ textDecoration: "none" }}
											to="/"
										>
											<button className="btn-desktop hover-menu">
												Powrót do menu
											</button>
										</Link>
									</div>
									<div className="col-3">
										<button
											className="btn-desktop"
											onClick={() => play(menu)}
											disabled={isButtonDisabled}
										>
											<FontAwesomeIcon
												icon={faVolumeUp}
												className="volume-icon"
											/>
										</button>
									</div>
								</div>
							</div>
						</ul>
					</div>
				</div>
			</div>
			<div className="dzialy-mobile margin-mob">
				<div className="d-flex justify-content-center align-items-center">
					<ul className="text-center">
						<div className="list-title-mobile">
							DODAWANIE DO 10 - WPISYWANIE
						</div>
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
								</div>
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
												+
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
						<Link style={{ textDecoration: "none" }} to="/add">
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
export default UpTo10Write;
