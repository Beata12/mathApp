import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown, faFaceSmile } from "@fortawesome/free-regular-svg-icons";

function Cube(props) {
	const meshRef = useRef();
	const [hovered, setHover] = useState(false);
	const [active, setActive] = useState(false);
	useFrame((state, delta) => (meshRef.current.rotation.x += delta));
	return (
		<mesh
			{...props}
			ref={meshRef}
			scale={active === true ? 1.5 : 1}
			onClick={(event) => setActive(!active)}
			onPointerOver={(event) => setHover(true)}
			onPointerOut={(event) => setHover(false)}
		>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
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
		/>
	));

	// Generate number options for the current question
	function generateNumberOptions(cubeCount, correctAnswer) {
		let options = [correctAnswer.toString()];
		while (options.length < 3) {
			const randomNumber = getRandomNumber(cubeCount);
			if (
				!options.includes(randomNumber.toString()) &&
				randomNumber !== correctAnswer
			) {
				options.push(randomNumber.toString());
			}
		}
		options = shuffleArray(options);
		return options;
	}

	// Generate a random number within a range
	function getRandomNumber(maxNumber) {
		return Math.floor(Math.random() * maxNumber) + 1;
	}

	// Shuffle an array using the Fisher-Yates algorithm
	function shuffleArray(array) {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	}

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
