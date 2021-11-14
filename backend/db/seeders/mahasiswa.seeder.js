module.exports = new Promise((resolve, reject) => {
	resolve([
		{
			id: 1,
			nama: "Ma'isy Yazid I",
			nim: "6707202014",
			kelas: "44-01",
			jurusan: "D3 RPLA",
		},
		{
			id: 2,
			nama: "Nurul Qofifah Audyningrum",
			nim: "6707202013",
			kelas: "44-01",
			jurusan: "D3 SIA",
		},
		{
			id: 3,
			nama: "Arief Yusuf Winata",
			nim: "6707201024",
			kelas: "44-01",
			jurusan: "D3 Tektel",
		},
		{
			id: 4,
			nama: "Wanda Aprianingrum",
			nim: "6707201035",
			kelas: "44-01",
			jurusan: "D4 Multimedia",
		},
	]);
	reject("error");
});
