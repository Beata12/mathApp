import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown, faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import {
	faHeart,
	faHeartCrack,
	faStar,
} from "@fortawesome/free-solid-svg-icons";

function UpTo5() {
	const [timer, setTimer] = useState(10);
	const [numbers, setNumbers] = useState({ num1: null, num2: null });
	const [answers, setAnswers] = useState([null, null, null]);
	const [correctAnswer, setCorrectAnswer] = useState(null);
	const [points, setPoints] = useState(0);
	const [emoji, setEmoji] = useState(null);
	const [canAnswer, setCanAnswer] = useState(true);
	const [lives, setLives] = useState(3);
	const [incorrectAnswers, setIncorrectAnswers] = useState(0);
	const [gameOver, setGameOver] = useState(false);

	useEffect(() => {
		generateRandomNumbers();
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

	const generateRandomNumbers = () => {
		setCanAnswer(true);
		const min = 1;
		const max = 5;

		let newNumber1, newNumber2, correct;
		do {
			newNumber1 = Math.floor(Math.random() * (max - min + 1)) + min;
			newNumber2 = Math.floor(Math.random() * (max - min + 1)) + min;
			correct = newNumber1 + newNumber2;
		} while (correct > 5);

		const incorrectIndexes = [0, 1, 2];
		const correctIndex = Math.floor(Math.random() * 3);

		incorrectIndexes.splice(correctIndex, 1);

		const incorrect1 = generateIncorrectAnswer(incorrectIndexes, correct);
		incorrectIndexes.splice(incorrectIndexes.indexOf(incorrect1), 1);
		const incorrect2 = generateIncorrectAnswer(incorrectIndexes, correct);

		setNumbers({ num1: newNumber1, num2: newNumber2 });
		const answers = [correct, incorrect1, incorrect2].filter(
			(answer) => answer !== ""
		);
		const shuffledAnswers = shuffleArray(answers);
		setAnswers(shuffledAnswers);
		setCorrectAnswer(correct);
		setEmoji(null);
		setTimer(10);
	};

	const generateIncorrectAnswer = (excludedIndexes, correct) => {
		const min = 1;
		const max = 5;

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
			generateRandomNumbers();
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
								DODAWANIE DO 5
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
									<div className="list-desktop board-desktop align-items-center justify-content-center">
										<button
											onClick={startNewGame}
											className="btn-desktop"
										>
											Zagraj jeszcze raz
										</button>
									</div>
								</div>
							) : (
								<div className="gameOver">
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
									<div>
										<div className="container">
											<div className="row justify-content-center">
												<div className="col-2 equations-desktop d-flex justify-content-center align-items-center">
													{Array.from(
														{
															length: numbers.num1,
														},
														(_, index) => (
															<FontAwesomeIcon
																key={index}
																icon={faStar}
																className="star1-icon-desktop"
															/>
														)
													)}
												</div>
												<div className="col-2"></div>
												<div className="col-2 equations-desktop d-flex justify-content-center align-items-center">
													{Array.from(
														{
															length: numbers.num2,
														},
														(_, index) => (
															<FontAwesomeIcon
																key={index}
																icon={faStar}
																className="star2-icon-desktop"
															/>
														)
													)}
												</div>
											</div>
										</div>
										<div className="container">
											<div className="row d-flex justify-content-center">
												<div className="col-2 equations-desktop">
													{numbers.num1}
												</div>
												<div className="col-2 equations-desktop">
													+
												</div>
												<div className="col-2 equations-desktop">
													{numbers.num2}
												</div>
											</div>
										</div>
										<div className="container">
											<div className="row d-flex justify-content-center">
												{answers.map(
													(answer, index) => (
														<div
															className="col-3 answer-box-desktop d-flex align-items-center justify-content-center equations-desktop"
															key={index}
														>
															<button
																className="equations-desktop"
																onClick={() =>
																	handleAnswerClick(
																		answer
																	)
																}
																disabled={
																	numbers.num1 ===
																		null ||
																	numbers.num2 ===
																		null
																}
															>
																{answer}
															</button>
														</div>
													)
												)}
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

							<Link style={{ textDecoration: "none" }} to="/add">
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
			<div className="dzialy-mobile">
				<div className="d-flex justify-content-center align-items-center">
					<ul className="text-center">
						<div className="list-title-mobile">DODAWANIE DO 5</div>
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
								<div>
									<div className="container">
										<div className="row d-flex justify-content-center">
											<div className="col-2 equations-mobile">
												{numbers.num1}
											</div>
											<div className="col-2 equations-mobile">
												+
											</div>
											<div className="col-2 equations-mobile">
												{numbers.num2}
											</div>
										</div>
									</div>
									<div className="container">
										<div className="row d-flex justify-content-center">
											{answers.map((answer, index) => (
												<div
													className="col-3 answer-box-mobile d-flex align-items-center justify-content-center equations-mobile"
													key={index}
												>
													<button
														className="equations-mobile"
														onClick={() =>
															handleAnswerClick(
																answer
															)
														}
														disabled={
															numbers.num1 ===
																null ||
															numbers.num2 ===
																null
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

export default UpTo5;
