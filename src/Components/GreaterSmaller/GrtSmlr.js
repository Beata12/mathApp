import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown, faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import { faHeart, faHeartCrack } from "@fortawesome/free-solid-svg-icons";

function GreaterSmaller() {
	const [number1, setNumber1] = useState(0);
	const [number2, setNumber2] = useState(0);
	const [resultIcon, setResultIcon] = useState(null);
	const [points, setPoints] = useState(0);
	const [isComparing, setIsComparing] = useState(false);
	const [selectedSign, setSelectedSign] = useState("");
	const [timer, setTimer] = useState(10);
	const [isTimeUp, setIsTimeUp] = useState(false);
	const [hasSelectedAnswer, setHasSelectedAnswer] = useState(false);
	const [lives, setLives] = useState(3); // Maksymalnie 3 życia
	const [gameOver, setGameOver] = useState(false);

	const generateRandomNumbers = () => {
		const randomNum1 = Math.floor(Math.random() * 11);
		const randomNum2 = Math.floor(Math.random() * 11);
		setNumber1(randomNum1);
		setNumber2(randomNum2);
		setResultIcon(null);
		setSelectedSign("");
		setIsTimeUp(false);
		setTimer(10);
		setHasSelectedAnswer(false);
	};

	const handleComparison = () => {
		setIsComparing(true);

		let isCorrect = false;

		if (
			(selectedSign === "<" && number1 < number2) ||
			(selectedSign === ">" && number1 > number2) ||
			(selectedSign === "=" && number1 === number2)
		) {
			setResultIcon(faFaceSmile);
			isCorrect = true;
		} else {
			setResultIcon(faFaceFrown);
			// Zmiana ikony serduszka na faHeartCrack w przypadku złej odpowiedzi
			setLives(lives - 1);
		}

		setTimeout(() => {
			setResultIcon(null);
			if (isCorrect) {
				setPoints(points + 1);
			}
			if (lives === 0) {
				setGameOver(true);
			} else {
				generateRandomNumbers();
			}
			setIsComparing(false);
		}, 2000);
	};

	useEffect(() => {
		generateRandomNumbers();
	}, []);

	useEffect(() => {
		if (selectedSign !== "") {
			handleComparison();
		}
	}, [selectedSign]);

	useEffect(() => {
		const countdown = setInterval(() => {
			if (timer > 0 && !hasSelectedAnswer) {
				setTimer(timer - 1);
			} else if (!hasSelectedAnswer) {
				setIsTimeUp(true);
				clearInterval(countdown);
				handleComparison();
			}
		}, 1000);

		return () => {
			clearInterval(countdown);
		};
	}, [timer, hasSelectedAnswer]);

	const handleAnswerClick = (answer) => {
		if (!hasSelectedAnswer && !isComparing) {
			setSelectedSign(answer);
			setHasSelectedAnswer(true);
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

	const startNewGame = () => {
		setGameOver(false);
		setPoints(0);
		setLives(3);
		generateRandomNumbers();
	};

	return (
		<main className="main-dzialy">
			<ul className="text-center">
				<div className="list-title-mobile">
					Wybierz odpowiedni znak:
				</div>
				{gameOver ? (
					<div className="gameOver">
						<div className="list-mobile">KONIEC GRY</div>
						<div className="list-mobile">Punkty: {points}</div>
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
						<div className="result">
							{resultIcon ? (
								<FontAwesomeIcon icon={resultIcon} />
							) : null}
						</div>
						<div className="numbers-mobile">
							{number1} &nbsp;&nbsp; {selectedSign} &nbsp;&nbsp;{" "}
							{number2}
						</div>
						<div className="container">
							<div className="row d-flex justify-content-center">
								<button
									className="col-3 answer-box-mobile d-flex align-items-center justify-content-center equations-mobile"
									onClick={() => handleAnswerClick("<")}
									disabled={isComparing || isTimeUp}
								>
									{"<"}
								</button>
								<button
									className="col-3 answer-box-mobile d-flex align-items-center justify-content-center equations-mobile"
									onClick={() => handleAnswerClick(">")}
									disabled={isComparing || isTimeUp}
								>
									{">"}
								</button>
								<button
									className="col-3 answer-box-mobile d-flex align-items-center justify-content-center equations-mobile"
									onClick={() => handleAnswerClick("=")}
									disabled={isComparing || isTimeUp}
								>
									{"="}
								</button>
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
						<div className="information-mobile">Czas: {timer}</div>
					</>
				)}
				<Link style={{ textDecoration: "none" }} to="/comp">
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
		</main>
	);
}

export default GreaterSmaller;
