import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import add5E from "../../audio/addition/Add5E.mp3";
import add5H from "../../audio/addition/Add5H.mp3";
import add10E from "../../audio/addition/Add10E.mp3";
import add10H from "../../audio/addition/Add10H.mp3";
import add10W from "../../audio/addition/Add10W.mp3";
import add20 from "../../audio/addition/Add20.mp3";
import add20W from "../../audio/addition/add20W.mp3";
import menu from "../../audio/menu.mp3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";

function Addition() {
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

	return (
		<main className="main-dzialy">
			<div className="dzialy-desktop">
				<div className="container d-flex justify-content-center align-items-center">
					<div className="col-12 text-center">
						<div className="container list-desktop board-desktop main-title">
							DODAWANIE
						</div>
						<div className="container list-desktop board-desktop">
							<div className="row d-flex align-items-center">
								<div className="col-9">
									<Link
										style={{ textDecoration: "none" }}
										to="/u5e"
									>
										<button className="btn-desktop hover-easy">
											Dodawanie do 5 - poziom łatwy ✅
										</button>
									</Link>
								</div>
								<div className="col-3">
									<button
										className="btn-desktop"
										onClick={() => play(add5E)}
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
										to="/u5"
									>
										<button className="btn-desktop hover-mid">
											Dodawanie do 5 - poziom średni ✔️ ✔️
										</button>
									</Link>
								</div>
								<div className="col-3">
									<button
										className="btn-desktop"
										onClick={() => play(add5H)}
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
										to="/u10e"
									>
										<button className="btn-desktop hover-easy">
											Dodawanie do 10 - poziom łatwy ✅
										</button>
									</Link>
								</div>
								<div className="col-3">
									<button
										className="btn-desktop"
										onClick={() => play(add10E)}
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
										to="/u10"
									>
										<button className="btn-desktop hover-hard">
											Dodawanie do 10 - poziom trudny
											❗❗❗
										</button>
									</Link>
								</div>
								<div className="col-3">
									<button
										className="btn-desktop"
										onClick={() => play(add10H)}
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
										to="/w10"
									>
										<button className="btn-desktop hover-hard">
											Dodawanie do 10 - wpisywanie ❗❗❗
										</button>
									</Link>
								</div>
								<div className="col-3">
									<button
										className="btn-desktop"
										onClick={() => play(add10W)}
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
										to="/u20"
									>
										<button className="btn-desktop hover-hard">
											Dodawanie do 20 ❗❗❗
										</button>
									</Link>
								</div>
								<div className="col-3">
									<button
										className="btn-desktop"
										onClick={() => play(add20)}
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
										to="/w20"
									>
										<button className="btn-desktop hover-hard">
											Dodawanie do 20 - wpisywanie ❗❗❗
										</button>
									</Link>
								</div>
								<div className="col-3">
									<button
										className="btn-desktop"
										onClick={() => play(add20W)}
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
			<div className="dzialy-mobile margin-mob">
				<div className="d-flex justify-content-center align-items-center">
					<ul className="text-center">
						<Link style={{ textDecoration: "none" }} to="/u5">
							<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
								Dodawanie do 5 ✅
							</li>
						</Link>
						<Link style={{ textDecoration: "none" }} to="/u10">
							<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
								Dodawanie do 10 ✔️ ✔️
							</li>
						</Link>
						<Link style={{ textDecoration: "none" }} to="/w10">
							<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
								Dodawanie do 10 - wpisywanie ❗❗❗
							</li>
						</Link>
						<Link style={{ textDecoration: "none" }} to="/u20">
							<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
								Dodawanie do 20 ✔️ ✔️
							</li>
						</Link>
						<Link style={{ textDecoration: "none" }} to="/w20">
							<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
								Dodawanie do 20 - wpisywanie ❗❗❗
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

export default Addition;
