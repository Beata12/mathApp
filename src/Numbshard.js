import React from "react";
import { Link } from "react-router-dom";

function Numbers() {
	return (
		<main className="main-dzialy">
			<div className="dzialy-mobile">
				<div className="d-flex justify-content-center align-items-center">
					<ul className="text-center">
						<li className="list">Poziom trudny</li>

						<Link to="/num">
							<li className="list">Wybierz inny lewel</li>
						</Link>
						<Link to="/">
							<li className="list">Powrót do menu</li>
						</Link>
					</ul>
				</div>
			</div>
		</main>
	);
}

export default Numbers;
