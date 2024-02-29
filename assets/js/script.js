
/* IIFE */


(function () {
    console.log('hi there');
    // select the magic field
    const magicField = document.getElementById('field');

    // select the play button from the dom to start the game
    document.querySelector('form').addEventListener('submit', function (e) {

        // Bonus 
        // step 1. prevent default behaviour
        e.preventDefault(); // no page update
        // step 2. read the selected level
        console.log(e.target.level.value);
        const cellsNumber = e.target.level.value;
        // step 3. use the selected level to generate the magic field


        // STEPS
        // Start the game
        console.log('Start the game - show the magic field');

        generateMagicField(magicField, cellsNumber)

    })

})();


/**
 * Generate Game's Field
 * @param {*} fieldDomElement 
 * @param {*} level 
 */
function generateMagicField(fieldDomElement, level) {
    // Empty the magic field before adding new cells
    fieldDomElement.innerHTML = '';
    // generate the magic field 
    for (let i = 1; i <= level; i++) {

        // generate the single cell
        const nodeCellElement = generateMagicCell(i, level);

        /*  console.log(nodeCellElement); */


        // add to the cell an event listener
        attachEventToMagicCell(nodeCellElement)

        fieldDomElement.insertAdjacentElement('beforeend', nodeCellElement)
    }

}

/**
 * Change on click : Color
 * @param {*} node 
 */
function attachEventToMagicCell(node) {
    node.addEventListener('click', function (e) {
        // add a active class to the clicked element
        console.log(this, e); // this é il nodo della dom in questo contesto - e é l'evento triggerato
        this.classList.toggle('bg-active');
        // print into the console the cell number
        console.log(this.innerText);
        /* this.innerText = '🍄' */
    })

}

/**
 * Generate numb of cell
 * @param {*} numb 
 * @param {*} size 
 * @returns 
 */
function generateMagicCell(numb, size) {
    const nodeCellElement = document.createElement('div')
    nodeCellElement.classList.add('cell')
    nodeCellElement.innerText = numb
    nodeCellElement.style.width = `calc(100% / ${Math.sqrt(size)})`

    return nodeCellElement;
}
