import React, { useRef, useState, useEffect } from "react";
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
	const [showEmoji, setShowEmoji] = useState(false);
	const [cubes, setCubes] = useState([]);
	const [points, setPoints] = useState(0); // Dodaj licznik punktów

	const numRows = Math.ceil(randomCubeCount / 5);
	const numColumns = Math.min(randomCubeCount, 5);

	const removeCubes = () => {
		setCubes([]);
	};

	const generateCubes = () => {
		const newCubes = [];
		for (let row = 0; row < numRows; row++) {
			for (let col = 0; col < numColumns; col++) {
				const index = row * 5 + col;
				if (index < randomCubeCount) {
					newCubes.push(
						<Cube
							key={index}
							position={[
								col * spacing -
									(numColumns - 1) * spacing * 0.5,
								row * spacing,
								0,
							]}
						/>
					);
				}
			}
		}
		setCubes(newCubes);
	};

	useEffect(() => {
		generateCubes();
	}, [randomCubeCount]);

	const generateNumberOptions = (cubeCount, correctAnswer) => {
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
	};

	const getRandomNumber = (maxNumber) => {
		return Math.floor(Math.random() * maxNumber) + 1;
	};

	const shuffleArray = (array) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	};

	const handleNumberClick = (selectedNumber) => {
		if (selectedNumber === randomCubeCount.toString()) {
			setIsCorrect(true);
			setPoints(points + 1); // Zwiększ punkty o 1
		} else {
			setIsCorrect(false);
		}
		setShowEmoji(true);
		setTimeout(() => {
			setShowEmoji(false);
			const newRandomCubeCount = Math.floor(Math.random() * 10) + 1;
			setCurrentQuestion(currentQuestion + 1);
			setRandomCubeCount(newRandomCubeCount);
			removeCubes();
			generateCubes();
		}, 2000);
	};

	const numberOptions = generateNumberOptions(
		randomCubeCount,
		randomCubeCount
	);

	return (
		<main className="main-dzialy">
			<div className="dzialy-mobile">
				<div className="d-flex justify-content-center align-items-center">
					<ul className="text-center">
						<li className="header-mobile">Poziom łatwy</li>
						<div className="dobre-zle">
							{showEmoji && isCorrect === true ? (
								<FontAwesomeIcon icon={faFaceSmile} />
							) : showEmoji && isCorrect === false ? (
								<FontAwesomeIcon icon={faFaceFrown} />
							) : (
								<></>
							)}
						</div>

						<Canvas
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
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
						<div>
							<p className="list-mobile">
								Punkty: {points} są do stylizacji
							</p>
						</div>
						<Link style={{ textDecoration: "none" }} to="/num">
							<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
								Wybierz inny lewel
							</li>
						</Link>
						<Link style={{ textDecoration: "none" }} to="/">
							<li className="answer-box-mobile d-flex align-items-center justify-content-center choose-level-mobile">
								Powrót do menu
							</li>
						</Link>
					</ul>
				</div>
			</div>
		</main>
	);
}

export default Numberseasy;
