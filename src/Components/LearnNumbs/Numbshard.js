import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function NumbHard() {
	const numbers = {
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

	const [randomDigits, setRandomDigits] = useState([]);
	const [randomDigitWord, setRandomDigitWord] = useState("");
	const [correctDigit, setCorrectDigit] = useState("");
	const [selectedDigit, setSelectedDigit] = useState("");
	const [showFeedback, setShowFeedback] = useState(false);
	const [isCorrect, setIsCorrect] = useState(false);

	const generateRandomNumbers = () => {
		const uniqueNumbers = new Set();
		while (uniqueNumbers.size < 3) {
			uniqueNumbers.add(Math.floor(Math.random() * 10) + 1);
		}
		const optionsArray = [...uniqueNumbers];
		const randomIndex = Math.floor(Math.random() * optionsArray.length);
		const correctNum = optionsArray[randomIndex];
		setRandomDigits(optionsArray);
		setCorrectDigit(correctNum.toString());
		setRandomDigitWord(numbers[correctNum]);
	};

	useEffect(() => {
		generateRandomNumbers();
		setShowFeedback(false);
		setSelectedDigit("");
	}, []);

	const checkAnswer = () => {
		setShowFeedback(true);
		setIsCorrect(selectedDigit === correctDigit);
	};

	const handleDigitClick = (digit) => {
		setSelectedDigit(digit);
		setShowFeedback(false);
		setIsCorrect(false);
	};

	return (
		<main className="main-dzialy">
			<div className="dzialy-mobile">
				<div className="d-flex justify-content-center align-items-center">
					<ul className="text-center">
						<li className="list">Poziom trudny</li>
						<div className="horizontal-options">
							<p className="digitword">{randomDigitWord}</p>
						</div>
						<div className="horizontal-options d-flex justify-content-center">
							{randomDigits.map((digit, index) => (
								<div
									className={`digits mx-2 ${
										selectedDigit === digit
											? "selected"
											: ""
									}`}
									key={index}
									onClick={() => handleDigitClick(digit)}
								>
									{digit}
								</div>
							))}
						</div>

						<Link to="/num">
							<li className="list">Wybierz inny poziom</li>
						</Link>
						<Link to="/">
							<li className="list">Powrót do menu</li>
						</Link>
					</ul>
				</div>
			</div>
		</main>
	);
}

export default NumbHard;
