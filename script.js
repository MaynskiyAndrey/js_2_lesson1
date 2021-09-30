function onLoad() {

	const goods = [
		{ title: 'Shirt', price: 150 },
		{ title: 'Socks', price: 50 },
		{ title: 'Jacket', price: 350 },
		{ title: 'Shoes', price: 250 },
	];

	console.log("!!! работает");

	//так как в функциях была тольокко ко одна строка с возвращаемыми значениями, то можно сократив убрав все лишнее, оставив только то как возвращать результат
	const renderGoodsItem = (title = 'No name', price = 0) => `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;

	//метод map возвращает массив результатов
	//при выводе запятая это часть формата вывода массива как такового
	//для устранения запятой, добавляем функцию join которая выполняет склейку массива
	const renderGoodsList = (list = []) => document.querySelector('.goods-list').innerHTML = list.map(item => renderGoodsItem(item.title, item.price)).join(' ');//{

	renderGoodsList(goods);
};