import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import numbers from "../audio/poznajemyLiczby.mp3";
import signs from "../audio/znaki.mp3";
import add from "../audio/dodawanie.mp3";
import sub from "../audio/odejmowanie.mp3";
import comp from "../audio/porownywanie.mp3";
import ukn from "../audio/niewiadoma.mp3";
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
		}, 2000);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [isButtonDisabled]);

	return (
		<main className="main-dzialy">
			<div className="dzialy-desktop">
				<div className="container d-flex justify-content-center align-items-center">
					<div className="col-10">
						<ul className="text-center">
							<div className="container list-desktop board-desktop main-title">
								DZIAŁY
							</div>
							<div className="container list-desktop board-desktop">
								<div className="row d-flex align-items-center">
									<div className="col-9">
										<Link
											style={{ textDecoration: "none" }}
											to="./sign"
										>
											<button className="btn-desktop hover-menu">
												Poznajemy liczby
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
											to="./sign"
										>
											<button className="btn-desktop hover-menu">
												Poznajemy znaki matematyczne
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
											to="./add"
										>
											<button className="btn-desktop hover-menu">
												Uczymy się dodawać
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
											to="./sub"
										>
											<button className="btn-desktop hover-menu">
												Uczymy się odejmować
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
											to="./sign"
										>
											<button className="btn-desktop hover-menu">
												Porównywanie liczb
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
											to="./sign"
										>
											<button className="btn-desktop hover-menu">
												Działania z niewiadomą
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
						</ul>
					</div>
				</div>
			</div>

			<div className="dzialy-mobile">
				<div className="d-flex justify-content-center align-items-center margin-mobile">
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
