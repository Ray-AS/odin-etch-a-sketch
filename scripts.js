let dimensions;
let currentChoice = 'random';
const sketchpadDimensions = 750;

const sketchpad = document.querySelector('.sketchpad');
const buttons = document.querySelectorAll('button');

function createGrid(dimensions = 10) // Set default dimensions to 10 prior to user decision
{
  let squareSize = (sketchpadDimensions / dimensions);

  // Create square to fill the dimensions; CSS will make the squares wrap when they reach the end of the pad
  for(let i = 0; i < Math.pow(dimensions, 2); i++)
  {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    sketchpad.appendChild(square);
  }

  // Select and listen for events on the created squares
  const squares = document.querySelectorAll('.square');
  squares.forEach(square => {
    square.addEventListener('mouseover', div => drawSquare(div));
  })
}

const setDimensions = function()
{
  // Clear sketchpad
  sketchpad.innerHTML = '';

  // Repeat till user enters valid dimensions
  do
  {
    dimensions = parseInt(prompt("Enter dimensions [1 - 100]"));
  }
  while(!dimensions || dimensions < 1 || dimensions > 100);

  createGrid(dimensions);
}

function drawSquare(square)
{
  square.currentTarget.style.backgroundColor = '#' + getColor(currentChoice);
}

function getColor(color)
{
  switch(color)
  {
    case 'random':
      return Math.floor(Math.random() * 16777215).toString(16);
    case 'red':
      return 'ff0000';
    case 'green':
      return '00ff00';
    case 'blue':
      return '0000ff';
    default:
      return 'ffffff';
  }
}

const changeColor = function(color)
{
  currentChoice = color;
}

const clearPad = function()
{
  sketchpad.innerHTML = '';
  createGrid(dimensions);
}

// Assign relevant functions to based on each button id
const actions = 
{
  'grid-dimensions': setDimensions,
  'random': changeColor,
  'red': changeColor,
  'green': changeColor,
  'blue': changeColor,
  'eraser': changeColor,
  'clear': clearPad
};

function determineAction(button)
{
  let choice = button.currentTarget.getAttribute('id');

  // Use the button id to call the relevant function, passing arguments if needed
  if(choice == 'grid-dimensions' || choice == 'clear')
    actions[choice]();
  else
    actions[choice](choice);
}

buttons.forEach(button => {
  button.addEventListener('click', (btn) => determineAction(btn));
});

// Create default starting grid
createGrid();