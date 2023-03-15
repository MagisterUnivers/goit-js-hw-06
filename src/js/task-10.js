function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

const mainDiv = document.querySelector('#boxes');
const walkieDiv = document.querySelector('div');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const howMany = document.querySelector('input');

let boxesSize = 20;

function createBoxes(amount) {
	for (let i = 0; i < amount; i++) {
		boxesSize += 10;
		const wantSomeDiv = document.createElement('div');
		wantSomeDiv.style.width = `${boxesSize}px`;
		wantSomeDiv.style.height = `${boxesSize}px`;

		wantSomeDiv.style.border = '5px solid black';
		wantSomeDiv.style.marginBottom = '5px';
		wantSomeDiv.style.backgroundColor = getRandomHexColor();
		mainDiv.appendChild(wantSomeDiv);
	}
}

function destroyBoxes() {
	mainDiv.innerHTML = '';
	boxesSize = 20;
	howMany.value = '';
}

btnCreate.addEventListener('click', () => {
	createBoxes(howMany.value);
});

btnDestroy.addEventListener('click', destroyBoxes);
