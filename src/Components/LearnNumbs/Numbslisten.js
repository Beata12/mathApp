import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import answer from "../../audio/answer.mp3";
import level from "../../audio/poziom.mp3";
import menu from "../../audio/menu.mp3";
import zagraj from "../../audio/zagraj.mp3";
import jeden from "../../audio/numbers/jeden.mp3";
import dwa from "../../audio/numbers/dwa.mp3";
import trzy from "../../audio/numbers/trzy.mp3";
import cztery from "../../audio/numbers/cztery.mp3";
import piec from "../../audio/numbers/piec.mp3";
import szesc from "../../audio/numbers/szesc.mp3";
import siedem from "../../audio/numbers/siedem.mp3";
import osiem from "../../audio/numbers/osiem.mp3";
import dziewiec from "../../audio/numbers/dziewiec.mp3";
import dziesiec from "../../audio/numbers/dziesiec.mp3";
import { faFaceFrown, faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import {
	faHeart,
	faHeartCrack,
	faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";

function Numberhard() {
	const [timer, setTimer] = useState(10);
	const [answers, setAnswers] = useState([null, null, null]);
	const [randomWord, setRandomWord] = useState("");
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

	const numberVoice = {
		jeden: () => play(jeden),
		dwa: () => play(dwa),
		trzy: () => play(trzy),
		cztery: () => play(cztery),
		pięć: () => play(piec),
		sześć: () => play(szesc),
		siedem: () => play(siedem),
		osiem: () => play(osiem),
		dziewięć: () => play(dziewiec),
		dziesięć: () => play(dziesiec),
	};

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setButtonDisabled(false);
		}, 5000);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [isButtonDisabled]);

	useEffect(() => {
		generateRandomWord();
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

	const generateRandomWord = () => {
		const min = 1;
		const max = 10;

		const numbersdigit = {
			1: "jeden",
			2: "dwa",
			3: "trzy",
			4: "cztery",
			5: "pięć",
			6: "sześć",
			7: "siedem",
			8: "osiem",
			9: "dziewięć",
			10: "dziesięć",
		};

		let randomNum = Math.floor(Math.random() * (max - min + 1) + min);
		let randomWord = numbersdigit[randomNum];

		const correctNum = randomNum;
		const incorrectIndexes = [1, 2];

		let incorrect1 = generateIncorrectAnswer(incorrectIndexes, correctNum);
		incorrectIndexes.splice(incorrectIndexes.indexOf(incorrect1), 1);
		let incorrect2 = generateIncorrectAnswer(
			incorrectIndexes,
			correctNum,
			incorrect1
		);

		const answersArray = shuffleArray([correctNum, incorrect1, incorrect2]);

		setAnswers(answersArray);
		setCorrectAnswer(correctNum);
		setRandomWord(randomWord);
		setCanAnswer(true);
		setTimer(10);
	};

	const generateIncorrectAnswer = (
		excludedIndexes,
		correct,
		otherIncorrect
	) => {
		const min = 1;
		const max = 10;

		let incorrect;
		do {
			incorrect = Math.floor(Math.random() * (max - min + 1)) + min;
		} while (
			excludedIndexes.includes(incorrect) ||
			incorrect === correct ||
			incorrect === otherIncorrect
		);
		return incorrect;
	};

	const shuffleArray = (array) => {
		const shuffledArray = [...array];
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

	const handleCorrectAnswer = () => {
		setPoints((prevPoints) => prevPoints + 1);
		setEmoji("smile");
		setTimeout(() => {
			setEmoji(null);
			generateRandomWord();
		}, 2000);
	};

	const handleWrongAnswer = () => {
		setIncorrectAnswers((prevIncorrect) => prevIncorrect + 1);
		if (lives > 0) {
			setLives((prevLives) => prevLives - 1);
		}
		setEmoji("frown");
		setCorrectAnswerInfo(correctAnswer);
		setTimeout(() => {
			setEmoji(null);
			generateRandomWord();
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
		generateRandomWord();
		setCorrectAnswerInfo(null);
	};

	return (
		<main className="main-dzialy">
			<div className="dzialy-desktop">
				<div className="container d-flex justify-content-center align-items-center">
					<div className="col-12">
						<ul className="text-center">
							{gameOver ? (
								<div className="gameOver">
									<div className="container board-desktop">
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
								<div className="container board-desktop">
									<div className="row d-flex align-items-center justify-content-center margin-main">
										<div className="list-title-desktop hard-level">
											ROZPOZNAWANIE LICZB - SŁUCHANIE
										</div>
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
										<div className="d-flex justify-content-center align-items-center">
											<button
												className="btn-desktop"
												onClick={() =>
													play(
														numberVoice[
															randomWord
														]()
													)
												}
												disabled={isButtonDisabled}
											>
												<FontAwesomeIcon
													icon={faVolumeUp}
													className="volume-icon"
												/>
											</button>
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
										Czas {timer}
									</div>
									<div className="information-desktop">
										Punkty {points}
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
				<div className="d-flex justify-content-center align-items-center">
					<ul className="text-center">
						<div className="list-title-mobile">
							Wybierz odbiowiednią liczbę
						</div>
						{gameOver ? (
							<div className="gameOver">
								<div className="list-mobile">
									🛑 KONIEC GRY 🛑
								</div>
								<div className="list-mobile">
									Punkty: {points}
								</div>
								<div className="list-mobile">
									Gratulacje 🥳🎉👏
								</div>
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
							<div className="container">
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
									<div className="horizontal-options">
										<p className="equations-mobile">
											{randomWord}
										</p>
									</div>
								</div>
								<div className="container">
									<div className="row d-flex justify-content-center">
										{answers.map((answer, index) => (
											<div
												key={index}
												className="col-3 answer-box-mobile d-flex align-items-center justify-content-center equations-mobile"
												onClick={() =>
													handleAnswerClick(answer)
												}
											>
												{answer}
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
						<Link style={{ textDecoration: "none" }} to="/dz">
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

export default Numberhard;
