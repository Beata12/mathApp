import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import learnNum from "../../audio/learnNum/liczby.mp3";
import menu from "../../audio/menu.mp3";
import numeasy from "../../audio/learnNum/rozpliczla.mp3";
import nummid from "../../audio/learnNum/nummid.mp3";
import numhard from "../../audio/learnNum/rozplicztr.mp3";
import numlis from "../../audio/learnNum/numlis.mp3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";

function Numbers() {
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
		}, 2500);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [isButtonDisabled]);

	return (
		<main className="main-dzialy">
			<div className="dzialy-desktop">
				<div className="container d-flex justify-content-center align-items-center">
					<div className="col-12">
						<div className="container list-desktop board-desktop main-title">
							0️⃣ 4️⃣ LICZBOWE SPOTKANIA 6️⃣ 9️⃣
						</div>
						<div className="container list-desktop board-desktop">
							<div className="row d-flex align-items-center">
								<div className="col-9">
									<Link
										style={{ textDecoration: "none" }}
										to="/numlearn"
									>
										<button className="btn-desktop hover-menu">
											{/* 1️⃣ 3️⃣ Poznaje liczby 5️⃣ 8️⃣ */}
											🔢 Poznaje liczby 🔢
										</button>
									</Link>
								</div>
								<div className="col-3">
									<button
										className="btn-desktop"
										onClick={() => play(learnNum)}
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
										to="/nume"
									>
										<button className="btn-desktop hover-easy">
											Rozpoznawanie liczb - poziom łatwy
											✅
										</button>
									</Link>
								</div>
								<div className="col-3">
									<button
										className="btn-desktop"
										onClick={() => play(numeasy)}
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
										to="/numm"
									>
										<button className="btn-desktop hover-easy">
											Rozpoznawanie liczb - poziom średni
											✔️ ✔️
										</button>
									</Link>
								</div>
								<div className="col-3">
									<button
										className="btn-desktop"
										onClick={() => play(nummid)}
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
										to="/numh"
									>
										<button className="btn-desktop hover-hard">
											Rozpoznawanie liczb - poziom trudny
											❗❗❗
										</button>
									</Link>
								</div>
								<div className="col-3">
									<button
										className="btn-desktop"
										onClick={() => play(numhard)}
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
										to="/numl"
									>
										<button className="btn-desktop hover-hard">
											Rozpoznawanie liczb - słuchanie 🗣
										</button>
									</Link>
								</div>
								<div className="col-3">
									<button
										className="btn-desktop"
										onClick={() => play(numlis)}
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
					</div>
				</div>
			</div>
			<div className="dzialy-mobile">
				<div className="d-flex justify-content-center align-items-center">
					<ul className="text-center margin-mob">
						<Link style={{ textDecoration: "none" }} to="/numlearn">
							<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
								Poznaje liczby
							</li>
						</Link>

						<Link style={{ textDecoration: "none" }} to="/nume">
							<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
								Rozpoznawanie liczb - poziom łatwy
							</li>
						</Link>
						<Link style={{ textDecoration: "none" }} to="/numh">
							<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
								Rozpoznawanie liczb - poziom trudny
							</li>
						</Link>
						<Link style={{ textDecoration: "none" }} to="/numl">
							<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
								Rozpoznawanie liczb - słuchanie
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

export default Numbers;
