import React from "react";
import { Link } from "react-router-dom";

function Dzialy() {
	return (
		<main className="main-dzialy">
			<div className="dzialy-desktop">
				<div>
					<div className="d-flex justify-content-center list-desktop">
						DZIAŁY
					</div>
				</div>
				<div className="container d-flex justify-content-center align-items-center">
					<div className="col-8 ">
						<ul className="text-center">
							<Link style={{ textDecoration: "none" }} to="./num">
								<li className="list-desktop board-desktop">
									Poznajemy liczby
								</li>
							</Link>
							<Link
								style={{ textDecoration: "none" }}
								to="./sign"
							>
								<li className="list-desktop board-desktop">
									Poznajemy znaki matematyczne
								</li>
							</Link>
							<Link style={{ textDecoration: "none" }} to="./add">
								<li className="list-desktop board-desktop">
									Uczymy się dodawać
								</li>
							</Link>{" "}
							<Link style={{ textDecoration: "none" }} to="./sub">
								<li className="list-desktop board-desktop">
									Uczymy się odejmować
								</li>
							</Link>{" "}
							<Link
								style={{ textDecoration: "none" }}
								to="./comp"
							>
								<li className="list-desktop board-desktop">
									Porównywanie liczb
								</li>
							</Link>
							<Link style={{ textDecoration: "none" }} to="./un">
								<li className="list-desktop board-desktop">
									Działania z niewiadomą
								</li>
							</Link>
						</ul>
					</div>
				</div>
			</div>
			<div className="dzialy-mobile">
				<div className="d-flex justify-content-center align-items-center">
					<ul className="text-center">
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
