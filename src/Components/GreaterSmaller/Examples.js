import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import signs from "../../audio/signs/signs.mp3";
import menu from "../../audio/menu.mp3";
import practice from "../../audio/practice1.mp3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";

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
			<div className="dzialy-desktop">
				<div className="container d-flex justify-content-center align-items-center">
					<div className="col-12">
						<ul className="text-center">
							<div className="board-desktop">
								<div className="row d-flex align-items-center">
									<div className="col-10">
										<div className="list-title-desktop">
											ZNAKI MATEMATYCZNE
										</div>
									</div>
									<div className="col-2">
										<button
											className="btn-desktop"
											onClick={() => play(signs)}
											disabled={isButtonDisabled}
										>
											<FontAwesomeIcon
												icon={faVolumeUp}
												className="volume-icon"
											/>
										</button>
									</div>
								</div>
								<div className="container">
									<div className="row d-flex justify-content-center">
										<div className="col-5 d-flex align-items-center justify-content-center equations-desktop">
											<button
												className="btn-desktop answer-box-desktop"
												onClick={handlePreviousClick}
											>
												Poprzedni
											</button>
										</div>
										<div className="col-5 d-flex align-items-center justify-content-center equations-desktop">
											<button
												className="btn-desktop answer-box-desktop"
												onClick={handleNextClick}
											>
												Następny
											</button>
										</div>
									</div>
								</div>
								<div className="container">
									<div className="row d-flex justify-content-center">
										<div className="row-2 sign-name">
											{currentDiv.explanation}
										</div>
										<div className="row-2 sign-which">
											{currentDiv.meaning}
										</div>
										<div className="row-2 sign-symbol">
											{currentDiv.sign}
										</div>
									</div>
								</div>
							</div>
							<div className=" list-desktop board-desktop">
								<div className="row d-flex align-items-center">
									<div className="col-9">
										<Link
											style={{
												textDecoration: "none",
											}}
											to="/comp"
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
							<div className=" list-desktop board-desktop">
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
					</div>
				</div>
			</div>
			<div className="dzialy-mobile margin-mob">
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
							Następny
						</button>
					</div>
					<div className="equations-mobile">
						<div>{currentDiv.explanation}</div>
						<div className="meaning-exmp-mobile">
							{currentDiv.meaning}
						</div>
						<div className="sign-exmp-mobile">
							{currentDiv.sign}
						</div>
					</div>
				</div>

				<ul className="text-center">
					<Link style={{ textDecoration: "none" }} to="/comp">
						<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
							Chce poćwiczyć
						</li>
					</Link>
					<Link style={{ textDecoration: "none" }} to="/sign">
						<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
							Znaki matematyczne
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

export default Examples;
