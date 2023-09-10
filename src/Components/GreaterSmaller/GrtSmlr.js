import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown, faFaceSmile } from "@fortawesome/free-regular-svg-icons";

function GreaterSmaller() {
	const [number1, setNumber1] = useState(0);
	const [number2, setNumber2] = useState(0);
	const [resultIcon, setResultIcon] = useState(null);
	const [points, setPoints] = useState(0);
	const [isComparing, setIsComparing] = useState(false);
	const [selectedSign, setSelectedSign] = useState("");
	const [timer, setTimer] = useState(10); // Countdown timer in seconds
	const [isTimeUp, setIsTimeUp] = useState(false);
	const [hasSelectedAnswer, setHasSelectedAnswer] = useState(false);

	const generateRandomNumbers = () => {
		const randomNum1 = Math.floor(Math.random() * 11);
		const randomNum2 = Math.floor(Math.random() * 11);
		setNumber1(randomNum1);
		setNumber2(randomNum2);
		setResultIcon(null);
		setSelectedSign("");
		setIsTimeUp(false); // Reset the time-up flag
		setTimer(10); // Reset the timer to 10 seconds with each new question
		setHasSelectedAnswer(false); // Reset the selected answer flag
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
		}

		setTimeout(() => {
			setResultIcon(null);
			generateRandomNumbers();
			if (isCorrect) {
				setPoints(points + 1);
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
		// Start the countdown timer
		const countdown = setInterval(() => {
			if (timer > 0 && !hasSelectedAnswer) {
				setTimer(timer - 1);
			} else if (!hasSelectedAnswer) {
				setIsTimeUp(true); // Time's up!
				clearInterval(countdown);
				handleComparison(); // Automatically handle comparison when time's up
			}
		}, 1000);

		return () => {
			clearInterval(countdown); // Clean up the timer when the component unmounts
		};
	}, [timer, hasSelectedAnswer]);

	const handleAnswerClick = (answer) => {
		if (!hasSelectedAnswer && !isComparing) {
			setSelectedSign(answer);
			setHasSelectedAnswer(true);
		}
	};

	return (
		<main className="main-dzialy">
			<ul className="text-center">
				<div className="list">Wybierz znak:</div>
				<div className="result">
					{resultIcon ? <FontAwesomeIcon icon={resultIcon} /> : null}
				</div>
				<div className="numbers-mobile">
					{number1} &nbsp;&nbsp; {selectedSign} &nbsp;&nbsp; {number2}
				</div>
				<div className="numbers-mobile">
					<button
						onClick={() => handleAnswerClick("<")}
						disabled={isComparing || isTimeUp}
					>
						{"<"}
					</button>
					<button
						onClick={() => handleAnswerClick(">")}
						disabled={isComparing || isTimeUp}
					>
						{">"}
					</button>
					<button
						onClick={() => handleAnswerClick("=")}
						disabled={isComparing || isTimeUp}
					>
						{"="}
					</button>
				</div>
				<div>Punkty: {points}</div>
				<div>Czas: {timer} s</div>
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

export default GreaterSmaller;
