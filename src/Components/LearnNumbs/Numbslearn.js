import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import jeden from "../../audio/numbers/jeden.mp3";
import dwa from "../../audio/numbers/dwa.mp3";
import trzy from "../../audio/numbers/trzy.mp3";
import cztery from "../../audio/numbers/cztery.mp3";
import piec from "../../audio/numbers/piec.mp3";
import szesc from "../../audio/numbers/szesc.mp3";
import siedem from "../../audio/numbers/siedem.mp3";
import osiem from "../../audio/numbers/osiem.mp3";
import dziewiec from "../../audio/numbers/dziewiec.mp3";
import dziesiec from "../../audio/numbers/dziesiec.mp3";
import menu from "../../audio/menu.mp3";
import practice from "../../audio/practice.mp3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faVolumeUp } from "@fortawesome/free-solid-svg-icons";

function Numbslearn() {
	const [currentNumber, setCurrentNumber] = useState(1);
	const [isButtonDisabled, setButtonDisabled] = useState(false);

	function play(audioFile) {
		if (!isButtonDisabled) {
			const audio = new Audio(audioFile);
			audio.play();
			setButtonDisabled(true);
		}
	}

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setButtonDisabled(false);
		}, 2000);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [isButtonDisabled]);

	const numberVoice = {
		1: () => play(jeden),
		2: () => play(dwa),
		3: () => play(trzy),
		4: () => play(cztery),
		5: () => play(piec),
		6: () => play(szesc),
		7: () => play(siedem),
		8: () => play(osiem),
		9: () => play(dziewiec),
		10: () => play(dziesiec),
	};

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
					<div className="col-12">
						<ul className="text-center">
							<div className="board-desktop">
								<div className="list-title-desktop">
									Poznaje liczby
								</div>
								<div className="container">
									<div className="row d-flex justify-content-center">
										<div className="col-5 d-flex align-items-center justify-content-center equations-desktop">
											<button
												className="btn-desktop answer-box-desktop"
												onClick={handlePrevious}
											>
												Poprzedni
											</button>
										</div>
										<div className="col-5 d-flex align-items-center justify-content-center equations-desktop">
											<button
												className="btn-desktop answer-box-desktop"
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
										<div className="col-3 sign-name">
											<button
												className="btn-desktop"
												onClick={() =>
													play(
														numberVoice[
															currentNumber
														]()
													)
												}
												disabled={isButtonDisabled}
											>
												<FontAwesomeIcon
													icon={faVolumeUp}
													className="volume-icon"
												/>
											</button>
										</div>
									</div>
								</div>
								<div className="container">
									<div className="row d-flex justify-content-center">
										{stars.map((star, index) => (
											<div
												className="col equations-desktop justify-content-center"
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
								<div className="list-desktop board-desktop align-items-center justify-content-center">
									<div className="row d-flex align-items-center">
										<div className="col-9">
											<Link
												style={{
													textDecoration: "none",
												}}
												to="/num"
											>
												<button className="btn-desktop hover-menu">
													Chce poćwiczyć
												</button>
											</Link>
										</div>
										<div className="col-3">
											<button
												className="btn-desktop"
												onClick={() => play(practice)}
												disabled={isButtonDisabled}
											>
												<FontAwesomeIcon
													icon={faVolumeUp}
													className="volume-icon"
												/>
											</button>
										</div>
									</div>
								</div>
								<div className="list-desktop board-desktop align-items-center justify-content-center">
									<div className="row d-flex align-items-center">
										<div className="col-9">
											<Link
												style={{
													textDecoration: "none",
												}}
												to="/dz"
											>
												<button className="btn-desktop hover-menu">
													Powrót do menu
												</button>
											</Link>
										</div>
										<div className="col-3">
											<button
												className="btn-desktop"
												onClick={() => play(menu)}
												disabled={isButtonDisabled}
											>
												<FontAwesomeIcon
													icon={faVolumeUp}
													className="volume-icon"
												/>
											</button>
										</div>
									</div>
								</div>
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
				<ul className="text-center">
					<Link style={{ textDecoration: "none" }} to="/num">
						<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
							Chcesz poćwiczyć
						</li>
					</Link>
					<Link style={{ textDecoration: "none" }} to="/dz">
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
