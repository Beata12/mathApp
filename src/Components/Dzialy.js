import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import numbers from "../audio/dzialy/poznajemyLiczby.mp3";
import signs from "../audio/dzialy/znaki.mp3";
import add from "../audio/dzialy/dodawanie.mp3";
import sub from "../audio/dzialy/odejmowanie.mp3";
import comp from "../audio/dzialy/porownywanie.mp3";
import ukn from "../audio/dzialy/niewiadoma.mp3";
import mainpage from "../audio/mainpage.mp3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";

function Dzialy() {
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
						<ul className="text-center">
							{/* <div className="container list-desktop board-desktop main-title">
								<Link style={{ textDecoration: "none" }} to="/">
									<button className="btn-desktop">
										🔢 = 🤔 ➕ 🎲 MATEMATYCZNA KRAINA ZABAWY
										🎲 ➕ 🤔 = 🔢
									</button>
								</Link>
							</div> */}
							<div className="container list-desktop board-desktop main-title">
								<Link
									style={{ textDecoration: "none" }}
									to="/info"
								>
									<button className="btn-desktop">
										🔢 = 🤔 ➕ 🎲 CZEGO SIĘ NAUCZYMY 🎲 ➕
										🤔 = 🔢
									</button>
								</Link>
							</div>
							<div className="container list-desktop board-desktop">
								<div className="row d-flex align-items-center">
									<div className="col-9">
										<Link
											style={{ textDecoration: "none" }}
											to="/num"
										>
											<button className="btn-desktop hover-menu">
												🔢 Liczbowe Spotkanie 🔢
											</button>
										</Link>
									</div>
									<div className="col-3">
										<button
											className="btn-desktop"
											onClick={() => play(numbers)}
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
											to="/sign"
										>
											<button className="btn-desktop hover-menu">
												▶ Magiczne Znaki Matematyki ✍️
											</button>
										</Link>
									</div>
									<div className="col-3">
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
							</div>
							<div className="container list-desktop board-desktop">
								<div className="row d-flex align-items-center">
									<div className="col-9">
										<Link
											style={{ textDecoration: "none" }}
											to="/add"
										>
											<button className="btn-desktop hover-menu">
												➕ Odkrywamy Świat Dodawania ➕
											</button>
										</Link>
									</div>
									<div className="col-3">
										<button
											className="btn-desktop"
											onClick={() => play(add)}
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
											to="/sub"
										>
											<button className="btn-desktop hover-menu">
												⛔ Odkrywamy Świat Odejmowania
												⛔
											</button>
										</Link>
									</div>
									<div className="col-3">
										<button
											className="btn-desktop"
											onClick={() => play(sub)}
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
											to="/comp"
										>
											<button className="btn-desktop hover-menu">
												⚖️ Zabawy w Porównywanie Liczb
												⚖️
											</button>
										</Link>
									</div>
									<div className="col-3">
										<button
											className="btn-desktop"
											onClick={() => play(comp)}
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
											to="/un"
										>
											<button className="btn-desktop hover-menu">
												❓ Zagadkowe Działania z
												Niewiadomą ❓
											</button>
										</Link>
									</div>
									<div className="col-3">
										<button
											className="btn-desktop"
											onClick={() => play(ukn)}
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
											to="/"
										>
											<button className="btn-desktop hover-menu">
												🔙 Powrót do strony głównej
											</button>
										</Link>
									</div>
									<div className="col-3">
										<button
											className="btn-desktop"
											onClick={() => play(mainpage)}
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
			<div className="dzialy-mobile">
				<div className="d-flex justify-content-center align-items-center margin-mobile">
					<ul className="text-center main-mobile">
						<Link style={{ textDecoration: "none" }} to="/">
							<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
								🔢 = 🤔 ➕ 🎲<br></br> MATEMATYCZNA KRAINA
								ZABAWY <br></br>🎲 ➕ 🤔 = 🔢
							</li>
						</Link>
						<Link style={{ textDecoration: "none" }} to="./num">
							<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
								🔢 Liczbowe Spotkanie 🔢
							</li>
						</Link>
						<Link style={{ textDecoration: "none" }} to="./sign">
							<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
								▶ Magiczne Znaki Matematyki ✍️
							</li>
						</Link>

						<Link style={{ textDecoration: "none" }} to="./add">
							<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
								➕ Odkrywamy Świat Dodawania ➕
							</li>
						</Link>
						<Link style={{ textDecoration: "none" }} to="./sub">
							<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
								⛔ Odkrywamy Świat Odejmowania ⛔
							</li>
						</Link>
						<Link style={{ textDecoration: "none" }} to="./comp">
							<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
								⚖️ Zabawy w Porównywanie <br></br>Liczb ⚖️
							</li>
						</Link>
						<Link style={{ textDecoration: "none" }} to="./un">
							<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
								❓ Zagadkowe Działania z Niewiadomą ❓
							</li>
						</Link>
					</ul>
				</div>
			</div>
		</main>
	);
}

export default Dzialy;
