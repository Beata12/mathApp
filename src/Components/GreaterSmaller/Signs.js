import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import menu from "../../audio/menu.mp3";
import { faFaceFrown, faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import {
	faHeart,
	faHeartCrack,
	faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";

function Signs() {
	const divContents = [
		{ explanation: "Znak", meaning: "dodawania", sign: "+" },
		{ explanation: "Znak", meaning: "odejmowania", sign: "-" },
		{ explanation: "Znak", meaning: "równości", sign: "=" },
		{ explanation: "Znak", meaning: "większości", sign: ">" },
		{ explanation: "Znak", meaning: "mniejszości", sign: "<" },
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
			<div className="dzialy-desktop">
				<div className="container d-flex justify-content-center align-items-center">
					<div className="col-10">
						<ul className="text-center">
							<div className="board-desktop">
								<div className="container ">
									<div className="row d-flex align-items-center">
										<div className="col-10">
											<div className="list-title-desktop">
												ZNAKI MATEMATYCZNE
											</div>
										</div>
										<div className="col-2">
											<button
												className="btn-desktop"
												// onClick={() => play(level)}
												// disabled={isButtonDisabled}
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
										<div className="col-5 answer-box-desktop d-flex align-items-center justify-content-center equations-desktop">
											<button
												className="btn-desktop"
												onClick={handlePreviousClick}
											>
												Poprzedni
											</button>
										</div>
										<div className="col-5 answer-box-desktop d-flex align-items-center justify-content-center equations-desktop">
											<button
												className="btn-desktop"
												onClick={handleNextClick}
											>
												Następny
											</button>
										</div>
									</div>
								</div>
								<div className="container">
									<div className="row d-flex justify-content-center">
										<div className="row d-flex align-items-center justify-content-center">
											<div className="col-4">
												<div className="row-2 sign-name">
													{currentDiv.explanation}
												</div>
												<div className="row-2 sign-which">
													{currentDiv.meaning}
												</div>
											</div>
											<div className="col-4">
												<button
													className="btn-desktop"
													// onClick={() => play(zagraj)}
													// disabled={isButtonDisabled}
												>
													<FontAwesomeIcon
														icon={faVolumeUp}
														className="volume-icon"
													/>
												</button>
											</div>
										</div>
										<div className="row-2 sign-symbol">
											{currentDiv.sign}
										</div>
									</div>
								</div>
							</div>
							{/* <div className=" list-desktop board-desktop">
								<div className="row d-flex align-items-center">
									<div className="col-9">
										<Link
											style={{
												textDecoration: "none",
											}}
											to="/eg"
										>
											<button className="btn-desktop hover-menu">
												Przykłady
											</button>
										</Link>
									</div>
									<div className="col-3">
										<button
											className="btn-desktop"
											// onClick={() => play(menu)}
											// disabled={isButtonDisabled}
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
											// onClick={() => play(menu)}
											// disabled={isButtonDisabled}
										>
											<FontAwesomeIcon
												icon={faVolumeUp}
												className="volume-icon"
											/>
										</button>
									</div>
								</div>
							</div> */}
							<div className=" list-desktop board-desktop">
								<div className="row d-flex align-items-center">
									<div className="col-9">
										<Link
											style={{
												textDecoration: "none",
											}}
											to="/"
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
							Dalej
						</button>
					</div>
					<div className="signs-content-mobile">
						<div className="explanation-mobile">
							{currentDiv.explanation}
						</div>
						<div className="meaning-mobile">
							{currentDiv.meaning}
						</div>
						<div className="sign-mobile">{currentDiv.sign}</div>
					</div>
				</div>
				<ul className="text-center">
					<Link style={{ textDecoration: "none" }} to="/eg">
						<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
							Przykłady
						</li>
					</Link>
					<Link style={{ textDecoration: "none" }} to="/comp">
						<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
							Chce poćwiczyć
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

export default Signs;
