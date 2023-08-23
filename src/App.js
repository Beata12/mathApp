import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Dzialy from "./Dzialy";
import Numbs from "./Numbs";
import Numbseasy from "./Numbseasy";
import Numbshard from "./Numbshard";
import Numbslisten from "./Numbslisten";
import Comparison from "./Comparison";
import Addition from "./Addition";
import Signs from "./Signs";
import Substraction from "./Substraction";
import Unknown from "./Unknown";
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
