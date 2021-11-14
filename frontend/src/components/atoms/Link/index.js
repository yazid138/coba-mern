import React from "react";
import { Link } from "react-router-dom";

function index({ text, path, className = "", ...rest }) {
	return (
		<Link to={path} className={"text-decoration-none " + className} {...rest}>
			{text}
		</Link>
	);
}

export default index;
