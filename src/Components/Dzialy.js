import React, { useState } from "react";
import { Link } from "react-router-dom";
import sound from "../audio/poznajemyLiczby.mp3";

function Dzialy() {
	const [isButtonDisabled, setButtonDisabled] = useState(false);

	function play() {
		if (!isButtonDisabled) {
			const audio = new Audio(sound);
			audio.play();
		}
	}

	function handleMouseOver() {
		if (!isButtonDisabled) {
			play();

			// Zablokuj przycisk na 2no sekund
			setButtonDisabled(true);

			// Ustaw timer na 2 sekund, po którym odblokujesz przycisk
			setTimeout(() => {
				setButtonDisabled(false);
			}, 2000);
		}
	}

	return (
		<main className="main-dzialy">
			<div className="dzialy-desktop">
				<div className="container d-flex justify-content-center align-items-center">
					<div className="col-8 ">
						<ul className="text-center">
							<li className="list-desktop board-desktop main-title">
								DZIAŁY
							</li>
							<Link style={{ textDecoration: "none" }} to="./num">
								<li className="list-desktop board-desktop hover-menu">
									<button
										className="btn-desktop"
										onClick={play}
										onMouseOver={handleMouseOver}
										disabled={isButtonDisabled}
									>
										Poznajemy liczby
									</button>
								</li>
							</Link>
							<Link
								style={{ textDecoration: "none" }}
								to="./sign"
							>
								<li className="list-desktop board-desktop hover-menu">
									Poznajemy znaki matematyczne
								</li>
							</Link>
							<Link style={{ textDecoration: "none" }} to="./add">
								<li className="list-desktop board-desktop hover-menu">
									Uczymy się dodawać
								</li>
							</Link>{" "}
							<Link style={{ textDecoration: "none" }} to="./sub">
								<li className="list-desktop board-desktop hover-menu">
									Uczymy się odejmować
								</li>
							</Link>{" "}
							<Link
								style={{ textDecoration: "none" }}
								to="./comp"
							>
								<li className="list-desktop board-desktop hover-menu">
									Porównywanie liczb
								</li>
							</Link>
							<Link style={{ textDecoration: "none" }} to="./un">
								<li className="list-desktop board-desktop hover-menu">
									Działania z niewiadomą
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
