const formLevel = document.querySelector('.login-form');
const btnGoOut = document.querySelector('button');

formLevel.addEventListener('submit', (event) => {
	event.preventDefault();

	const {
		elements: { email, password }
	} = event.currentTarget;

	if (email.value === '' || password.value === '') {
		alert('All fields must be fulfilled.');
		return;
	}

	const formData = {
		[email.name]: email.value,
		[password.name]: password.value
	};
	console.log(formData);

	event.currentTarget.reset();
});
