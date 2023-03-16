const increase = document.querySelector(`[data-action="increment"]`);
const decrease = document.querySelector(`[data-action="decrement"]`);
let value = document.querySelector(`#value`);
let counterValue = 0;

increase.addEventListener('click', () => {
	counterValue++;
	value.textContent = counterValue;
});

decrease.addEventListener('click', () => {
	counterValue--;
	value.textContent = counterValue;
});
