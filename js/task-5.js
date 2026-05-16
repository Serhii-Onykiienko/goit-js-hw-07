function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = document.querySelector('.change-color');
const textSpan = document.querySelector('.color');

changeColor.addEventListener('click', event => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  textSpan.textContent = color;
});
