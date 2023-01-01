const sketchpad = document.querySelector('.sketchpad');

function generateRandomColor()
{
  return Math.floor(Math.random() * 16777215).toString(16);
}

for(let i = 0; i < 16 * 16; i++) 
{
  const square = document.createElement('div');
  square.classList.add('square');
  sketchpad.appendChild(square);
}

const squares = document.querySelectorAll('.square');

squares.forEach(square => {
  square.addEventListener('mouseover', (div) => {
    div.currentTarget.style.backgroundColor = "#" + generateRandomColor();
  });
});