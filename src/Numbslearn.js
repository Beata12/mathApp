import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown, faFaceSmile } from "@fortawesome/free-regular-svg-icons";

function Cube(props) {
	const meshRef = useRef();
	useFrame((state, delta) => (meshRef.current.rotation.x += delta));
	return (
		<mesh
			{...props}
			ref={meshRef}
			onClick={props.onClick} // Pass onClick event handler
		>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial
				color={props.hovered ? "hotpink" : "orange"}
			/>
		</mesh>
	);
}

function Numberseasy() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [isCorrect, setIsCorrect] = useState(false);
	const [randomCubeCount, setRandomCubeCount] = useState(
		Math.floor(Math.random() * 10) + 1
	);
	const spacing = 2;

	const cubes = Array.from({ length: randomCubeCount }).map((_, index) => (
		<Cube
			key={index}
			position={[
				index * spacing - (randomCubeCount - 1) * spacing * 0.5,
				0,
				0,
			]}
			hovered={false} // Initialize hovered state
			onClick={() => handleNumberClick(randomCubeCount.toString())}
		/>
	));

	// Generate number options for the current question
	function generateNumberOptions(cubeCount, correctAnswer) {
		// ... your existing code ...
	}

	// ... your existing functions ...

	// Handle click on number option
	function handleNumberClick(selectedNumber) {
		if (selectedNumber === randomCubeCount.toString()) {
			setIsCorrect(true);
			setTimeout(() => {
				setIsCorrect(false);
				const newRandomCubeCount = Math.floor(Math.random() * 10) + 1;
				setCurrentQuestion(currentQuestion + 1);
				setRandomCubeCount(newRandomCubeCount);
			}, 2000);
		} else {
			setIsCorrect(false);
			// Handle incorrect answer if needed...
		}
	}

	const numberOptions = generateNumberOptions(
		randomCubeCount,
		randomCubeCount
	);

	return (
		<main className="main-dzialy">
			<div className="dzialy-mobile">
				<div className="d-flex justify-content-center align-items-center">
					<ul className="text-center">
						<li className="list">Poziom łatwy</li>
						<div className="dobre-zle">
							{isCorrect ? (
								<FontAwesomeIcon icon={faFaceSmile} />
							) : (
								<FontAwesomeIcon icon={faFaceFrown} />
							)}
						</div>
						<Canvas>
							<ambientLight />
							<pointLight position={[10, 10, 10]} />
							{cubes}
						</Canvas>
						<div className="container">
							<div className="row">
								{numberOptions.map((number, index) => (
									<div
										key={index}
										className="col-4"
										onClick={() =>
											handleNumberClick(number)
										}
									>
										{number}
									</div>
								))}
							</div>
						</div>
						{isCorrect && (
							<div className="correct-answer">
								Poprawna odpowiedź! Przechodzisz do następnego
								pytania.
							</div>
						)}
						<Link to="/num">
							<li className="list">Wybierz inny lewel</li>
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

export default Numberseasy;
