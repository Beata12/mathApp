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

	const [stars, setStars] = useState(Array(currentNumber).fill(null));

	const handleNext = () => {
		if (currentNumber < 10) {
			setCurrentNumber(currentNumber + 1);
			setStars(Array(currentNumber + 1).fill(null));
		}
	};

	const handlePrevious = () => {
		if (currentNumber > 1) {
			setCurrentNumber(currentNumber - 1);
			setStars(Array(currentNumber - 1).fill(null));
		}
	};

	useEffect(() => {
		setStars(Array(currentNumber).fill(null));
	}, [currentNumber]);

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
								<div className="container">
									<div className="row d-flex justify-content-center">
										{stars.map((star, index) => (
											<div
												className="col equations-desktop  justify-content-center"
												key={index}
											>
												<FontAwesomeIcon
													icon={faStar}
													className="star-learn-num"
												/>
											</div>
										))}
									</div>
								</div>
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
				<div className="blackboard container">
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
					<div className="container">
						<div className="row d-flex justify-content-center">
							<div className="col numbers-mobile">
								{currentNumber}
							</div>
							<div className="col numbers-mobile">
								{numberTexts[currentNumber]}
							</div>
						</div>
					</div>
					<div className="container">
						<div className="row d-flex justify-content-center">
							{stars.map((star, index) => (
								<div
									className="col-3 d-flex align-items-center justify-content-center equations-mobile"
									key={index}
								>
									<FontAwesomeIcon
										icon={faStar}
										className="star-learn-mobile"
									/>
								</div>
							))}
						</div>
					</div>
				</div>
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
		</main>
	);
}

export default Numbslearn;
