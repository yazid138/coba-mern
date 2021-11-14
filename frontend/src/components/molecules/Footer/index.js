import React from "react";
import { Container, Row, Col, Stack } from "react-bootstrap";

function Footer() {
	return (
		<Container fluid as="footer" className="text-light" style={{ position: "fixed", bottom: 0, left: 0, width: "100%" }}>
			<Row className="bg-dark">
				<Col>
					<Stack direction="horizontal" className="container" gap={3}>
						<div>First item</div>
						<div className="ms-auto">Second item</div>
					</Stack>
				</Col>
			</Row>
			<Row className="bg-primary">
				<Col className="text-center">
					<p className="mb-0">Make with ❤ 2021</p>
				</Col>
			</Row>
		</Container>
	);
}

export default Footer;
