import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { RegisterBg } from "../../assets";

function Home() {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		setArticles([
			{
				title: "Lorem ipsum dolor sit amet.",
				author: "Yazid",
				time: "1 minutes ago",
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero maxime praesentium consequuntur distinctio labore, debitis sapiente illo totam officia incidunt unde nisi voluptatibus nulla rem magnam consequatur fugit esse non facilis? Dolorem suscipit consequuntur iste dolores. Explicabo incidunt dolores id voluptatibus aliquam quos, porro reprehenderit ab consequuntur animi enim quisquam.",
			},
			{
				title: "Lorem ipsum dolor sit amet.",
				author: "Yazid",
				time: "1 minutes ago",
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero maxime praesentium consequuntur distinctio labore, debitis sapiente illo totam officia incidunt unde nisi voluptatibus nulla rem magnam consequatur fugit esse non facilis? Dolorem suscipit consequuntur iste dolores. Explicabo incidunt dolores id voluptatibus aliquam quos, porro reprehenderit ab consequuntur animi enim quisquam.",
			},
			{
				title: "Lorem ipsum dolor sit amet.",
				author: "Yazid",
				time: "1 minutes ago",
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero maxime praesentium consequuntur distinctio labore, debitis sapiente illo totam officia incidunt unde nisi voluptatibus nulla rem magnam consequatur fugit esse non facilis? Dolorem suscipit consequuntur iste dolores. Explicabo incidunt dolores id voluptatibus aliquam quos, porro reprehenderit ab consequuntur animi enim quisquam.",
			},
			{
				title: "Lorem ipsum dolor sit amet.",
				author: "Yazid",
				time: "1 minutes ago",
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero maxime praesentium consequuntur distinctio labore, debitis sapiente illo totam officia incidunt unde nisi voluptatibus nulla rem magnam consequatur fugit esse non facilis? Dolorem suscipit consequuntur iste dolores. Explicabo incidunt dolores id voluptatibus aliquam quos, porro reprehenderit ab consequuntur animi enim quisquam.",
			},
			{
				title: "Lorem ipsum dolor sit amet.",
				author: "Yazid",
				time: "1 minutes ago",
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero maxime praesentium consequuntur distinctio labore, debitis sapiente illo totam officia incidunt unde nisi voluptatibus nulla rem magnam consequatur fugit esse non facilis? Dolorem suscipit consequuntur iste dolores. Explicabo incidunt dolores id voluptatibus aliquam quos, porro reprehenderit ab consequuntur animi enim quisquam.",
			},
			{
				title: "Lorem ipsum dolor sit amet.",
				author: "Yazid",
				time: "1 minutes ago",
				description:
					"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero maxime praesentium consequuntur distinctio labore, debitis sapiente illo totam officia incidunt unde nisi voluptatibus nulla rem magnam consequatur fugit esse non facilis? Dolorem suscipit consequuntur iste dolores. Explicabo incidunt dolores id voluptatibus aliquam quos, porro reprehenderit ab consequuntur animi enim quisquam.",
			},
		]);
	}, []);

	return (
		<Container>
			<Row>
				<Col className="ms-auto">
					<Button>Add Post</Button>
				</Col>
			</Row>
			<Row>
				{articles.map((e, index) => (
					<Col md={6} className="mt-3">
						<Card style={{ width: "100%" }}>
							<Card.Img variant="top" src={RegisterBg} />
							<Card.Body>
								<Card.Title>{e.title}</Card.Title>
								<Card.Text>
									{e.author} - {e.time}
								</Card.Text>
								<Card.Text>{e.description}</Card.Text>
								<Button key={index} variant="primary">
									Read More
								</Button>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
}

export default Home;
