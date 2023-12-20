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
	faStar,
	faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";

function Numberseasy() {
	const [timer, setTimer] = useState(10);
	const [answers, setAnswers] = useState([null, null, null]);
	const [correctAnswer, setCorrectAnswer] = useState(null);
	const [points, setPoints] = useState(0);
	const [emoji, setEmoji] = useState(null);
	const [canAnswer, setCanAnswer] = useState(true);
	const [lives, setLives] = useState(3);
	const [incorrectAnswers, setIncorrectAnswers] = useState(0);
	const [gameOver, setGameOver] = useState(false);
	const [alienCount, setAlienCount] = useState(0);
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
			clearTimeout(timeoutId);
		};
	}, [isButtonDisabled]);

	useEffect(() => {
		generateNumbersEmoji();
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

	const generateNumbersEmoji = () => {
		const min = 1;
		const max = 10;

		const randomAlienCount =
			Math.floor(Math.random() * (max - min + 1)) + min;

		setAlienCount(randomAlienCount);

		let answersArray = generateAnswersArray(randomAlienCount);

		setAnswers(answersArray);
		setCorrectAnswer(randomAlienCount);
		setCanAnswer(true);
		setTimer(10);
	};

	const generateAnswersArray = (correct) => {
		const incorrectIndexes = [1, 2];

		let incorrect1 = generateIncorrectAnswer(incorrectIndexes, correct);
		incorrectIndexes.splice(incorrectIndexes.indexOf(incorrect1), 1);
		let incorrect2 = generateIncorrectAnswer(incorrectIndexes, correct);
		while (incorrect2 === incorrect1) {
			incorrect2 = generateIncorrectAnswer(incorrectIndexes, correct);
		}

		return shuffleArray([correct, incorrect1, incorrect2]);
	};

	const generateIncorrectAnswer = (excludedIndexes, correct) => {
		const min = 1;
		const max = 10;

		let incorrect;
		do {
			incorrect = Math.floor(Math.random() * (max - min + 1)) + min;
		} while (excludedIndexes.includes(incorrect) || incorrect === correct);
		return incorrect;
	};

	const shuffleArray = (array) => {
		let shuffledArray = [...array];
		for (let i = shuffledArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffledArray[i], shuffledArray[j]] = [
				shuffledArray[j],
				shuffledArray[i],
			];
		}
		return shuffledArray;
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

	let handleCorrectAnswer = () => {
		setPoints((prevPoints) => prevPoints + 1);
		setEmoji("smile");
		setTimeout(() => {
			setEmoji(null);
			generateNumbersEmoji();
		}, 2000);
	};

	let handleWrongAnswer = () => {
		setIncorrectAnswers((prevIncorrect) => prevIncorrect + 1);
		if (lives > 0) {
			setLives((prevLives) => prevLives - 1);
		}
		setEmoji("frown");
		setCorrectAnswerInfo(correctAnswer);
		setTimeout(() => {
			setEmoji(null);
			generateNumbersEmoji();
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

	const startNewGame = () => {
		setGameOver(false);
		setPoints(0);
		setLives(3);
		setIncorrectAnswers(0);
		generateNumbersEmoji();
		setCorrectAnswerInfo(null);
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

	return (
		<main className="main-dzialy">
			<div className="dzialy-desktop">
				<div className="container d-flex justify-content-center align-items-center">
					<div className="col-10">
						<ul className="text-center">
							<div className="list-title-desktop">
								ROZPOZNAWANIE LICZB
							</div>
							{gameOver ? (
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
							) : (
								<div className="container list-desktop board-desktop">
									<div className="row d-flex align-items-center justify-content-center margin-main">
										<div className="col-10 main-title">
											Wybierz poprawną odpowiedź
										</div>
										<div className="col-2">
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
										<div className="row justify-content-center">
											<div className="col-2 equations-desktop d-flex justify-content-center align-items-center">
												{Array.from({
													length: alienCount,
												}).map((_, index) => (
													<FontAwesomeIcon
														icon={faStar}
														key={`alien-${index}`}
														className="star1-icon-desktop"
													/>
												))}
											</div>
										</div>
									</div>
									<div className="container">
										<div className="row d-flex justify-content-center">
											{answers.map((answer, index) => (
												<div
													key={index}
													className="col-3 answer-box-desktop d-flex align-items-center justify-content-center equations-desktop"
													onClick={() =>
														handleAnswerClick(
															answer
														)
													}
												>
													{answer}
												</div>
											))}
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
							)}
							<div className="container list-desktop board-desktop">
								<div className="row d-flex align-items-center">
									<div className="col-9">
										<Link
											style={{ textDecoration: "none" }}
											to="/num"
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
						<div className="list-title-mobile">Poznaje liczby</div>
						{gameOver ? (
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
						) : (
							<div className="gameOver">
								<div className="row d-flex align-items-center justify-content-center margin-main">
									<div className="col-11 main-title">
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
								<div className="icons-mobile">
									{emoji === "smile" && (
										<FontAwesomeIcon
											icon={faFaceSmile}
											className="smile-icon"
										/>
									)}
									{emoji === "frown" && (
										<FontAwesomeIcon
											icon={faFaceFrown}
											className="frown-icon"
										/>
									)}
								</div>
								<div className="container">
									<div className="row justify-content-center">
										<div className="col-2 equations-mobile d-flex justify-content-center align-items-center">
											{Array.from({
												length: alienCount,
											}).map((_, index) => (
												<FontAwesomeIcon
													icon={faStar}
													key={`alien-${index}`}
													className="star-icon-mobile"
												/>
											))}
										</div>
									</div>
								</div>
								<div className="container">
									<div className="row d-flex justify-content-center">
										{answers.map((answer, index) => (
											<div
												key={index}
												className="col-3 answer-box-mobile d-flex align-items-center justify-content-center equations-mobile"
											>
												<button
													className="equations-mobile"
													onClick={() =>
														handleAnswerClick(
															answer
														)
													}
												>
													{answer}
												</button>
											</div>
										))}
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
						<Link style={{ textDecoration: "none" }} to="/num">
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

export default Numberseasy;
