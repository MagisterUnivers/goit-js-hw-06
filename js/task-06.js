const inputInMe = document.querySelector('#validation-input');
const inputLength = document.querySelector('[data-length="6"]');

inputInMe.addEventListener('blur', () => {
	if (inputInMe.value.length > inputLength.dataset.length) {
		console.log('Error');
		inputInMe.classList.toggle('invalid');
	} else {
		console.log('Ok');
		inputInMe.classList.toggle('valid');
	}
});
