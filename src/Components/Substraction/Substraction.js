import React from "react";
import { Link } from "react-router-dom";

function Numbers() {
	return (
		<main className="main-dzialy">
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
