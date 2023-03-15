let inputInMe = document.querySelector('#name-input');
let checkWhatInside = document.querySelector('#name-output');

inputInMe.addEventListener('input', () => {
	if (inputInMe.value !== '') {
		checkWhatInside.textContent = inputInMe.value;
	} else {
		checkWhatInside.textContent = 'Anonymous';
	}
});
