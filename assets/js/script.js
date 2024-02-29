
/* IIFE */

/* INITIALIZE FUNCTION + Field Generator */
(function () {
    console.log('hi there');
    // select the magic field
    const magicField = document.getElementById('field');
    let mushList;

    // select the play button from the dom to start the game
    document.querySelector('form').addEventListener('submit', function (e) {

        // step 1. prevent default behaviour
        e.preventDefault(); // no page update
        // step 2. read the selected level
        console.log(e.target.level.value);
        const cellsNumber = e.target.level.value;

        // STEPS
        // Start the game
        console.log('Start the game - show the magic field');

        generateMagicField(magicField, cellsNumber)

    })

})();

/**
 * Generate Game's Field & Reset board/points
 * @param {*} fieldDomElement 
 * @param {*} level 
 */
function generateMagicField(fieldDomElement, level) {
    // Empty the magic field before adding new cells
    fieldDomElement.innerHTML = '';
    // Hide lose/win Screen
    let endGameScreen = document.getElementById('lose_screen')
    endGameScreen.style.display = 'none'
    let winGameScreen = document.getElementById('win_screen')
    winGameScreen.style.display = 'none'
    //set points to 0
    clickCounter = document.getElementById('points');
    clickCounter.innerHTML = 0;


    mushList = mushroomGenerate(); // genero numeri casuali per i funghi
    console.log(mushList);

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
 * Generate Mushrooms x 16
 * @param {Array} array 
 * @returns 
 */
function mushroomGenerate() {

    // cicle for or while to generate mush x 16 times (NO REPEAT) and insert in array
    let mushrooms = [];

    //make random number of mush FOR any type of level difficulty
    let levelDifficulty = document.getElementById('level')
    const cellsNumber = levelDifficulty.value;

    //check if the random number is .includes in the array
    //if not included, array.push
    for (let i = 0; i < 16; i++) {
        let getRandomNumber = getRndInteger(1, cellsNumber)
        if (!mushrooms.includes(getRandomNumber)) {
            mushrooms.push(getRandomNumber);
        } else {
            i--;
        }

    }
    return mushrooms;
}

/**
 * Change on click : Color & tell to cell if are mushroom or not
 * @param {Object} node 
*/
function attachEventToMagicCell(node) {
    node.addEventListener('click', function (e) {

        // add a active class to the clicked element
        /* console.log(this, e); */ // !DEBUG! // this é il nodo della dom in questo contesto - e é l'evento triggerato
        this.classList.toggle('bg-active');
        // print into the console the cell number
        /* console.log(this.innerText); */ //!DEBUG!
        /* this.innerText = 'x' */

        //read the number inside the clicked cell
        let cellNumber = parseInt(node.innerText);
        console.log(cellNumber); //STAMP CLICKED CELL NUMBER
        console.log(mushList); //STAMP MUSHROOMS LIST
        // se il nuemro della cella cliccato include un numero dei funghi, hai perso
        /* console.log(mushList.includes(cellNumber)); */ //!DEBUG!
        //make a counter variable and increment any times the user click on a cell WITHOUT mushrooms

        clickCounter = document.getElementById('points');
        //if true, console.log(you lose) and classList.add ('red')
        //end the game
        //Else add classList.add('blue')
        if (mushList.includes(cellNumber)) {
            console.log('You Lose !!! ')
            node.classList.add('red')
            node.innerText = '😢'
            /* console.log(clickCounter); */

            //Keep from DOM the ENDGAME DISPLAY
            let endGameScreen = document.getElementById('lose_screen')
            endGameScreen.style.display = 'block'

        } else {
            (clickCounter.innerText)++;
            let counterValue = clickCounter.innerText
            let levelDifficulty = document.getElementById('level')
            const cellsNumber = levelDifficulty.value;
            /* console.log(cellsNumber); */ //!DEBUG!
            /* console.log(counterValue) */ //!DEBUG!
            if (counterValue == cellsNumber - 1) {
                let winGameScreen = document.getElementById('win_screen')
                winGameScreen.style.display = 'block'
            }

        }

    })
}

/**
 * Generate numb of cell
 * @param {*} numb 
 * @param {*} size 
 * @returns 
*/
function generateMagicCell(numb, size) {
    nodeCellElement = document.createElement('div')
    nodeCellElement.classList.add('cell')
    nodeCellElement.innerText = numb
    nodeCellElement.style.width = `calc(100% / ${Math.sqrt(size)})`

    return nodeCellElement;
}

// create a function from w3schools for math.random (min max)
/**
 * Get a random number from MAX to MIN
 * @param {Number} min 
 * @param {Number} max 
 * @returns 
 */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
