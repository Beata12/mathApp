import React from "react";
import { Link } from "react-router-dom";

function Numbers() {
	return (
		<main className="main-dzialy">
			<div className="dzialy-desktop">
				<div className="container d-flex justify-content-center align-items-center">
					<div className="col-8 ">
						<ul className="text-center">
							<Link style={{ textDecoration: "none" }} to="/u5">
								<li className="list-desktop board-desktop">
									Dodawanie do 5
								</li>
							</Link>
							<Link style={{ textDecoration: "none" }} to="/u10">
								<li className="list-desktop board-desktop">
									Dodawanie do 10
								</li>
							</Link>
							<Link style={{ textDecoration: "none" }} to="/w10">
								<li className="list-desktop board-desktop">
									Dodawanie do 10 - wpisywanie
								</li>
							</Link>
							<Link style={{ textDecoration: "none" }} to="/u20">
								<li className="list-desktop board-desktop">
									Dodawanie do 20
								</li>
							</Link>
							<Link style={{ textDecoration: "none" }} to="/w20">
								<li className="list-desktop board-desktop">
									Dodawanie do 20 - wpisywanie
								</li>
							</Link>
							<Link style={{ textDecoration: "none" }} to="/">
								<li className="list-desktop board-desktop">
									Wróć
								</li>
							</Link>
						</ul>
					</div>
				</div>
			</div>
			<div className="dzialy-mobile">
				<div className="d-flex justify-content-center align-items-center">
					<ul className="text-center">
						<Link style={{ textDecoration: "none" }} to="/u5">
							<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
								Dodawanie do 5
							</li>
						</Link>
						<Link style={{ textDecoration: "none" }} to="/u10">
							<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
								Dodawanie do 10
							</li>
						</Link>
						<Link style={{ textDecoration: "none" }} to="/w10">
							<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
								Dodawanie do 10 - wpisywanie
							</li>
						</Link>
						<Link style={{ textDecoration: "none" }} to="/u20">
							<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
								Dodawanie do 20
							</li>
						</Link>
						<Link style={{ textDecoration: "none" }} to="/w20">
							<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
								Dodawanie do 20 - wpisywanie
							</li>
						</Link>
						<Link style={{ textDecoration: "none" }} to="/">
							<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
								Wróć
							</li>
						</Link>
					</ul>
				</div>
			</div>
		</main>
	);
}

export default Numbers;
