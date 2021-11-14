require("dotenv").config();
const express = require("express");
const app = express();

app.use(require("morgan")("dev"));
app.use(require("cors")());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.json({
		code: 200,
		message: "Success access Api",
		error: false,
	});
});

const routes = require("./app/routes");
routes.forEach((e) => {
	require(`./app/routes/${e}.routes`)(app);
});

app.use((req, res) => {
	res.json({
		code: 404,
		message: "Page Not Found!",
		error: true,
	});
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
	console.log(`Berjalan pada port: ${PORT}`);
});






