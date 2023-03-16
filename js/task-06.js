const inputInMe = document.querySelector('#validation-input');
const inputLength = document.querySelector('[data-length="6"]');

inputInMe.addEventListener('blur', () => {
	if (inputInMe.value.length != inputLength.dataset.length) {
		console.log('Error');
		inputInMe.classList.add('invalid');
		inputInMe.classList.remove('valid');
	} else {
		console.log('Ok');
		inputInMe.classList.add('valid');
		inputInMe.classList.remove('invalid');
	}
});
