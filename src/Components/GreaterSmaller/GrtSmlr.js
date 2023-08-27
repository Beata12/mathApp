import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown, faFaceSmile } from "@fortawesome/free-regular-svg-icons";

function GrterSmaller() {
	const [number1, setNumber1] = useState(0);
	const [number2, setNumber2] = useState(0);
	const [resultIcon, setResultIcon] = useState(null); // Zamiast "result", używamy "resultIcon"
	const [points, setPoints] = useState(0);
	const [isComparing, setIsComparing] = useState(false);
	const [selectedSign, setSelectedSign] = useState("");

	const generateRandomNumbers = () => {
		const randomNum1 = Math.floor(Math.random() * 11);
		const randomNum2 = Math.floor(Math.random() * 11);
		setNumber1(randomNum1);
		setNumber2(randomNum2);
		setResultIcon(null);
		setSelectedSign("");
	};

	const handleComparison = () => {
		if (isComparing) {
			return;
		}

		if (!selectedSign) {
			return;
		}

		setIsComparing(true);

		let isCorrect = false;

		if (
			(selectedSign === "less" && number1 < number2) ||
			(selectedSign === "greater" && number1 > number2) ||
			(selectedSign === "equal" && number1 === number2)
		) {
			setResultIcon(faFaceSmile); // Ustawiamy ikonę uśmiechniętej buźki
			isCorrect = true;
		} else {
			setResultIcon(faFaceFrown); // Ustawiamy ikonę smutnej buźki
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

	return (
		<main className="main-dzialy">
			<ul className="text-center">
				<div className="list">Wybierz znak:</div>
				<div className="numbers">
					<button
						onClick={() => setSelectedSign("less")}
						disabled={isComparing}
					>
						{"<"}
					</button>
					<button
						onClick={() => setSelectedSign("greater")}
						disabled={isComparing}
					>
						{">"}
					</button>
					<button
						onClick={() => setSelectedSign("equal")}
						disabled={isComparing}
					>
						{"="}
					</button>
				</div>
				{number1} {selectedSign} {number2}
				<div className="result">
					{resultIcon ? <FontAwesomeIcon icon={resultIcon} /> : null}
				</div>
				<div>Punkty: {points}</div>
				<Link to="/comp">
					<li className="list">Powrót do menu</li>
				</Link>
			</ul>
		</main>
	);
}

export default GrterSmaller;
