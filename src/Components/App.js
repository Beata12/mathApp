import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Dzialy from "./Dzialy";
import Numbs from "./LearnNumbs/Numbs";
import Numbslearn from "./LearnNumbs/Numbslearn";
import Numbseasy from "./LearnNumbs/Numbseasy";
import Numbshard from "./LearnNumbs/Numbshard";
import Numbslisten from "./LearnNumbs/Numbslisten";
import Comparison from "./GreaterSmaller/Comparison";
import Addition from "./Addition/Addition";
import Signs from "./GreaterSmaller/Signs";
import Substraction from "./Substraction/Substraction";
import Unknown from "../Unknown";
import { useEffect } from "react";
import AOS from "aos";
import React from "react";

function App() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div className="App">
			<Navigation />
			<Routes>
				<Route path="/" element={<Dzialy />} />
				<Route path="/num" element={<Numbs />} />
				<Route path="/numlearn" element={<Numbslearn />} />
				<Route path="/nume" element={<Numbseasy />} />
				<Route path="/numh" element={<Numbshard />} />
				<Route path="/numl" element={<Numbslisten />} />
				<Route path="/comp" element={<Comparison />} />
				<Route path="/add" element={<Addition />} />
				<Route path="/sign" element={<Signs />} />
				<Route path="/sub" element={<Substraction />} />
				<Route path="/un" element={<Unknown />} />
			</Routes>
			<Footer />
		</div>
	);
}
export default App;
