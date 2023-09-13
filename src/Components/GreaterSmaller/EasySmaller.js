import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown, faFaceSmile } from "@fortawesome/free-regular-svg-icons";

function EasySmaller() {
	const [number1, setNumber1] = useState(0);
	const [number2, setNumber2] = useState(0);
	const [result, setResult] = useState(null);
	const [points, setPoints] = useState(0);
	const [isComparing, setIsComparing] = useState(false);
	const [timeRemaining, setTimeRemaining] = useState(10);

	useEffect(() => {
		generateRandomNumbers();
	}, []);

	useEffect(() => {
		let timer;

		if (isComparing) {
			timer = setInterval(() => {
				setTimeRemaining((prevTime) => prevTime - 1);
			}, 1000);
		} else {
			clearInterval(timer);
		}

		if (timeRemaining === 0) {
			clearInterval(timer);
			setResult("incorrect");
			setIsComparing(false);

			setTimeout(() => {
				setResult(null);
				generateRandomNumbers();
				startTimer();
			}, 2000);
		}

		return () => {
			clearInterval(timer);
		};
	}, [timeRemaining, isComparing]);

	// Funkcja do generowania losowych liczb
	const generateRandomNumbers = () => {
		setTimeRemaining(10);
		const randomNum1 = Math.floor(Math.random() * 11); // Losowa cyfra od 0 do 10
		let randomNum2 = randomNum1;

		while (randomNum2 === randomNum1) {
			randomNum2 = Math.floor(Math.random() * 11);
		}

		setNumber1(randomNum1);
		setNumber2(randomNum2);
		setResult(null);
		startTimer(); // Rozpocznij odliczanie czasu
	};

	// Funkcja do rozpoczęcia odliczania czasu
	const startTimer = () => {
		setIsComparing(true);
	};

	// Funkcja do obsługi wyboru odpowiedzi
	const handleComparison = (selectedNumber) => {
		if (isComparing) {
			setIsComparing(false); // to sprawia, że czas się zatrzymuje po kliknięciu

			let isCorrect = false;

			if (
				(selectedNumber === "number1" && number1 < number2) ||
				(selectedNumber === "number2" && number2 < number1)
			) {
				// Sprawdź, która liczba jest mniejsza
				setResult("correct");
				isCorrect = true;
			} else {
				setResult("incorrect");
			}

			setTimeout(() => {
				setResult(null);
				generateRandomNumbers();
			}, 2000); // Opóźnienie 2 sekundy

			if (isCorrect) {
				setPoints(points + 1);
			}
		}
	};

	return (
		<main className="main-dzialy">
			<ul className="text-center">
				<div className="list">Która liczba jest mniejsza?</div>
				<div className="result">
					{result === "correct" ? (
						<FontAwesomeIcon icon={faFaceSmile} />
					) : result === "incorrect" ? (
						<FontAwesomeIcon icon={faFaceFrown} />
					) : null}
				</div>
				<div className="numbers-mobile">
					<button
						onClick={() => handleComparison("number1")}
						disabled={!isComparing}
					>
						{number1}
					</button>
					&nbsp;&nbsp;&nbsp;&nbsp;
					<button
						onClick={() => handleComparison("number2")}
						disabled={!isComparing}
					>
						{number2}
					</button>
				</div>
				<div>Czas: {timeRemaining} s</div>
				<div>Punkty: {points}</div>

				<Link style={{ textDecoration: "none" }} to="/comp">
					<li className="list-mobile">Wybierz inny poziom</li>
				</Link>
				<Link style={{ textDecoration: "none" }} to="/">
					<li className="list-mobile">Powrót do menu</li>
				</Link>
			</ul>
		</main>
	);
}

export default EasySmaller;
