import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import answer from "../../audio/answer.mp3";
import level from "../../audio/poziom.mp3";
import menu from "../../audio/menu.mp3";
import zagraj from "../../audio/zagraj.mp3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown, faFaceSmile } from "@fortawesome/free-regular-svg-icons";
import {
	faHeart,
	faHeartCrack,
	faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";

function GreaterSmaller() {
	const [number1, setNumber1] = useState(0);
	const [number2, setNumber2] = useState(0);
	const [resultIcon, setResultIcon] = useState(null);
	const [points, setPoints] = useState(0);
	const [isComparing, setIsComparing] = useState(false);
	const [selectedSign, setSelectedSign] = useState("");
	const [timer, setTimer] = useState(10);
	const [isTimeUp, setIsTimeUp] = useState(false);
	const [hasSelectedAnswer, setHasSelectedAnswer] = useState(false);
	const [lives, setLives] = useState(3);
	const [gameOver, setGameOver] = useState(false);
	const [isButtonDisabled, setButtonDisabled] = useState(false);
	const [correctAnswerInfo, setCorrectAnswerInfo] = useState(null);

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
			clearInterval(timeoutId);
		};
	}, [isButtonDisabled]);

	const generateRandomNumbers = () => {
		const randomNum1 = Math.floor(Math.random() * 11);
		const randomNum2 = Math.floor(Math.random() * 11);
		setNumber1(randomNum1);
		setNumber2(randomNum2);
		setResultIcon(null);
		setSelectedSign("");
		setIsTimeUp(false);
		setTimer(10);
		setHasSelectedAnswer(false);
	};

	const handleComparison = () => {
		setIsComparing(true);

		let isCorrect = false;

		if (
			(selectedSign === "<" && number1 < number2) ||
			(selectedSign === ">" && number1 > number2) ||
			(selectedSign === "=" && number1 === number2)
		) {
			setResultIcon(faFaceSmile);
			isCorrect = true;
		} else {
			setLives(lives - 1);
			setResultIcon(faFaceFrown);
			setCorrectAnswerInfo(`${isCorrect}`);
			if (lives - 1 === 0) {
				setGameOver(true);
			}
		}

		setTimeout(() => {
			setResultIcon(null);
			if (isCorrect) {
				setPoints(points + 1);
			}
			if (lives > 0) {
				generateRandomNumbers();
			}
			setIsComparing(false);
		}, 2000);
	};

	useEffect(() => {
		generateRandomNumbers();
	}, []);

	useEffect(() => {
		if (selectedSign !== "") {
			handleComparison();
		}
	}, [selectedSign]);

	useEffect(() => {
		const countdown = setInterval(() => {
			if (timer > 0 && !hasSelectedAnswer) {
				setTimer(timer - 1);
			} else if (!hasSelectedAnswer) {
				setIsTimeUp(true);
				clearInterval(countdown);
				handleComparison();
			}
		}, 1000);

		return () => {
			clearInterval(countdown);
		};
	}, [timer, hasSelectedAnswer]);

	const handleAnswerClick = (answer) => {
		if (!hasSelectedAnswer && !isComparing) {
			setSelectedSign(answer);
			setHasSelectedAnswer(true);
		}
	};

	const generateHeartIcons = () => {
		const heartIcons = [];
		for (let i = 0; i < 3 - lives; i++) {
			heartIcons.push(
				<FontAwesomeIcon
					icon={faHeartCrack}
					className="heart-icon"
					key={`cracked-heart-${i}`}
				/>
			);
		}
		for (let i = 0; i < lives; i++) {
			heartIcons.push(
				<FontAwesomeIcon
					icon={faHeart}
					className="heart-icon"
					key={`heart-${i}`}
				/>
			);
		}
		return heartIcons;
	};

	const renderCorrectAnswerInfo = () => {
		if (correctAnswerInfo !== null) {
			setTimeout(() => {
				setCorrectAnswerInfo(null);
			}, 2000);

			return (
				<div className="container">
					<div className="row correct-answer-info d-flex justify-content-center align-items-center">
						<div className="col-7">Poprawna odpowiedź:</div>
						<div className="correct-ans col-2">
							{correctAnswerInfo}
						</div>
					</div>
				</div>
			);
		}
		return null;
	};

	const startNewGame = () => {
		setGameOver(false);
		setPoints(0);
		setLives(3);
		generateRandomNumbers();
		setCorrectAnswerInfo(null);
		generateRandomNumbers();
	};

	return (
		<main className="main-dzialy">
			<div className="dzialy-desktop">
				<div className="container d-flex justify-content-center align-items-center">
					<div className="col-12">
						<ul className="text-center">
							<div className="list-title-desktop">
								Wybierz odpowiedni znak:
							</div>
							{gameOver ? (
								<div className="gameOver">
									<div className="container board-desktop">
										<div className="list-desktop">
											🛑 KONIEC GRY 🛑
										</div>
										<div className="list-desktop">
											Punkty: {points}
										</div>
										<div className="list-desktop">
											Gratulacje 🥳🎉👏
										</div>
									</div>
									<div className="container list-desktop board-desktop">
										<div className="row d-flex align-items-center">
											<div className="col-9">
												<button
													className="btn-desktop hover-menu"
													onClick={startNewGame}
												>
													Zagraj jeszcze raz
												</button>
											</div>
											<div className="col-3">
												<button
													className="btn-desktop"
													onClick={() => play(zagraj)}
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
								</div>
							) : (
								<div className="container board-desktop">
									<div className="gameOver">
										<div className="icons-desktop">
											{renderCorrectAnswerInfo()}
											{resultIcon ? (
												<FontAwesomeIcon
													icon={resultIcon}
												/>
											) : null}
										</div>
										<div className="container">
											<div className="row d-flex justify-content-center">
												<div className="col-2 equations-desktop">
													{number1}
												</div>
												<div className="col-2 equations-desktop">
													{selectedSign}
												</div>
												<div className="col-2 equations-desktop">
													{number2}
												</div>
											</div>
										</div>
										<div className="container">
											<div className="row d-flex justify-content-center">
												<div className="col-3 answer-box-desktop d-flex align-items-center justify-content-center equations-desktop">
													<button
														className="equations-desktop"
														onClick={() =>
															handleAnswerClick(
																"<"
															)
														}
														disabled={
															isComparing ||
															isTimeUp
														}
													>
														{"<"}
													</button>
												</div>
												<div className="col-3 answer-box-desktop d-flex align-items-center justify-content-center equations-desktop">
													<button
														className="equations-desktop"
														onClick={() =>
															handleAnswerClick(
																">"
															)
														}
														disabled={
															isComparing ||
															isTimeUp
														}
													>
														{">"}
													</button>
												</div>
												<div className="col-3 answer-box-desktop d-flex align-items-center justify-content-center equations-desktop">
													<button
														className="equations-desktop"
														onClick={() =>
															handleAnswerClick(
																"="
															)
														}
														disabled={
															isComparing ||
															isTimeUp
														}
													>
														{"="}
													</button>
												</div>
											</div>
										</div>
										<div className="container">
											<div className="row">
												<div className="col">
													{generateHeartIcons()}
												</div>
											</div>
										</div>
										<div className="information-desktop">
											Punkty: {points}
										</div>
										<div className="information-desktop">
											Czas: {timer}
										</div>
									</div>
								</div>
							)}
							<div className="container list-desktop board-desktop">
								<div className="row d-flex align-items-center">
									<div className="col-9">
										<Link
											style={{ textDecoration: "none" }}
											to="/comp"
										>
											<button className="btn-desktop hover-menu">
												Wybierz inny poziom
											</button>
										</Link>
									</div>
									<div className="col-3">
										<button
											className="btn-desktop"
											onClick={() => play(level)}
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
							<div className="container list-desktop board-desktop">
								<div className="row d-flex align-items-center">
									<div className="col-9">
										<Link
											style={{ textDecoration: "none" }}
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
				<ul className="text-center">
					<div className="list-title-mobile">
						Wybierz odpowiedni znak:
					</div>
					{gameOver ? (
						<div className="gameOver">
							<div className="list-mobile">🛑 KONIEC GRY 🛑</div>
							<div className="list-mobile">Punkty: {points}</div>
							<div className="list-mobile">Gratulacje 🥳🎉👏</div>
							<div className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
								<button
									onClick={startNewGame}
									className="btn-mobile"
								>
									Zagraj jeszcze raz
								</button>
							</div>
						</div>
					) : (
						<>
							<div className="result">
								{resultIcon ? (
									<FontAwesomeIcon icon={resultIcon} />
								) : null}
							</div>
							<div className="container">
								<div className="row d-flex justify-content-center">
									<div className="col-2 equations-mobile">
										{number1}
									</div>
									<div className="col-2 equations-mobile">
										{selectedSign}
									</div>
									<div className="col-2 equations-mobile">
										{number2}
									</div>
								</div>
							</div>
							<div className="container">
								<div className="row d-flex justify-content-center">
									<button
										className="col-3 answer-box-mobile d-flex align-items-center justify-content-center equations-mobile"
										onClick={() => handleAnswerClick("<")}
										disabled={isComparing || isTimeUp}
									>
										{"<"}
									</button>
									<button
										className="col-3 answer-box-mobile d-flex align-items-center justify-content-center equations-mobile"
										onClick={() => handleAnswerClick(">")}
										disabled={isComparing || isTimeUp}
									>
										{">"}
									</button>
									<button
										className="col-3 answer-box-mobile d-flex align-items-center justify-content-center equations-mobile"
										onClick={() => handleAnswerClick("=")}
										disabled={isComparing || isTimeUp}
									>
										{"="}
									</button>
								</div>
							</div>
							<div className="container">
								<div className="row">
									<div className="col">
										{generateHeartIcons()}
									</div>
								</div>
							</div>
							<div className="information-mobile">
								Punkty: {points}
							</div>
							<div className="information-mobile">
								Czas: {timer}
							</div>
						</>
					)}
					<Link style={{ textDecoration: "none" }} to="/comp">
						<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
							Wybierz inny poziom
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

export default GreaterSmaller;
