import React from "react";
import { BrowserRouter as Router, Routes as Rts, Route } from "react-router-dom";
import { Login, Register, MainApp } from "../../pages";

function Routes() {
	return (
		<Router>
			<Rts>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/*" element={<MainApp />} />
			</Rts>
		</Router>
	);
}

export default Routes;
