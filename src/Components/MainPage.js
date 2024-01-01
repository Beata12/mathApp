import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import numbers from "../audio/dzialy/poznajemyLiczby.mp3";
// import signs from "../audio/dzialy/znaki.mp3";
// import add from "../audio/dzialy/dodawanie.mp3";
// import sub from "../audio/dzialy/odejmowanie.mp3";
// import comp from "../audio/dzialy/porownywanie.mp3";
// import ukn from "../audio/dzialy/niewiadoma.mp3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faSortNumericUpAlt,
	faPlus,
	faMinus,
	faEquals,
	faQuestion,
	faGreaterThanEqual,
	faPencil,
	faChild,
	faBook,
	faArrowLeft,
	faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

function MainPage() {
	const [isButtonDisabled, setButtonDisabled] = useState(false);

	function play(audioFile) {
		if (!isButtonDisabled) {
			const audio = new Audio(audioFile);
			audio.play();
			setButtonDisabled(true);
		}
	}

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setButtonDisabled(false);
		}, 2000);

		return () => {
			clearTimeout(timeoutId);
		};
	}, [isButtonDisabled]);

	return (
		<main className="main-dzialy">
			<div className="dzialy-desktop">
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
						🔢 = 🤔 ➕ 🎲 Witaj w Matematycznej Krainie Zabawy! 🎲
						➕ 🤔 = 🔢
					</h2>
					<p className="text-math">
						🧮🎉 Przygotowano dla Ciebie wiele fascynujących gier i
						zadań matematycznych, które sprawią, że nauka stanie się
						prawdziwą przygodą! 🎉🧮
					</p>
				</div>
				<div>
					<div class="container">
						<div class="row d-flex align-items-center">
							<div class="col-2">
								<div class="container">
									<div class="row">
										<div class="row-2">
											<FontAwesomeIcon
												icon={faArrowRight}
												size="4x"
												className="mb-2 arrow-icon"
											/>
										</div>
										<div class="row-2">
											<FontAwesomeIcon
												icon={faArrowRight}
												size="4x"
												className="mb-2 arrow-icon"
											/>
										</div>
									</div>
								</div>
							</div>
							<div class="col-8">
								<div className="d-flex justify-content-center">
									<Link
										style={{ textDecoration: "none" }}
										to="./dz"
									>
										<div className="mb-4">
											<div className=" board-desktop">
												<div className="card-body">
													<div className="container">
														<div className="row">
															<div className="col-2">
																<FontAwesomeIcon
																	icon={
																		faBook
																	}
																	size="4x"
																	className="mb-2 book-icon"
																/>
															</div>
															<div className="col-8">
																<h2 className="card-title-desktop">
																	Matematyka
																	Dla Smyka
																</h2>
															</div>
															<div className="col-2">
																<FontAwesomeIcon
																	icon={
																		faChild
																	}
																	size="4x"
																	className="mb-2 child-icon"
																/>
															</div>
														</div>
														<div className="container">
															<div className="row d-felx justify-content-center">
																<div className="col-8">
																	<h3 className="card-text-desktop">
																		Kliknij
																		i poznaj
																		matematyczną
																		krainę
																		zabawy
																	</h3>
																</div>
																<div className="col-1">
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
										</div>
									</Link>
								</div>
							</div>
							<div class="col-2">
								<div class="container">
									<div class="row">
										<div class="row-2">
											<FontAwesomeIcon
												icon={faArrowLeft}
												size="4x"
												className="mb-2 arrow-icon"
											/>
										</div>
										<div class="row-2">
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
					<div className="row d-flex justify-content-center align-items-center">
						<div className="col-md-4 mb-4">
							<div className=" board-desktop">
								<div className="card-body">
									<FontAwesomeIcon
										icon={faSortNumericUpAlt}
										size="4x"
										className="mb-2 learnnum-icon"
									/>
									<h3 className="card-title-desktop">
										Poznajemy liczby
									</h3>
									<p className="card-text-desktop">
										Rozpocznij magiczną podróż po barwnym
										świecie liczb, gdzie każda z nich
										otwiera przed tobą fascynujące
										tajemnice, gotowe do odkrycia i
										zgłębienia.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-4 mb-4">
							<div className="board-desktop">
								<div className="card-body">
									<FontAwesomeIcon
										icon={faGreaterThanEqual}
										size="4x"
										className="mb-2 sign-icon"
									/>
									<h3 className="card-title-desktop">
										Poznajemy znaki matematyczne
									</h3>
									<p className="card-text-desktop">
										Odkryj tajemnice matematycznych znaków,
										zgłębiając ich fascynujący świat i
										dzięki zabawie poznaj unikalne znaczenia
										każdego z nich.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-4 mb-4">
							<div className="board-desktop">
								<div className="card-body">
									<FontAwesomeIcon
										icon={faPlus}
										size="4x"
										className="mb-2 add-icon"
									/>
									<h3 className="card-title-desktop">
										Uczymy się dodawać
									</h3>
									<p className="card-text-desktop">
										Przeżywaj radość matematycznej przygody,
										eksplorując świat dodawania w pełen
										ciekawych gier, które uczą i bawią
										jednocześnie.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="row d-flex justify-content-center align-items-center">
						<div className="col-md-4 mb-4">
							<div className="board-desktop">
								<div className="card-body">
									<FontAwesomeIcon
										icon={faMinus}
										size="4x"
										className="mb-2 sub-icon"
									/>
									<h3 className="card-title-desktop">
										Uczymy się odejmować
									</h3>
									<p className="card-text-desktop">
										Przeżywaj przygody z odejmowaniem w
										Matematycznej Krainie.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-4 mb-4">
							<div className="board-desktop">
								<div className="card-body">
									<FontAwesomeIcon
										icon={faEquals}
										size="4x"
										className="mb-2 comp-icon"
									/>
									<h3 className="card-title-desktop">
										Porównywanie liczb
									</h3>
									<p className="card-text-desktop">
										Stawiaj liczby w rywalizacji i ucz się
										poprawnie je porównywać.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-4 mb-4">
							<div className="board-desktop">
								<div className="card-body">
									<FontAwesomeIcon
										icon={faQuestion}
										size="4x"
										className="mb-2 uknnown-icon"
									/>
									<h3 className="card-title-desktop">
										Działania z niewiadomą
									</h3>
									<p className="card-text-desktop">
										Rozwiązuj zadania matematyczne z
										nieznanych wartości.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-center">
						<div class="container">
							<div class="row d-flex align-items-center">
								<div class="col-2">
									<div class="container">
										<div class="row">
											<div class="row-2">
												<FontAwesomeIcon
													icon={faArrowRight}
													size="4x"
													className="mb-2 arrow-icon"
												/>
											</div>
											<div class="row-2">
												<FontAwesomeIcon
													icon={faArrowRight}
													size="4x"
													className="mb-2 arrow-icon"
												/>
											</div>
										</div>
									</div>
								</div>
								<div class="col-8">
									<div className="d-flex justify-content-center">
										<Link
											style={{ textDecoration: "none" }}
											to="./dz"
										>
											<div className="mb-4">
												<div className=" board-desktop">
													<div className="card-body">
														<div className="container">
															<div className="row">
																<div className="col-2">
																	<FontAwesomeIcon
																		icon={
																			faBook
																		}
																		size="4x"
																		className="mb-2 book-icon"
																	/>
																</div>
																<div className="col-8">
																	<h2 className="card-title-desktop">
																		Matematyka
																		Dla
																		Smyka
																	</h2>
																</div>
																<div className="col-2">
																	<FontAwesomeIcon
																		icon={
																			faChild
																		}
																		size="4x"
																		className="mb-2 child-icon"
																	/>
																</div>
															</div>
															<div className="container">
																<div className="row d-felx justify-content-center">
																	<div className="col-8">
																		<h3 className="card-text-desktop">
																			Kliknij
																			i
																			poznaj
																			matematyczną
																			krainę
																			zabawy
																		</h3>
																	</div>
																	<div className="col-1">
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
											</div>
										</Link>
									</div>
								</div>
								<div class="col-2">
									<div class="container">
										<div class="row">
											<div class="row-2">
												<FontAwesomeIcon
													icon={faArrowLeft}
													size="4x"
													className="mb-2 arrow-icon"
												/>
											</div>
											<div class="row-2">
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
				</div>
			</div>
			<div className="dzialy-mobile">
				<div className="mb-4">
					<h2 className="text-header">
						🔢 = 🤔 ➕ 🎲 <br></br>Witaj w Matematycznej Krainie
						Zabawy! <br></br> 🎲 ➕ 🤔 = 🔢
					</h2>
					<p className="text-math">
						🧮🎉 Przygotowano dla Ciebie wiele fascynujących gier i
						zadań matematycznych, które sprawią, że nauka stanie się
						prawdziwą przygodą! 🎉🧮
					</p>
				</div>
				<div>
					<div className="d-flex justify-content-center">
						<Link style={{ textDecoration: "none" }} to="./dz">
							<div className="mb-4">
								<div className=" board-desktop">
									<div className="card-body">
										<div className="container">
											<div className="row">
												<div className="row-2">
													<FontAwesomeIcon
														icon={faBook}
														size="4x"
														className="mb-2 book-icon"
													/>
												</div>
												<div className="row-8">
													<h2 className="card-title-desktop">
														Matematyka Dla Smyka
													</h2>
												</div>
											</div>
											<div className="container">
												<div className="row d-felx justify-content-center">
													<div className="col-8">
														<h3 className="card-text-desktop">
															Kliknij i poznaj
															matematyczną krainę
															zabawy
														</h3>
													</div>
													<div className="col-1">
														<FontAwesomeIcon
															icon={faPencil}
															size="3x"
															className="mb-2 pen-icon"
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
					<div className="row d-flex justify-content-center align-items-center">
						<div className="col-md-4 mb-4">
							<div className=" board-desktop">
								<div className="card-body">
									<FontAwesomeIcon
										icon={faSortNumericUpAlt}
										size="4x"
										className="mb-2 learnnum-icon"
									/>
									<h3 className="card-title-desktop">
										Poznajemy liczby
									</h3>
									<p className="card-text-desktop">
										Rozpocznij magiczną podróż po barwnym
										świecie liczb, gdzie każda z nich
										otwiera przed tobą fascynujące
										tajemnice, gotowe do odkrycia i
										zgłębienia.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-4 mb-4">
							<div className="board-desktop">
								<div className="card-body">
									<FontAwesomeIcon
										icon={faGreaterThanEqual}
										size="4x"
										className="mb-2 sign-icon"
									/>
									<h3 className="card-title-desktop">
										Poznajemy znaki matematyczne
									</h3>
									<p className="card-text-desktop">
										Odkryj tajemnice matematycznych znaków,
										zgłębiając ich fascynujący świat i
										dzięki zabawie poznaj unikalne znaczenia
										każdego z nich.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-4 mb-4">
							<div className="board-desktop">
								<div className="card-body">
									<FontAwesomeIcon
										icon={faPlus}
										size="4x"
										className="mb-2 add-icon"
									/>
									<h3 className="card-title-desktop">
										Uczymy się dodawać
									</h3>
									<p className="card-text-desktop">
										Przeżywaj radość matematycznej przygody,
										eksplorując świat dodawania w pełen
										ciekawych gier, które uczą i bawią
										jednocześnie.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="row d-flex justify-content-center align-items-center">
						<div className="col-md-4 mb-4">
							<div className="board-desktop">
								<div className="card-body">
									<FontAwesomeIcon
										icon={faMinus}
										size="4x"
										className="mb-2 sub-icon"
									/>
									<h3 className="card-title-desktop">
										Uczymy się odejmować
									</h3>
									<p className="card-text-desktop">
										Przeżywaj przygody z odejmowaniem w
										Matematycznej Krainie.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-4 mb-4">
							<div className="board-desktop">
								<div className="card-body">
									<FontAwesomeIcon
										icon={faEquals}
										size="4x"
										className="mb-2 comp-icon"
									/>
									<h3 className="card-title-desktop">
										Porównywanie liczb
									</h3>
									<p className="card-text-desktop">
										Stawiaj liczby w rywalizacji i ucz się
										poprawnie je porównywać.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-4 mb-4">
							<div className="board-desktop">
								<div className="card-body">
									<FontAwesomeIcon
										icon={faQuestion}
										size="4x"
										className="mb-2 uknnown-icon"
									/>
									<h3 className="card-title-desktop">
										Działania z niewiadomą
									</h3>
									<p className="card-text-desktop">
										Rozwiązuj zadania matematyczne z
										nieznanych wartości.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="d-flex justify-content-center">
						<Link style={{ textDecoration: "none" }} to="./dz">
							<div className="mb-4">
								<div className=" board-desktop">
									<div className="card-body">
										<div className="container">
											<div className="row">
												<div className="row-2">
													<FontAwesomeIcon
														icon={faBook}
														size="4x"
														className="mb-2 book-icon"
													/>
												</div>
												<div className="row-8">
													<h2 className="card-title-desktop">
														Matematyka Dla Smyka
													</h2>
												</div>
											</div>
											<div className="container">
												<div className="row d-felx justify-content-center">
													<div className="col-8">
														<h3 className="card-text-desktop">
															Kliknij i poznaj
															matematyczną krainę
															zabawy
														</h3>
													</div>
													<div className="col-1">
														<FontAwesomeIcon
															icon={faPencil}
															size="3x"
															className="mb-2 pen-icon"
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
				</div>
			</div>
		</main>
	);
}

export default MainPage;
