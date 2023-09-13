import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown, faFaceSmile } from "@fortawesome/free-regular-svg-icons";

function EasyGreater() {
	// Stan dla liczb, wyniku, punktów, stanu porównywania oraz pozostałego czasu
	const [number1, setNumber1] = useState(0);
	const [number2, setNumber2] = useState(0);
	const [result, setResult] = useState(null);
	const [points, setPoints] = useState(0);
	const [isComparing, setIsComparing] = useState(false);
	const [timeRemaining, setTimeRemaining] = useState(10);

	// Uruchomienie generowania losowych liczb na początku
	useEffect(() => {
		generateRandomNumbers();
	}, []);

	// Efekt monitorujący stan czasu i stan porównywania
	useEffect(() => {
		let timer;

		// Uruchomienie odliczania czasu, jeśli trwa porównywanie i czas jest większy od zera
		if (isComparing) {
			timer = setInterval(() => {
				setTimeRemaining((prevTime) => prevTime - 1);
			}, 1000);
		} else {
			clearInterval(timer); // Zatrzymanie odliczania czasu, jeśli nie trwa porównywanie
		}

		// Obsługa przypadku, gdy czas się skończy
		if (timeRemaining === 0) {
			clearInterval(timer); // Zatrzymanie odliczania czasu
			setResult("incorrect"); // Ustawienie wyniku na "incorrect"
			setIsComparing(false); // Zakończenie porównywania

			// Opóźnione resetowanie wyniku i wylosowanie nowych liczb
			setTimeout(() => {
				setResult(null);
				generateRandomNumbers();
				startTimer(); // Uruchomienie odliczania czasu po wylosowaniu nowych liczb
			}, 2000);
		}

		// Czyszczenie timera po zakończeniu komponentu
		return () => {
			clearInterval(timer);
		};
	}, [timeRemaining, isComparing]);

	// Funkcja do generowania losowych liczb
	const generateRandomNumbers = () => {
		setTimeRemaining(10); // Zresetowanie czasu na 10 sekund
		const randomNum1 = Math.floor(Math.random() * 11); // Losowa liczba 0-10
		let randomNum2 = randomNum1;

		while (randomNum2 === randomNum1) {
			randomNum2 = Math.floor(Math.random() * 11); // Losowa liczba 0-10 różna od poprzedniej
		}

		setNumber1(randomNum1); // Ustawienie pierwszej liczby
		setNumber2(randomNum2); // Ustawienie drugiej liczby
		setResult(null); // Zresetowanie wyniku
		startTimer(); // Uruchomienie odliczania czasu po wylosowaniu nowych liczb
	};

	// Funkcja do uruchomienia odliczania czasu
	const startTimer = () => {
		setIsComparing(true); // Ustawienie stanu porównywania na true
	};

	// Funkcja do obsługi porównywania liczb
	const handleComparison = (selectedNumber) => {
		if (isComparing) {
			setIsComparing(false); // Zakończenie porównywania

			let isCorrect = false;

			// Porównywanie wybranej liczby z drugą liczbą
			if (selectedNumber === "number1") {
				if (number1 > number2) {
					setResult("correct"); // Ustawienie wyniku na "correct" w przypadku poprawnej odpowiedzi
					isCorrect = true;
				} else {
					setResult("incorrect"); // Ustawienie wyniku na "incorrect" w przypadku niepoprawnej odpowiedzi
				}
			} else if (selectedNumber === "number2") {
				if (number2 > number1) {
					setResult("correct"); // Ustawienie wyniku na "correct" w przypadku poprawnej odpowiedzi
					isCorrect = true;
				} else {
					setResult("incorrect"); // Ustawienie wyniku na "incorrect" w przypadku niepoprawnej odpowiedzi
				}
			}

			// Opóźnione resetowanie wyniku i wylosowanie nowych liczb
			setTimeout(() => {
				setResult(null);
				generateRandomNumbers();
			}, 2000);

			// Zwiększenie punktów w przypadku poprawnej odpowiedzi
			if (isCorrect) {
				setPoints(points + 1);
			}
		}
	};

	return (
		<main className="main-dzialy">
			<ul className="text-center">
				<div className="list">Która liczba jest większa?</div>
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
				<div>Punkty: {points}</div>
				<div>Czas: {timeRemaining}</div>
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

export default EasyGreater;
