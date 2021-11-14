import React from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Post from "./Post";
import Home from "../Home";
import { Topbar, Footer } from "../../components";
import "./MainApp.css";

function MainApp() {
	return (
		<div style={{ position: "absolute", top: 0, minHeight: "100vh", width: "100%" }}>
			<Topbar />
			<Container style={{ paddingTop: "5em", paddingBottom: "5em" }}>
				<Routes>
					<Route path="/post/*" element={<Post />} />
					<Route path="/" element={<Home />} />
				</Routes>
			</Container>
			<Footer />
		</div>
	);
}

export default MainApp;
