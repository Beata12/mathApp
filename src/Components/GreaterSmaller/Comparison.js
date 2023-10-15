import React from "react";
import { Link } from "react-router-dom";

function Numbers() {
	return (
		<main className="main-dzialy">
			<div className="dzialy-desktop">
				<div className="container d-flex justify-content-center align-items-center">
					<div className="col-8 ">
						<ul className="text-center">
							<Link style={{ textDecoration: "none" }} to="/eg">
								<li className="list-desktop board-desktop">
									Porównywanie liczb - przykłady
								</li>
							</Link>
							<Link style={{ textDecoration: "none" }} to="/esm">
								<li className="list-desktop board-desktop">
									Porównywanie liczb - która liczba jest
									mniejsza
								</li>
							</Link>
							<Link style={{ textDecoration: "none" }} to="/egr">
								<li className="list-desktop board-desktop">
									Porównywanie liczb - która liczba jest
									większa
								</li>
							</Link>
							<Link style={{ textDecoration: "none" }} to="/grsm">
								<li className="list-desktop board-desktop">
									Porównywanie liczb - poziom trudny
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
						<Link style={{ textDecoration: "none" }} to="/eg">
							<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
								Porównywanie liczb - przykłady
							</li>
						</Link>
						<Link style={{ textDecoration: "none" }} to="/esm">
							<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
								Porównywanie liczb - która liczba jest mniejsza
							</li>
						</Link>
						<Link style={{ textDecoration: "none" }} to="/egr">
							<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
								Porównywanie liczb - która liczba jest większa
							</li>
						</Link>
						<Link style={{ textDecoration: "none" }} to="/grsm">
							<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
								Porównywanie liczb
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
