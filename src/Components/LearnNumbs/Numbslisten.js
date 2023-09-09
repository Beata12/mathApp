import React from "react";
import { Link } from "react-router-dom";

function Numbers() {
	return (
		<main className="main-dzialy">
			<div className="dzialy-mobile">
				<div className="d-flex justify-content-center align-items-center">
					<ul className="text-center">
						<li className="list-mobile">Słucham</li>

						<Link style={{ textDecoration: "none" }} to="/num">
							<li className="list-mobile">Wybierz inny lewel</li>
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
