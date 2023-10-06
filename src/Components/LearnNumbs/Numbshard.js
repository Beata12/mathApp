import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown, faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import { faHeart, faHeartCrack } from "@fortawesome/free-solid-svg-icons";

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

const answers = {
	jeden: 1,
	dwa: 2,
	trzy: 3,
	cztery: 4,
	pięć: 5,
	sześć: 6,
	siedem: 7,
	osiem: 8,
	dziewięć: 9,
	dziesięć: 10,
};

const getRandomNumbers = () => {
	const uniqueNumbers = new Set();
	while (uniqueNumbers.size < 3) {
		uniqueNumbers.add(Math.floor(Math.random() * 10) + 1);
	}
	return [...uniqueNumbers];
};

const NumbHard = () => {
	const [timer, setTimer] = useState(10);
	const [numbers, setNumbers] = useState([]);
	const [randomWord, setRandomWord] = useState("");
	const [correctDigit, setCorrectDigit] = useState("");
	const [selectedDigit, setSelectedDigit] = useState("");
	const [correctAnswer, setCorrectAnswer] = useState(null);
	const [points, setPoints] = useState(0);
	const [canAnswer, setCanAnswer] = useState(true);
	const [lives, setLives] = useState(3);
	const [gameOver, setGameOver] = useState(false);
	const [showNextQuestion, setShowNextQuestion] = useState(false);
	const [emoji, setEmoji] = useState(null);

	const generateRandomNumbers = () => {
		const optionsArray = getRandomNumbers();
		const randomIndex = Math.floor(Math.random() * optionsArray.length);
		const correctNum = optionsArray[randomIndex];
		setNumbers(optionsArray);
		setCorrectDigit(correctNum.toString());
		setRandomWord(numbersdigit[correctNum]);
	};

	let intervalId;

	const handleDigitClick = (digit) => {
		if (!canAnswer) return;

		setCanAnswer(false); // Disable answering during the transition
		setSelectedDigit(digit);
		const isCorrect = digit === correctDigit;
		setCorrectAnswer(isCorrect);

		if (isCorrect) {
			setPoints((prevPoints) => prevPoints + 1);
			setEmoji("frown"); // Set the emoji to sad face
		} else {
			setLives((prevLives) => prevLives - 1);
			setEmoji("frown"); // Set the emoji to sad face
			if (lives === 1) {
				setGameOver(true);
			}
		}

		clearInterval(intervalId);
		setTimeout(() => {
			setCorrectAnswer(null);
			generateRandomNumbers();
			setTimer(10);
			setShowNextQuestion(true);
			setTimeout(() => {
				setShowNextQuestion(false);
				startTimer();
				setEmoji(null); // Reset the emoji
				setCanAnswer(true); // Enable answering for the new question
			}, 2000);
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
		setEmoji(null); // Reset the emoji
		generateRandomNumbers();
		startTimer();
	};

	useEffect(() => {
		generateRandomNumbers();
		startTimer();
		return () => {
			clearInterval(intervalId);
		};
	}, []);

	const startTimer = () => {
		intervalId = setInterval(() => {
			if (timer > 0 && canAnswer) {
				setTimer((prevTimer) => prevTimer - 1);
			} else if (timer === 0 && canAnswer) {
				clearInterval(intervalId);
			}
		}, 1000);
	};

	return (
		<main className="main-dzialy">
			<div className="dzialy-mobile">
				<div className="d-flex justify-content-center align-items-center">
					<ul className="text-center">
						<li className="list-mobile">Poziom trudny</li>
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
							<>
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
								<div className="horizontal-options">
									<p className="digitword">{randomWord}</p>
								</div>
								<div className="container">
									<div className="row d-flex justify-content-center">
										{numbers.map((digit, index) => (
											<div
												className="col-3 answer-box-mobile d-flex align-items-center justify-content-center equations-mobile"
												key={index}
												onClick={() =>
													handleDigitClick(digit)
												}
											>
												{digit}
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
								{showNextQuestion && (
									<div className="next-question">
										Następne pytanie za chwilę...
									</div>
								)}
							</>
						)}
						<Link style={{ textDecoration: "none" }} to="/num">
							<li className="list-mobile">Wybierz inny poziom</li>
						</Link>
						<Link style={{ textDecoration: "none" }} to="/">
							<li className="list-mobile">Powrót do menu</li>
						</Link>
					</ul>
				</div>
			</div>
		</main>
	);
};

export default NumbHard;
