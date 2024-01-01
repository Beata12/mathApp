import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import menu from "../../audio/menu.mp3";
import unkAddE from "../../audio/unknown/unkAddE.mp3";
import unkAddH from "../../audio/unknown/unkAddH.mp3";
import unkSubE from "../../audio/unknown/unkSubE.mp3";
import unkSubH from "../../audio/unknown/unkSubH.mp3";
import unkAddSub from "../../audio/unknown/unkAddSub.mp3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";

function Uknnown() {
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
							DZIAŁANIA Z NIEWIADOMĄ
						</div>
						<div className="container list-desktop board-desktop">
							<div className="row d-flex align-items-center">
								<div className="col-9">
									<Link
										style={{ textDecoration: "none" }}
										to="/unae"
									>
										<button className="btn-desktop hover-easy">
											Dodawanie z niewiadomą - poziom
											łatwy
										</button>
									</Link>
								</div>
								<div className="col-3">
									<button
										className="btn-desktop"
										onClick={() => play(unkAddE)}
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
										to="/una"
									>
										<button className="btn-desktop hover-hard">
											Dodawanie z niewiadomą - poziom
											trudny
										</button>
									</Link>
								</div>
								<div className="col-3">
									<button
										className="btn-desktop"
										onClick={() => play(unkAddH)}
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
										to="/unse"
									>
										<button className="btn-desktop hover-easy">
											Odejmowanie z niewiadomą - poziom
											łatwy
										</button>
									</Link>
								</div>
								<div className="col-3">
									<button
										className="btn-desktop"
										onClick={() => play(unkSubE)}
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
										to="/uns"
									>
										<button className="btn-desktop hover-hard">
											Odejmowanie z niewiadomą - poziom
											trudny
										</button>
									</Link>
								</div>
								<div className="col-3">
									<button
										className="btn-desktop"
										onClick={() => play(unkSubH)}
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
										to="/unas"
									>
										<button className="btn-desktop hover-hard">
											Dodawanie i odejmowanie z niewiadomą
										</button>
									</Link>
								</div>
								<div className="col-3">
									<button
										className="btn-desktop"
										onClick={() => play(unkAddSub)}
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
						<Link style={{ textDecoration: "none" }} to="/una">
							<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
								Dodawanie z liczbą niewiadomą
							</li>
						</Link>
						<Link style={{ textDecoration: "none" }} to="/uns">
							<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
								Odejmowanie z liczbą niewiadomą
							</li>
						</Link>
						<Link style={{ textDecoration: "none" }} to="/unas">
							<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
								Dodawanie i odejmowanie z liczbą niewiadomą
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

export default Uknnown;
