module.exports = {
	all: async (req, res) => {
		try {
			const mahasiswaSeed = await require("../../db/seeders/mahasiswa.seeder");
			if (mahasiswaSeed) {
				res.json({
					code: 200,
					message: "get data mahasiswa success",
					data: mahasiswaSeed,
					error: false,
				});
			}
		} catch (error) {
			res.status(400).json({
				code: 400,
				message: "get data mahasiswa error",
				error: false,
			});
		}
	},
	one: async (req, res) => {
		const id = req.params.id;
		try {
			const mahasiswaSeed = await require("../../db/seeders/mahasiswa.seeder");
			const tempData = mahasiswaSeed.find((e) => e.id === parseInt(id));
			if (tempData) {
				res.json({
					code: 200,
					message: "get data mahasiswa success",
					data: tempData,
					error: false,
				});
			} else {
				res.status(404).json({
					code: 404,
					message: "get data mahasiswa not found",
					error: true,
				});
			}
		} catch (error) {
			res.status(400).json({
				code: 400,
				message: "get data mahasiswa error",
				error: false,
			});
		}
	},
};
