import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown, faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import { faHeart, faHeartCrack } from "@fortawesome/free-solid-svg-icons";

function SubtractionUpTo5() {
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

	useEffect(() => {
		generateRandomNumbers();
	}, []);

	useEffect(() => {
		const intervalId = setInterval(() => {
			if (timer > 0 && canAnswer) {
				setTimer(timer - 1);
			} else if (timer === 0 && canAnswer) {
				clearInterval(intervalId);
				setShowFrown(true); // Pokaż smutną buźkę po zakończeniu czasu
				// Zmniejsz liczbę żyć po upływie czasu
				if (lives > 0) {
					setLives(lives - 1);
				} else {
					// Jeśli nie ma już żyć, zakończ grę
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
	}, [timer, canAnswer, lives]);

	const generateRandomNumbers = () => {
		setCanAnswer(true);
		const min = 0;
		const max = 5;

		let newNumber1 = Math.floor(Math.random() * (max - min + 1)) + min;
		let newNumber2 = Math.floor(Math.random() * (max - min + 1)) + min;

		while (newNumber2 > newNumber1) {
			newNumber2 = Math.floor(Math.random() * (max - min + 1)) + min;
		}

		const correct = newNumber1 - newNumber2;
		const incorrectIndexes = [0, 1, 2].filter((index) => index !== correct);

		let incorrect1 = generateIncorrectAnswer(incorrectIndexes, correct);
		let incorrect2 = generateIncorrectAnswer(incorrectIndexes, correct);

		while (incorrect1 === incorrect2) {
			incorrect2 = generateIncorrectAnswer(incorrectIndexes, correct);
		}

		setNumber1(newNumber1);
		setNumber2(newNumber2);
		setAnswer1(correct);
		setAnswer2(incorrect1);
		setAnswer3(incorrect2);
		setCorrectAnswer(correct);
		setShowSmile(false);
		setTimer(10);
	};

	const generateIncorrectAnswer = (excludedIndexes, correct) => {
		const min = 0;
		const max = 5;

		let incorrect = Math.floor(Math.random() * (max - min + 1)) + min;

		while (excludedIndexes.includes(incorrect) || incorrect === correct) {
			incorrect = Math.floor(Math.random() * (max - min + 1)) + min;
		}

		return incorrect;
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
				// Zmniejsz liczbę żyć po niepoprawnej odpowiedzi
				if (lives > 0) {
					setLives(lives - 1);
				}
				setShowFrown(true);

				setTimeout(() => {
					setShowFrown(false);
					generateRandomNumbers();

					// Sprawdź, czy liczba błędnych odpowiedzi wynosi 3, jeśli tak, to koniec gry
					if (incorrectAnswers === 2) {
						setGameOver(true);
					}
				}, 2000);
			}
		}
	};

	// Funkcja do generowania ikon serduszek na podstawie liczby żyć
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

	return (
		<main className="main-dzialy">
			<div className="dzialy-mobile">
				<div className="d-flex justify-content-center align-items-center">
					<ul className="text-center">
						<div className="list-mobile">Odejmowanie do 5</div>
						{gameOver && (
							<div className="pojawiaSie">
								<div>KONIEC GRY</div>
								<div>Punkty: {points}</div>
								<div>Gratulacje</div>
							</div>
						)}
						{!gameOver && (
							<div className="znika">
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
											<div className="col-3 answer-box-mobile d-flex align-items-center justify-content-center ">
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
}

export default SubtractionUpTo5;
