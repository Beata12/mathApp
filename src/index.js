import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./css/index.css";
import "./css/dzialy.css";
import "./css/main.css";
import "./css/styles.css";
import "./css/num-easy.css";
import "./css/learn.css";
import "./css/compare.css";
import "./css/substraction.css";
import reportWebVitals from "./reportWebVitals";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "font-awesome/css/font-awesome.css";

import App from "./Components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<div className="blackboard-main-desktop">
				<App />
			</div>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
