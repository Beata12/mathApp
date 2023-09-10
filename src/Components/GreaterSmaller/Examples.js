import React, { useState } from "react";
import { Link } from "react-router-dom";

function Examples() {
	const divContents = [
		{ explanation: "Przykład:", meaning: "większy", sign: "10 > 6" },
		{ explanation: "Przykład:", meaning: "większy", sign: "8 > 2" },
		{ explanation: "Przykład:", meaning: "mniejszy", sign: "3 < 5" },
		{ explanation: "Przykład:", meaning: "mniejszy", sign: "6 < 8" },
		{ explanation: "Przykład:", meaning: "równy", sign: "6 = 6" },
		{ explanation: "Przykład:", meaning: "równy", sign: "2 = 2" },
	];

	const [currentDivIndex, setCurrentDivIndex] = useState(0);

	const handleNextClick = () => {
		const nextIndex = (currentDivIndex + 1) % divContents.length;
		if (nextIndex < divContents.length) {
			setCurrentDivIndex(nextIndex);
		}
	};

	const handlePreviousClick = () => {
		const previousIndex =
			(currentDivIndex - 1 + divContents.length) % divContents.length;
		if (previousIndex >= 0) {
			setCurrentDivIndex(previousIndex);
		}
	};

	const currentDiv = divContents[currentDivIndex];

	return (
		<main className="main-dzialy">
			<div className="blackboard container">
				<div className="text-center">
					<button
						className="btn btn-changenum"
						onClick={handlePreviousClick}
					>
						Poprzedni
					</button>

					<button
						className="btn btn-changenum"
						onClick={handleNextClick}
					>
						Dalej
					</button>
				</div>
				<div className="signs-content-mobile">
					<div>{currentDiv.explanation}</div>
					<div className="meaning-mobile">{currentDiv.meaning}</div>
					<div className="sign-mobile">{currentDiv.sign}</div>
				</div>
			</div>

			<ul className="text-center">
				<Link style={{ textDecoration: "none" }} to="/comp">
					<li className="list-mobile">Chcesz poćwiczyć</li>
				</Link>
				<Link style={{ textDecoration: "none" }} to="/">
					<li className="list-mobile">Powrót do menu</li>
				</Link>
			</ul>
		</main>
	);
}

export default Examples;