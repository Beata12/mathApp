import React, { useState } from "react";
import { Link } from "react-router-dom";
import numbers from "../audio/poznajemyLiczby.mp3";
import signs from "../audio/znaki.mp3";
import add from "../audio/dodawanie.mp3";
import sub from "../audio/odejmowanie.mp3";
import comp from "../audio/porownywanie.mp3";
import ukn from "../audio/niewiadoma.mp3";

function Dzialy() {
	const [isButtonDisabled, setButtonDisabled] = useState(false);

	// function play(audioFile) {
	// 	if (!isButtonDisabled) {
	// 		const audio = new Audio(audioFile);
	// 		audio.play();
	// 		setTimeout(() => {
	// 			setButtonDisabled(false);
	// 		}, 2000);
	// 	}
	// }

	function play() {
		new Audio(numbers);
	}

	function handleMouseOverNumbers() {
		play(numbers);
		setButtonDisabled(true);
	}

	function handleMouseOverSigns() {
		play(signs);
		setButtonDisabled(true);
	}

	function handleMouseOverAdd() {
		play(add);
		setButtonDisabled(true);
	}

	function handleMouseOverSub() {
		play(sub);
		setButtonDisabled(true);
	}

	function handleMouseOverComp() {
		play(comp);
		setButtonDisabled(true);
	}

	function handleMouseOverUkn() {
		play(ukn);
		setButtonDisabled(true);
	}

	return (
		<main className="main-dzialy">
			<div className="dzialy-desktop">
				<div className="container d-flex justify-content-center align-items-center">
					<div className="col-10">
						<ul className="text-center">
							<li className="list-desktop board-desktop main-title">
								DZIAŁY
							</li>
							<li className="list-desktop board-desktop hover-menu">
								<div className="container">
									<div className="row d-flex justify-content-center">
										<div className="col-8  d-flex align-items-center justify-content-center equations-desktop">
											<Link
												style={{
													textDecoration: "none",
												}}
												to="./num"
											>
												Poznajemy liczby
											</Link>
										</div>
										<div className="col-2  d-flex align-items-center justify-content-center equations-desktop">
											<button
												className="btn-secondary"
												onClick={play}
											></button>
										</div>
									</div>
								</div>
							</li>
							<Link
								style={{ textDecoration: "none" }}
								to="./sign"
							>
								<li className="list-desktop board-desktop">
									<button
										className="btn-desktop hover-menu"
										onMouseOver={handleMouseOverSigns}
										disabled={isButtonDisabled}
									>
										Poznajemy znaki matematyczne
									</button>
								</li>
							</Link>
							<Link style={{ textDecoration: "none" }} to="./add">
								<li className="list-desktop board-desktop">
									<button
										className="btn-desktop hover-menu"
										onMouseOver={handleMouseOverAdd}
										disabled={isButtonDisabled}
									>
										Uczymy się dodawać
									</button>
								</li>
							</Link>
							<Link style={{ textDecoration: "none" }} to="./sub">
								<li className="list-desktop board-desktop">
									<button
										className="btn-desktop hover-menu"
										onMouseOver={handleMouseOverSub}
										disabled={isButtonDisabled}
									>
										Uczymy się odejmować
									</button>
								</li>
							</Link>
							<Link
								style={{ textDecoration: "none" }}
								to="./comp"
							>
								<li className="list-desktop board-desktop">
									<button
										className="btn-desktop hover-menu"
										onMouseOver={handleMouseOverComp}
										disabled={isButtonDisabled}
									>
										Porównywanie liczb
									</button>
								</li>
							</Link>
							<Link style={{ textDecoration: "none" }} to="./un">
								<li className="list-desktop board-desktop">
									<button
										className="btn-desktop hover-menu"
										onMouseOver={handleMouseOverUkn}
										disabled={isButtonDisabled}
									>
										Działania z niewiadomą
									</button>
								</li>
							</Link>
						</ul>
					</div>
				</div>
			</div>

			<div className="dzialy-mobile">
				<div className="d-flex justify-content-center align-items-center">
					<ul className="text-center main-mobile">
						<Link style={{ textDecoration: "none" }} to="./num">
							<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
								Poznajemy liczby
							</li>
						</Link>
						<Link style={{ textDecoration: "none" }} to="./sign">
							<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
								Poznajemy znaki matematyczne
							</li>
						</Link>

						<Link style={{ textDecoration: "none" }} to="./add">
							<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
								Uczymy się dodawać
							</li>
						</Link>
						<Link style={{ textDecoration: "none" }} to="./sub">
							<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
								Uczymy się odejmować
							</li>
						</Link>
						<Link style={{ textDecoration: "none" }} to="./comp">
							<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
								Porównywanie liczb
							</li>
						</Link>
						<Link style={{ textDecoration: "none" }} to="./un">
							<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
								Działania z niewiadomą
							</li>
						</Link>
					</ul>
				</div>
			</div>
		</main>
	);
}

export default Dzialy;
