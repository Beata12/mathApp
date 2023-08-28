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
import UpTo20 from "./Addition/UpTo20";
import UpTo5 from "./Addition/UpTo5";
import UpTo10 from "./Addition/UpTo10";
import Write10 from "./Addition/UpTo10Write";
import Signs from "./GreaterSmaller/Signs";
import GrtSmlr from "./GreaterSmaller/GrtSmlr";
import EasyGreater from "./GreaterSmaller/EasyGreater";
import EasySmaller from "./GreaterSmaller/EasySmaller";
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
				<Route path="/u5" element={<UpTo5 />} />
				<Route path="/u10" element={<UpTo10 />} />
				<Route path="/w10" element={<Write10 />} />{" "}
				<Route path="/u20" element={<UpTo20 />} />
				<Route path="/sign" element={<Signs />} />
				<Route path="/sub" element={<Substraction />} />
				<Route path="/un" element={<Unknown />} />
				<Route path="/egr" element={<EasyGreater />} />
				<Route path="/esm" element={<EasySmaller />} />
				<Route path="/grsm" element={<GrtSmlr />} />
			</Routes>
			<Footer />
		</div>
	);
}
export default App;
