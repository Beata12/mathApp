import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

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
		const picNames = pics[currentNumber];

		setCurrentPic(picNames);
	}, [currentNumber]);

	const pics = {
		1: ["faStar"],
		2: ["faStar", "faStar"],
		3: ["faStar", "faStar", "faStar"],
		4: ["faStar", "faStar", "faStar", "faStar"],
		5: ["faStar", "faStar", "faStar", "faStar", "faStar"],
		6: ["faStar", "faStar", "faStar", "faStar", "faStar", "faStar"],
		7: [
			"faStar",
			"faStar",
			"faStar",
			"faStar",
			"faStar",
			"faStar",
			"faStar",
		],
		8: [
			"faStar",
			"faStar",
			"faStar",
			"faStar",
			"faStar",
			"faStar",
			"faStar",
			"faStar",
		],
		9: [
			"faStar",
			"faStar",
			"faStar",
			"faStar",
			"faStar",
			"faStar",
			"faStar",
			"faStar",
			"faStar",
		],
		10: [
			"faStar",
			"faStar",
			"faStar",
			"faStar",
			"faStar",
			"faStar",
			"faStar",
			"faStar",
			"faStar",
			"faStar",
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
			<div className="dzialy-desktop">
				<div className="container d-flex justify-content-center align-items-center">
					<div className="col-8 ">
						<ul className="text-center">
							<div className="board-desktop">
								<div className="list-title-desktop">
									ZNAKI MATEMATYCZNE
								</div>
								<div className="container">
									<div className="row d-flex justify-content-center">
										<div className="col-5 answer-box-desktop d-flex align-items-center justify-content-center equations-desktop">
											<button
												className=" btn-desktop"
												onClick={handlePrevious}
											>
												Poprzedni
											</button>
										</div>
										<div className="col-5 answer-box-desktop d-flex align-items-center justify-content-center equations-desktop">
											<button
												className=" btn-desktop"
												onClick={handleNext}
											>
												Następny
											</button>
										</div>
									</div>
								</div>
								<div className="container">
									<div className="row d-flex justify-content-center">
										<div className="col-3 sign-name">
											{currentNumber}
										</div>
										<div className="col-3 sign-name">
											{numberTexts[currentNumber]}
										</div>
									</div>
								</div>
								{currentPic.map((pic, index) => (
									<div className="container">
										<div className="row d-flex justify-content-center">
											<div className="col-3">
												<div
													key={index}
													className={` ${classes[currentNumber]}`}
												>
													{pic === "faStar" ? (
														<FontAwesomeIcon
															icon={faStar}
														/>
													) : (
														<img
															src={require(`./photos/${pic}`)}
															alt={`Zdjęcie ${currentNumber}`}
														/>
													)}
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
							<ul className="text-center">
								<Link
									style={{ textDecoration: "none" }}
									to="/num"
								>
									<li className="list-desktop board-desktop align-items-center justify-content-center">
										Chcesz poćwiczyć
									</li>
								</Link>
								<Link style={{ textDecoration: "none" }} to="/">
									<li className="list-desktop board-desktop align-items-center justify-content-center">
										Powrót do menu
									</li>
								</Link>
							</ul>
						</ul>
					</div>
				</div>
			</div>
			<div className="dzialy-mobile">
				<div className="header-mobile">Poznaje cyfty</div>
				<div className="blackboard container text-center">
					<div className="text-center">
						<button
							className="btn btn-changenum"
							onClick={handlePrevious}
						>
							Poprzedni
						</button>
						<button
							className="btn btn-changenum"
							onClick={handleNext}
						>
							Następny
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
						<div
							key={index}
							className={` ${classes[currentNumber]}`}
						>
							{pic === "faStar" ? (
								<FontAwesomeIcon icon={faStar} />
							) : (
								<img
									src={require(`./photos/${pic}`)}
									alt={`Zdjęcie ${currentNumber}`}
								/>
							)}
						</div>
					))}
				</div>

				<ul className="text-center">
					<Link style={{ textDecoration: "none" }} to="/num">
						<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
							Chcesz poćwiczyć
						</li>
					</Link>
					<Link style={{ textDecoration: "none" }} to="/">
						<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
							Powrót do menu
						</li>
					</Link>
				</ul>
			</div>
		</main>
	);
}

export default Numbslearn;
