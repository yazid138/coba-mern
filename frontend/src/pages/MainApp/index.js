import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Post from "./Post";
import Home from "../Home";
import Page404 from "../Page404";
import { Topbar, Footer } from "../../components";
import "./MainApp.css";

function MainApp() {
	const [route, setRoute] = useState([]);

	useEffect(() => {
		setRoute([
			{
				element: <Post />,
				path: "/post/*",
			},
			{
				element: <Home />,
				path: "/",
			},
			{
				element: <Page404 />,
				path: "/*",
			},
		]);
	}, []);

	return (
		<div style={{ position: "absolute", top: 0, minHeight: "100vh", width: "100%" }}>
			<Topbar />
			<Container style={{ paddingTop: "6em", paddingBottom: "2em", minHeight: "92.7vh" }}>
				<Routes>
					{route.map((e) => (
						<Route path={e.path} element={e.element} />
					))}
				</Routes>
			</Container>
			<Footer />
		</div>
	);
}

export default MainApp;
