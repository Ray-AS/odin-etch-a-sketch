const sketchpad = document.querySelector('.sketchpad');

function generateRandomColor()
{
  return Math.floor(Math.random() * 256);
}

for(let i = 0; i < 16 * 16; i++) 
{
  const square = document.createElement('div');
  square.classList.add('square');
  sketchpad.appendChild(square);
}

