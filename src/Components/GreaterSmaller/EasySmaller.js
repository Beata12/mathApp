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
	const [isTimeoutExpired, setIsTimeoutExpired] = useState(true);
	const [timer, setTimer] = useState(10); // Początkowy czas na liczniku

	// Funkcja do generowania losowych liczb
	const generateRandomNumbers = () => {
		const randomNum1 = Math.floor(Math.random() * 11); // Losowa cyfra od 0 do 10
		let randomNum2 = randomNum1;
		while (randomNum2 === randomNum1) {
			randomNum2 = Math.floor(Math.random() * 11);
		}
		setNumber1(randomNum1);
		setNumber2(randomNum2);
		setResult(null);
		setIsTimeoutExpired(false);
		setTimer(10); // Zresetuj czas na 10 sekund
	};

	// Funkcja do rozpoczęcia odliczania czasu
	const startTimer = () => {
		const intervalId = setInterval(() => {
			setTimer((prevTimer) => {
				if (prevTimer === 0) {
					clearInterval(intervalId);
					handleTimeout(); // Obsługa zdarzenia, gdy czas się skończy
					return prevTimer;
				}
				return prevTimer - 1;
			});
		}, 1000); // 1000 milisekund = 1 sekunda
	};

	// Funkcja do obsługi zdarzenia, gdy czas się skończy
	const handleTimeout = () => {
		setResult("timeout");
		setIsComparing(false);
		setTimeout(() => {
			setResult(null);
			generateRandomNumbers();
		}, 2000); // Opóźnienie 2 sekundy
	};

	// Funkcja do obsługi wyboru odpowiedzi
	const handleComparison = (selectedNumber) => {
		if (isComparing || isTimeoutExpired) {
			return; // Jeśli porównywanie trwa lub czas odpowiedzi minął, nie rób nic
		}

		setIsComparing(true);

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
			if (isCorrect) {
				setPoints(points + 1); // Dodawanie punktu za poprawną odpowiedź
			}
			setIsComparing(false); // Odblokowanie przycisków po zakończeniu procesu
		}, 2000); // Opóźnienie 2 sekundy
	};

	useEffect(() => {
		generateRandomNumbers();
		startTimer(); // Rozpocznij odliczanie czasu po wygenerowaniu liczb
	}, []);

	return (
		<main className="main-dzialy">
			<ul className="text-center">
				<div className="list">Która liczba jest mniejsza?</div>
				<div className="result">
					{result === "correct" ? (
						<FontAwesomeIcon icon={faFaceSmile} />
					) : result === "incorrect" ? (
						<FontAwesomeIcon icon={faFaceFrown} />
					) : result === "timeout" ? (
						<FontAwesomeIcon icon={faFaceFrown} /> // Ikona smutnej buźki po czasie
					) : null}
				</div>
				<div className="numbers-mobile">
					<button
						onClick={() => handleComparison("number1")}
						disabled={isComparing || isTimeoutExpired}
					>
						{number1}
					</button>
					&nbsp;&nbsp;&nbsp;&nbsp;
					<button
						onClick={() => handleComparison("number2")}
						disabled={isComparing || isTimeoutExpired}
					>
						{number2}
					</button>
				</div>
				<div>Czas: {timer} s</div>
				<div>Punkty: {points}</div>

				<Link style={{ textDecoration: "none" }} to="/comp">
					<li className="list-mobile">Wybierz inny poziom</li>
				</Link>
				<Link style={{ textDecoration: "none" }} to="/comp">
					<li className="list-mobile">Powrót do menu</li>
				</Link>
			</ul>
		</main>
	);
}

export default EasySmaller;
