import React from "react";
import { Link } from "react-router-dom";

function Numbers() {
	return (
		<main className="main-dzialy">
			<div className="dzialy-mobile">
				<div className="d-flex justify-content-center align-items-center">
					<ul className="text-center">
						<Link style={{ textDecoration: "none" }} to="/eg">
							<li className="list-mobile">Przykłady</li>
						</Link>
						<Link style={{ textDecoration: "none" }} to="/esm">
							<li className="list-mobile">Mniejsze</li>
						</Link>
						<Link style={{ textDecoration: "none" }} to="/egr">
							<li className="list-mobile">Większe</li>
						</Link>
						<Link style={{ textDecoration: "none" }} to="/grsm">
							<li className="list-mobile">
								Mniejsze czy większe?
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
