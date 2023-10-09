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
				<div className="signs-content-exmp-mobile">
					<div>{currentDiv.explanation}</div>
					<div className="meaning-exmp-mobile">
						{currentDiv.meaning}
					</div>
					<div className="sign-exmp-mobile">{currentDiv.sign}</div>
				</div>
			</div>

			<ul className="text-center">
				<Link style={{ textDecoration: "none" }} to="/comp">
					<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
						Chcesz poćwiczyć
					</li>
				</Link>
				<Link style={{ textDecoration: "none" }} to="/sign">
					<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
						Znaki matematyczne
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

export default Examples;
