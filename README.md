# Consegna
- L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
- Ogni cella ha un numero progressivo, da 1 a 100.
- Ci saranno quindi 10 caselle per ognuna delle 10 righe.
- Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
# Bonus
- Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
    - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
    - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
    - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
# Consigli del giorno:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
    - Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.

# Description
- Crea un bottone nell'HTML & un elemento grid nel JS
    - crea un addEventListener al bottone per far comparire l'elemento GRID.
- Crea un elemento cella, dagli all'interno un valore progressivo e inseriscilo nell'elemento grid.
- all'addEventListener della cella, dai alla cella una classe (color) e stampa il numero della cella in console.

# Tools
- let/const
- for
- if
- Math
- addEventListener
- querySelector/getElementBy...
- classList.add

# Consegna 2-day

# Consegna
- Continuate a lavorare nella stessa repo di ieri.
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: i funghi magici.

### Attenzione: nella stessa cella può essere posizionato al massimo un fungo, perciò nell’array dei funghi non potranno esserci due numeri uguali.

- In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati
    - abbiamo calpestato una fungo
    - la cella si colora di rosso e la partita termina.
- Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
- La partita termina quando il giocatore clicca su una fungo o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono funghi).

## Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una fungo.

BONUS:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
Nota: Se non vi piacciono i funghi ù potete usare fiori o cacca basta che non mettete bombe - purtroppo il nome della repo al momento non puó essere cambiato.

# Description 2-day
- create a function from w3schools for math.random (min max)

- make an empty array

- cicle for or while to generate bombs x 16 times (NO REPEAT) and insert in array
- check if the random number is .includes in the array
- if not included, array.push

- read the number inside the clicked cell
- if the clicked cell number is .includes in the array
- if true, console.log(you lose) and classList.add ('red')
- end the game
- Else add classList.add('blue')

- keep and stamp the count of the clicked cells
- end the game
- if the clicked cell is equal to maxcell - bombnumber= console.log('you win')

- prevent the user from clicking again after the game is over.
