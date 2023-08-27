import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signs() {
	const divContents = [
		{ explanation: "Znaki", sign: "większy", meaning: ">" },
		{ explanation: "Znaki", sign: "mniejszy", meaning: "<" },
		{ explanation: "Znaki", sign: "równy", meaning: "=" },
		{ explanation: "Przykład:", sign: "większy", meaning: "10 > 6" },
		{ explanation: "Przykład:", sign: "większy", meaning: "8 > 2" },
		{ explanation: "Przykład:", sign: "mniejszy", meaning: "3 < 5" },
		{ explanation: "Przykład:", sign: "mniejszy", meaning: "6 < 8" },
		{ explanation: "Przykład:", sign: "równy", meaning: "6 = 6" },
		{ explanation: "Przykład:", sign: "równy", meaning: "2 = 2" },
	];

	const [currentDivIndex, setCurrentDivIndex] = useState(0);

	const handleNextClick = () => {
		const nextIndex = currentDivIndex + 1;
		if (nextIndex < divContents.length) {
			setCurrentDivIndex(nextIndex);
		}
	};

	const handlePreviousClick = () => {
		const previousIndex = currentDivIndex - 1;
		if (previousIndex >= 0) {
			setCurrentDivIndex(previousIndex);
		}
	};

	const currentDiv = divContents[currentDivIndex];

	return (
		<main className="main-dzialy">
			<div className="blackboard container text-center">
				<div className="signs-content">
					<div>{currentDiv.explanation}</div>
					<div>{currentDiv.sign}</div>
					<div>{currentDiv.meaning}</div>
				</div>
				{/* ... Render other divs as needed */}
				<button onClick={handleNextClick}>dalej</button>
				<button onClick={handlePreviousClick}>poprzedni</button>
			</div>

			<ul className="text-center">
				<Link to="/num">
					<li className="list">Chcesz poćwiczyć</li>
				</Link>
				<Link to="/">
					<li className="list">Powrót do menu</li>
				</Link>
			</ul>
		</main>
	);
}

export default Signs;
