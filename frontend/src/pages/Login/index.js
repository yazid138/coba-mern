import React from "react";
import { Container, Row, Col, Image, Form } from "react-bootstrap";
import { LoginBg } from "../../assets";
import { Input, Button, Link } from "../../components";

import "../Register/register.css";

const Login = () => {
	return (
		<Container
			fluid
			style={{
				paddingLeft: 0,
			}}
		>
			<Row className="main-page">
				<Col className="d-lg-flex align-items-center d-none">
					<Image src={LoginBg} fluid className="image" />
				</Col>
				<Col lg={4} className="d-flex align-items-center">
					<Container>
						<Row className="my-lg-3 mt-md-5 text-center">
							<h2>
								<strong>LOGIN</strong>
							</h2>
						</Row>
						<Row>
							<Form>
								<Input label="Email" placeholder="Enter your Email" type="email" />
								<Input label="Password" type="password" placeholder="Enter your password" />
								<Button label="Login" full={true} />
								<Link text="Create an Account!" path="/register" className="text-dark" />
							</Form>
						</Row>
					</Container>
				</Col>
			</Row>
		</Container>
	);
};

export default Login;
