import React from "react";
import { Link } from "react-router-dom";

function Numbers() {
	return (
		<main className="main-dzialy">
			<div className="dzialy-mobile">
				<div className="d-flex justify-content-center align-items-center">
					<ul className="text-center">
						<Link to="/nume">
							<li className="list">Coś łatwego</li>
						</Link>
						<Link to="/numh">
							<li className="list">Trudniejsze</li>
						</Link>
						<Link to="/numl">
							<li className="list">Słucham</li>
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
