import React from "react";
import { Container, Row, Col, Image, Form } from "react-bootstrap";
import { RegisterBg } from "../../assets";
import { Input, Button, Link } from "../../components";

import "./register.css";

function Register() {
	return (
		<Container
			fluid
			style={{
				paddingLeft: 0,
			}}
		>
			<Row className="main-page">
				<Col className="d-lg-flex align-items-center d-none">
					<Image src={RegisterBg} fluid className="image" />
				</Col>
				<Col lg={4} className="d-flex align-items-center">
					<Container>
						<Row className="my-lg-3 mt-md-5 text-center">
							<h2>
								<strong>REGISTER</strong>
							</h2>
						</Row>
						<Row>
							<Form>
								<Input label="Full Name" placeholder="Jhon Michel" />
								<Input label="Email" placeholder="human@example.com" type="email" />
								<Input label="Password" type="password" placeholder="Enter your password" />
								<Button label="Register" full={true} />
								<Link text="Back to Login!" path="/login" className="text-dark" />
							</Form>
						</Row>
					</Container>
				</Col>
			</Row>
		</Container>
	);
}

export default Register;
