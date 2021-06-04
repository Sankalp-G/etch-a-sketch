//query selectors

const gridContainer = document.querySelector('#grid_container')
const cellDiv = document.createElement('div')
cellDiv.setAttribute('id', 'grid_cell')




//function declarations

//clone element certain number of times then append to another element
function cloneElement(element, num, appendTo){
    for(i = 0; i < num; i++){
        let elementCloned = element.cloneNode()
        appendTo.appendChild(elementCloned)
    }
}



//####

cloneElement(cellDiv, 16 * 16, gridContainer)

const allCells = document.querySelectorAll('#grid_cell')

//changing div color to black whenever the pointer enters a cell
allCells.forEach((cell) => {
    cell.addEventListener('pointerenter', () => { 
        cell.setAttribute('style', 'background-color: black;')
    });
});