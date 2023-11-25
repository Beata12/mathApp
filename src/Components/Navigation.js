import React from "react";

function Navigation() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light py-3 ">
			<div className="container px-5">
				<div className="row d-flex align-items-center">
					<div className="col-8 logo">MATEMATYKA DLA SMYKA</div>
					<div className="col-4">
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
			<div
				className="collapse navbar-collapse"
				id="navbarSupportedContent"
			>
				<ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
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
