//BONUS : More Difficulties

let diffSelector = document.getElementById('difficulty')
diffSelector = diffSelector.value
let easyMode = document.getElementById('easy')
easyMode = easyMode.value
let mediumMode = document.getElementById('medium')
mediumMode = mediumMode.value
let hardMode = document.getElementById('hard')


console.log(easyMode, mediumMode, hardMode)

//BUTTON : grid Generation
let gridGenerator = document.getElementById('play');
let grid = document.getElementById('grid')
let nCellMaxEasy = 100;
let nCellMaxMedium = 81;
let nCellMaxHard = 49;

console.log(grid)
console.log(diffSelector, mediumMode)
console.log(diffSelector, easyMode)

gridGenerator.addEventListener('click', function () {
    grid.style.display = 'flex'
})


//cicle for : cell Generation + index Number inside + difficulty
if (diffSelector == easyMode)
    for (let i = 1; i < nCellMaxEasy + 1; i++) {
        //cell
        const cell = document.createElement('div')

        cell.classList.add('cell');
        grid.appendChild(cell);
        colorChangeClicker(cell, 'blue') // INVOKE

        //cellNumber
        let cellNumber = document.createElement('div')
        cellNumber.innerHTML = i

        cellNumber.classList.add('cellnumber')
        cell.appendChild(cellNumber)


    } else if (diffSelector == mediumMode) {

        for (let i = 1; i < nCellMaxMedium + 1; i++) {
            //cell
            const cell = document.createElement('div')

            cell.classList.add('cell');
            grid.appendChild(cell);
            colorChangeClicker(cell, 'red') // INVOKE

            //cellNumber
            let cellNumber = document.createElement('div')
            cellNumber.innerHTML = i

            cellNumber.classList.add('cellnumber')
            cell.appendChild(cellNumber)
        }
    }

/**
 * Change color on click
 * @param {Element} e 
*/

function colorChangeClicker(e, color) {
    e.addEventListener('click', function () {
        e.classList.toggle(color)
    })

}