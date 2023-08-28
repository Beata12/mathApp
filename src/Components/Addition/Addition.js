import React from "react";
import { Link } from "react-router-dom";

function Numbers() {
	return (
		<main className="main-dzialy">
			<div className="dzialy-mobile">
				<div className="d-flex justify-content-center align-items-center">
					<ul className="text-center">
						<Link to="/">
							<li className="list">Poznaje znaki matematyczne</li>
						</Link>

						<Link to="/u5">
							<li className="list">Dodawanie do 5</li>
						</Link>
						<Link to="/u10">
							<li className="list">Dodawanie do 10</li>
						</Link>
						<Link to="/w10">
							<li className="list">
								Dodawanie do 10 - wpisywanie
							</li>
						</Link>
						<Link to="/u20">
							<li className="list">Dodawanie do 20</li>
						</Link>
						<Link to="/w20">
							<li className="list">
								Dodawanie do 20 - wpisywanie
							</li>
						</Link>
						<Link to="/">
							<li className="list">Wróć</li>
						</Link>
					</ul>
				</div>
			</div>
		</main>
	);
}

export default Numbers;
