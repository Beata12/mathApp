import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Dzialy from "./Dzialy";
import MainPage from "./MainPage";
import InfoPage from "./InfoPage";
import Numbs from "./LearnNumbs/Numbs";
import Numbslearn from "./LearnNumbs/Numbslearn";
import Numbseasy from "./LearnNumbs/Numbseasy";
import Numbmidium from "./LearnNumbs/Numbmidium";
import Numbshard from "./LearnNumbs/Numbshard";
import Numbslisten from "./LearnNumbs/Numbslisten";
import Comparison from "./GreaterSmaller/Comparison";
import Addition from "./Addition/Addition";
import UpTo20 from "./Addition/UpTo20";
import UpTo5 from "./Addition/UpTo5";
import UpTo5Easy from "./Addition/UpTo5Easy";
import UpTo10 from "./Addition/UpTo10";
import UpTo10Easy from "./Addition/UpTo10Easy";
import Write10 from "./Addition/UpTo10Write";
import Write20 from "./Addition/UpTo20Write";
import Signs from "./GreaterSmaller/Signs";
import GrtSmlr from "./GreaterSmaller/GrtSmlr";
import EasyGreater from "./GreaterSmaller/EasyGreater";
import HardGreater from "./GreaterSmaller/HardGreater";
import EasySmaller from "./GreaterSmaller/EasySmaller";
import HardSmaller from "./GreaterSmaller/HardSmaller";
import Examples from "./GreaterSmaller/Examples";
import Substraction from "./Substraction/Substraction";
import SubTo5E from "./Substraction/SubTo5E";
import SubTo5 from "./Substraction/SubTo5";
import SubTo10E from "./Substraction/SubTo10E";
import SubTo10 from "./Substraction/SubTo10";
import SubTo10Write from "./Substraction/SubTo10Write";
import SubTo20 from "./Substraction/SubTo20";
import SubTo20Write from "./Substraction/SubTo20Write";
import Unknown from "./Unknown/Unknown";
import UnknownAdd from "./Unknown/UknnowAdd";
import UnknownAddEasy from "./Unknown/UknnowAddEasy";
import UnknownSub from "./Unknown/UknnowSub";
import UnknownSubEasy from "./Unknown/UknnowSubEasy";
import UnknownAddSub from "./Unknown/UknnowAddSub";
import { useEffect } from "react";
import AOS from "aos";
import React from "react";

function App() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<div className="App container text-center scroll">
			<Navigation />
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/info" element={<InfoPage />} />
				<Route path="/dz" element={<Dzialy />} />
				<Route path="/dz/num" element={<Numbs />} />
				<Route path="/num" element={<Numbs />} />
				<Route path="/numlearn" element={<Numbslearn />} />
				<Route path="/nume" element={<Numbseasy />} />
				<Route path="/numm" element={<Numbmidium />} />
				<Route path="/numh" element={<Numbshard />} />
				<Route path="/numl" element={<Numbslisten />} />
				<Route path="/dz/comp" element={<Comparison />} />
				<Route path="/comp" element={<Comparison />} />
				<Route path="/dz/add" element={<Addition />} />
				<Route path="/add" element={<Addition />} />
				<Route path="/u5" element={<UpTo5 />} />
				<Route path="/u5e" element={<UpTo5Easy />} />
				<Route path="/u10" element={<UpTo10 />} />
				<Route path="/u10e" element={<UpTo10Easy />} />
				<Route path="/w10" element={<Write10 />} />
				<Route path="/u20" element={<UpTo20 />} />
				<Route path="/w20" element={<Write20 />} />
				<Route path="/dz/sign" element={<Signs />} />
				<Route path="/sign" element={<Signs />} />
				<Route path="/dz/sub" element={<Substraction />} />
				<Route path="/sub" element={<Substraction />} />
				<Route path="/o5e" element={<SubTo5E />} />
				<Route path="/o5" element={<SubTo5 />} />
				<Route path="/o10e" element={<SubTo10E />} />
				<Route path="/o10" element={<SubTo10 />} />
				<Route path="/ow10" element={<SubTo10Write />} />
				<Route path="/o20" element={<SubTo20 />} />
				<Route path="/ow20" element={<SubTo20Write />} />
				<Route path="/dz/un" element={<Unknown />} />
				<Route path="/un" element={<Unknown />} />
				<Route path="/una" element={<UnknownAdd />} />
				<Route path="/unae" element={<UnknownAddEasy />} />
				<Route path="/uns" element={<UnknownSub />} />
				<Route path="/unse" element={<UnknownSubEasy />} />
				<Route path="/unas" element={<UnknownAddSub />} />
				<Route path="/egr" element={<EasyGreater />} />
				<Route path="/hgr" element={<HardGreater />} />
				<Route path="/esm" element={<EasySmaller />} />
				<Route path="/hsm" element={<HardSmaller />} />
				<Route path="/grsm" element={<GrtSmlr />} />
				<Route path="/eg" element={<Examples />} />
			</Routes>
			<Footer />
		</div>
	);
}
export default App;
