import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faPencil,
	faChild,
	faBook,
	faArrowLeft,
	faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

function MainPage() {
	return (
		<main className="main-dzialy">
			<div className="dzialy-desktop">
				<div className="container d-flex justify-content-center align-items-center">
					<div className="col-12">
						<ul className="text-center">
							<div className="container">
								<div className="row d-flex justify-content-center align-items-center">
									<div className="col-2">
										<FontAwesomeIcon
											icon={faBook}
											size="4x"
											className="mb-2 book-icon icon-marg"
										/>
									</div>
									<div className="col-8">
										<h1 className="text-header">
											Matematyka Dla Smyka
										</h1>
									</div>
									<div className="col-2">
										<FontAwesomeIcon
											icon={faChild}
											size="4x"
											className="mb-2 child-icon icon-marg"
										/>
									</div>
								</div>
							</div>
							<div className="mb-4">
								<h2 className="text-header">
									🔢 = 🤔 ➕ 🎲 Witaj w Matematycznej Krainie
									Zabawy! 🎲 ➕ 🤔 = 🔢
								</h2>

								<p className="text-math">
									🧮🎉 Przygotowano dla Ciebie wiele
									fascynujących gier i zadań matematycznych,
									które sprawią, że nauka stanie się prawdziwą
									przygodą! 🎉🧮
								</p>
								<p>
									<br></br>
								</p>
							</div>
							<div>
								<div className="container">
									<div className="row d-flex align-items-center">
										<div className="col-3">
											<div className="container">
												<div className="row">
													<div className="row-2">
														<FontAwesomeIcon
															icon={faArrowRight}
															size="4x"
															className="mb-2 arrow-icon"
														/>
													</div>
												</div>
											</div>
										</div>
										<div className="col-6">
											<div className="d-flex justify-content-center">
												<Link
													style={{
														textDecoration: "none",
													}}
													to="./dz"
												>
													<div className="mb-4">
														<div className="board-desktop">
															<div className="card-body">
																<div className="container">
																	<div className="row">
																		<div className="col-3">
																			<FontAwesomeIcon
																				icon={
																					faBook
																				}
																				size="4x"
																				className="mb-2 book-icon"
																			/>
																		</div>
																		<div className="col-7">
																			<h2 className="card-title-desktop-white">
																				ZACZYNAMY
																			</h2>
																		</div>
																		<div className="col-2">
																			<FontAwesomeIcon
																				icon={
																					faPencil
																				}
																				size="3x"
																				className="mb-2 pen-icon"
																			/>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</Link>
											</div>
										</div>
										<div className="col-3">
											<div className="container">
												<div className="row">
													<div className="row-2">
														<FontAwesomeIcon
															icon={faArrowLeft}
															size="4x"
															className="mb-2 arrow-icon"
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</ul>
					</div>
				</div>
			</div>
			<div className="dzialy-mobile">
				<div className="d-flex justify-content-center align-items-center margin-mobile">
					<ul className="text-center main-mobile">
						<h2 className="text-header-mobile">
							Witaj w Matematycznej Krainie Zabawy! 🎲
						</h2>
						<div className="d-flex justify-content-center">
							<Link style={{ textDecoration: "none" }} to="./dz">
								<div className="mb-4">
									<div className="board-desktop">
										<div className="card-body">
											<div className="container">
												<div className="container">
													<div className="row d-felx align-items-center">
														<div className="col-9">
															<h3 className="card-text-mobile marg">
																ZACZYNAMY
															</h3>
														</div>
														<div className="col-3">
															<FontAwesomeIcon
																icon={faPencil}
																size="2x"
																className="mb-2 pen-icon marg-pnc"
															/>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</Link>
						</div>
						<p className="text-math-moblile">
							🧮🎉 Przygotowano dla Ciebie wiele fascynujących
							gier i zadań matematycznych, które sprawią, że nauka
							stanie się prawdziwą przygodą! 🎉🧮
						</p>
					</ul>
				</div>
			</div>
		</main>
	);
}

export default MainPage;
