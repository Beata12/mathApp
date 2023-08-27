import React, { useState } from "react";
import { Link } from "react-router-dom";

function Numbslearn() {
	const [currentNumber, setCurrentNumber] = useState(1);

	const numberTexts = {
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

	const numberImages = {
		1: "ball",
		2: "cat",
		3: "an2",
		4: "base",
		5: "5",
		6: "an",
		7: "basket",
		8: "ball2",
		9: "bas2",
		10: "base2",
	};

	const handleNext = () => {
		if (currentNumber < 10) {
			setCurrentNumber(currentNumber + 1);
		}
	};

	const handlePrevious = () => {
		if (currentNumber > 1) {
			setCurrentNumber(currentNumber - 1);
		}
	};

	return (
		<main className="main-dzialy">
			<div className="blackboard container text-center">
				<div className="row">
					<div className="col">
						<p className="number">{currentNumber}</p>
					</div>
					<div className="col">
						<p className="number-tekst">
							{numberTexts[currentNumber]}
						</p>
					</div>
				</div>
				<img
					className={`image-${numberImages[currentNumber]}`}
					src={
						require(`./photos/${numberImages[currentNumber]}.png`)
							.default
					}
					alt={`Add more descriptive alt for ${numberTexts[currentNumber]}`}
				/>
			</div>
			<div className="text-center">
				<button onClick={handlePrevious}>Poprzedni</button>
				<button onClick={handleNext}>Dalej</button>
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

export default Numbslearn;
