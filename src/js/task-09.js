function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector('.change-color');
const textColor = document.querySelector('.color');

btnChangeColor.addEventListener('click', (event) => {
	document.getElementsByTagName('body')[0].style.backgroundColor =
		getRandomHexColor();

	textColor.innerHTML = getRandomHexColor();
});
