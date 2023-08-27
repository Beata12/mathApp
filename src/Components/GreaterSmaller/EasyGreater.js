import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown, faFaceSmile } from "@fortawesome/free-regular-svg-icons";

function EasyChoose() {
	const [number1, setNumber1] = useState(0);
	const [number2, setNumber2] = useState(0);
	const [result, setResult] = useState(null);
	const [points, setPoints] = useState(0);
	const [isComparing, setIsComparing] = useState(false);

	const generateRandomNumbers = () => {
		const randomNum1 = Math.floor(Math.random() * 11); // Losowa cyfra od 0 do 10
		let randomNum2 = randomNum1;
		while (randomNum2 === randomNum1) {
			randomNum2 = Math.floor(Math.random() * 11);
		}
		setNumber1(randomNum1);
		setNumber2(randomNum2);
		setResult(null);
	};

	const handleComparison = (selectedNumber) => {
		if (isComparing) {
			return; // Jeśli porównywanie trwa, nie rób nic
		}

		setIsComparing(true);

		let isCorrect = false;

		if (selectedNumber === "number1") {
			if (number1 > number2) {
				setResult("correct");
				isCorrect = true;
			} else {
				setResult("incorrect");
			}
		} else if (selectedNumber === "number2") {
			if (number2 > number1) {
				setResult("correct");
				isCorrect = true;
			} else {
				setResult("incorrect");
			}
		}

		setTimeout(() => {
			setResult(null);
			generateRandomNumbers();
			if (isCorrect) {
				setPoints(points + 1); // Dodawanie punktu za poprawną odpowiedź
			}
			setIsComparing(false); // Odblokowanie przycisków po zakończeniu procesu
		}, 2000); // Opóźnienie 3 sekundy
	};

	useEffect(() => {
		generateRandomNumbers();
	}, []);

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
				<div className="numbers">
					<button
						onClick={() => handleComparison("number1")}
						disabled={isComparing}
					>
						{number1}
					</button>
					<button
						onClick={() => handleComparison("number2")}
						disabled={isComparing}
					>
						{number2}
					</button>
				</div>
				<div>Punkty: {points}</div>

				<Link to="/comp">
					<li className="list">Powrót do menu</li>
				</Link>
			</ul>
		</main>
	);
}

export default EasyChoose;
