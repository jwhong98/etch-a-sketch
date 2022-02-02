const body = document.querySelector('body')
let dimensions = 16; //default value

const createGrid = (size) => {
    const container = document.createElement('div');
    container.classList.add('container');
    body.appendChild(container);
    const totalSize = size * size;
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for(let i = 0; i < totalSize; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
    const squares = document.querySelectorAll('.square');

    squares.forEach((square) => {
        square.addEventListener('mouseover', (e) => {
            e.target.classList.add('hover')
        })
    })
}

const button = document.querySelector('button');

button.addEventListener('click', () => {
    const squares = document.querySelectorAll('.square')
    squares.forEach((square) => {
        square.classList.remove('hover')
    })
    const container = document.querySelector('.container')
    let inputSize = userPrompt();
    body.removeChild(container);
    while(inputSize > 100) {
        alert('Please enter a number lower than 100');
        inputSize = userPrompt();
    }
    createGrid(inputSize);
})

const userPrompt = () => {
    let userInput = prompt('How many squares per side of the grid')
    return userInput;
}

createGrid(dimensions);


