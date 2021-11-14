import CreatePost from "./CreatePost";
import DetailPost from "./DetailPost";
import { Routes, Route } from "react-router-dom";

import React from "react";

function Post() {
	return (
		<Routes>
			<Route index element={<CreatePost />} />
			<Route path="/create" element={<CreatePost />} />
			<Route path="/:id" element={<DetailPost />} />
		</Routes>
	);
}

export default Post;
