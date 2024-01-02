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

function UnknownAdd() {
	const [result, setResult] = useState(null);
	const [choices, setChoices] = useState([]);
	const [answered, setAnswered] = useState(false);
	const [answeredCorrectly, setAnsweredCorrectly] = useState(false);
	const [resultIcon, setResultIcon] = useState(null);
	const [timer, setTimer] = useState(10);
	const [points, setPoints] = useState(0);
	const [lives, setLives] = useState(3);
	const [gameOver, setGameOver] = useState(false);
	const [currentOperation, setCurrentOperation] = useState("addition");
	const [isButtonDisabled, setButtonDisabled] = useState(false);
	const [correctAnswerInfo, setCorrectAnswerInfo] = useState(null);
	const random1 = () => Math.floor(Math.random() * 11);
	const random2 = () => Math.floor(Math.random() * 11);

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

	const generateNewEquationAddition = () => {
		let num1, num2, correctResult;
		do {
			num1 = random1();
			num2 = random2();
			correctResult = num1 - num2;
		} while (correctResult < 0);

		const possibleChoices = [correctResult];
		while (possibleChoices.length < 3) {
			const randomChoice = Math.floor(Math.random() * 11);
			if (!possibleChoices.includes(randomChoice)) {
				possibleChoices.push(randomChoice);
			}
		}

		possibleChoices.sort(() => Math.random() - 0.5);

		setResult({
			num1,
			num2,
			correctResult,
		});

		setChoices(possibleChoices);
		setAnswered(false);
		setCorrectAnswerInfo(null);
		setAnsweredCorrectly(false);
		setResultIcon(null);
		setTimer(10);
	};

	const generateNewEquationSubstraction = () => {
		let num1, num2, correctResult;
		do {
			num1 = random1();
			num2 = random2();
			correctResult = num2 - num1;
		} while (correctResult < 0);

		const possibleChoices = [correctResult];
		while (possibleChoices.length < 3) {
			const randomChoice = Math.floor(Math.random() * 11);
			if (!possibleChoices.includes(randomChoice)) {
				possibleChoices.push(randomChoice);
			}
		}

		possibleChoices.sort(() => Math.random() - 0.5);

		setResult({
			num1,
			num2,
			correctResult,
		});

		setChoices(possibleChoices);
		setAnswered(false);
		setAnsweredCorrectly(false);
		setResultIcon(null);
		setTimer(10);
	};

	const generateSign = () => {
		return currentOperation === "addition" ? "+" : "-";
	};

	const handleChoiceClick = (choice) => {
		if (choice === result.correctResult) {
			setAnsweredCorrectly(true);
			setPoints(points + 1);
			setResultIcon(faFaceSmile);
		} else if (lives < 1) {
			setResultIcon(faFaceFrown);
			setCorrectAnswerInfo(result.correctResult);
		} else {
			setLives(lives - 1);
			if (lives === 1) {
				setGameOver(true);
			}
			setResultIcon(faFaceFrown);
			setCorrectAnswerInfo(result.correctResult);
		}
		setAnswered(true);

		setTimeout(() => {
			// Losuj, czy będzie to dodawanie czy odejmowanie
			const randomOperation =
				Math.random() < 0.5 ? "addition" : "subtraction";
			setCurrentOperation(randomOperation);

			if (randomOperation === "addition") {
				generateNewEquationAddition();
			} else {
				generateNewEquationSubstraction();
			}
		}, 2000);
	};

	useEffect(() => {
		if (currentOperation === "addition") {
			generateNewEquationAddition();
		} else {
			generateNewEquationSubstraction();
		}
	}, [currentOperation]);

	useEffect(() => {
		let countdown;
		if (!gameOver && !answered) {
			countdown = setInterval(() => {
				if (timer > 0) {
					setTimer(timer - 1);
				} else {
					clearInterval(countdown);
					handleChoiceClick();
				}
			}, 1000);
		} else if (gameOver) {
			clearInterval(countdown);
		}
		return () => clearInterval(countdown);
	}, [timer, answered, gameOver]);

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
		const randomOperation =
			Math.random() < 0.5 ? "addition" : "subtraction";
		setCurrentOperation(randomOperation);

		if (randomOperation === "addition") {
			generateNewEquationAddition();
		} else {
			generateNewEquationSubstraction();
		}
		generateSign();
		setTimer(10);
		setCorrectAnswerInfo(null);
	};

	return (
		<main className="main-dzialy">
			<div className="dzialy-desktop">
				<div className="container d-flex justify-content-center align-items-center">
					<div className="col-12">
						<ul className="text-center">
							{gameOver ? (
								<div className="gameOver">
									<div className="container board-desktop">
										<div className="list-desktop">
											❓ DODAWANIE I ODEJMOWANIE Z
											NIEWIADOMĄ ❓
										</div>
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
								<div className="gameOver">
									<div className="container board-desktop">
										<div className="list-title-desktop hard-level">
											Dodawanie i odejmowanie z niewiadomą
										</div>
										<div className="container list-desktop">
											<div className="row d-flex align-items-center">
												<div className="col-9">
													<button className="btn-desktop main-title">
														Wybierz poprawną
														odpowiedź
													</button>
												</div>
												<div className="col-3">
													<button
														className="btn-desktop"
														onClick={() =>
															play(answer)
														}
														disabled={
															isButtonDisabled
														}
													>
														<FontAwesomeIcon
															icon={faVolumeUp}
															className="volume-icon"
														/>
													</button>
												</div>
											</div>
										</div>
										<div className="icons-desktop">
											{renderCorrectAnswerInfo()}
											{resultIcon ? (
												<FontAwesomeIcon
													icon={resultIcon}
													className="face-icon"
												/>
											) : null}
										</div>
										<div className="container">
											<div className="row d-flex justify-content-center">
												<div className="col-2 equations-desktop">
													{result && result.num2}
												</div>
												<div className="col-2 equations-desktop">
													{generateSign()}
												</div>
												<div className="col-2 equations-desktop">
													?
												</div>
												<div className="col-2 equations-desktop">
													=
												</div>
												<div className="col-2 equations-desktop">
													{result && result.num1}
												</div>
											</div>
										</div>
										<div className="container">
											<div className="row d-flex justify-content-center">
												{choices.map(
													(choice, index) => (
														<div className="col-3 d-flex align-items-center justify-content-center equations-desktop">
															<button
																className="equations-desktop answer-box-desktop"
																key={index}
																onClick={() =>
																	handleChoiceClick(
																		choice
																	)
																}
																disabled={
																	answered
																}
															>
																{choice}
															</button>
														</div>
													)
												)}
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
											to="/un"
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
				<div className="d-flex justify-content-center align-items-center">
					<ul className="text-center">
						<div className="list-title-mobile">
							Dodawanie i odejmowanie z niewiadomą
						</div>
						{gameOver ? (
							<div className="gameOver">
								<div className="list-mobile">
									🛑 KONIEC GRY 🛑
								</div>
								<div className="list-mobile">
									Punkty: {points}
								</div>
								<div className="list-mobile">
									Gratulacje 🥳🎉👏
								</div>
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
								<div className="icons-mobile">
									{resultIcon ? (
										<FontAwesomeIcon
											icon={resultIcon}
											className="face-icon"
										/>
									) : null}
								</div>
								<div className="container">
									<div className="row d-flex justify-content-center">
										<div className="col-2 equations-mobile">
											{result && result.num2}
										</div>
										<div className="col-2 equations-mobile">
											{generateSign()}
										</div>
										<div className="col-2 equations-mobile">
											?
										</div>
										<div className="col-2 equations-mobile">
											=
										</div>
										<div className="col-2 equations-mobile">
											{result && result.num1}
										</div>
									</div>
								</div>

								<div className="container">
									<div className="row d-flex justify-content-center">
										{choices.map((choice, index) => (
											<button
												className="col-3 answer-box-mobile d-flex align-items-center justify-content-center equations-mobile"
												key={index}
												onClick={() =>
													handleChoiceClick(choice)
												}
												disabled={answered}
											>
												{choice}
											</button>
										))}
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
						<Link style={{ textDecoration: "none" }} to="/un">
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
			</div>
		</main>
	);
}

export default UnknownAdd;
