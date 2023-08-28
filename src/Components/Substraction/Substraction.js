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

						<Link to="/o5">
							<li className="list">Odejmowanie do 5</li>
						</Link>
						<Link to="/o10">
							<li className="list">Odejmowanie do 10</li>
						</Link>
						<Link to="/ow10">
							<li className="list">
								Odejmowanie do 10 - wpisywanie
							</li>
						</Link>
						<Link to="/o20">
							<li className="list">Odejmowanie do 20</li>
						</Link>
						<Link to="/ow20">
							<li className="list">
								Odejmowanie do 20 - wpisywanie
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
