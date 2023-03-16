const dragMe = document.querySelector('#font-size-control');
const camelCase = document.querySelector('#text');

camelCase.style.fontSize = `56px`;

dragMe.addEventListener('input', () => {
	camelCase.style.fontSize = `${dragMe.value}px`;
	console.log(dragMe.value);
});
