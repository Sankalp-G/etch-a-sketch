//query selectors

const gridContainer = document.querySelector('#grid_container')
const clearButton = document.querySelector("#clear_button")
const cellDiv = document.createElement('div')
const cellInput = document.querySelector('#cell_input')
const numberEnterButton = document.querySelector('#enter_button')
const colorContainer = document.querySelector('#color_container')
const colorButtons = colorContainer.childNodes
cellDiv.setAttribute('id', 'grid_cell')
cellDiv.setAttribute('style', 'background-color: rgb(255, 255, 255);')

let brushColor = 'black';


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
        cell.setAttribute('style', 'background-color: rgb(255, 255, 255);')
    })
}

function setGridSize(size){
    gridContainer.innerHTML = '';
    gridContainer.setAttribute('style', `grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr);`)
}

function randomNum(max){
    let num = Math.floor(Math.random() * max)
    return num
}

//changing div color whenever the pointer enters a cell
function listenToCells(){
    const allCells = document.querySelectorAll('#grid_cell')
    allCells.forEach((cell) => {
        cell.addEventListener('pointerenter', () => {
            if(brushColor == 'black'){
                cell.setAttribute('style', 'background-color: rgb(0, 0, 0);')
            } 
            else if(brushColor == 'eraser'){
                cell.setAttribute('style', 'background-color: rgb(255, 255, 255);')
            } 
            else if (brushColor == 'grayscale'){
                //getting individual color values
                let split = cell.style.backgroundColor.split(', ')
                rgbArr = [split[0].split('rgb(')[1], split[1], split[2].split(')')[0]]

                //if all colors are equal making cells 10% darker otherwise turning the cell light gray
                if (rgbArr[0] == rgbArr[1] && rgbArr[0] == rgbArr[2]) {
                    let val = rgbArr[0] - 25.6;
                    cell.setAttribute('style', `background-color: rgb(${val}, ${val}, ${val});`)
                }
                else {cell.setAttribute('style', 'background-color: rgb(230.4, 230.4, 230.4);')}
            }
            else if (brushColor == 'random'){
                cell.setAttribute('style', `background-color: rgb(${randomNum(256)}, ${randomNum(256)}, ${randomNum(256)});`)
            }
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

colorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        brushColor = button.getAttribute('id')
        console.log(button.getAttribute('id'))
    })
})