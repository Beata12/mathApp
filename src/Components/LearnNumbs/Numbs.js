import React from "react";
import { Link } from "react-router-dom";

function Numbers() {
	return (
		<main className="main-dzialy">
			<div className="dzialy-desktop">
				<div className="container d-flex justify-content-center align-items-center">
					<div className="col-8 ">
						<ul className="text-center">
							<Link
								style={{ textDecoration: "none" }}
								to="/numlearn"
							>
								<li className="list-desktop board-desktop">
									Poznaje liczby
								</li>
							</Link>

							<Link style={{ textDecoration: "none" }} to="/nume">
								<li className="list-desktop board-desktop">
									Rozpoznawanie liczb - poziom łatwy
								</li>
							</Link>
							<Link style={{ textDecoration: "none" }} to="/numh">
								<li className="list-desktop board-desktop">
									Rozpoznawanie liczb - poziom trudny
								</li>
							</Link>
							<Link style={{ textDecoration: "none" }} to="/numl">
								<li className="list-desktop board-desktop">
									Rozpoznawanie liczb - słuchanie
								</li>
							</Link>
							<Link style={{ textDecoration: "none" }} to="/">
								<li className="list-desktop board-desktop">
									Powrót do menu
								</li>
							</Link>
						</ul>
					</div>
				</div>
			</div>
			<div className="dzialy-mobile">
				<div className="d-flex justify-content-center align-items-center">
					<ul className="text-center">
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
