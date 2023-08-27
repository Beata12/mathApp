import React from "react";
import { Link } from "react-router-dom";

function Numbers() {
	return (
		<main className="main-dzialy">
			<div className="dzialy-mobile">
				<div className="d-flex justify-content-center align-items-center">
					<ul className="text-center">
						<Link to="/sign">
							<li className="list">Poznaje znaki matematyczne</li>
						</Link>
						<Link to="/">
							<li className="list">Łatwe</li>
						</Link>
						<Link to="/">
							<li className="list">Trudne</li>
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
