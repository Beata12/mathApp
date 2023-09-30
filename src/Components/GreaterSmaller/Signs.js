import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signs() {
	const divContents = [
		{ explanation: "Znak", meaning: "dodawania", sign: "+" },
		{ explanation: "Znak", meaning: "odejmowania", sign: "-" },
		{ explanation: "Znak", meaning: "równości", sign: "=" },
		{ explanation: "Znak", meaning: "większości", sign: ">" },
		{ explanation: "Znak", meaning: "mniejszości", sign: "<" },
	];

	const [currentDivIndex, setCurrentDivIndex] = useState(0);

	const handleNextClick = () => {
		const nextIndex = (currentDivIndex + 1) % divContents.length;
		setCurrentDivIndex(nextIndex);
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
				<Link style={{ textDecoration: "none" }} to="/eg">
					<li className="list-mobile">Przykłady</li>
				</Link>
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

export default Signs;
