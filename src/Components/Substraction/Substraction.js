import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sub5E from "../../audio/substraction/sub5E.mp3";
import sub5H from "../../audio/substraction/sub5H.mp3";
import sub10E from "../../audio/substraction/sub10E.mp3";
import sub10H from "../../audio/substraction/sub10H.mp3";
import sub10W from "../../audio/substraction/sub10W.mp3";
import sub20 from "../../audio/substraction/sub20.mp3";
import sub20W from "../../audio/substraction/sub20W.mp3";
import menu from "../../audio/menu.mp3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";

function Substraction() {
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
					<div className="col-12">
						<div className="container list-desktop board-desktop main-title">
							ODEJMOWANIE
						</div>
						<div className="container list-desktop board-desktop">
							<div className="row d-flex align-items-center">
								<div className="col-9">
									<Link
										style={{ textDecoration: "none" }}
										to="/o5e"
									>
										<button className="btn-desktop hover-easy">
											Odejmowanie do 5 - poziom łatwy ✅
										</button>
									</Link>
								</div>
								<div className="col-3">
									<button
										className="btn-desktop"
										onClick={() => play(sub5E)}
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
										to="/o5"
									>
										<button className="btn-desktop hover-mid">
											Odejmowanie do 5 - poziom średni ✔️
											✔️
										</button>
									</Link>
								</div>
								<div className="col-3">
									<button
										className="btn-desktop"
										onClick={() => play(sub5H)}
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
										to="/o10e"
									>
										<button className="btn-desktop hover-easy">
											Odejmowanie do 10 - poziom łatwy ✅
										</button>
									</Link>
								</div>
								<div className="col-3">
									<button
										className="btn-desktop"
										onClick={() => play(sub10E)}
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
										to="/o10"
									>
										<button className="btn-desktop hover-hard">
											Odejmowanie do 10 - poziom trudny
											❗❗❗
										</button>
									</Link>
								</div>
								<div className="col-3">
									<button
										className="btn-desktop"
										onClick={() => play(sub10H)}
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
										to="/ow10"
									>
										<button className="btn-desktop hover-hard">
											Odejmowanie do 10 - wpisywanie
											❗❗❗
										</button>
									</Link>
								</div>
								<div className="col-3">
									<button
										className="btn-desktop"
										onClick={() => play(sub10W)}
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
										to="/o20"
									>
										<button className="btn-desktop hover-hard">
											Odejmowanie do 20 ❗❗❗
										</button>
									</Link>
								</div>
								<div className="col-3">
									<button
										className="btn-desktop"
										onClick={() => play(sub20)}
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
										to="/ow20"
									>
										<button className="btn-desktop hover-hard">
											Odejmowanie do 20 - wpisywanie
											❗❗❗
										</button>
									</Link>
								</div>
								<div className="col-3">
									<button
										className="btn-desktop"
										onClick={() => play(sub20W)}
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
						<Link style={{ textDecoration: "none" }} to="/o5">
							<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
								Odejmowanie do 5
							</li>
						</Link>
						<Link style={{ textDecoration: "none" }} to="/o10">
							<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
								Odejmowanie do 10
							</li>
						</Link>
						<Link style={{ textDecoration: "none" }} to="/ow10">
							<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
								Odejmowanie do 10 - wpisywanie
							</li>
						</Link>
						<Link style={{ textDecoration: "none" }} to="/o20">
							<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
								Odejmowanie do 20
							</li>
						</Link>
						<Link style={{ textDecoration: "none" }} to="/ow20">
							<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
								Odejmowanie do 20 - wpisywanie
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

export default Substraction;
