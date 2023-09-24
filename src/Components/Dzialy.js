import React from "react";
import { Link } from "react-router-dom";

function Dzialy() {
	return (
		<main className="main-dzialy">
			<div className="dzialy-desktop">
				<div>
					<div className="d-flex justify-content-center header-text">
						MATEMATYKA DLA SMYKA
					</div>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-2">
							<div className="container">
								<div className="column">
									<div className="col d-flex justify-content-center numbers">
										6
									</div>
									<div className="col d-flex justify-content-end numbers">
										1
									</div>
									<div className="col d-flex justify-content-start numbers">
										9
									</div>
									<div className="col d-flex justify-content-center numbers">
										3
									</div>
								</div>
							</div>
						</div>
						<div className="col-8 d-flex justify-content-center align-items-center">
							<div className="main-box d-flex justify-content-center align-items-center">
								<ul className="text-center">
									<li className="list">Poznajemy liczby</li>
									<li className="list">
										Poznajemy znaki matematyczne
									</li>
									<li className="list">Uczymy się dodawać</li>
									<li className="list">
										Uczymy się odejmować
									</li>
									<li className="list">Większy/Mniejszy</li>
									<li className="list">
										Działania z niewiadomą
									</li>
								</ul>
							</div>
						</div>
						<div className="col-2">
							<div className="container">
								<div className="column">
									<div className="col d-flex justify-content-center numbers">
										2
									</div>
									<div className="col d-flex justify-content-start numbers">
										7
									</div>
									<div className="col d-flex justify-content-end numbers">
										5
									</div>
									<div className="col d-flex justify-content-center numbers">
										8
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="dzialy-mobile">
				<div className="d-flex justify-content-center align-items-center">
					<ul className="text-center">
						<div>
							<img
								className="animal"
								src={require("./photo/animal.png")}
								alt={"Add more descriptive alt"}
							/>
							<Link style={{ textDecoration: "none" }} to="./num">
								<li className="list-mobile">
									Poznajemy liczby
								</li>
							</Link>
						</div>
						<Link style={{ textDecoration: "none" }} to="./sign">
							<li className="list-mobile">
								Poznajemy znaki matematyczne
							</li>
						</Link>

						<Link style={{ textDecoration: "none" }} to="./add">
							<li className="list-mobile">Uczymy się dodawać</li>
						</Link>
						<Link style={{ textDecoration: "none" }} to="./sub">
							<li className="list-mobile">
								Uczymy się odejmować
							</li>
						</Link>
						<Link style={{ textDecoration: "none" }} to="./comp">
							<li className="list-mobile">Większy/Mniejszy</li>
						</Link>
						<div>
							<img
								className="pens"
								src={require("./photo/pen.png")}
								alt={"Add more descriptive alt"}
							/>
							<Link style={{ textDecoration: "none" }} to="./un">
								<li className="list-mobile">
									Działania z niewiadomą
								</li>
							</Link>
						</div>
					</ul>
				</div>
			</div>
		</main>
	);
}

export default Dzialy;
