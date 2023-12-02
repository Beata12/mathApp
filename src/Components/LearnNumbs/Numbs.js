import React, { useState } from "react";
import { Link } from "react-router-dom";
import learnNum from "../../audio/liczby.mp3";
import menu from "../../audio/menu.mp3";
import numeasy from "../../audio/rozpliczla.mp3";
import numhard from "../../audio/rozplicztr.mp3";

function Numbers() {
	const [isButtonDisabled, setButtonDisabled] = useState(false);

	function play(audioFile) {
		if (!isButtonDisabled) {
			const audio = new Audio(audioFile);
			audio.play();
			setTimeout(() => {
				setButtonDisabled(false);
			}, 2000);
		}
	}

	function handleMouseOverLearn() {
		play(learnNum);
		setButtonDisabled(true);
	}

	function handleMouseOverMenu() {
		play(menu);
		setButtonDisabled(true);
	}

	function handleMouseOverNumEasy() {
		play(numeasy);
		setButtonDisabled(true);
	}

	function handleMouseOverNumHard() {
		play(numhard);
		setButtonDisabled(true);
	}

	return (
		<main className="main-dzialy">
			<div className="dzialy-desktop">
				<div className="container d-flex justify-content-center align-items-center">
					<div className="col-10">
						<ul className="text-center">
							<Link
								style={{ textDecoration: "none" }}
								to="/numlearn"
							>
								<li className="list-desktop board-desktop">
									<button
										className="btn-desktop hover-b"
										onMouseOver={handleMouseOverLearn}
										disabled={isButtonDisabled}
									>
										Poznaje liczby
									</button>
								</li>
							</Link>

							<Link style={{ textDecoration: "none" }} to="/nume">
								<li className="list-desktop board-desktop">
									<button
										className="btn-desktop hover-easy"
										onMouseOver={handleMouseOverNumEasy}
										disabled={isButtonDisabled}
									>
										Rozpoznawanie liczb - poziom łatwy
									</button>
								</li>
							</Link>
							<Link style={{ textDecoration: "none" }} to="/numh">
								<li className="list-desktop board-desktop">
									<button
										className="btn-desktop hover-hard"
										onMouseOver={handleMouseOverNumHard}
										disabled={isButtonDisabled}
									>
										Rozpoznawanie liczb - poziom trudny
									</button>
								</li>
							</Link>
							<Link style={{ textDecoration: "none" }} to="/numl">
								<li className="list-desktop board-desktop hover-easy">
									Rozpoznawanie liczb - słuchanie
								</li>
							</Link>
							<Link style={{ textDecoration: "none" }} to="/">
								<li className="list-desktop board-desktop ">
									<button
										className="btn-desktop hover-b"
										onMouseOver={handleMouseOverMenu}
										disabled={isButtonDisabled}
									>
										Powrót do menu
									</button>
								</li>
							</Link>
						</ul>
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
						<Link style={{ textDecoration: "none" }} to="/">
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
