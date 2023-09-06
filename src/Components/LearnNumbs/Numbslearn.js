import React, { useState, useEffect } from "react"; // Import useEffect
import { Link } from "react-router-dom";

function Numbslearn() {
	const [currentNumber, setCurrentNumber] = useState(1);

	const pics = {
		1: "1.png",
		2: "2.png",
		3: "3.png",
		4: "4.png",
		5: "5.png",
		6: "6.png",
		7: "7.png",
		8: "8.png",
		9: "9.png",

		10: "10.png",
	};

	const [currentPic, setCurrentPic] = useState(pics[currentNumber]);

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

	useEffect(() => {
		// Aktualizuj currentPic na podstawie currentNumber po zmianie currentNumber
		setCurrentPic(pics[currentNumber]);
	}, [currentNumber, pics]);

	return (
		<main className="main-dzialy">
			<div className="blackboard container text-center">
				<div className="text-center">
					<button onClick={handlePrevious}>Poprzedni</button>
					<button onClick={handleNext}>Dalej</button>
				</div>
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
					className="an-class"
					src={require(`./photos/${currentPic}`)}
					alt={"Add more descriptive alt"}
				/>
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
