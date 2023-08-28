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

						<Link to="/una">
							<li className="list">Dodawanie</li>
						</Link>
						<Link to="/uns">
							<li className="list">Odejmowanie</li>
						</Link>
						<Link to="/unas">
							<li className="list">Dodawanie/Odejmowanie</li>
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
