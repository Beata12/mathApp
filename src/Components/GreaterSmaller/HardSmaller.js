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

function EasySmaller() {
	const [timer, setTimer] = useState(10);
	const [numbers, setNumbers] = useState({ num1: null, num2: null });
	const [correctAnswer, setCorrectAnswer] = useState(null);
	const [points, setPoints] = useState(0);
	const [emoji, setEmoji] = useState(null);
	const [canAnswer, setCanAnswer] = useState(true);
	const [lives, setLives] = useState(3);
	const [incorrectAnswers, setIncorrectAnswers] = useState(0);
	const [gameOver, setGameOver] = useState(false);
	const [isButtonDisabled, setButtonDisabled] = useState(false);
	const [correctAnswerInfo, setCorrectAnswerInfo] = useState(null);

	function play(audioFile) {
		if (!isButtonDisabled) {
			const audio = new Audio(audioFile);
			audio.play();
			setButtonDisabled(true);
		}
	}

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setButtonDisabled(false);
		}, 2000);

		return () => {
			clearInterval(timeoutId);
		};
	}, [isButtonDisabled]);

	useEffect(() => {
		generateRandomNumbers();
	}, []);

	useEffect(() => {
		const intervalId = setInterval(() => {
			if (timer > 0 && canAnswer) {
				setTimer((prevTimer) => prevTimer - 1);
			} else if (timer === 0 && canAnswer) {
				clearInterval(intervalId);
				setCanAnswer(false);
				handleWrongAnswer();
			}
		}, 1000);

		return () => {
			clearInterval(intervalId);
		};
	}, [timer, canAnswer]);

	const generateRandomNumbers = () => {
		setCanAnswer(true);
		const min = 1;
		const max = 10;

		let newNumber1, newNumber2, correct;
		newNumber1 = Math.floor(Math.random() * (max - min + 1)) + min;
		newNumber2 = Math.floor(Math.random() * (max - min + 1)) + min;

		while (newNumber1 === newNumber2) {
			newNumber2 = Math.floor(Math.random() * (max - min + 1)) + min;
		}
		if (newNumber1 < newNumber2) {
			correct = newNumber1;
		} else {
			correct = newNumber2;
		}

		setNumbers({ num1: newNumber1, num2: newNumber2 });
		setCorrectAnswer(correct);
		setEmoji(null);
		setCorrectAnswerInfo(null);
		setTimer(10);
	};

	const handleAnswerClick = (selectedAnswer) => {
		if (canAnswer) {
			setCanAnswer(false);

			if (selectedAnswer === correctAnswer) {
				handleCorrectAnswer();
			} else {
				handleWrongAnswer();
			}
		}
	};

	const handleCorrectAnswer = () => {
		setPoints((prevPoints) => prevPoints + 1);
		setEmoji("smile");
		setTimeout(() => {
			setEmoji(null);
			generateRandomNumbers();
		}, 2000);
	};

	const handleWrongAnswer = () => {
		setIncorrectAnswers((prevIncorrect) => prevIncorrect + 1);
		if (lives > 0) {
			setLives((prevLives) => prevLives - 1);
		}
		setEmoji("frown");
		setCorrectAnswer(correctAnswer);

		setCorrectAnswerInfo(`${correctAnswer}`);

		setTimeout(() => {
			setEmoji(null);
			generateRandomNumbers();

			if (incorrectAnswers === 2) {
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
		setCorrectAnswerInfo(null);
		generateRandomNumbers();
	};

	return (
		<main className="main-dzialy">
			<div className="dzialy-desktop">
				<div className="container d-flex justify-content-center align-items-center">
					<div className="col-12">
						<ul className="text-center">
							<div className="list-title-desktop">
								Która liczba jest mniejsza?
							</div>
							{gameOver ? (
								<div className="gameOver">
									<div className="container board-desktop">
										<div className="list-desktop">
											⚖️ KTÓRA LICZBA JEST MNIEJSZA -
											POZIOM ŁATWY ⚖️
										</div>
										<div className="list-desktop">
											🛑 KONIEC GRY 🛑
										</div>
										<div className="list-desktop">
											Punkty: {points}
										</div>
										<div className="list-desktop">
											Gratulacje 🥳🎉👏
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
							) : (
								<div className="gameOver">
									<div className="container board-desktop">
										<div className="row d-flex align-items-center justify-content-center margin-main">
											<div className="col-10 main-title">
												Wybierz poprawną odpowiedź
											</div>
											<div className="col-1">
												<button
													className="btn-desktop"
													onClick={() => play(answer)}
													disabled={isButtonDisabled}
												>
													<FontAwesomeIcon
														icon={faVolumeUp}
														className="volume-icon"
													/>
												</button>
											</div>
										</div>
										<div className="icons-desktop">
											{renderCorrectAnswerInfo()}
											{emoji === "smile" && (
												<FontAwesomeIcon
													icon={faFaceSmile}
													className="smile-icon-desktop"
												/>
											)}
											{emoji === "frown" && (
												<FontAwesomeIcon
													icon={faFaceFrown}
													className="frown-icon-desktop"
												/>
											)}
										</div>
										<div className="container">
											<div className="row d-flex justify-content-center">
												<div
													className="col-4 answer-box-desktop equations-desktop d-flex justify-content-center align-items-center"
													onClick={() =>
														handleAnswerClick(
															numbers.num1
														)
													}
												>
													{numbers.num1}
												</div>
												<div className="col-1"></div>
												<div
													className="col-4 answer-box-desktop equations-desktop d-flex justify-content-center align-items-center"
													onClick={() =>
														handleAnswerClick(
															numbers.num2
														)
													}
												>
													{numbers.num2}
												</div>
											</div>
										</div>
										<div className="information-desktop">
											Czas: {timer}
										</div>
										<div className="information-desktop">
											Punkty: {points}
										</div>
										<div className="container ">
											<div className="row ">
												<div className="col ">
													{generateHeartIcons()}
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
											to="/comp"
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
											to="/dz"
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
				<ul className="text-center">
					<div className="list-title-mobile">
						Która liczba jest mniejsza?
					</div>
					{gameOver ? (
						<div className="gameOver">
							<div className="container board-mobile">
								<div className="list-mobile">
									🛑 KONIEC GRY 🛑
								</div>
								<div className="list-mobile">
									Punkty: {points}
								</div>
								<div className="list-mobile">
									Gratulacje 🥳🎉👏
								</div>
							</div>
							<div className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
								<button
									className="btn-mobile"
									onClick={startNewGame}
								>
									Zagraj jeszcze raz
								</button>
							</div>
						</div>
					) : (
						<div className="gameOver">
							<div className="text-mobile">
								Wybierz poprawną odpowiedź
							</div>
							<div className="icons-mobile">
								{/* {renderCorrectAnswerInfo()} */}
								{emoji === "smile" && (
									<FontAwesomeIcon
										icon={faFaceSmile}
										className="smile-icon-mobile"
									/>
								)}
								{emoji === "frown" && (
									<FontAwesomeIcon
										icon={faFaceFrown}
										className="frown-icon-mobile"
									/>
								)}
							</div>
							<div className="container">
								<div className="row d-flex justify-content-center">
									<div
										className="col-3 answer-box-mobile d-flex align-items-center justify-content-center equations-mobile"
										onClick={() =>
											handleAnswerClick(numbers.num1)
										}
									>
										{numbers.num1}
									</div>
									<div
										className="col-3 answer-box-mobile d-flex align-items-center justify-content-center equations-mobile"
										onClick={() =>
											handleAnswerClick(numbers.num2)
										}
									>
										{numbers.num2}
									</div>
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
					)}
					<Link style={{ textDecoration: "none" }} to="/comp">
						<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
							Wybierz inny poziom
						</li>
					</Link>
					<Link style={{ textDecoration: "none" }} to="/dz">
						<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
							Powrót do menu
						</li>
					</Link>
				</ul>
			</div>
		</main>
	);
}

export default EasySmaller;
