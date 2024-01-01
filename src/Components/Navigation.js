import React from "react";

function Navigation() {
	return (
		<nav className="navbar navbar-expand-lg bcg-nav" id="navigation">
			<div className="container">
				<div className="ms-4" href="#navigation">
					<div className="logo">
						<a href="./" className="nav-link me-lg-3 navigation">
							MATEMATYKA DLA SMYKA
						</a>
					</div>
				</div>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon menu-mbl"></span>
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a
								className="nav-link me-lg-3 navigation"
								href="numlearn"
							>
								Liczbowe Spotkanie
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link me-lg-3 navigation"
								href="sign"
							>
								Magiczne Znaki Matematyki
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navigation;
