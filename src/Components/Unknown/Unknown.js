import React from "react";
import { Link } from "react-router-dom";

function Numbers() {
	return (
		<main className="main-dzialy">
			<div className="dzialy-mobile">
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

export default Numbers;
