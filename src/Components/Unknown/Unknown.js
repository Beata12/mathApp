import React from "react";
import { Link } from "react-router-dom";

function Numbers() {
	return (
		<main className="main-dzialy">
			<div className="dzialy-mobile">
				<div className="d-flex justify-content-center align-items-center">
					<ul className="text-center">
						<Link style={{ textDecoration: "none" }} to="/una">
							<li className="list-mobile">Dodawanie</li>
						</Link>
						<Link style={{ textDecoration: "none" }} to="/uns">
							<li className="list-mobile">Odejmowanie</li>
						</Link>
						<Link style={{ textDecoration: "none" }} to="/unas">
							<li className="list-mobile">
								Dodawanie/Odejmowanie
							</li>
						</Link>
						<Link style={{ textDecoration: "none" }} to="/">
							<li className="list-mobile">Wróć</li>
						</Link>
					</ul>
				</div>
			</div>
		</main>
	);
}

export default Numbers;
