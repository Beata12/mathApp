import React from "react";
import { Link } from "react-router-dom";

function Numbers() {
	return (
		<main className="main-dzialy">
			<div className="dzialy-desktop">
				<div className="container d-flex justify-content-center align-items-center">
					<div className="col-8 ">
						<ul className="text-center">
							<Link style={{ textDecoration: "none" }} to="/o5e">
								<li className="list-desktop board-desktop hover-easy">
									Odejmowanie do 5 - poziom łatwy
								</li>
							</Link>
							<Link style={{ textDecoration: "none" }} to="/o5">
								<li className="list-desktop board-desktop hover-hard">
									Odejmowanie do 5 - poziom trudny
								</li>
							</Link>
							<Link style={{ textDecoration: "none" }} to="/o10e">
								<li className="list-desktop board-desktop hover-easy">
									Odejmowanie do 10 - poziom łatwy
								</li>
							</Link>
							<Link style={{ textDecoration: "none" }} to="/o10">
								<li className="list-desktop board-desktop hover-hard">
									Odejmowanie do 10 - poziom trudny
								</li>
							</Link>
							<Link style={{ textDecoration: "none" }} to="/ow10">
								<li className="list-desktop board-desktop hover-hard">
									Odejmowanie do 10 - wpisywanie
								</li>
							</Link>
							<Link style={{ textDecoration: "none" }} to="/o20">
								<li className="list-desktop board-desktop hover-hard">
									Odejmowanie do 20
								</li>
							</Link>
							<Link style={{ textDecoration: "none" }} to="/ow20">
								<li className="list-desktop board-desktop hover-hard">
									Odejmowanie do 20 - wpisywanie
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
			<div className="dzialy-mobile">
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
