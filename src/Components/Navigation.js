import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Navigation() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light py-3 ">
			<div className="container px-5">
				<a className="navbar-brand" href="index.html">
					<span className="fw-bolder">Nazwa aplikacji</span>
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
						<li className="nav-item">
							<a className="nav-link" href="index.html">
								Poznajemy cyfry
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="resume.html">
								Dodajemy
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="contact.html">
								Odejmujemy
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navigation;
