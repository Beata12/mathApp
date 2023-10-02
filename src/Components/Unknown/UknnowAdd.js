import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown, faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import { faHeart, faHeartCrack } from "@fortawesome/free-solid-svg-icons";

function UnknownAdd() {
	const [result, setResult] = useState(null);
	const [correctAnswer, setCorrectAnswer] = useState(null);
	const [choices, setChoices] = useState([]);
	const [answered, setAnswered] = useState(false);
	const [answeredCorrectly, setAnsweredCorrectly] = useState(false);
	const [resultIcon, setResultIcon] = useState(null);
	const [timer, setTimer] = useState(10);
	const [points, setPoints] = useState(0);
	const [lives, setLives] = useState(3);
	const [gameOver, setGameOver] = useState(false);

	const random1 = () => Math.floor(Math.random() * 11);
	const random2 = () => Math.floor(Math.random() * 11);

	const generateNewEquation = () => {
		let num1, num2, correctResult;
		do {
			num1 = random1();
			num2 = random2();
			correctResult = num2 - num1;
		} while (correctResult < 0);

		const possibleChoices = [correctResult];
		while (possibleChoices.length < 3) {
			const randomChoice = Math.floor(Math.random() * 11);
			if (!possibleChoices.includes(randomChoice)) {
				possibleChoices.push(randomChoice);
			}
		}

		possibleChoices.sort(() => Math.random() - 0.5);

		setResult(`${num1} + X = ${num2}`);
		setCorrectAnswer(correctResult);
		setChoices(possibleChoices);
		setAnswered(false);
		setAnsweredCorrectly(false);
		setResultIcon(null);
		setTimer(10);
	};

	const handleChoiceClick = (choice) => {
		if (choice === correctAnswer) {
			setAnsweredCorrectly(true);
			setPoints(points + 1);
			setResultIcon(faFaceSmile);
		} else {
			setLives(lives - 1);
			if (lives === 1) {
				setGameOver(true);
			}
			setResultIcon(faFaceFrown);
		}
		setAnswered(true);
		setTimeout(() => {
			generateNewEquation();
		}, 2000);
	};

	useEffect(() => {
		generateNewEquation();
	}, []);

	useEffect(() => {
		let countdown;
		if (!gameOver && !answered) {
			countdown = setInterval(() => {
				if (timer > 0) {
					setTimer(timer - 1);
				} else {
					clearInterval(countdown);
					handleChoiceClick();
				}
			}, 1000);
		} else if (gameOver) {
			clearInterval(countdown);
		}
		return () => clearInterval(countdown);
	}, [timer, answered, gameOver]);

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
		generateNewEquation();
		setTimer(10);
	};

	return (
		<main className="main-dzialy">
			<div className="dzialy-mobile">
				<div className="d-flex justify-content-center align-items-center">
					<ul className="text-center">
						<div className="list-title-mobile">
							Dodawanie z niewiadomą
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
							<>
								<div className="icons-mobile">
									{resultIcon ? (
										<FontAwesomeIcon
											icon={resultIcon}
											className="face-icon"
										/>
									) : null}
								</div>
								<p className="numbers-mobile">{result}</p>

								<div className="container">
									<div className="row d-flex justify-content-center">
										{choices.map((choice, index) => (
											<button
												className="col-3 answer-box-mobile d-flex align-items-center justify-content-center equations-mobile"
												key={index}
												onClick={() =>
													handleChoiceClick(choice)
												}
												disabled={answered}
											>
												{choice}
											</button>
										))}
									</div>
								</div>
								<div className="container">
									<div className="row">
										<div className="col">
											{generateHeartIcons()}
										</div>
									</div>
								</div>
								<div className="information-mobile">
									Punkty: {points}
								</div>
								<div className="information-mobile">
									Czas: {timer}
								</div>
							</>
						)}
						<Link style={{ textDecoration: "none" }} to="/un">
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
