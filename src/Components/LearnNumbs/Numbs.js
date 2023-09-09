import React from "react";
import { Link } from "react-router-dom";

function Numbers() {
	return (
		<main className="main-dzialy">
			<div className="dzialy-mobile">
				<div className="d-flex justify-content-center align-items-center">
					<ul className="text-center">
						<Link style={{ textDecoration: "none" }} to="/numlearn">
							<li className="list-mobile">Poznaje cyfry</li>
						</Link>
						<Link style={{ textDecoration: "none" }} to="/nume">
							<li className="list-mobile">Coś łatwego</li>
						</Link>
						<Link style={{ textDecoration: "none" }} to="/numh">
							<li className="list-mobile">Trudniejsze</li>
						</Link>
						<Link style={{ textDecoration: "none" }} to="/numl">
							<li className="list-mobile">Słucham</li>
						</Link>
						<Link style={{ textDecoration: "none" }} to="/">
							<li className="list-mobile">Powrót do menu</li>
						</Link>
					</ul>
				</div>
			</div>
		</main>
	);
}

export default Numbers;
