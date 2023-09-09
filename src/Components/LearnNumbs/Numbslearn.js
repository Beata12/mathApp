import React, { useState, useEffect } from "react";
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
		// Pobierz nazwy plików obrazów z obiektu pics bez przecinków
		const picNames = pics[currentNumber];

		setCurrentPic(picNames);
	}, [currentNumber]);

	const pics = {
		1: ["1.png"],
		2: ["2.png", "2.png"],
		3: ["3.png", "3.png", "3.png"],
		4: ["4.png", "4.png", "4.png", "4.png"],
		5: ["5.png", "5.png", "5.png", "5.png", "5.png"],
		6: ["6.png", "6.png", "6.png", "6.png", "6.png", "6.png"],
		7: ["7.png", "7.png", "7.png", "7.png", "7.png", "7.png", "7.png"],
		8: [
			"8.png",
			"8.png",
			"8.png",
			"8.png",
			"8.png",
			"8.png",
			"8.png",
			"8.png",
		],
		9: [
			"9.png",
			"9.png",
			"9.png",
			"9.png",
			"9.png",
			"9.png",
			"9.png",
			"9.png",
			"9.png",
		],
		10: [
			"10.png",
			"10.png",
			"10.png",
			"10.png",
			"10.png",
			"10.png",
			"10.png",
			"10.png",
			"10.png",
			"10.png",
		],
	};

	const classes = {
		1: "one-class",
		2: "two-class",
		3: "three-class",
		4: "four-class",
		5: "fife-class",
		6: "six-class",
		7: "seven-class",
		8: "eight-class",
		9: "nine-class",
		10: "ten-class",
	};

	const [currentPic, setCurrentPic] = useState(pics[currentNumber]);

	return (
		<main className="main-dzialy">
			<div className="header-mobile">Poznaje cyfty</div>
			<div className="blackboard container text-center">
				<div className="text-center">
					<button
						className="btn btn-changenum"
						onClick={handlePrevious}
					>
						Poprzedni
					</button>
					<button className="btn btn-changenum" onClick={handleNext}>
						Dalej
					</button>
				</div>
				<div className="row">
					<div className="col ">
						<p className="number">{currentNumber}</p>
					</div>
					<div className="col">
						<p className="number-tekst">
							{numberTexts[currentNumber]}
						</p>
					</div>
				</div>
				{currentPic.map((pic, index) => (
					<img
						className={` ${classes[currentNumber]}`}
						key={index}
						src={require(`./photos/${pic}`)}
						alt={`Zdjęcie ${currentNumber}`}
					/>
				))}
			</div>

			<ul className="text-center">
				<Link style={{ textDecoration: "none" }} to="/num">
					<li className="list-mobile">Chcesz poćwiczyć</li>
				</Link>
				<Link style={{ textDecoration: "none" }} to="/">
					<li className="list-mobile">Powrót do menu</li>
				</Link>
			</ul>
		</main>
	);
}

export default Numbslearn;
