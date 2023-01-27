// ------------- Массив с данными карточек услуг -------------
// ! Можно добавлять и удалять сколько угодно карточек услуг с различными данными

const services = [
	{
		id: 1,
		vip: false, // вкл/выкл синий цвет у карточек (назвал это vip-услугой :D)
		category: "Category | Marketing", // Категория услуги
		author: "Adam Sandler", // Автор услуги
		title: "Solutions for people like you like people", // Название услуги
		description: "How can we help your technology and services business develop a revenue engine based ", // Описание услуги
		background: "#D3D8E4", // Цвет фона услуги при отсутствии изображения
		image: "", // Относительный путь к файлу изображения в папке public
	},
	{
		id: 2,
		vip: false,
		category: "Category",
		author: "Adam Sandler",
		title: "Solutions for people like you like people",
		description: "How can we help your technology and services business develop a revenue engine based",
		background: "#010101",
		image: "./images/category2.jpg", // Относительный путь к файлу изображения в папке public
	},
	{
		id: 3,
		vip: true,
		category: "Category | Development",
		author: "Adam Sandler",
		title: "Solutions for people like",
		description: "How can we help your technology and services business develop a revenue engine based",
		background: "#FF779A",
		image: "",
	},
	{
		id: 4,
		vip: true,
		category: "Category | Marketing",
		author: "Adam Sandler",
		title: "Solutions for people like you like people",
		description: "How can we help your technology and services business develop a revenue engine based",
		background: "#00B6DD",
		image: "",
	},
	{
		id: 5,
		vip: false,
		category: "Category | Marketing",
		author: "Adam Sandler",
		title: "Solutions for people like",
		description: "How can we help your technology and services business develop a revenue engine based",
		background: "#010101",
		image: "./images/category5.jpg",
	},
	{
		id: 6,
		vip: true,
		category: "Category",
		author: "Adam Sandler",
		title: "Solutions for people like you like people",
		description: "How can we help your technology and services business develop a revenue engine based",
		background: "#D3D8E4",
		image: "",
	},
]

export default services;