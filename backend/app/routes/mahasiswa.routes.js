const router = require("express").Router();
const { mahasiswa } = require("../controllers");

module.exports = (app) => {
	router.get("/", mahasiswa.all);
	router.get("/:id", mahasiswa.one);

	app.use("/api/v1/mahasiswa", router);
};
