import React from "react";
import { Button } from "react-bootstrap";

function index({ label, type = "button", full = false, ...rest }) {
	if (full) {
		return (
			<div class="d-grid gap-2">
				<Button className="my-3" type={type} {...rest}>
					{label}
				</Button>
			</div>
		);
	} else {
		return (
			<Button className="my-3" type={type} {...rest}>
				{label}
			</Button>
		);
	}
}

export default index;
