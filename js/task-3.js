const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener('input', event => {
  const inputValue = event.currentTarget.value.trim();

  if (inputValue === '') {
    span.textContent = 'Anonymus';
  } else {
    span.textContent = inputValue;
  }
});
