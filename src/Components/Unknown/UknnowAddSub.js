import React, { useState } from "react";
import UnknownAdd from "./Unknown/UknnowAdd";
import UnknownSub from "./Unknown/UknnowSub";

function App() {
	const [currentMode, setCurrentMode] = useState(0); // 0 for addition, 1 for subtraction

	const toggleMode = () => {
		setCurrentMode(currentMode === 0 ? 1 : 0);
	};

	return (
		<div className="App">
			<header className="App-header">
				<h1>Math Equations</h1>
				<button onClick={toggleMode}>
					Toggle Mode:{" "}
					{currentMode === 0 ? "Addition" : "Subtraction"}
				</button>
				{currentMode === 0 ? <UnknownAdd /> : <UnknownSub />}
			</header>
		</div>
	);
}

export default App;
