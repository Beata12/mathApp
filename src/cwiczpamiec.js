import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei"; // Import komponentu Text

function Cube(props) {
	const meshRef = useRef();
	const [hovered, setHover] = useState(false);
	const [active, setActive] = useState(false);
	useFrame((state, delta) => (meshRef.current.rotation.x += delta));

	const randomDigit = Math.floor(Math.random() * 10);

	return (
		<mesh
			{...props}
			ref={meshRef}
			scale={active === true ? 1.5 : 1}
			onClick={(event) => handleCubeClick(randomDigit, setActive)}
			onPointerOver={(event) => setHover(true)}
			onPointerOut={(event) => setHover(false)}
		>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
			{/* Wykorzystaj komponent Text do wyświetlenia cyfry na kostce */}
			<Text
				position={[0, 0, 0.6]}
				color="white"
				fontSize={0.5}
				anchorX="center"
				anchorY="middle"
			>
				{randomDigit.toString()}
			</Text>
		</mesh>
	);
}

function Numberseasy() {
	const randomCubeCount = Math.floor(Math.random() * 10) + 1;
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

	return (
		<main className="main-dzialy">
			<div className="dzialy-mobile">
				<div className="d-flex justify-content-center align-items-center">
					<ul className="text-center">
						<li className="list">Poziom łatwy</li>
						<Canvas>
							<ambientLight />
							<pointLight position={[10, 10, 10]} />
							{cubes}
						</Canvas>
						<div className="container">
							<div className="row">
								<div className="col-4">1</div>
								<div className="col-4">3</div>
								<div className="col-4">5</div>
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

// Funkcja obsługująca kliknięcie kostki
function handleCubeClick(selectedDigit, setActive) {
	// Pobierz wybraną cyfrę przez gracza
	const clickedDigit = parseInt(prompt("Wybierz cyfrę na kostce:"));

	// Sprawdź, czy wybrana cyfra jest poprawna
	if (clickedDigit === selectedDigit) {
		alert("Poprawna odpowiedź!");
		// Zwiększ punktację lub podejmij inne działania
		// ...
	} else {
		alert(`Zła odpowiedź! Poprawna cyfra to ${selectedDigit}.`);
		// Wyświetl poprawną odpowiedź i podejmij inne działania
		// ...
	}

	// Wyłącz aktywny stan kostki
	setActive(false);
}

// Opcje dla komponentu TextGeometry (niezbędne do wyświetlenia cyfr)
const textOptions = {
	font: "Arial",
	size: 0.5,
	height: 0.1,
};
