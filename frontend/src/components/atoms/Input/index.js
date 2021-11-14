import React from "react";
import { Form } from "react-bootstrap";

function Input({ label, type = "text", placeholder = "", ...rest }) {
	return (
		<Form.Group className="my-2" controlId={label}>
			<Form.Label>{label}</Form.Label>
			<Form.Control type={type} placeholder={placeholder} {...rest} />
		</Form.Group>
	);
}

export default Input;
