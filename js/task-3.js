const input = document.querySelector('input#name-input');
const nameOutput = document.querySelector('span#name-output');

input.addEventListener(
  'input',
  e => (nameOutput.textContent = e.currentTarget.value.trim() || 'Anonymous')
);
