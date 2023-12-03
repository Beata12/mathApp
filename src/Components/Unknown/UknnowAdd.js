import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown, faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import { faHeart, faHeartCrack } from "@fortawesome/free-solid-svg-icons";

function UnknownAdd() {
	const [timer, setTimer] = useState(10);
	const [number1, setNumber1] = useState(null);
	const [number2, setNumber2] = useState(null);
	const [answer1, setAnswer1] = useState(null);
	const [answer2, setAnswer2] = useState(null);
	const [answer3, setAnswer3] = useState(null);
	const [correctAnswer, setCorrectAnswer] = useState(null);
	const [points, setPoints] = useState(0);
	const [showSmile, setShowSmile] = useState(false);
	const [showFrown, setShowFrown] = useState(false);
	const [canAnswer, setCanAnswer] = useState(true);
	const [lives, setLives] = useState(3);
	const [incorrectAnswers, setIncorrectAnswers] = useState(0);
	const [gameOver, setGameOver] = useState(false);
	const [correctAnswerInfo, setCorrectAnswerInfo] = useState(null);

	useEffect(() => {
		generateRandomNumbers();
	}, []);

	useEffect(() => {
		const intervalId = setInterval(() => {
			if (timer > 0 && canAnswer) {
				setTimer(timer - 1);
			} else {
				clearInterval(intervalId);
				if (canAnswer) {
					setShowFrown(true);
					if (lives > 0) {
						setLives(lives - 1);
					} else {
						setGameOver(true);
					}
					setCorrectAnswerInfo(correctAnswer);
					setTimeout(() => {
						setShowFrown(false);
						setCorrectAnswerInfo(null);
						generateRandomNumbers();
					}, 2000);
				}
			}
		}, 1000);

		return () => {
			clearInterval(intervalId);
		};
	}, [timer, canAnswer, lives]);

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
		const incorrectIndexes = [0, 1, 2];
		const correctIndex = Math.floor(Math.random() * 3);

		incorrectIndexes.splice(correctIndex, 1);

		let incorrect1 = generateIncorrectAnswer(incorrectIndexes, correct);
		incorrectIndexes.splice(incorrectIndexes.indexOf(incorrect1), 1);
		let incorrect2 = generateIncorrectAnswer(incorrectIndexes, correct);

		if (incorrect1 === "" || incorrect2 === "") {
			incorrect1 = 0;
			incorrect2 = 0;
		}

		setNumber1(newNumber1);
		setNumber2(newNumber2);

		const answers = [correct, incorrect1, incorrect2].filter(
			(answer) => answer !== ""
		);
		const shuffledAnswers = shuffleArray(answers);

		setAnswer1(shuffledAnswers[0]);
		setAnswer2(shuffledAnswers[1]);
		setAnswer3(shuffledAnswers[2]);

		setCorrectAnswer(correct);
		setShowSmile(false);
		setTimer(10);
		setCorrectAnswerInfo(null); // Wyczyść poprawną odpowiedź przy generowaniu nowego pytania
	};

	const generateIncorrectAnswer = (excludedIndexes, correct) => {
		const min = 0;
		const max = 10;

		let incorrect = Math.floor(Math.random() * (max - min + 1)) + min;

		while (excludedIndexes.includes(incorrect) || incorrect === correct) {
			incorrect = Math.floor(Math.random() * (max - min + 1)) + min;
		}

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

	const checkAnswer = (selectedAnswer) => {
		if (canAnswer) {
			setCanAnswer(false);

			if (selectedAnswer === correctAnswer) {
				setPoints(points + 1);
				setShowSmile(true);

				setTimeout(() => {
					setShowSmile(false);
					generateRandomNumbers();
				}, 2000);
			} else {
				setIncorrectAnswers(incorrectAnswers + 1);
				if (lives > 0) {
					setLives(lives - 1);
				}
				setShowFrown(true);

				setCorrectAnswerInfo(correctAnswer);

				setTimeout(() => {
					setShowFrown(false);
					setCorrectAnswerInfo(null);
					generateRandomNumbers();

					if (incorrectAnswers === 2) {
						setGameOver(true);
					}
				}, 3000); // Zwiększenie czasu wyświetlania poprawnej odpowiedzi na 3 sekundy
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

	const renderCorrectAnswerInfo = () => {
		if (correctAnswerInfo !== null) {
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
	};

	return (
		<main className="main-dzialy">
			<div className="dzialy-desktop">
				<div className="container d-flex justify-content-center align-items-center">
					<div className="col-8 ">
						<ul className="text-center">
							<div className="list-title-desktop">
								Dodawanie z niewiadomą
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
								<>
									<div className="icons-desktop">
										{renderCorrectAnswerInfo()}
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
									<div className="container">
										<div className="row d-flex justify-content-center align-items-center">
											<div className="col-2 equations-desktop">
												{number2}
											</div>
											<div className="col-2 equations-desktop">
												+
											</div>
											<div className="col-2 equations-desktop">
												?
											</div>
											<div className="col-2 equations-desktop">
												=
											</div>
											<div className="col-2 equations-desktop">
												{number1}
											</div>
										</div>
									</div>
									<div className="container">
										<div className="row d-flex justify-content-center">
											<div className="col-3 answer-box-desktop d-flex align-items-center justify-content-center equations-desktop">
												<button
													className="equations-desktop"
													onClick={() =>
														checkAnswer(answer1)
													}
													disabled={
														number1 === null ||
														number2 === null
													}
												>
													{answer1}
												</button>
											</div>
											<div className="col-3 answer-box-desktop d-flex align-items-center justify-content-center equations-desktop">
												<button
													className="equations-desktop"
													onClick={() =>
														checkAnswer(answer2)
													}
													disabled={
														number1 === null ||
														number2 === null
													}
												>
													{answer2}
												</button>
											</div>
											<div className="col-3 answer-box-desktop d-flex align-items-center justify-content-center equations-desktop">
												<button
													className="equations-desktop"
													onClick={() =>
														checkAnswer(answer3)
													}
													disabled={
														number1 === null ||
														number2 === null
													}
												>
													{answer3}
												</button>
											</div>
										</div>
									</div>
									<div className="container">
										<div className="row">
											<div className="col">
												{generateHeartIcons()}
											</div>
										</div>
									</div>
									<div className="information-desktop">
										Punkty: {points}
									</div>
									<div className="information-desktop">
										Czas: {timer}
									</div>
								</>
							)}
							<Link style={{ textDecoration: "none" }} to="/un">
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
												{number2}
											</div>
											<div className="col-2 equations-mobile">
												+
											</div>
											<div className="col-2 equations-mobile">
												?
											</div>
											<div className="col-2 equations-mobile">
												=
											</div>
											<div className="col-2 equations-mobile">
												{number1}
											</div>
										</div>
									</div>
									<div className="container">
										<div className="row d-flex justify-content-center">
											<div className="col-3 answer-box-mobile d-flex align-items-center justify-content-center equations-mobile">
												<button
													className="equations-mobile"
													onClick={() =>
														checkAnswer(answer1)
													}
													disabled={
														number1 === null ||
														number2 === null
													}
												>
													{answer1}
												</button>
											</div>
											<div className="col-3 answer-box-mobile d-flex align-items-center justify-content-center equations-mobile">
												<button
													className="equations-mobile"
													onClick={() =>
														checkAnswer(answer2)
													}
													disabled={
														number1 === null ||
														number2 === null
													}
												>
													{answer2}
												</button>
											</div>
											<div className="col-3 answer-box-mobile d-flex align-items-center justify-content-center equations-mobile">
												<button
													className="equations-mobile"
													onClick={() =>
														checkAnswer(answer3)
													}
													disabled={
														number1 === null ||
														number2 === null
													}
												>
													{answer3}
												</button>
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

export default UnknownAdd;
