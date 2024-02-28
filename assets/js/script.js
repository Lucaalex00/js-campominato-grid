//BUTTON : grid Generation
let gridGenerator = document.getElementById('play');
let grid = document.getElementById('grid')
let nCellMax = 100;
console.log(grid)

gridGenerator.addEventListener('click', function () {
    grid.style.display = 'flex'
})

//cicle for : cell Generation + index Number inside

for (let i = 1; i < nCellMax + 1; i++) {
    //cell
    const cell = document.createElement('div')

    cell.classList.add('cell');
    grid.appendChild(cell);
    colorChangeClicker(cell) // INVOKE

    /* cell.style.position = 'relative' */

    //cellNumber
    let cellNumber = document.createElement('div')
    cellNumber.innerHTML = i

    cellNumber.classList.add('cellnumber')
    cell.appendChild(cellNumber)

    /*  cellNumber.style.position = 'absolute'
    cellNumber.style.top = '50%'
    cellNumber.style.left = '50%'
    cellNumber.style.transform = 'translate(-50%,-50%)' */
    /* cellNumber.style.backgroundColor = 'black'
    cellNumber.style.color = 'white'
    cellNumber.style.borderRadius = '50px'
    cellNumber.style.padding = '4px' */

}


// Event : cell Onclick = backgroundColor= 'red'

/* cell.addEventListener('click', function colorChangeClicker(e) {
    cell.classList.toggle('red');
}) */

/**
 * Change color on click
 * @param {Element} e 
 */

function colorChangeClicker(e) {
    e.addEventListener('click', function () {
        e.classList.toggle('red')
    })

}



