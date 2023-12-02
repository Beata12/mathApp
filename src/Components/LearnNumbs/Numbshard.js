import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown, faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import { faHeart, faHeartCrack } from "@fortawesome/free-solid-svg-icons";

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

	useEffect(() => {
		generateRandomWord();
	}, []);

	useEffect(() => {
		const intervalId = setInterval(() => {
			if (timer > 0 && canAnswer) {
				setTimer((prevTimer) => prevTimer - 1);
			} else if (timer === 0 && canAnswer) {
				clearInterval(intervalId);
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

		const incorrect1 = generateIncorrectAnswer(
			incorrectIndexes,
			correctNum
		);
		incorrectIndexes.splice(incorrectIndexes.indexOf(incorrect1), 1);
		const incorrect2 = generateIncorrectAnswer(
			incorrectIndexes,
			correctNum
		);

		const answersArray = shuffleArray([correctNum, incorrect1, incorrect2]);

		setAnswers(answersArray);
		setCorrectAnswer(correctNum);
		setRandomWord(randomWord);
		setCanAnswer(true);
		setTimer(10);
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

	const startNewGame = () => {
		setGameOver(false);
		setPoints(0);
		setLives(3);
		setIncorrectAnswers(0);
		generateRandomWord();
	};

	return (
		<main className="main-dzialy">
			<div className="dzialy-desktop">
				<div className="container d-flex justify-content-center align-items-center">
					<div className="col-8 ">
						<ul className="text-center">
							<div className="list-title-desktop">
								ROZPOZNAWANIE LICZB
							</div>
							{gameOver ? (
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
									<li className="list-desktop board-desktop align-items-center justify-content-center">
										<button
											className="btn-desktop"
											onClick={startNewGame}
										>
											Zagraj jeszcze raz
										</button>
									</li>
								</div>
							) : (
								<div className="container">
									<div className="list-title-desktop">
										<button
											className="btn-desktop"
											// onMouseOver={handleMouseOverAnswer}
											// disabled={isButtonDisabled}
										>
											Wybierz poprawną odpowiedź, zrobimy
											to onclick
										</button>
									</div>
									<div className="icons-desktop">
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
										<div className=" d-flex justify-content-center">
											<div className="col-2 equations-desktop">
												{randomWord}
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
							<Link style={{ textDecoration: "none" }} to="/num">
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
						<div className="list-title-mobile">
							Wybierz odbiowiednią liczbę
						</div>
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

export default Numberhard;
