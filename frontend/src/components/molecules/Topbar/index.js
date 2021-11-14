import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "../../../components";

function Topbar() {
	const [nav, setNav] = useState([]);

	useEffect(() => {
		setNav([
			{
				name: "Home",
				path: "/",
			},
			{
				name: "About",
				path: "/post/create",
			},
			{
				name: "Post",
				path: "/post/1",
			},
		]);
	}, []);

	return (
		<Navbar collapseOnSelect bg="primary" expand="md" variant="dark" style={{ position: "fixed", left: 0, top: 0, width: "100%" }}>
			<Container>
				<Navbar.Brand>
					<Link path="/" text="MyApp" className="text-light" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ms-auto">
						{nav.map((e, index) => {
							return (
								<Nav.Link>
									<Link key={index} path={e.path} text={e.name} className="text-light" />
								</Nav.Link>
							);
						})}
						<Nav.Link as="button" className="text-light btn">
							Logout
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Topbar;
