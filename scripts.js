//query selectors

const gridContainer = document.querySelector('#grid_container')
const clearButton = document.querySelector("#clear_button")
const cellDiv = document.createElement('div')
const cellInput = document.querySelector('#cell_input')
const numberEnterButton = document.querySelector('#enter_button')
cellDiv.setAttribute('id', 'grid_cell')




//function declarations

//clone element certain number of times then append to another element
function cloneElement(element, num, appendTo){
    for(i = 0; i < num; i++){
        let elementCloned = element.cloneNode()
        appendTo.appendChild(elementCloned)
    }
}

function clearGrid(){
    const allCells = document.querySelectorAll('#grid_cell')
    allCells.forEach((cell) => {
        cell.setAttribute('style', 'background-color: white;')
    })
}

function setGridSize(size){
    gridContainer.innerHTML = '';
    gridContainer.setAttribute('style', `grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr);`)
}

//changing div color to black whenever the pointer enters a cell
function listenToCells(){
    const allCells = document.querySelectorAll('#grid_cell')
    allCells.forEach((cell) => {
        cell.addEventListener('pointerenter', () => { 
            cell.setAttribute('style', 'background-color: black;')
        });
    });
}



//####

cloneElement(cellDiv, 16 * 16, gridContainer)
listenToCells()

clearButton.onclick = clearGrid

numberEnterButton.addEventListener('click', () => {
    let size = cellInput.value
    console.log(size)
    setGridSize(size)
    cloneElement(cellDiv, size * size, gridContainer)
    listenToCells()
})