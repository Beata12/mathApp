import React from "react";
import { Link } from "react-router-dom";

function Uknnown() {
	return (
		<main className="main-dzialy">
			<div className="dzialy-desktop">
				<div className="container d-flex justify-content-center align-items-center">
					<div className="col-10">
						<ul className="text-center">
							<li className="list-desktop board-desktop main-title">
								DZIAŁANIA Z NIEWIADOMĄ
							</li>
							<Link style={{ textDecoration: "none" }} to="/unae">
								<li className="list-desktop board-desktop hover-easy">
									Dodawanie z niewiadomą - poziom łatwy
								</li>
							</Link>
							<Link style={{ textDecoration: "none" }} to="/una">
								<li className="list-desktop board-desktop hover-hard">
									Dodawanie z niewiadomą - poziom trudny
								</li>
							</Link>{" "}
							<Link style={{ textDecoration: "none" }} to="/unse">
								<li className="list-desktop board-desktop hover-easy">
									Odejmowanie z niewiadomą - poziom łatwy
								</li>
							</Link>
							<Link style={{ textDecoration: "none" }} to="/uns">
								<li className="list-desktop board-desktop hover-hard">
									Odejmowanie z niewiadomą-poziom trudny
								</li>
							</Link>
							<Link style={{ textDecoration: "none" }} to="/unas">
								<li className="list-desktop board-desktop hover-hard">
									Dodawanie i odejmowanie z niewiadomą
								</li>
							</Link>
							<Link style={{ textDecoration: "none" }} to="/">
								<li className="list-desktop board-desktop hover-back">
									Powrót do menu
								</li>
							</Link>
						</ul>
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

export default Uknnown;
