'use strict';

// RICHIAMO BUTTON
const InputButton = document.querySelector(".invia-dati");
const gridContainer = document.querySelector(".grid-container");
const difficultInputElement = document.querySelector(".form-select");

// RICHIAMA FUNCTION onBtnClick
InputButton.addEventListener("click", onBtnClick);

// DICHIARAZIONE FUNCTION onBtnClick
function onBtnClick() {
  //LEGGE IL VALORE DELLA SELECT DIFFICULT
  const myDifficult = difficultInputElement.value;
  //RICHIAMA FUNCTION createGrid
  createGrid(gridContainer, myDifficult);
}

// DICHIARAZIONE FUNCTION createGrid
function createGrid(gridContainer, difficult) {
  gridContainer.innerHTML = "";

  for (let i = 1; i <= difficult; i++) {
    const box = document.createElement("div");
    box.classList.add("square");

    //RICHIAMO LA FUNZIONE CHE CALCOLA IL FATTORE DI DIVISIONE DEL FLEXBASIS IN BASE ALLA QUANTITA' DI BOX PRESENTI (49,81,100)
    let myDivFact = divFactorCalc(difficult);

    box.style.flexBasis = `calc(100% / ${myDivFact})`;
    box.innerHTML = i;
    gridContainer.append(box);

    //CHANGE BOX COLOR
    box.addEventListener("click", function () {
      box.classList.add("bg-info");
      console.log(`cella selezionata: ${i}`);
    });
  }
}


/**riceve un valore numerico dalla select e ritorna il fattore di divisione 
* che verra' utilizzato per il calcolo della disposizione dei box
* 
* @param {num}  gameLevel
* @returns {num} 
*/
function divFactorCalc(gameLevel) {
  let dividingFactor;
  switch (gameLevel) {
    case '49':
      dividingFactor = '7';
      break;
    case '81':
      dividingFactor = '9';
      break;
    case '100':
      dividingFactor = '10';
      break;
  }
  return (dividingFactor);
}