import React from "react";

function Navigation() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light nav-desktop">
			<div className="container d-flex justify-content-center align-items-center">
				<div className="col-10">
					<div className="row d-flex align-items-center dzialy-desktop">
						<div className="col-10 logo">MATEMATYKA DLA SMYKA</div>
						<div className="col-2">
							<button
								className="navbar-toggler btn-lg"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#navbarSupportedContent"
								aria-controls="navbarSupportedContent"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span className="navbar-toggler-icon color-span"></span>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div
				className="collapse navbar-collapse col-6"
				id="navbarSupportedContent"
			>
				<ul className="navbar-nav small fw-bolder d-flex justify-content-center align-items-center">
					<li className="nav-item">
						<a className="nav-link navigation" href="./">
							DZIAŁY
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link navigation" href="numlearn">
							LICZBY
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link navigation" href="sign">
							ZNAKI MATEMATYCZNE
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navigation;
