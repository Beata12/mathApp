import React from "react";
import { Link } from "react-router-dom";

function Numbslearn() {
	return (
		<main className="main-dzialy">
			<div className="dzialy-mobile">
				<ul className="text-center">
					<li className="list">Uczymy się</li>
				</ul>
				<div className="blackboard container text-center">
					<div className="row ">
						<div className="col ">
							<p className="number ">1</p>
						</div>
						<div className="col">
							<p className="number-tekst">jeden</p>
						</div>
					</div>
					<div className="">
						<img
							className="ball"
							src={require("./photos/ball.png")}
							alt={"Add more descriptive alt"}
						/>
					</div>
				</div>
				<ul className="text-center">
					<Link to="/num">
						<li className="list">Chcesz poćwiczyć</li>
					</Link>
					<Link to="/">
						<li className="list">Powrót do menu</li>
					</Link>
				</ul>
			</div>
		</main>
	);
}

export default Numbslearn;
