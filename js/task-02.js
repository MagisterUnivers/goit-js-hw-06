const ingredients = [
	'Potatoes',
	'Mushrooms',
	'Garlic',
	'Tomatos',
	'Herbs',
	'Condiments'
];

const list = document.querySelector('ul');

const zomboidFarm = ingredients.map((something) => {
	let lishka = document.createElement('li');
	lishka.textContent = something;
	lishka.classList.add('item');
	return lishka;
});

list.append(...zomboidFarm);

console.log(list);
