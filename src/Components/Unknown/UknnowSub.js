import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function UnknownSubtract() {
	const [result, setResult] = useState(null);
	const [correctAnswer, setCorrectAnswer] = useState(null);
	const [choices, setChoices] = useState([]);
	const [answered, setAnswered] = useState(false);
	const [answeredCorrectly, setAnsweredCorrectly] = useState(false);

	const random1 = () => Math.floor(Math.random() * 11); // 0 to 10
	const random2 = () => Math.floor(Math.random() * 11);

	const generateNewEquation = () => {
		let num1, num2, correctResult;
		do {
			num1 = random1();
			num2 = random2();
			correctResult = num1 - num2;
		} while (correctResult < 0);

		const possibleChoices = [correctResult];
		while (possibleChoices.length < 3) {
			const randomChoice = Math.floor(Math.random() * 11); // 0 to 10
			if (!possibleChoices.includes(randomChoice)) {
				possibleChoices.push(randomChoice);
			}
		}

		possibleChoices.sort(() => Math.random() - 0.5); // Shuffle the choices

		setResult(`${num1} - X = ${num2}`);
		setCorrectAnswer(correctResult);
		setChoices(possibleChoices);
		setAnswered(false);
		setAnsweredCorrectly(false);
	};

	const handleChoiceClick = (choice) => {
		if (choice === correctAnswer) {
			setAnsweredCorrectly(true);
		}
		setAnswered(true);
	};

	const handleNextQuestion = () => {
		generateNewEquation();
	};

	useEffect(() => {
		generateNewEquation();
	}, []);

	return (
		<main className="main-dzialy">
			<div className="dzialy-mobile">
				<div className="d-flex justify-content-center align-items-center">
					<ul className="text-center">
						<li key="equation">
							<div>
								<h1>Rozwiązanie</h1>
								<p>{result}</p>
								{choices.map((choice, index) => (
									<button
										key={index}
										onClick={() =>
											handleChoiceClick(choice)
										}
										disabled={answered}
									>
										{choice}
									</button>
								))}
								{answered && (
									<div>
										{answeredCorrectly ? (
											<p>Poprawna odpowiedź!</p>
										) : (
											<p>Niepoprawna odpowiedź.</p>
										)}
										<button onClick={handleNextQuestion}>
											Następne pytanie
										</button>
									</div>
								)}
							</div>
						</li>
						<li key="back">
							<Link to="/">Wróć</Link>
						</li>
					</ul>
				</div>
			</div>
		</main>
	);
}

export default UnknownSubtract;
